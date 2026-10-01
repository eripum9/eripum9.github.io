# Research Notes: The TikTok Algorithm and Why It Feels Addictive

Last researched: 31 May 2026  
Project context: 10th grade English project, Gymnasium NRW  
Working topic: How TikTok's recommendation algorithm works and why the For You feed can become addictive.

## Short Thesis

TikTok's For You feed is powerful because it combines a highly personalized recommendation algorithm with a frictionless short-video interface. The algorithm learns from many small behavioral signals, especially what users watch, skip, like, share, search for, and rewatch. The design then turns these predictions into a continuous loop: the user watches, the system learns, the feed becomes more relevant, and the user keeps watching. This does not mean every user is clinically addicted, but it explains why the app can be difficult to stop using.

## One-Minute Summary

TikTok is not mainly a traditional social network where users only see people they follow. Its central feature is the For You feed, which is built by a recommendation system. According to TikTok, this system ranks videos using user interactions, video information, and account or device settings. Strong behavioral signals, such as finishing a video, rewatching it, liking it, sharing it, commenting on it, or searching for related topics, help the algorithm predict what a user may want next.

The addictive feeling comes from the feedback loop between prediction and design. Short videos require little effort, autoplay removes a decision point, infinite scroll removes a natural ending, and the next swipe may produce an unexpectedly funny, shocking, relatable, or useful video. This unpredictable reward pattern, combined with personalization, can create a state of flow where people lose track of time. Researchers connect problematic short-video use with factors such as self-control, stress, loneliness, social pressure, and platform design. Regulators in the EU have also investigated whether TikTok's infinite scroll, autoplay, notifications, and recommender system create addictive design risks, especially for minors.

## Key Terms

- **Algorithm**: A set of rules or calculations used by software to make decisions. In this project, it means the system that decides which videos appear next.
- **Recommendation system**: Software that predicts what content a user may like and ranks possible items.
- **For You feed / FYP**: TikTok's main personalized feed of recommended videos.
- **User signal**: A behavior that tells the system something about a user's interests, for example watching to the end, liking, commenting, sharing, following, searching, or skipping.
- **Watch time**: How long a user watches a video. Completion and rewatching are especially important because they show attention.
- **Engagement**: Interactions such as likes, comments, shares, saves, follows, and searches.
- **Filter bubble**: A situation where personalization repeatedly shows similar content, which can limit what a user sees.
- **Infinite scroll**: A feed design where new content keeps loading without a clear endpoint.
- **Autoplay**: Videos start automatically, reducing the user's need to make a conscious choice.
- **Flow**: A psychological state of deep immersion where a person may lose track of time.
- **Variable reward**: Rewards arrive unpredictably. The next video might be boring, but it might be exactly what the user wants. This uncertainty can keep people scrolling.

## What TikTok Says About How the For You Feed Works

TikTok says that the For You feed is a stream of videos curated to each user's interests, and that no two For You feeds are exactly the same. The company describes the feed as being powered by a recommendation system that ranks videos based on a combination of factors.

### Main Recommendation Factors

| Factor | Examples | Why it matters |
| --- | --- | --- |
| User interactions | Likes, shares, follows, comments, created content, searches, favorites, skips, watch time, completion, rewatches | These are active or behavioral clues about what the user wants or avoids. |
| Video information | Captions, sounds, hashtags, topics, effects, video length, posting time | These help the system understand what the video is about and who might like it. |
| Device and account settings | Language, country, device type, age information | These help performance and basic relevance, but TikTok says they carry less weight than stronger interest signals. |
| Similar users | Content enjoyed by people with similar behavior patterns | This is a common recommender-system idea: if users with similar patterns enjoy a video, the system may test it with you too. |

Important detail: TikTok says finishing a longer video from beginning to end is a stronger indicator of interest than weaker signals such as whether the viewer and creator are in the same country. TikTok also says follower count and previous viral success are not direct ranking factors, even though popular accounts may still get more initial exposure because they already have an audience.

## A Simple Model of the Algorithm

TikTok does not reveal the full source code or exact ranking formula. A school-level model can explain it like this:

1. **Collect possible videos**  
   The system has a huge pool of videos. It can consider videos from people the user follows, popular videos, local or language-relevant videos, and videos connected to topics the user has shown interest in.

2. **Read the video**  
   The system uses clues such as captions, hashtags, sounds, creator information, topic category, video length, freshness, and possibly visual or audio analysis.

3. **Read the user**  
   The system reads behavior: what the user watches to the end, rewatches, likes, saves, comments on, shares, follows, searches for, skips quickly, or marks as "Not interested."

4. **Predict interest**  
   For each candidate video, the system estimates how likely the user is to watch, react, or continue using the app.

5. **Rank and test**  
   Videos are ranked and shown. Some videos are also tested with small groups to see how people respond.

6. **Learn again**  
   Each new swipe, pause, like, skip, or search becomes feedback. The next recommendations are adjusted.

This is the core feedback loop:

```text
User watches or skips -> TikTok reads the signal -> Algorithm updates predictions -> Feed changes -> User watches or skips again
```

## Why the Algorithm Can Learn So Fast

TikTok gets many signals in a short time because the videos are short. A person might watch dozens of videos in ten minutes. Each video creates data: Did the user pause? Did they finish it? Did they rewatch it? Did they scroll away immediately? Did they open comments? Did they search something after watching it?

Because the feed changes after many tiny interactions, the algorithm can quickly detect patterns. For example:

- A user watches football videos to the end and skips makeup videos.
- A user rewatches jokes with a specific sound.
- A user searches for gym routines after seeing fitness videos.
- A user keeps opening comments on political content.
- A user watches sad relationship videos late at night.

The system does not need the user to explicitly say, "I like this topic." Behavior can be enough.

## Why TikTok Feels Addictive

### 1. Infinite Scroll Removes the Ending

Books have chapters. TV episodes end. A normal website has pages. TikTok's For You feed keeps going. Without a natural stopping point, the user has to actively decide to stop.

### 2. Autoplay Removes Decisions

The next video starts immediately. The user does not need to click play. This reduces friction and makes passive consumption easier.

### 3. Short Videos Create Fast Reward Cycles

Each video is a tiny gamble. The next one may be funny, surprising, useful, dramatic, attractive, emotional, or personally relevant. Because the reward is unpredictable, the user keeps swiping.

### 4. Personalization Makes the Reward Stronger

The feed becomes more relevant over time. If the system learns that a user likes football, anime edits, fashion, political debates, or study tips, it can provide more of that content. The reward is no longer random; it is personalized randomness.

### 5. The Algorithm Uses Attention as Feedback

Even if a user does not press like, the system can still learn from watch time, rewatching, pauses, and skips. This means the app may learn what captures attention, not necessarily what is good for the user.

### 6. Social Signals Add Pressure

Likes, comments, trends, challenges, duets, stitches, and creator culture make the feed feel socially alive. Users are not only consuming videos; they are watching what others are reacting to.

### 7. Flow and Time Distortion

Academic research on short-video platforms often uses the concept of flow: a state of immersion where people lose track of time. TikTok's full-screen video format, easy swiping, personalized recommendations, and constant novelty can support this state.

### 8. Escapism and Emotion Regulation

Some users may use short videos to escape boredom, stress, loneliness, school pressure, or negative emotions. This can be harmless in small amounts, but it can become a habit if the app becomes the default way to avoid discomfort.

## Important Nuance: "Addictive" Does Not Mean Everyone Is Addicted

The word "addiction" should be used carefully. Academic literature does not have one universally accepted clinical definition of short-video addiction. Many studies use terms such as "problematic use," "addictive tendencies," or "short video addiction" based on questionnaires. That is different from saying every heavy TikTok user has a medical disorder.

A balanced statement for the project:

> TikTok is designed to maximize engagement, and its design can create addiction-like patterns for some users. However, not every user is addicted, and research often shows correlations rather than direct proof that TikTok alone causes mental health problems.

## What Research Says About Problematic Short-Video Use

### Psychological Mechanisms

Recent research connects problematic short-video use with several mechanisms:

- **Cognitive mechanisms**: Users may move from conscious control to automatic scrolling.
- **Emotional mechanisms**: Users may use short videos to regulate stress, boredom, anxiety, or loneliness.
- **Motivational mechanisms**: Users seek entertainment, belonging, information, status, or escape.
- **Social mechanisms**: Peer pressure, trends, social identity, and fear of missing out can increase use.
- **Platform mechanisms**: Recommendation algorithms, vivid audiovisual content, easy interaction, and infinite feeds increase engagement.

### Self-Control and Attention

An EEG study on mobile short-video addiction found a negative relationship between short-video addiction tendency and self-control, as well as executive-control indicators in the prefrontal region. This supports the idea that problematic use may be connected to attention control and impulse control. The study is correlational, so it should not be presented as proof that TikTok directly damages the brain.

### Teen Relevance

Research on adolescents found that the main factors can differ by age group. In one study based on Chinese student samples, peer-group identification was important in middle school, academic pressure in high school, and personality traits in university. This is useful for a 10th-grade project because it suggests that school stress and peer culture can interact with short-video habits.

### Well-Being and Social Support

A BMC Public Health study on college students found different short-video addiction profiles. The high-addiction group had lower levels of social support, subjective well-being, core self-evaluation, and extraversion. Again, this does not prove simple causation, but it supports the idea that personal and social context matters.

## Benefits and Positive Uses

A good presentation should also mention why people like TikTok:

- It helps people discover creators they would never search for.
- It can spread educational content quickly.
- It gives small creators a chance to reach large audiences.
- It can support creativity through music, editing, trends, duets, and stitches.
- It can create communities around niche interests.
- It can be useful for language learning, study tips, news explainers, comedy, activism, and hobbies.

The problem is not simply "TikTok is bad." The more precise argument is:

> TikTok is useful and entertaining, but its business model and design reward attention. This can conflict with the user's own goals, especially when the feed becomes difficult to stop.

## Risks and Criticism

### 1. Compulsive Use

The app can encourage users to keep watching longer than planned through infinite scroll, autoplay, notifications, personalization, and unpredictable rewards.

### 2. Filter Bubbles

TikTok itself acknowledges that recommendation engines can create filter bubbles by showing an increasingly similar stream of videos. TikTok says it tries to interrupt repetitive patterns and diversify recommendations, but the risk remains important.

### 3. Harmful or Repetitive Content

TikTok says its For You feed eligibility rules limit some content from recommendation, even when that content is allowed on the platform. It also says it tries to reduce repeated exposure to content that may be fine occasionally but problematic if seen too often, such as extreme fitness-related content.

### 4. Sleep and School Work

Short-video use can become a problem when it pushes into night-time, homework, studying, sport, friendships, or family time. The EU Commission specifically mentioned indicators such as minors' night-time use and how often users open the app.

### 5. Mental Health Concerns

Research links problematic short-video use with anxiety, loneliness, lower well-being, lower self-control, and attention issues. However, many findings are correlational. It may be that TikTok worsens problems, but also that people with existing stress or loneliness are more likely to overuse short videos.

### 6. Data and Privacy

Recommendation systems depend on behavioral data. TikTok needs to observe user behavior to personalize the feed. This raises questions about how much data platforms collect, how transparent they are, and how much control users have.

## EU Regulation and the German/European Context

The European Union's Digital Services Act (DSA) is highly relevant because it directly addresses large online platforms, minors, recommender systems, transparency, dark patterns, and addictive design.

Important DSA points:

- Very large online platforms have special duties because they affect society at scale.
- Users on large platforms in the EU must have an option for non-personalized feeds.
- Platforms must assess and reduce systemic risks, including risks to minors and mental well-being.
- The DSA bans certain deceptive design tactics, often called dark patterns.
- Targeted advertising to children is banned under the DSA.

On 6 February 2026, the European Commission announced preliminary findings that TikTok's design may breach the DSA because of addictive features. The Commission specifically mentioned infinite scroll, autoplay, push notifications, and the highly personalized recommender system. It also said TikTok's current screen-time and parental-control tools may be too easy to dismiss and may not reduce the risks effectively. These findings were preliminary, not the final legal outcome.

## TikTok's Own Safety and Control Tools

TikTok provides tools that users can use to shape the feed:

- Like or favorite content to see more like it.
- Follow creators to give the system more context.
- Search for topics to send stronger interest signals.
- Use "Not interested" to reduce content.
- Filter keywords.
- Use Restricted Mode.
- Manage topics.
- Refresh the For You feed.
- Mute accounts.
- Use Family Pairing for teen accounts.
- Use screen-time settings and reminders.

TikTok also announced a default 60-minute daily screen-time limit for accounts under 18 in 2023. The limit adds friction, but regulators and critics have questioned whether such tools are effective enough if users can dismiss or bypass them.

## What Makes TikTok Different From Older Social Media

Traditional social media often starts with the **social graph**: people you follow, friends, family, classmates, celebrities, or accounts you choose.

TikTok is more centered on the **interest graph**: content predicted from behavior and topics, even from creators you do not know.

This matters because:

- New creators can go viral without many followers.
- The feed can adapt quickly to interests.
- Users may see content they never searched for.
- The app can feel more surprising and personalized.
- The user has less obvious control over why specific content appears.

## Ethical Questions for the Project

- Should platforms optimize for what keeps users watching, or for what benefits users?
- Should minors have stronger default protections than adults?
- Should infinite scroll be limited for young users?
- Should TikTok explain more clearly why each video appears?
- Should users be able to reset or inspect their interest profile?
- Is the algorithm responsible for overuse, or is the user responsible for self-control?
- Can an app be both useful and manipulative?
- Is a personalized feed a service, a persuasion system, or both?

## Possible Presentation Structure

### Slide 1: Title

**The TikTok Algorithm: How It Works and Why It Feels Addictive**

Opening line:

> TikTok does not just show us videos. It learns from us while we watch.

### Slide 2: What Is the For You Feed?

- Main personalized feed.
- Not only people you follow.
- Each user gets a different feed.
- Powered by a recommendation system.

### Slide 3: The Main Signals

Show a table:

- User interactions: watch time, likes, comments, shares, follows, searches, skips.
- Video information: captions, hashtags, sounds, topic.
- Settings: language, country, device, age.

### Slide 4: The Feedback Loop

Use a simple loop graphic:

```text
Watch -> Signal -> Prediction -> New Video -> Watch Again
```

### Slide 5: Why It Learns Quickly

- Short videos create many data points.
- The user can watch dozens of videos quickly.
- The algorithm does not only learn from likes; it learns from attention.

### Slide 6: Why It Feels Addictive

- Infinite scroll.
- Autoplay.
- Variable rewards.
- Personalization.
- Social feedback.
- Flow and time loss.

### Slide 7: The Psychology

- Automatic scrolling vs conscious control.
- Escapism from stress or boredom.
- FOMO and peer trends.
- Reward loop.

### Slide 8: Risks

- Spending more time than planned.
- Sleep disruption.
- School distraction.
- Filter bubbles.
- Repeated exposure to harmful topics.
- Less self-control for some users.

### Slide 9: Benefits

- Creativity.
- Discovery.
- Education.
- Small creators can reach large audiences.
- Communities around niche interests.

### Slide 10: Europe and Regulation

- Digital Services Act.
- Non-personalized feed option.
- Protection of minors.
- EU preliminary findings on addictive design in 2026.

### Slide 11: What Users Can Do

- Set a real time limit.
- Turn off notifications.
- Use Not interested.
- Manage topics.
- Refresh the feed.
- Do not use TikTok right before sleep.

### Slide 12: Conclusion

Possible conclusion:

> TikTok's algorithm is not magic. It is a feedback loop between human attention and machine prediction. The question is whether we control the feed, or the feed controls our attention.

## Possible Title Cards

- **Title Card 01: The Feed That Learns You**
- **Title Card 02: Every Swipe Is Data**
- **Title Card 03: Watch Time Is a Signal**
- **Title Card 04: The Algorithm Tests and Learns**
- **Title Card 05: Infinite Scroll, Infinite Temptation**
- **Title Card 06: Why "Just Five Minutes" Becomes an Hour**
- **Title Card 07: Useful Tool or Attention Trap?**
- **Title Card 08: How to Take Back Control**

## Strong Sentences for the Presentation

- "The For You page is not random; it is a prediction machine."
- "The algorithm learns from what we do, not only from what we say we like."
- "A like is a signal, but finishing a video can be an even stronger signal."
- "TikTok's biggest strength is also its biggest risk: it becomes personal very quickly."
- "Infinite scroll removes the natural moment where we would normally stop."
- "The next video is unpredictable, and that unpredictability is part of the attraction."
- "The problem is not that TikTok is entertaining. The problem is that entertainment is optimized endlessly."
- "The feed does not only reflect our interests; it can also shape them."
- "A healthy user is not someone who never uses TikTok, but someone who can stop when they choose to."

## Balanced Argument

### Argument: TikTok Is Addictive by Design

- The feed is personalized to maximize attention.
- Infinite scroll and autoplay reduce friction.
- Short videos create rapid reward cycles.
- Notifications bring users back.
- The system learns from attention, not just conscious choices.
- EU regulators have identified addictive-design risks.

### Counterargument: TikTok Is Not Automatically Harmful

- Many users use TikTok for learning, creativity, comedy, and community.
- Users can manage topics, use Not interested, refresh the feed, and set limits.
- Research often shows correlations, not simple causation.
- Overuse depends on personal factors such as stress, loneliness, self-control, and social context.
- Other platforms also use recommendation systems.

### Best Balanced Conclusion

TikTok is not evil, but it is not neutral either. Its design has a clear goal: keep people engaged. Understanding the algorithm gives users more power, because they can recognize when the feed is serving them and when it is using their attention.

## Source Notes

### Official TikTok Sources

1. [TikTok Newsroom: How TikTok recommends videos #ForYou](https://newsroom.tiktok.com/how-tiktok-recommends-videos-for-you?os=firetvykofehsy&lang=en)  
   Useful for: official explanation of the For You feed, user interactions, video information, device/account settings, weighting, completion rate, follower count not being a direct factor, filter bubble concerns, content diversity.

2. [TikTok Safety Center: Making your feed For You](https://www.tiktok.com/safety/en/making-your-feed-for-you)  
   Useful for: updated safety-focused explanation of For You, watch time, completion, searches, similar users, content controls, Not interested, keyword filters, Restricted Mode, topic management, feed refresh.

3. [TikTok Newsroom: New features for teens and families on TikTok](https://newsroom.tiktok.com/tiktok-teen-screen-time-family-pairing?lang=en)  
   Useful for: default 60-minute daily screen-time limit for under-18 accounts, Family Pairing, screen-time prompts.

### Regulation and Policy Sources

4. [European Commission: Digital Services Act](https://digital-strategy.ec.europa.eu/en/policies/digital-services-act)  
   Useful for: EU rules on non-personalized feeds, minors, targeted ads, dark patterns, systemic risk, large platforms.

5. [European Commission: Preliminary finding on TikTok addictive design, 6 February 2026](https://digital-strategy.ec.europa.eu/en/news/commission-preliminarily-finds-tiktoks-addictive-design-breach-digital-services-act)  
   Useful for: EU's preliminary concerns about infinite scroll, autoplay, push notifications, highly personalized recommender system, minors, ineffective screen-time tools. Important caveat: preliminary finding, not final outcome.

6. [Congressional Research Service: TikTok Technology Overview and Issues](https://www.everycrsreport.com/files/2023-06-30_R46543_a2cf040704ed4e5e99db8850a41174fece600de8.pdf)  
   Useful for: neutral government overview of TikTok's recommendation engine, AI/data-mining practices, user signals, and privacy/security debate.

### Research and Academic Sources

7. [Liao, M. (2024): Analysis of causes, psychological mechanisms, and coping strategies of short video addiction](https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2024.1391204/full)  
   Useful for: definition caveats, algorithm design, content services, platform control, user experience, cognitive/emotional/motivational/social mechanisms.

8. [Xiong, Chen & Yao (2024): A multidimensional framework for problematic use of short video platforms](https://www.frontiersin.org/journals/psychiatry/articles/10.3389/fpsyt.2024.1361497/full)  
   Useful for: framework combining individual, social-environmental, and platform factors; limitations of current research.

9. [Mobile phone short video use negatively impacts attention functions: an EEG study](https://www.frontiersin.org/journals/human-neuroscience/articles/10.3389/fnhum.2024.1383913/full)  
   Useful for: relationship between short-video addiction tendency, self-control, and executive-control indicators. Caveat: correlational.

10. [Adolescent short video addiction in China: growth stages and driving factors](https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2024.1509636/full)  
    Useful for: adolescent stage differences; peer identity in middle school, academic pressure in high school, personality traits in university. Caveat: China-specific sample.

11. [BMC Public Health: relationships between short video addiction, well-being, social support, personality, and core self-evaluation](https://bmcpublichealth.biomedcentral.com/articles/10.1186/s12889-024-20994-9)  
    Useful for: profiles of short-video addiction tendencies and links with social support, well-being, and self-evaluation. Caveat: college-student sample.

12. [Scientific Reports: Flow experience and social influences of short online videos](https://www.nature.com/articles/s41598-023-30525-y)  
    Useful for: flow theory and why users enjoy watching and sharing short online videos.

13. [Telematics and Informatics abstract: Flow experience and cognitive lock-in](https://www.ivysci.com/articles/3145904__What_motivates_users_to_continue_using_current_short_video_applications_A_dualpath_examination_of_fl)  
    Useful for: continued use, flow experience, cognitive lock-in, recommended information characteristics, serendipity, habits.

### Usage Statistics

14. [Pew Research Center: Teens, Social Media and Technology 2024](https://www.pewresearch.org/internet/2024/12/12/teens-social-media-and-technology-2024/)  
    Useful for: teen social media context. Pew's U.S. data says about six in ten U.S. teens use TikTok daily and 16% use it almost constantly. Caveat: U.S. data, not German data.

## Reliability Notes

- Official TikTok sources are useful for what TikTok says about its own system, but they are also company communication.
- EU sources are useful for regulation and public-interest concerns, but a preliminary finding is not a final legal decision.
- Academic sources are useful for mechanisms and correlations, but many studies use Chinese samples, student samples, self-report questionnaires, or cross-sectional designs.
- Be careful not to overclaim: say "is linked to," "may contribute to," or "research suggests," unless a source proves direct causation.
- For a school presentation, the strongest and safest claim is: TikTok combines personalization, endless design, and reward loops in a way that can encourage compulsive use.

