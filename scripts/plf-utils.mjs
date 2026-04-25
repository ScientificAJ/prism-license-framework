import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';

const scriptDir = dirname(fileURLToPath(import.meta.url));
export const repoRoot = join(scriptDir, '..');

export const presetMetadata = {
  projectName: 'Prism License Framework Generator',
  licensorName: 'Prism License Framework contributors',
  copyrightYear: '2026',
  contact: 'https://github.com/ScientificAJ/prism-license-framework/issues',
  projectUrl: 'https://github.com/ScientificAJ/prism-license-framework',
};

const readJson = (relativePath) =>
  JSON.parse(readFileSync(join(repoRoot, relativePath), 'utf8'));

const importFixtures = {
  conflictRules: readJson('rules/conflicts.json'),
  dormantModuleRules: readJson('rules/dormant-modules.json'),
  redundancyRules: readJson('rules/redundancies.json'),
  requirementRules: readJson('rules/requires.json'),
  reviewEscalationRules: readJson('rules/review-escalations.json'),
};

export const loadPlfRuntime = () => {
  const source = readFileSync(join(repoRoot, 'src/App.jsx'), 'utf8');
  const sourceWithoutImports = source.replace(/^import .+;\n/gm, '');
  const preAppSource = sourceWithoutImports.slice(
    0,
    sourceWithoutImports.indexOf('export default function App()'),
  );
  const injectedImports = Object.entries(importFixtures)
    .map(([name, value]) => `const ${name} = ${JSON.stringify(value)};`)
    .join('\n');
  const context = { console };

  vm.runInNewContext(
    [
      injectedImports,
      preAppSource,
      'globalThis.__plfRuntime = { CATEGORIES, PRESETS, buildLegalText, buildLicenseCode, getActiveModulesForState, getOptionSummary, normalizeLicenseState, parseVariantCode };',
    ].join('\n'),
    context,
    { filename: 'src/App.jsx' },
  );

  return context.__plfRuntime;
};

export const buildPresetArtifact = (runtime, presetName) => {
  const preset = runtime.PRESETS[presetName];

  if (!preset) {
    throw new Error(`Unknown preset: ${presetName}`);
  }

  const state = runtime.normalizeLicenseState(preset.state);
  const modules = runtime.getActiveModulesForState(state);
  const code = runtime.buildLicenseCode(state, modules);
  const deedBullets = [];

  runtime.CATEGORIES.forEach((category) => {
    if (category.id === 'core') {
      return;
    }

    if (category.type === 'radio') {
      const selectedValue = state[category.id];

      if (selectedValue !== 'None') {
        deedBullets.push(`${category.title}: ${runtime.getOptionSummary(category.id, selectedValue)}`);
      }

      return;
    }

    state[category.id].forEach((value) => {
      deedBullets.push(`${category.title}: ${runtime.getOptionSummary(category.id, value)}`);
    });
  });

  const legalText = runtime.buildLegalText(state, modules, code, deedBullets, presetMetadata);

  return {
    code,
    legalText,
    legalTextHash: createHash('sha256').update(legalText, 'utf8').digest('hex'),
  };
};
