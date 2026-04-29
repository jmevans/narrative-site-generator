const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const schemaDir = path.join(root, "schemas");

const requiredSchemas = [
  "canonical-profile.schema.json",
  "claim.schema.json",
  "media-asset.schema.json",
  "story-unit.schema.json",
  "design-system.schema.json",
  "motion-plan.schema.json",
  "site-plan.schema.json",
  "agent-handoff.schema.json",
  "agent-output.schema.json"
];

for (const file of requiredSchemas) {
  const fullPath = path.join(schemaDir, file);
  if (!fs.existsSync(fullPath)) {
    throw new Error(`Missing schema: ${file}`);
  }

  const parsed = JSON.parse(fs.readFileSync(fullPath, "utf8"));
  if (!parsed.title || !parsed.type) {
    throw new Error(`Schema is missing title or type: ${file}`);
  }
}

console.log(`Validated ${requiredSchemas.length} schema files.`);
