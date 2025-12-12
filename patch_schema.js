const fs = require("fs");

const schemaPath = "prisma/schema.prisma";
let schema = fs.readFileSync(schemaPath, "utf8");
let modified = false;

/**
 * Safely inject lines before the closing brace of a Prisma model.
 */
function injectIntoModel(modelName, injections) {
  const regex = new RegExp(
    `model\\s+${modelName}\\s+\\{([\\s\\S]*?)\\n\\}`,
    "m"
  );

  const match = schema.match(regex);
  if (!match) {
    console.log(`⚠️  Model ${modelName} not found. Skipping.`);
    return;
  }

  let body = match[1];
  let changed = false;

  injections.forEach((line) => {
    if (!body.includes(line.trim())) {
      body += `\n  ${line}`;
      changed = true;
    }
  });

  if (changed) {
    const replacement = `model ${modelName} {\n${body}\n}`;
    schema = schema.replace(regex, replacement);
    modified = true;
    console.log(`✅ Patched ${modelName}`);
  } else {
    console.log(`ℹ️  ${modelName} already up to date.`);
  }
}

/**
 * Apply Phase 8 patches
 */

// IntelligenceBundle patches
injectIntoModel("IntelligenceBundle", [
  "runHash        String?",
  'engineVersion  String   @default("v5.0.0")',
  "opportunity    Opportunity?",
  "@@unique([tickerId, runHash])"
]);

// Opportunity patches
injectIntoModel("Opportunity", [
  "intelligenceBundleId String?  @unique",
  "intelligenceBundle   IntelligenceBundle? @relation(fields: [intelligenceBundleId], references: [id])"
]);

if (modified) {
  fs.writeFileSync(schemaPath, schema);
  console.log("🎯 Prisma schema patched successfully.");
} else {
  console.log("✅ No schema changes required.");
}
