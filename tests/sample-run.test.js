const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");

const requiredPaths = [
  "agents/orchestrator.md",
  "agents/story-strategy-agent.md",
  "agents/media-design-agent.md",
  "agents/site-planning-agent.md",
  "agents/build-qa-agent.md",
  "skills/interview/skill.md",
  "skills/story-extraction/skill.md",
  "skills/claim-checking/skill.md",
  "skills/media-analysis/skill.md",
  "skills/design-direction/skill.md",
  "skills/motion-direction/skill.md",
  "skills/site-architecture/skill.md",
  "skills/copywriting/skill.md",
  "skills/code-generation/skill.md",
  "skills/qa-review/skill.md",
  "artifacts/examples/sample-canonical-profile.json",
  "artifacts/examples/sample-site-plan.json",
  "website-template/app/page.tsx",
  "website-template/content/site.ts"
];

for (const relativePath of requiredPaths) {
  const fullPath = path.join(root, relativePath);
  if (!fs.existsSync(fullPath)) {
    throw new Error(`Missing required project file: ${relativePath}`);
  }
}

JSON.parse(fs.readFileSync(path.join(root, "artifacts/examples/sample-canonical-profile.json"), "utf8"));
JSON.parse(fs.readFileSync(path.join(root, "artifacts/examples/sample-site-plan.json"), "utf8"));

console.log(`Validated ${requiredPaths.length} required scaffold files.`);
