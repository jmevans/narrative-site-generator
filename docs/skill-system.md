# Skill System

Skills are reusable instructions that agents can invoke across stages.

## Skills

- `skills/interview`
- `skills/story-extraction`
- `skills/claim-checking`
- `skills/media-analysis`
- `skills/design-direction`
- `skills/motion-direction`
- `skills/site-architecture`
- `skills/copywriting`
- `skills/code-generation`
- `skills/qa-review`

## Design Principle

Agents should remain thin. Skills hold reusable methods, rubrics, and output contracts.

For example, Story Strategy Agent and QA Agent can both use `claim-checking` without duplicating claim rules.
