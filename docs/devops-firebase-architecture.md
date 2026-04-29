# DevOps and Firebase Architecture

Firebase Hosting and GitHub Actions should be first-class output targets for generated websites.

## Deployment Goals

- Every generated website can be deployed independently.
- Pull requests produce Firebase Hosting preview channels.
- Merges to the production branch deploy the live site.
- Deployment is blocked by quality gates.
- Secrets are not committed.

## Default Branch Model

```text
feature branch -> pull request -> preview deploy
main -> production deploy
```

## GitHub Actions Workflows

Generated sites should include three workflows.

## `ci.yml`

Runs on pull requests and pushes.

Expected checks:

- Install dependencies.
- Typecheck.
- Lint.
- Unit tests.
- Claim visibility checks.
- Placeholder checks.
- Build.
- Playwright smoke tests.
- Accessibility tests.

## `firebase-preview.yml`

Runs on pull requests after CI succeeds.

Expected behavior:

- Build site.
- Deploy to Firebase Hosting preview channel.
- Comment or expose preview URL through the GitHub Actions summary.

## `firebase-production.yml`

Runs on pushes to `main` after CI succeeds.

Expected behavior:

- Build site.
- Deploy to Firebase Hosting live channel.

## Firebase Files

Generated sites should include:

```text
firebase.json
.firebaserc
```

For a static or exported Next.js site, `firebase.json` should point Hosting at the generated output directory. For server-backed Next.js features, the runtime architecture must explicitly choose a Firebase-compatible deployment model before generation.

## Secrets

Expected GitHub repository secrets:

```text
FIREBASE_SERVICE_ACCOUNT
FIREBASE_PROJECT_ID
```

Optional:

```text
FIREBASE_SITE_ID
```

Secrets must be referenced by workflows and never written into generated source.

## DevOps Skills To Add

Future skills should be added for:

```text
skills/devops-planning/
skills/github-actions/
skills/firebase-deployment/
skills/release-qa/
```

These skills should generate deployment artifacts, reason about project configuration, and verify that the generated site can move through CI/CD safely.

## Release Gate

Production deployment should require:

- Build success.
- Test success.
- Claim visibility success.
- No unresolved critical QA issues.
- No private or placeholder content in rendered public pages.
