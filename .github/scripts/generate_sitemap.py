from __future__ import annotations

import argparse
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import quote


class _RobotsMetaParser(HTMLParser):
    def __init__(self) -> None:
        super().__init__()
        self.is_noindex = False

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        if tag.casefold() != "meta":
            return
        attr_map = {name.casefold(): (value or "") for name, value in attrs}
        if attr_map.get("name", "").casefold() != "robots":
            return
        content = attr_map.get("content", "").casefold()
        if "noindex" in content:
            self.is_noindex = True


def should_skip_page(root: Path, page: Path) -> bool:
    if page.name == "404.html":
        return True
    if page.name.startswith("google"):
        return True

    parser = _RobotsMetaParser()
    parser.feed((root / page).read_text(encoding="utf-8"))
    return parser.is_noindex


def public_html_pages(root: Path) -> list[Path]:
    pages: list[Path] = []
    for path in root.rglob("*.html"):
        relative = path.relative_to(root)
        if any(part.startswith(".") for part in relative.parts):
            continue
        if should_skip_page(root, relative):
            continue
        pages.append(relative)
    return sorted(pages, key=lambda item: item.as_posix().casefold())


def page_url(base_url: str, page: Path) -> str:
    if page.name == "index.html":
        parent = page.parent.as_posix()
        suffix = "/" if parent == "." else f"/{quote(parent, safe='/')}/"
    else:
        suffix = f"/{quote(page.as_posix(), safe='/')}"
    return f"{base_url.rstrip('/')}{suffix}"


def render_sitemap(base_url: str, pages: list[Path]) -> str:
    entries = "\n".join(
        f"  <url><loc>{page_url(base_url, page)}</loc></url>" for page in pages
    )
    return (
        '<?xml version="1.0" encoding="UTF-8"?>\n'
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
        f"{entries}\n"
        "</urlset>\n"
    )


def render_text_sitemap(base_url: str, pages: list[Path]) -> str:
    return "\n".join(page_url(base_url, page) for page in pages) + "\n"


def main() -> None:
    parser = argparse.ArgumentParser(description="Generate sitemap.xml from public HTML pages.")
    parser.add_argument("--root", type=Path, default=Path.cwd())
    parser.add_argument("--base-url", default="https://eripum9.github.io")
    parser.add_argument("--output", type=Path, default=Path("sitemap.xml"))
    parser.add_argument("--text-output", type=Path, default=Path("sitemap.txt"))
    args = parser.parse_args()

    root = args.root.resolve()
    pages = public_html_pages(root)
    output = args.output if args.output.is_absolute() else root / args.output
    text_output = args.text_output if args.text_output.is_absolute() else root / args.text_output
    output.write_text(render_sitemap(args.base_url, pages), encoding="utf-8", newline="\n")
    text_output.write_text(
        render_text_sitemap(args.base_url, pages), encoding="utf-8", newline="\n"
    )
    print(f"Generated {output} and {text_output} with {len(pages)} URLs each.")


if __name__ == "__main__":
    main()
