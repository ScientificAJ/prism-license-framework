# Contributing to Prism License Framework

Thanks for wanting to improve PLF. This project is both software and license-design work, so contributions need to be clear about what they change: UI behavior, generator logic, documentation, presets, or actual license text.

## Good Places to Contribute

- Variant ideas: propose new PLF variant families, named presets, or intent paths for common creator needs.
- License modules: suggest new clause modules for AI use, SaaS hosting, resale, attribution, branding, patents, education, compliance, privacy, security, or redistribution.
- Legal review notes: improve clause lineage, compatibility notes, risk explanations, and plain-language summaries.
- Generator UX: make the app easier to use, understand, export from, or review.
- Artifact exports: improve generated `LICENSE`, `NOTICE`, SPDX headers, README snippets, package metadata, registry entries, contributor policies, and commercial exception notices.
- Parser and validation: improve variant-code import, conflict detection, preset drift, hash generation, and review findings.
- Documentation: clarify how PLF works, when to use it, and where it differs from MIT, Apache-2.0, GPL/AGPL, BSL-style, and other source-available licenses.
- Tests and maintainability: add coverage for pure generator logic, split large modules, or reduce duplication without changing behavior.

## Before Changing License Text

License text changes carry more weight than UI or docs changes. If you want to change clause wording, add a new module, change a preset, or alter generated legal text, please open an issue first.

In that issue, include:

- the problem the change solves
- the exact wording you want to add or change
- the affected PLF modules, presets, or variant codes
- whether the change is backward-compatible
- any known inspiration, prior art, or legal-review concern

Do not silently rewrite existing legal text in a drive-by PR. If a change affects generated legal output, call that out clearly in the PR description.

## Issues

Open an issue when you want to:

- propose a new license type, variant, or preset
- discuss a legal-text change before implementation
- report confusing wording or a risky interpretation
- request a new export format or integration
- report a bug in generated output, hashing, variant import, or review findings
- suggest a UI or documentation improvement

Useful issue titles look like:

```text
Variant proposal: PLF-Education for courseware reuse
Module proposal: stronger anti-white-label clause
Bug: LicenseRef import rejects valid checkbox combination
Docs: clarify source-available vs OSI-open-source language
```

## Pull Requests

PRs are welcome for focused changes. Smaller PRs are much easier to review than one giant bundle.

Before opening a PR:

1. Run `npm install` if dependencies changed.
2. Run `npm run build`.
3. Check whether generated license text changed.
4. Update docs if the user-facing behavior changed.

In your PR description, include:

- what changed
- why it changed
- whether generated legal text changed
- whether presets or registry entries changed
- screenshots for UI changes
- any follow-up work you intentionally left out

## Development Setup

```bash
npm install
npm run dev
```

Build before submitting:

```bash
npm run build
```

The production build is emitted to `dist/`.

## Project Guardrails

- Keep PLF variant codes stable unless the change is intentional and documented.
- Preserve existing generated artifacts unless the PR is explicitly about changing them.
- Treat `registry/plf-1.0-presets.json` as review-sensitive. Preset status, codes, hashes, and immutability policy should not drift casually.
- Prefer plain language in docs and UI. Legal precision matters, but the generator should stay understandable to builders.
- Do not claim OSI approval, SPDX License List inclusion, or legal enforceability unless that status is actually true.
- Keep generated outputs deterministic where possible.
- Avoid mixing broad refactors with legal-text changes.

## Legal Note

Contributions to PLF are not legal advice. Review comments, examples, module proposals, and generated text are drafting aids and should be reviewed by qualified counsel before high-stakes production use.

By contributing, you confirm that you have the right to submit your contribution and that it can be evaluated and incorporated under this repository's current license terms.
