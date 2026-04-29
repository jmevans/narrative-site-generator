# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Root-level (agent/skill/schema system)
```bash
npm test                  # Run schema validation + sample-run tests
npm run validate:schemas  # Validate JSON Schema files only
```

### Website template (Next.js)
```bash
cd website-template
npm install
npm run dev       # Start dev server
npm run build     # Production build
npm run lint      # ESLint via next lint
```

## Architecture

This repo is a **blueprint for a multi-stage AI pipeline** that generates complete, deployable personal websites. It is not a traditional application — there is no single runtime entrypoint and no execution engine yet. Instead it defines prompts, schemas, orchestration contracts, and a website scaffold that a future runtime will wire together.

### Three-Layer System

1. **Generator System** (this repo) — the blueprints:
   - `.claude/agents/` — 17 Claude Code subagent definitions. Top-level controller is `orchestrator.md`. Other agents include: `intake-orchestrator`, `interview-agent`, `story-strategy-agent`, `story-intelligence-agent`, `career-impact-agent`, `life-adventure-agent`, `media-design-agent`, `media-curation-agent`, `design-direction-agent`, `motion-direction-agent`, `site-architecture-agent`, `site-planning-agent`, `copywriting-agent`, `code-generation-agent`, `build-qa-agent`, `qa-authenticity-agent`.
   - `.claude/skills/` — ten reusable Claude Code skill definitions invoked by agents: `interview`, `story-extraction`, `claim-checking`, `media-analysis`, `design-direction`, `motion-direction`, `site-architecture`, `copywriting`, `code-generation`, `qa-review`.
   - `schemas/` — JSON Schema contracts validated by `tests/schema-validation.test.js` via AJV. `canonical-profile.schema.json` is the central data model; the other eight schemas define sub-objects (claim, media-asset, story-unit, site-plan, design-system, motion-plan, agent-handoff, agent-output).
   - `orchestration/` — stage definitions, routing rules, and agent handoff contracts.
   - `prompts/` — system prompt, interview starter questions, generation prompts, follow-up and refinement templates.
   - `artifacts/` — `templates/` for canonical profile, site plan, and QA report; `examples/` with worked sample JSON for each (canonical profile, story model, site plan, build brief).
   - `docs/` — architecture and product documentation (read these for deep context).
   - `flows/` — named flow definitions: onboarding, site-generation, media, refinement-loop.

2. **Website Generation Runtime** (not yet implemented) — the execution engine that will load prompts, call Claude, validate structured outputs against schemas, persist artifacts, and handle approval checkpoints. Required modules are documented in `docs/agent-runtime-architecture.md`.

3. **Generated Website Solution** (output per person) — a standalone Next.js repo with content configs, CI/CD workflows, Firebase Hosting, and QA reports. `website-template/` is the starter scaffold the code-generation skill customizes.

### Data Flow

The pipeline runs 7 stages: **Intake → Story Strategy → Media Understanding → Creative Direction → Site Planning & Copy → Build → QA & Release**. Each stage maps to specific agents and skills; see `docs/generation-pipeline.md` for the full mapping and feedback loops.

The central data artifact is the **canonical profile** (`schemas/canonical-profile.schema.json`), populated progressively through the pipeline. Its top-level sections are: `profile`, `career`, `life_story`, `media_assets`, `claims`, `site_strategy`, `design_system`, `motion_plan`, `site_plan`. Each section carries a `confidence` score (0–1); low confidence triggers follow-up questions or refinement loops. Routing rules are in `orchestration/routing-rules.md`.

### Agent Handoffs

Agents communicate via structured handoff contracts (`orchestration/handoff-contracts.md`, schema: `schemas/agent-handoff.schema.json`). Every handoff carries: `from_agent`, `to_agent`, `task`, `relevant_context`, `constraints`, `required_output_schema`, `known_facts`, `assumptions`, and `open_questions`. Claim and media asset IDs must be preserved across handoffs; private context must never appear in public copy.

### Claims System

Claims (professional accomplishments, credentials) are tracked in `schemas/claim.schema.json`. Status values are `confirmed`, `inferred`, `unsupported`, or `placeholder` — not a simple approval flag. Visibility labels are `public`, `private_context`, `ask_before_using`, or `never_use`. Claims require `approved_for_public_use: true` before they can appear in generated copy. Claims are never invented. See `docs/privacy-and-claims.md` for the full lifecycle.

### Website Template

`website-template/` is a Next.js 15 / React 19 / Tailwind CSS 4 / Framer Motion starter. Content is separated from components — `content/site.ts` is the data layer the code-generation skill populates. The generated site follows this same pattern: content configs in `content/`, React components in `components/`, utilities in `lib/`.

Each generated site must also include: `.generated/` artifact traceability directory, GitHub Actions workflows (`ci.yml`, `firebase-preview.yml`, `firebase-production.yml`), Firebase config, verification scripts (`verify-claims.ts`, `verify-placeholders.ts`), and a `DEPLOYMENT.md`. Quality gates are defined in `docs/generated-site-solution-contract.md`.

### Key Docs to Read

- `docs/architecture-overview.md` — system layers and boundaries
- `docs/generation-pipeline.md` — stage-by-stage skill mappings and feedback loops
- `docs/interactive-website-architecture.md` — section model and component architecture for generated sites
- `orchestration/execution-flow.md` — stage sequencing and handoff points
- `docs/privacy-and-claims.md` — claim lifecycle and visibility rules
- `docs/agent-runtime-architecture.md` — modules needed to build the runtime
- `docs/generated-site-solution-contract.md` — required structure and quality gates for generated sites
