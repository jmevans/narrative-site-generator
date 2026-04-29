# Claim Checking Skill

## Purpose

Protect credibility by tracking what is confirmed, inferred, unsupported, private, and approved for public use.

## Method

1. Extract every factual claim from story, copy, metrics, and case studies.
2. Assign type, source, confidence, evidence, and approval status.
3. Flag unsupported or inflated claims.
4. Suggest clarification questions or safer wording.

## Claim Statuses

- `confirmed`: directly provided by the user or supported by an artifact.
- `inferred`: reasonable interpretation but not stated as fact.
- `unsupported`: not proven enough for public copy.
- `placeholder`: intentionally incomplete until the user fills it in.

## Visibility

- `public`: approved to appear on the site.
- `private_context`: useful for understanding the user but not published.
- `ask_before_using`: potentially sensitive or uncertain.
- `never_use`: excluded from generated outputs.

## Output

```json
{
  "claims": [],
  "unsupported_claims": [],
  "safer_rewrites": [],
  "questions_for_user": []
}
```
