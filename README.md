# NarrativeSite AI

NarrativeSite AI is an agent-and-skill system for generating professional, emotionally resonant, highly interactive personal websites from verified profile material, media assets, and user-approved public claims.

The goal is not to produce a generic portfolio template. The goal is to create a deployable website solution that helps a person communicate their talent, judgment, personality, work, life story, and credibility through narrative, media, interaction, and motion.

## Product Intent

NarrativeSite AI should behave like a small creative studio:

- A biographer extracts the human story.
- A portfolio strategist turns work into proof.
- A media curator treats photos, screenshots, video, and documents as story evidence.
- A designer creates a visual identity around the person, not a generic theme.
- A motion director makes interaction purposeful and accessible.
- A frontend engineer builds a fast, responsive website.
- A QA reviewer protects truth, privacy, accessibility, and deployability.

## What This Repo Contains

This repository is the generator foundation. It defines the agents, skills, schemas, artifacts, orchestration rules, and website template used to create standalone personal website solutions.

- `agents/`: role prompts for orchestration, story strategy, media/design, site planning, copy, build, and QA.
- `skills/`: reusable capabilities agents invoke, including interview, story extraction, claim checking, media analysis, design, motion, site architecture, copywriting, code generation, and QA review.
- `schemas/`: JSON contracts for claims, media assets, story units, design systems, motion plans, site plans, handoffs, and agent outputs.
- `orchestration/`: stage definitions, routing, flow, and handoff contracts.
- `artifacts/`: templates and examples for canonical profile data, story models, site plans, build briefs, and QA reports.
- `website-template/`: starter Next.js target for generated personal websites.
- `docs/`: product, architecture, design, motion, privacy, claims, agent, and skill documentation.
- `tests/`: lightweight scaffold checks.

## Generated Website Philosophy

Each generated website should be a standalone solution, not just a folder of page files.

A generated site should include:

- Next.js source code.
- Structured content config.
- Approved claim and media artifacts.
- Interactive sections and motion behavior.
- Accessibility and reduced-motion support.
- Tests for rendering, content integrity, claims, responsiveness, and accessibility.
- GitHub Actions workflows.
- Firebase Hosting configuration.
- Deployment documentation.
- QA report and traceability back to approved source artifacts.

## MVP Agent Flow

1. Orchestrator gathers goals and routes work.
2. Interview skill extracts profile, work, life, media, and audience material.
3. Story Strategy Agent creates narrative arcs, story units, and claim records.
4. Media Design Agent reviews assets and proposes design/motion direction.
5. Site Planning Agent creates the website structure and copy brief.
6. Build QA Agent generates the site from `website-template`, adds tests and deployment artifacts, and reviews it.

## Core Architecture Documents

- [Architecture Overview](docs/architecture-overview.md)
- [Generation Pipeline](docs/generation-pipeline.md)
- [Interactive Website Architecture](docs/interactive-website-architecture.md)
- [Generated Site Solution Contract](docs/generated-site-solution-contract.md)
- [DevOps and Firebase Architecture](docs/devops-firebase-architecture.md)
- [Agent Runtime Architecture](docs/agent-runtime-architecture.md)
- [Privacy and Claims](docs/privacy-and-claims.md)

## Quality Gates

Generated websites should pass these gates before publishing:

- Content claims are approved for public use.
- Private, unsupported, placeholder, or ask-before-using material does not leak into public pages.
- Primary CTAs are visible and valid.
- Pages render on mobile and desktop.
- Media has purpose, alt text, and privacy review.
- Motion has reduced-motion fallbacks.
- Build, tests, and Firebase deployment checks pass.

## Default Deployment Target

The intended default deployment path is:

- GitHub repository per generated website.
- GitHub Actions for CI, preview deploys, and production deploys.
- Firebase Hosting for preview channels and production hosting.

The architecture remains provider-aware so future deployments can support other targets, but Firebase Hosting is the first-class default.

## Validation

```bash
npm test
```

The current tests validate scaffold completeness and JSON parseability. Runtime orchestration, schema validation, generated-site tests, and Firebase/GitHub Actions checks should be expanded as the application layer is implemented.
