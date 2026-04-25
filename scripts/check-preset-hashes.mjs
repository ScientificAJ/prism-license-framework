import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { buildPresetArtifact, loadPlfRuntime, repoRoot } from './plf-utils.mjs';

const registry = JSON.parse(readFileSync(join(repoRoot, 'registry/plf-1.0-presets.json'), 'utf8'));
const runtime = loadPlfRuntime();
const failures = [];

registry.presets.forEach((preset) => {
  const artifact = buildPresetArtifact(runtime, preset.name);
  const artifactPath = join(repoRoot, 'presets', `${preset.name}.LICENSE`);
  const artifactFile = readFileSync(artifactPath, 'utf8');
  const fileHash = createHash('sha256').update(artifactFile, 'utf8').digest('hex');

  if (preset.status !== 'canonical') {
    failures.push(`${preset.name}: registry status is ${preset.status}, expected canonical`);
  }

  if (preset.code !== artifact.code) {
    failures.push(`${preset.name}: registry code ${preset.code} does not match generated ${artifact.code}`);
  }

  if (preset.legalTextHash !== artifact.legalTextHash) {
    failures.push(`${preset.name}: registry hash ${preset.legalTextHash} does not match generated ${artifact.legalTextHash}`);
  }

  if (artifactFile !== artifact.legalText) {
    failures.push(`${preset.name}: preset LICENSE artifact differs from generated legal text`);
  }

  if (fileHash !== preset.legalTextHash) {
    failures.push(`${preset.name}: preset LICENSE file hash ${fileHash} does not match registry ${preset.legalTextHash}`);
  }
});

if (failures.length > 0) {
  console.error(failures.join('\n'));
  process.exit(1);
}

console.log(`Verified ${registry.presets.length} canonical preset hash(es).`);
