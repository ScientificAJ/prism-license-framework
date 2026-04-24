# Compatibility Matrix

This matrix is a review aid for inbound and outbound legal conversations. It is not legal advice. The purpose is to answer the first question most legal teams ask:

> If we use PLF-licensed code, what happens when it touches permissive, copyleft, or proprietary code?

## Review Scale

- `Generally low friction`: usually easy to review with standard OSS processes
- `Review required`: likely workable, but needs variant-specific approval
- `High review burden`: strong chance of special analysis, custom carve-outs, or rejection

## Canonical Preset Matrix

| Preset | MIT / BSD | Apache-2.0 | GPL / AGPL | Proprietary internal use | Proprietary distributed product | SaaS product | AI company use |
| --- | --- | --- | --- | --- | --- | --- | --- |
| PLF-Open | Generally low friction | Generally low friction | Review required | Generally low friction | Review required | Generally low friction | Generally low friction |
| PLF-Balanced | Review required | Review required | High review burden | Generally low friction | Review required | Review required | Review required |
| PLF-Protected | Review required | Review required | High review burden | Review required | High review burden | High review burden | High review burden |

This matrix applies only to canonical presets. A custom variant should not inherit the preset result automatically. The generator’s preset-drift panel shows how many factor categories changed from the nearest preset and should be treated as an escalation signal.

## How To Read It

### MIT / BSD

Permissive inbound code is usually the easiest fit because it imposes fewer reciprocal conditions. The main outbound question is whether the chosen PLF variant adds share-alike, source disclosure, SaaS, or AI restrictions on the PLF-covered portion.

### Apache-2.0

Apache-2.0 is still usually workable, but patent expectations are more visible. If a PLF variant with no explicit patent license is chosen, legal teams will often want a closer review.

### GPL / AGPL

Treat GPL and AGPL combinations as high-friction by default. Strong custom restrictions combined with strong copyleft can create unclear or incompatible downstream obligations unless the integration boundary is intentionally designed and reviewed.

### Proprietary Internal Use

Internal evaluation or internal deployment is usually the easiest proprietary posture, especially for balanced or protected presets. The major review points are hosting, AI, export, privacy, and audit obligations.

### Proprietary Distributed Products

This is where outbound friction rises quickly. Resale controls, SaaS restrictions, share-alike duties, source disclosure, and branding limitations all matter at once. Legal teams should compare the chosen preset against the exact commercial packaging model.

### SaaS Products

Hosted-service use is its own review category. `S0`, `S1`, `S3`, `S4`, `A5`, and `N1` through `N5` should be reviewed together because network obligations can become redundant, confusing, or impossible to trigger when hosted use is restricted.

### AI Company Use

AI use is not a single yes/no question. Review teams should separate normal commercial software use from scraping, training, fine-tuning, evaluation, benchmarking, distillation, model development, and hosted AI pipeline ingestion.

## Inbound / Outbound Checklist

When legal reviews a PLF variant, they should answer:

1. What code is coming in under PLF?
2. What other licenses are in the combined product?
3. Is the output internal-only, distributed, or hosted?
4. Are any reciprocal modules active?
5. Are patent, branding, AI, or SaaS modules active?
6. Is the team using a canonical preset or a custom one-off variant?

If the answer to item 6 is “custom one-off variant,” expect review time to go up materially.

## Current Variant Review

For generated variants, reviewers should use the live UI’s dynamic compatibility snapshot and legal-risk badges first. The preset matrix is a baseline; the selected modules are the actual review object.
