# Agent Runtime Architecture

The current repository defines prompts, skills, schemas, and templates. A production system also needs a runtime that executes them.

## Runtime Responsibilities

The runtime should:

- Load agent and skill instructions.
- Build prompts from stage context.
- Call models.
- Validate structured outputs against schemas.
- Retry or repair invalid outputs.
- Persist artifacts.
- Track approvals.
- Route stages.
- Generate website files.
- Run tests.
- Trigger deployment setup.

## Core Runtime Modules

```text
src/
├── lib/
│   ├── ai/
│   │   ├── model-client.ts
│   │   ├── prompt-loader.ts
│   │   └── structured-output.ts
│   ├── orchestration/
│   │   ├── router.ts
│   │   ├── stages.ts
│   │   └── handoffs.ts
│   ├── artifacts/
│   │   ├── store.ts
│   │   ├── approvals.ts
│   │   └── traceability.ts
│   ├── media/
│   │   ├── manifest.ts
│   │   └── review.ts
│   ├── generation/
│   │   ├── site-writer.ts
│   │   ├── test-writer.ts
│   │   └── devops-writer.ts
│   └── validation/
│       ├── schemas.ts
│       ├── claims.ts
│       └── quality-gates.ts
```

## Artifact Store

The artifact store is the source of truth for a website generation run.

It should persist:

- Canonical profile.
- Claims.
- Media manifest.
- Story units.
- Design system.
- Motion plan.
- Site plan.
- Copy draft.
- QA report.
- Generation log.

## Approval Model

Approval should be explicit.

Examples:

```json
{
  "claim_id": "claim-001",
  "approved_for_public_use": true,
  "approved_at": "2026-04-29T00:00:00.000Z",
  "approved_by": "user"
}
```

The code generation stage should only render approved public material.

## Runtime Guardrails

- Do not generate public copy from private context.
- Do not publish unsupported claims.
- Do not deploy if placeholders remain in public sections.
- Do not deploy if tests fail.
- Do not overwrite user edits without preserving or reporting changes.

## Implementation Note

The runtime should eventually be code-driven, not markdown-driven. Markdown agents and skills are the authoring format; the app should load them, combine them with artifacts, and enforce schemas through code.
