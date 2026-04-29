# Interactive Website Architecture

NarrativeSite websites should feel alive, but not gimmicky. Interaction should help the visitor understand the person faster and remember them longer.

## Interaction Goals

- Establish identity within the first viewport.
- Turn work history into proof-rich scenes.
- Reveal personality through selected personal moments.
- Let visitors scan quickly but explore deeply.
- Make the next action obvious.

## Recommended Section Model

```text
home
├── hero
├── signature-work
├── case-study-strip
├── operating-principles
├── media-story-scene
├── proof-wall
└── contact-cta
```

## Interactive Patterns

## Hero Scene

The hero should communicate identity, audience fit, and credibility immediately.

Possible interactions:

- Subtle text entrance.
- Media reveal.
- Cursor-safe hover detail.
- Background depth only when media supports it.

Avoid:

- Generic animated gradients.
- Empty cinematic darkness.
- Oversized slogans without proof.

## Signature Work

Work should be shown as focused proof, not a long resume.

Possible interactions:

- Expandable project cards.
- Before/after toggles.
- Role and impact callouts.
- Technical detail panels for technical audiences.

## Case Studies

Case studies should follow:

```text
Problem -> Role -> Constraints -> Approach -> Result -> Evidence
```

Possible interactions:

- Step-by-step process timeline.
- Sticky media paired with scrolling explanation.
- Artifact gallery.
- Metrics reveal after supporting context.

## Personality and Life Scenes

Personal material should make the person memorable without weakening professional credibility.

Possible interactions:

- Short editorial scenes.
- Map or place-based moments.
- Photo essays.
- Values tied to real experiences.

Every personal scene needs a visibility decision:

- `public`
- `private_context`
- `ask_before_using`
- `never_use`

## Motion Principles

- Motion should reveal hierarchy, guide attention, or communicate cause and effect.
- Motion should stop when the user stops interacting.
- Reduced-motion mode must preserve the full content experience.
- Metrics should animate only when confirmed.
- Media motion should be practical first: parallax, masked reveal, Ken Burns, depth, or light touch transitions.

## Component Architecture

Generated sites should use data-driven components.

```text
components/
├── sections/
│   ├── Hero.tsx
│   ├── SignatureWork.tsx
│   ├── CaseStudyStrip.tsx
│   ├── Principles.tsx
│   ├── MediaStoryScene.tsx
│   ├── ProofWall.tsx
│   └── ContactCta.tsx
├── motion/
│   ├── Reveal.tsx
│   └── MotionProvider.tsx
└── ui/
    ├── Button.tsx
    ├── Card.tsx
    └── Metric.tsx
```

Content should live outside components:

```text
content/
├── site.ts
├── claims.ts
├── media.ts
└── case-studies.ts
```

This keeps the system auditable. Components render approved data; they should not invent facts.
