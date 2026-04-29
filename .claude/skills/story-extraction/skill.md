# Story Extraction Skill

## Purpose

Transform raw user input into narrative material for a professional personal website.

## Method

1. Identify core identity, audience, stakes, transformation, and proof.
2. Structure major stories as context, challenge, action, result, and meaning.
3. Mark each story as career, project, origin, transition, adventure, philosophy, or proof.
4. Assign confidence based on specificity and evidence.
5. Recommend website placement.

## Rules

- Elevate language without changing facts.
- Do not invent results, roles, metrics, locations, or relationships.
- Keep sensitive material out of public-facing copy unless approved.

## Output

```json
{
  "core_identity": "",
  "narrative_arc": "",
  "signature_themes": [],
  "story_units": [
    {
      "title": "",
      "type": "career | project | adventure | philosophy | origin | transition",
      "context": "",
      "challenge": "",
      "action": "",
      "result": "",
      "meaning": "",
      "evidence": [],
      "visibility": "public | private_context | ask_before_using | never_use",
      "confidence": 0,
      "recommended_section": ""
    }
  ],
  "open_questions": []
}
```
