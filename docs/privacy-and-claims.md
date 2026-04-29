# Privacy and Claims

This product generates public identity material. Credibility and consent are core product requirements.

## Claim Status

- `confirmed`: directly provided or backed by an artifact.
- `inferred`: reasonable but not explicitly confirmed.
- `unsupported`: should not appear in public copy without clarification.
- `placeholder`: intentionally incomplete.

## Visibility

- `public`: approved for the website.
- `private_context`: helps the agent understand the person but should not be published.
- `ask_before_using`: potentially sensitive or uncertain.
- `never_use`: excluded from generated plans, copy, and code.

## Public Copy Rule

Only `public` claims with `approved_for_public_use: true` should appear as final public-facing copy. Inferred or placeholder material must be labeled or rewritten conservatively.
