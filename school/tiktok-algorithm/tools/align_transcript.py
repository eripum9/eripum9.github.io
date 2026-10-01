#!/usr/bin/env python3
"""Match a transcript back to the TikTok speech script sentences.

Input can be plain text or a Whisper-style JSON file with a top-level
"segments" list. The output is JSON with the best matching script sentence
for each transcript segment.
"""

from __future__ import annotations

import argparse
import difflib
import json
import re
from pathlib import Path
from typing import Any


def extract_recording_text(markdown: str) -> str:
    marker = "## Recording Text"
    if marker in markdown:
        markdown = markdown.split(marker, 1)[1]
    lines = []
    for line in markdown.replace("\r", "").split("\n"):
        line = line.strip()
        if not line or line.startswith("#") or line.startswith("---"):
            continue
        lines.append(line)
    return "\n\n".join(lines)


def split_sentences(text: str) -> list[str]:
    sentences: list[str] = []
    for paragraph in re.split(r"\n{2,}", text):
        paragraph = re.sub(r"\s+", " ", paragraph.strip())
        if not paragraph:
            continue
        matches = re.findall(r"[^.!?]+[.!?]+[\"']?", paragraph)
        if matches:
            consumed = "".join(matches)
            sentences.extend(item.strip() for item in matches if item.strip())
            rest = paragraph[len(consumed) :].strip()
            if rest:
                sentences.append(rest)
        else:
            sentences.append(paragraph)
    return sentences


def normalise(text: str) -> str:
    text = text.lower()
    text = re.sub(r"[^a-z0-9\s']", " ", text)
    return re.sub(r"\s+", " ", text).strip()


def words(text: str) -> set[str]:
    return {word for word in normalise(text).split() if word}


def score(query: str, sentence: str) -> float:
    query_norm = normalise(query)
    sentence_norm = normalise(sentence)
    if not query_norm or not sentence_norm:
        return 0.0
    query_words = words(query)
    sentence_words = words(sentence)
    overlap = len(query_words & sentence_words)
    overlap_score = overlap / max(1, min(len(query_words), len(sentence_words)))
    sequence_score = difflib.SequenceMatcher(None, query_norm, sentence_norm).ratio()
    return (0.65 * overlap_score) + (0.35 * sequence_score)


def load_transcript(path: Path) -> list[dict[str, Any]]:
    raw = path.read_text(encoding="utf-8")
    if path.suffix.lower() == ".json":
        data = json.loads(raw)
        if isinstance(data, dict) and isinstance(data.get("segments"), list):
            source_segments = data["segments"]
        elif isinstance(data, list):
            source_segments = data
        else:
            raise ValueError("JSON transcript must be a list or contain a 'segments' list.")
        segments = []
        for index, segment in enumerate(source_segments):
            if isinstance(segment, str):
                segments.append({"index": index, "text": segment})
            elif isinstance(segment, dict):
                segments.append(
                    {
                        "index": index,
                        "start": segment.get("start"),
                        "end": segment.get("end"),
                        "text": str(segment.get("text", "")).strip(),
                    }
                )
        return [segment for segment in segments if segment.get("text")]

    text_segments = split_sentences(raw)
    return [{"index": index, "text": text} for index, text in enumerate(text_segments)]


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("script", type=Path, help="Path to speech-script.md")
    parser.add_argument("transcript", type=Path, help="Plain text transcript or Whisper-style JSON")
    parser.add_argument("--out", type=Path, default=Path("speech-alignment.json"))
    args = parser.parse_args()

    script_text = extract_recording_text(args.script.read_text(encoding="utf-8"))
    script_sentences = split_sentences(script_text)
    transcript_segments = load_transcript(args.transcript)

    matches = []
    for segment in transcript_segments:
        best_index = 0
        best_score = -1.0
        for index, sentence in enumerate(script_sentences):
            candidate_score = score(segment["text"], sentence)
            if candidate_score > best_score:
                best_index = index
                best_score = candidate_score
        matches.append(
            {
                "segment_index": segment["index"],
                "start": segment.get("start"),
                "end": segment.get("end"),
                "text": segment["text"],
                "sentence_id": f"S{best_index + 1:03d}",
                "sentence_index": best_index,
                "sentence_text": script_sentences[best_index],
                "score": round(best_score, 4),
            }
        )

    output = {
        "script": str(args.script),
        "transcript": str(args.transcript),
        "sentence_count": len(script_sentences),
        "segment_count": len(transcript_segments),
        "matches": matches,
    }
    args.out.write_text(json.dumps(output, indent=2, ensure_ascii=False), encoding="utf-8")
    print(f"Wrote {args.out} with {len(matches)} matches.")


if __name__ == "__main__":
    main()
