# [🚀 Try the PLF Generator Live](https://plf.astroclub.space)

# Prism License Framework (PLF) Generator

Software licensing was built for a world before foundation models, dataset scraping, SaaS cloning, and platform-scale extraction. PLF exists because creators now need a way to say something the old defaults cannot say clearly enough:

> You may build with this work. You may even use it commercially. But you may not turn it into training data, resell it as a clone, strip its identity, or exploit it outside the boundaries the creator chose.

The Prism License Framework Generator is a post-AI era licensing tool for digital creators, indie studios, open-core founders, researchers, educators, and software authors who need more precision than MIT and less blunt force than a fully bespoke proprietary agreement.

PLF bridges the gap between permissive and closed licensing by combining a core grant of rights with optional restriction and obligation modules. Instead of choosing one rigid license for every business model, creators assemble a variant that matches their commercial, distribution, hosting, network reciprocity, compliance, AI-training, branding, and derivative-work policy.

The current generator ships with an expanded option library across core legal factors and add-on modules. Some categories are single-choice factors, while others are cumulative checkbox modules that intentionally stack obligations. The UI includes plain-language clause explanations, review findings, legal-risk badges, preset-drift tracking, exports, and dynamic consequence feedback.

## Why This Matters Now

Developers are no longer only asking:

- Can people use my code?
- Can people modify my code?
- Can people sell my code?

They are also asking:

- Can hyperscalers scrape this into training corpora?
- Can someone wrap this in a hosted service and outcompete me?
- Can my brand be stripped away and white-labeled?
- Can someone monetize my work while bypassing the constraints I care about?

That is the core PLF thesis: the post-AI software economy created licensing problems that classic defaults do not address cleanly enough.

## The Core Promise

PLF is designed to let a creator express positions traditional licenses struggle to express in a practical, reusable way:

- `Commercial Use: YES`
- `AI Training: NO`
- `Hosting: Named customers only`
- `Branding: Restricted + no white-label add-on`
- `Resale: Bundled only`

This is not an edge case. It is rapidly becoming a mainstream need.

## Start With Intent

The generator now starts with the problem the creator is trying to solve, not with legal machinery.

Intent paths include:

- “I do not want AI companies scraping my work”
- “I do not want someone wrapping this as a hosted clone”
- “I want indie devs and small studios, but not large corporations”
- “I want paid use allowed, but not selling the work itself”
- “I want broad collaboration, but I still want credit”
- “I want companies to evaluate or use this internally, not ship it outward”

Each intent applies a concrete PLF configuration that users can then refine through the advanced factors.

## Consequence Feedback

PLF now includes an interpretation layer that explains the practical result of the selected combination:

- what is allowed
- what is blocked
- what obligations are imposed
- what deserves legal review before use

This closes the gap between “which clauses are selected?” and “what does this actually mean for my project?”

## Legal-Review Cockpit

The generator now treats restrictive combinations as review events, not just harmless configuration.

It flags:

- variants that are source-available but not necessarily OSI-open-source compatible
- missing patent grants and unpaired patent-defense add-ons
- commercial use paired with AI-training restrictions
- ethical field-of-use restrictions
- SaaS and managed-service restrictions
- export, privacy, audit, security, and transparency duties
- custom drift from the nearest named preset

It also generates practical artifacts:

- `LICENSE`
- `NOTICE`
- human-readable deed
- SPDX source headers
- `package.json` license snippet
- README license section
- registry entry with SHA-256 hash

## What PLF Is

PLF is a composable licensing system built around two layers:

- Core grants define the starting scope of rights.
- Restriction and obligation modules refine that scope for real-world creator use cases.

This makes it possible to express nuanced source-available positions such as:

- allow modification but prohibit resale
- permit internal commercial deployment but prohibit SaaS hosting
- allow educational reuse while restricting course extraction
- prohibit AI training while still allowing normal end-user use

## Philosophy

The core design principle is simple:

- The `Core` establishes the base permission model.
- The `Modules` narrow, condition, or expand specific operational rights.

This approach is more maintainable than trying to encode every policy choice into one monolithic license. It also makes license variants easier to identify, document, compare, and evolve over time.

Example variant codes look like:

```text
PLF-1.0-C1-A-NC-M2-R2-FD-NR-NT-NS-DS-BR-WL-S0-P1-P4-CE-CE-COMP-CE-CERT-PR-SR
```

In practice, that means the generator can serve as a policy assembly interface for digital products, templates, software tools, educational material, and other source-available works.

## SPDX Interoperability

Until a PLF variant is formally added to the SPDX License List, the most practical interoperability approach is:

- Use a custom SPDX identifier in source file headers.
- Include the full corresponding license text in your repository.
- Use npm-compatible manifest metadata for `package.json`.

Example source header:

```text
SPDX-License-Identifier: LicenseRef-PLF-1.0-C1-A-NC-M2-R2-FD-NR-NT-NS-DS-BR-WL-S0-P1-P4-CE-CE-COMP-CE-CERT-PR-SR
```

Example `package.json` metadata for a custom or unlisted license:

```json
{
  "license": "SEE LICENSE IN LICENSE"
}
```

Why this distinction matters:

- SPDX guidance allows `LicenseRef-...` for licenses not yet on the SPDX License List, provided you also make the corresponding license text available.
- npm package metadata documentation still recommends `SEE LICENSE IN <filename>` for custom or unlisted licenses in `package.json`.

For PLF-based projects, the safest current pattern is:

1. Put the full PLF license text in a top-level `LICENSE` file.
2. Use `SPDX-License-Identifier: LicenseRef-<your-plf-variant>` in source headers.
3. Use `"license": "SEE LICENSE IN LICENSE"` in `package.json` if you publish through npm tooling.

## Preset Anchors

To reduce legal-review sprawl, the generator now anchors users to three named starting points. The current registry marks these presets `canonical`, and each one has an exact generated `presets/*.LICENSE` artifact plus a SHA-256 hash pinned in `registry/plf-1.0-presets.json`:

- `PLF-Open`: lower-friction sharing and commercial adoption
- `PLF-Balanced`: source-available default with more explicit downstream guardrails
- `PLF-Protected`: creator-protective default with no AI training and tighter commercial controls

The operational goal is simple: if most adopters stay close to these presets, legal teams can review a small number of recognizable variants instead of treating every generated combination as a brand-new license.

Run `npm run generate:presets` after changing legal text or preset state, then `npm run test:presets` to confirm the registry hashes still match the generated artifacts.

## Trust and Translation Layers

The project now explicitly exposes three layers inspired by Creative Commons:

- legal code for lawyers and compliance teams
- a human-readable deed for managers and developers
- machine-readable identifiers for tooling and search

The generator UI also now includes:

- intent-first entry paths for common creator problems
- consequence feedback explaining allowed, blocked, required, and review-sensitive outcomes
- plain-English clause explanations for every toggle
- pasteable variant-code import for `PLF-1.0-...` and `LicenseRef-PLF-1.0-...` identifiers
- project metadata fields for project name, licensor, copyright year, contact, and project URL
- severity-split findings for blocked contradictions, conflicts, redundancies, review risks, and helpful notes
- formal compatibility rules in `rules/` for conflicts, dormancy, requirements, redundancies, and review escalations
- expanded conflict and risk warnings for combinations likely to confuse reviewers
- preset-drift tracking with category-level preset/current/review-impact rows
- source-available classification and "why this may not be open source" reasoning per variant
- live SHA-256 hash display and stale-export warning after changes
- copy and download exports for license artifacts
- conditional NOTICE export behavior when attribution or branding modules require it
- contributor policy and commercial exception notice exports
- scenario previews and a dynamic compatibility snapshot
- lineage notes explaining which familiar licensing traditions inspired each section
- a compact comparison against MIT, Apache-2.0, GPL/AGPL, and source-available families

## Variant Code Import

Every generated variant has a copyable code such as:

```text
PLF-1.0-C1-A-NC-M2-R2-FD-NR-NT-NS-DS-BR-WL-S0-P1-P4-CE-CE-COMP-CE-CERT-PR-SR
```

The UI can also read pasted identifiers such as:

```text
LicenseRef-PLF-1.0-C1-A-NC-M2-R2-FD-NR-NT-NS-DS-BR-WL-S0-P1-P4-CE-CE-COMP-CE-CERT-PR-SR
```

Paste the code into the "Paste a variant code" panel and the generator reconstructs the selected core, radio factors, and checkbox modules. Unknown tokens are rejected instead of silently ignored, because a license-code importer should not pretend to understand future or malformed clauses.

## Export Model

The generator is designed to produce the artifacts a real repository needs:

- `LICENSE`
- conditional `NOTICE`
- human-readable deed
- SPDX source headers for JS/TS, Python, HTML, CSS, Markdown, and Shell
- npm-compatible `package.json` snippet
- README license section
- registry entry with PLF version, generator version, hash method, hash input, timestamp, preset base, and custom drift count
- contributor policy starter
- commercial exception notice starter
- printable review summary

If a hard contradiction is detected, exports are locked until the user acknowledges that the result is a custom/legal-review-required variant. That acknowledgement is friction, not legal approval.

## Legal Review Docs

- [Clause lineage](./docs/clause-lineage.md)
- [Compatibility matrix](./docs/compatibility-matrix.md)
- [Dear Corporate Legal FAQ](./docs/legal-faq.md)
- [Versioning policy](./docs/versioning-policy.md)
- [PLF 1.0 canonical preset registry](./registry/plf-1.0-presets.json)

## Running Locally

### Scaffold from scratch

```bash
npm create vite@latest prism-license-framework-generator -- --template react
cd prism-license-framework-generator
npm install
npm install lucide-react
npm install -D tailwindcss@3 postcss autoprefixer @tailwindcss/typography
```

### Start development

```bash
npm install
npm run dev
```

### Build for production

```bash
npm run build
```

### Regenerate canonical preset artifacts

```bash
npm run generate:presets
npm run test:presets
```

The production build is emitted to `dist/`.

## Configuration Files

This repository includes the following required setup:

- `tailwind.config.js`
- `postcss.config.js`
- `vite.config.js`
- `src/index.css`
- `src/main.jsx`

The main application component belongs in `src/App.jsx`. This repository already contains the production PLF generator component there.

## Repository Publishing

To initialize and publish the repository manually with Git and GitHub CLI:

```bash
git init
git add .
git commit -m "Initial commit: Prism License Framework Generator"
gh repo create prism-license-framework-generator --public --source=. --remote=origin --push
```

If a remote already exists:

```bash
git branch -M main
git push -u origin main
```


## Legal Note

PLF is a framework generator and drafting tool. It is not legal advice, and production use for significant commercial rights or cross-jurisdiction enforcement should be reviewed by qualified counsel.

Generated PLF text applies to the licensor's own work. It does not automatically relicense third-party dependencies, bundled assets, or inbound contributions that arrive under separate terms.

For contributor-heavy projects, use the generated contributor policy starter or a separate contributor agreement so inbound and outbound licensing are explicit.
