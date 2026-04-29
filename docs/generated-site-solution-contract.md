# Generated Site Solution Contract

Every generated website should be a standalone software solution.

## Required File Structure

```text
generated-site/
├── .github/
│   └── workflows/
│       ├── ci.yml
│       ├── firebase-preview.yml
│       └── firebase-production.yml
├── .generated/
│   ├── canonical-profile.json
│   ├── approved-claims.json
│   ├── media-manifest.json
│   ├── site-plan.json
│   ├── design-system.json
│   ├── motion-plan.json
│   ├── qa-report.json
│   └── generation-log.json
├── app/
├── components/
├── content/
├── lib/
├── public/
├── scripts/
│   ├── verify-claims.ts
│   └── verify-placeholders.ts
├── tests/
│   ├── content-integrity.test.ts
│   ├── claim-visibility.test.ts
│   ├── smoke.spec.ts
│   ├── accessibility.spec.ts
│   └── responsive.spec.ts
├── firebase.json
├── .firebaserc
├── .env.example
├── next.config.ts
├── package.json
├── playwright.config.ts
├── tsconfig.json
├── README.md
└── DEPLOYMENT.md
```

## Required Commands

```bash
npm run dev
npm run typecheck
npm run lint
npm run test
npm run test:e2e
npm run build
```

## Required Quality Gates

- TypeScript passes.
- Lint passes.
- Unit/content tests pass.
- Claim visibility checks pass.
- Placeholder checks pass.
- Playwright smoke tests pass.
- Accessibility checks pass.
- Production build passes.

## Claim Visibility Rule

No rendered page may contain private, unsupported, placeholder, ask-before-using, or never-use material.

Only claims with these fields may appear in final public copy:

```json
{
  "status": "confirmed",
  "visibility": "public",
  "approved_for_public_use": true
}
```

## Artifact Traceability

Generated source should be traceable back to `.generated/` artifacts.

Examples:

- Public copy should map to approved claims or approved story units.
- Media references should map to the media manifest.
- Motion behavior should map to the motion plan.
- Design tokens should map to the design system.

## Deployment Readiness

A generated site is ready to publish only when:

- All quality gates pass.
- QA report says `ready_to_publish: true`.
- Firebase project configuration exists.
- GitHub Actions secrets are configured.
- Production deploy workflow has run successfully.
