# Interview Skill

## Purpose

Extract high-signal story, goal, audience, work, life, and media information without overwhelming the user.

## Use When

- Starting a new personal website project.
- Filling missing canonical profile fields.
- Following up on vague claims, interesting stories, or missing proof.

## Method

1. Ask 3-6 questions at a time.
2. Prefer questions that uncover stakes, decisions, craft, outcomes, and meaning.
3. Avoid sensitive personal topics unless the user introduces them or they are clearly optional.
4. Summarize extracted facts after each response.
5. Add missing facts to `open_questions`.

## Starter Questions

See `starter-questions.md`.

## Output

```json
{
  "confirmed_facts": [],
  "potential_story_threads": [],
  "media_requests": [],
  "strong_followups": [],
  "open_questions": []
}
```
