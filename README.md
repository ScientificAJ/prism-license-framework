# Prism License Framework (PLF) Generator

Software licensing was built for a world before foundation models, dataset scraping, SaaS cloning, and platform-scale extraction. PLF exists because creators now need a way to say something the old defaults cannot say clearly enough:

> You may build with this work. You may even use it commercially. But you may not turn it into training data, resell it as a clone, strip its identity, or exploit it outside the boundaries the creator chose.

The Prism License Framework Generator is a post-AI era licensing tool for digital creators, indie studios, open-core founders, researchers, educators, and software authors who need more precision than MIT and less blunt force than a fully bespoke proprietary agreement.

PLF bridges the gap between permissive and closed licensing by combining a core grant of rights with optional restriction and obligation modules. Instead of choosing one rigid license for every business model, creators assemble a variant that matches their commercial, distribution, hosting, network reciprocity, compliance, AI-training, branding, and derivative-work policy.

The current generator ships with an expanded option library: every factor exposes at least five choices, the framework now includes additional influence areas such as network reciprocity and compliance governance, and the UI includes plain-language clause explanations plus conflict detection warnings for potentially contradictory combinations.

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
- `Branding: No white-label rebranding`
- `Resale: Bundled only`

This is not an edge case. It is rapidly becoming a mainstream need.

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
PLF-1.0-C1-A-NC-M2-R2-NR-NT-NS-BR-CE
```

In practice, that means the generator can serve as a policy assembly interface for digital products, templates, software tools, educational material, and other source-available works.

## SPDX Interoperability

Until a PLF variant is formally added to the SPDX License List, the most practical interoperability approach is:

- Use a custom SPDX identifier in source file headers.
- Include the full corresponding license text in your repository.
- Use npm-compatible manifest metadata for `package.json`.

Example source header:

```text
SPDX-License-Identifier: LicenseRef-PLF-1.0-C1-A-NC-M2-R2-NR-NT-NS-BR-CE
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

## Canonical Presets

To reduce legal-review sprawl, the generator now anchors users to three canonical starting points:

- `PLF-Open`: lower-friction sharing and commercial adoption
- `PLF-Balanced`: source-available default with more explicit downstream guardrails
- `PLF-Protected`: creator-protective default with no AI training and tighter commercial controls

The goal is operationally simple: if most adopters stay close to these presets, legal teams can review a small number of recognizable variants instead of treating every generated combination as a brand-new license.

## Trust and Translation Layers

The project now explicitly exposes three layers inspired by Creative Commons:

- legal code for lawyers and compliance teams
- a human-readable deed for managers and developers
- machine-readable identifiers for tooling and search

The generator UI also now includes:

- plain-English clause explanations for every toggle
- conflict detection warnings for combinations likely to confuse reviewers
- lineage notes explaining which familiar licensing traditions inspired each section
- a compatibility snapshot for inbound and outbound review conversations

## Legal Review Docs

- [Clause lineage](./docs/clause-lineage.md)
- [Compatibility matrix](./docs/compatibility-matrix.md)
- [Dear Corporate Legal FAQ](./docs/legal-faq.md)

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

## Deployment

### Vercel

1. Import the GitHub repository into Vercel.
2. Use the default Vite settings.
3. Set the build command to `npm run build`.
4. Set the output directory to `dist`.
5. Deploy.

### GitHub Pages

For GitHub Pages, build the app with a repository-specific base path and publish the `dist/` directory.

Typical pattern:

1. Set the Vite base to `/<repo-name>/` for the Pages build.
2. Run `npm run build`.
3. Publish `dist/` via GitHub Actions or a Pages deployment branch.

Vercel is the simpler default because it does not require a repository-name base path.

## Legal Note

PLF is a framework generator and drafting tool. It is not legal advice, and production use for significant commercial rights or cross-jurisdiction enforcement should be reviewed by qualified counsel.
