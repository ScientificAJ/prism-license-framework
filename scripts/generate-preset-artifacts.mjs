import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { buildPresetArtifact, loadPlfRuntime, repoRoot } from './plf-utils.mjs';

const registryPath = join(repoRoot, 'registry/plf-1.0-presets.json');
const registry = JSON.parse(readFileSync(registryPath, 'utf8'));
const runtime = loadPlfRuntime();
const presetDir = join(repoRoot, 'presets');

mkdirSync(presetDir, { recursive: true });

registry.presets = registry.presets.map((preset) => {
  const artifact = buildPresetArtifact(runtime, preset.name);
  const artifactPath = join(presetDir, `${preset.name}.LICENSE`);

  writeFileSync(artifactPath, artifact.legalText, 'utf8');

  return {
    ...preset,
    code: artifact.code,
    status: 'canonical',
    legalTextHash: artifact.legalTextHash,
  };
});

writeFileSync(registryPath, `${JSON.stringify(registry, null, 2)}\n`, 'utf8');

console.log(`Generated ${registry.presets.length} canonical preset artifact(s).`);
