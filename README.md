# Prism License Framework (PLF) Generator

The Prism License Framework Generator is a modular, source-available license generator for digital creators. It is designed for authors who want more control than permissive licenses like MIT typically provide, while avoiding the rigidity of fully proprietary drafting.

PLF bridges the gap between permissive and closed licensing by combining a core grant of rights with optional restriction and obligation modules. Instead of choosing a single inflexible license, creators compose a variant that matches their commercial, distribution, hosting, network reciprocity, compliance, AI-training, branding, and derivative-work policy.

The current generator ships with an expanded option library: every factor exposes at least five choices, the framework now includes additional influence areas such as network reciprocity and compliance governance, and the UI now includes plain-language clause explanations plus conflict detection warnings for potentially contradictory combinations.

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
