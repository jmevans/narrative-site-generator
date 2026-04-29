# Architecture Overview

NarrativeSite AI is organized around one central idea: a personal website should be generated from verified story artifacts, not improvised from a generic prompt.

The system has three layers:

1. Generator System
2. Website Generation Runtime
3. Generated Website Solution

## Generator System

The generator system lives in this repository. It contains:

- Agents that decide what needs to happen next.
- Skills that provide reusable methods and rubrics.
- Schemas that define valid structured outputs.
- Artifacts that preserve the state of a user's story, claims, media, site plan, and QA results.
- A website template that the code generation skill can adapt.

Agents should stay lightweight. Skills hold reusable behavior.

## Website Generation Runtime

The runtime is the application layer that will eventually execute the system.

It should provide:

- Prompt loading.
- Model calls.
- Structured output validation.
- Schema repair and retry.
- Artifact persistence.
- Media upload and review.
- Stage routing.
- Approval checkpoints.
- Site generation.
- Test execution.
- Deployment handoff.

The runtime should treat generated websites as products with source code, tests, docs, deployment configuration, and traceable generation artifacts.

## Generated Website Solution

Each generated site should be standalone. It should be possible to open its repository, run tests, build it, preview it, deploy it to Firebase Hosting, and understand which approved claims and assets produced the public content.

The generated solution should include:

- `app/`, `components/`, `content/`, `lib/`, and `public/`.
- `.generated/` artifacts for traceability.
- `tests/` for content, claims, accessibility, responsiveness, and smoke checks.
- `.github/workflows/` for CI and Firebase deploys.
- `firebase.json` and `.firebaserc`.
- `README.md` and `DEPLOYMENT.md`.

## High-Level Flow

```mermaid
flowchart LR
  A["User interview"] --> B["Canonical profile"]
  B --> C["Claims and story units"]
  C --> D["Media review"]
  D --> E["Design and motion direction"]
  E --> F["Site plan and copy"]
  F --> G["Generated website solution"]
  G --> H["QA gates"]
  H --> I["GitHub Actions"]
  I --> J["Firebase Hosting"]
```

## Architecture Principle

The system should optimize for credibility, emotional resonance, and deployability at the same time. A beautiful site that invents facts fails. A truthful site that feels generic fails. A generated site that cannot be tested and deployed fails.
