# Beginner Tutorial: Using the Prism License Framework Generator

This tutorial walks through the PLF Generator from first click to exported license files.

PLF is a drafting tool for choosing a source-available license posture. It helps you decide what people may do with your work, what they must do if they reuse it, and which combinations deserve legal review before you publish.

PLF is not legal advice. Use it to draft, compare, and document your intended policy. For high-value commercial use, multi-jurisdiction enforcement, patents, trademarks, or regulated deployments, ask qualified counsel to review the generated text.

## What You Will Build

By the end of this tutorial, you will know how to:

- Start from a creator intent or a canonical preset.
- Fill project metadata.
- Choose every PLF factor one by one.
- Understand warnings, conflicts, dormant modules, and preset drift.
- Read the generated human deed and legal text.
- Export a `LICENSE`, `NOTICE`, SPDX headers, registry entry, contributor policy, and review summary.

The normal workflow is:

```text
creator intent -> modules -> review warnings -> export-ready LICENSE
```

## 1. Open the Generator

Use the live generator:

```text
https://plf.astroclub.space
```

You can also run it locally:

```bash
npm install
npm run dev
```

The app has two main areas:

- The left panel is where you configure factors, presets, metadata, and modules.
- The right panel is where you review the generated variant, practical consequences, legal-risk badges, exports, and license text.

## 2. Understand the Default Starting Point

The generator opens on `PLF-Protected`.

That preset is creator-protective. It starts with controlled reuse, no AI training, stronger resale limits, restricted branding, no open SaaS resale, privacy duties, and security review.

This is a safe place to begin if your main concern is protecting your work from extraction, cloning, or unapproved commercial use.

If you want broader adoption, you can switch to `PLF-Open` or `PLF-Balanced`.

## 3. Start With The Problem

The first section is called `Start with the problem`.

This is the beginner-friendly path. Instead of asking you to understand legal modules first, it asks what you are trying to prevent.

### Block AI Training

Choose this when your main concern is dataset scraping, model training, fine-tuning, benchmarking, or evaluation.

This path allows normal commercial reuse while blocking AI training and evaluation.

Use it when you want people to build with your work, but not turn it into model fuel.

### Stop SaaS Clones

Choose this when your main concern is someone wrapping your work as a hosted service.

This path allows source-visible reuse while blocking public hosted service clones and standalone resale.

Use it when you are comfortable with people learning from or modifying the work, but not launching it as a competing SaaS clone.

### Indies Yes, Big Companies No

Choose this when you want small developers or studios to use the work, but you want larger companies to ask first.

This path uses small-entity commercial use and keeps broad enterprise use outside the default grant.

Use it when you want community adoption without giving large companies a free commercial path.

### Commercial Use, No Resale

Choose this when paid use is fine, but selling the work itself is not.

This path permits commercial activity while blocking standalone resale or clone packaging.

Use it when you want consultants, integrators, or product builders to use your work without turning the work itself into the product being sold.

### Open With Attribution

Choose this when you want broad collaboration and fewer restrictions, but still want credit.

This path stays closest to permissive source-sharing and maps to `PLF-Open`.

Use it when adoption speed matters more than tight commercial or AI controls.

### Internal Enterprise Only

Choose this when companies may evaluate or use the work internally, but should not ship it outward.

This path allows internal commercial use, internal modification, audit duties, privacy duties, and security review while blocking external redistribution and public hosting.

Use it for evaluation, pilots, internal tools, or enterprise review workflows.

## 4. Use Golden Presets

Golden presets are named configurations intended to reduce review sprawl.

Instead of making every user invent a fresh combination, presets give you stable anchors that can be reviewed, documented, and hash-pinned.

### PLF-Open

`PLF-Open` is the broadest preset.

It allows commercial use, public modification, redistribution, resale, public hosting, and AI use. It keeps attribution and patent comfort.

Use it when you want the lowest-friction PLF posture.

### PLF-Balanced

`PLF-Balanced` is the middle-ground source-available preset.

It allows commercial use and public modification, but adds guardrails around branding, AI training by permission, named-customer hosting, API notices, file-diff disclosure, modified naming, privacy duties, and defensive patent posture.

Use it when you want adoption, but still want meaningful controls.

### PLF-Protected

`PLF-Protected` is the creator-protective preset.

It blocks default commercial use, no AI training, standalone resale, open SaaS cloning, white-labeling, surveillance use, disinformation systems, and course/certification extraction.

Use it when protection matters more than frictionless adoption.

## 5. Watch Active Selection

Under the presets, the app shows `Active selection`.

It can say:

- `PLF-Open`
- `PLF-Balanced`
- `PLF-Protected`
- `Intent: ...`
- `Imported variant code`
- `Custom`

If you manually change a radio button or checkbox, the selection becomes `Custom`.

That does not mean the license is wrong. It means you are no longer exactly using a named preset, so the generator will show preset drift and review guidance.

## 6. Import A Variant Code

The `Paste a variant code` box lets you reconstruct a PLF selection from a code.

Example:

```text
PLF-1.0-C1-A-NC-M2-R2-FD-NR-NT-NS-DS-BR-WL-S0-P1-P4-CE-CE-COMP-CE-CERT-PR-SR
```

It also accepts SPDX-style identifiers:

```text
LicenseRef-PLF-1.0-C1-A-NC-M2-R2-FD-NR-NT-NS-DS-BR-WL-S0-P1-P4-CE-CE-COMP-CE-CERT-PR-SR
```

The importer shows:

- The parsed variant code.
- Whether the code is valid.
- Unknown tokens, if any.
- How many factors would change if you apply it.

Use this when someone sends you a PLF identifier and you want to inspect the exact configuration behind it.

## 7. Fill Project Metadata

Project metadata flows into generated artifacts.

Fill these fields before publishing:

- `Project name`
- `Licensor name`
- `Copyright year`
- `Contact URL/email`
- `Project URL`

If these fields are empty, the generator still works, but artifacts contain placeholder text and the review panel shows a metadata warning.

For a real repository, do not publish the generated `LICENSE` until these fields are complete.

## 8. Understand Radio Factors And Checkbox Add-ons

The generator uses two control types.

Radio factors allow one selected position at a time. For example, your commercial posture can be `NC`, `MC`, `IC`, `SM`, `CW`, or no commercial module.

Checkbox modules can stack. For example, derivative obligations can include both `FD` and `MN`.

Beginner rule:

- Use radio factors to choose the main posture for a topic.
- Use checkbox modules to add extra duties, restrictions, or refinements.

## 9. Core Base

The core base defines the starting grant before modules narrow or condition it.

### C1 - Restricted Foundation

`C1` is the broad baseline: use, modify, and share, subject to selected modules.

Use it for most normal PLF variants.

### C2 - Internal Mod Core

`C2` focuses on internal use and internal modification, not open redistribution.

Use it when companies may evaluate or use the work internally but should not ship it outward.

### C3 - View-Only Core

`C3` is strict inspection and viewing.

Use it when the work is visible for review, but you do not want meaningful reuse, modification, redistribution, hosting, or commercial exploitation by default.

Be careful pairing `C3` with broad commercial, hosting, resale, or modification modules. The review panel may flag contradictions.

### C4 - Evaluation And Prototype Core

`C4` is for pilots, due diligence, interoperability checks, prototypes, and internal demos.

Use it when people need to test the work before asking for production permission.

### C5 - Community Source Core

`C5` defaults toward non-commercial community sharing and improvement.

Use it when community learning and collaboration matter, but commercial use should be narrowed or explicitly controlled.

## 10. Attribution

Attribution controls how downstream users credit the original work.

### No Attribution Module

No extra attribution duty is added beyond the core and any other selected modules.

Use it only when attribution is not important or is handled elsewhere.

### A - Standard Attribution

`A` requires normal attribution and license notice retention when the work is shared.

Use it for familiar, low-friction credit.

### A2 - Prominent Attribution

`A2` requires visible attribution in public-facing use.

Use it when credit should appear in product credits, docs, or comparable user-facing places.

### A3 - NOTICE File Required

`A3` requires a `NOTICE` file or equivalent attribution appendix.

Use it when downstream distributions should carry structured notice material.

### A4 - Modification Attribution

`A4` requires modifiers to identify themselves and distinguish their changes.

Use it when provenance matters.

### A5 - Network Attribution Notice

`A5` requires visible attribution when the work is used over a network or SaaS.

Use it when hosted deployments are allowed and public network users should see origin credit.

Do not pair it casually with `S0`, because `S0` blocks hosted service use.

## 11. Commercial Use

Commercial use controls whether and how money-making activity is allowed.

### No Commercial Module

Commercial treatment is controlled by the core and other modules only.

Use it when you do not want to add a specific commercial rule.

### NC - Non-Commercial Only

`NC` blocks commercial or monetized use.

Use it when paid product use, paid service use, or commercial exploitation should require separate permission.

### MC - Commercial Allowed

`MC` allows commercial use, subject to all other selected restrictions.

Use it when commercial adoption is allowed, but you still may want AI, hosting, resale, branding, or attribution controls.

### IC - Internal Commercial Only

`IC` allows commercial entities to use the work internally, but not resell or expose it outward.

Use it for internal enterprise adoption.

### SM - Small-Entity Commercial Use

`SM` allows commercial use only for small teams or small businesses.

Use it when indies and small studios get a default path, while larger entities need separate permission.

### CW - Client Work Commercial Use

`CW` allows use in paid client services without turning the work into a standalone product.

Use it for consultants, agencies, implementers, and service providers.

## 12. Modification

Modification controls whether people can change the work.

### No Modification Module

Modification rules are left to the core grant and derivative obligations.

Use it when the core already says enough.

### M0 - No Modification

`M0` blocks changes and modified versions.

Use it when exact copies only are acceptable.

Do not pair it casually with derivative obligations like `FD`, `MN`, `SA`, `SD`, or `OC`, because those assume modifications can exist.

### M1 - Private Mod Allowed

`M1` allows private or internal modifications, but not external sharing of those modified versions.

Use it when organizations may adapt internally but cannot publish forks.

### M2 - Public Mod Allowed

`M2` allows public modified versions, subject to the rest of the license.

Use it for normal collaborative development.

### M3 - Patch-Only Distribution

`M3` allows modifications, but public sharing must happen as patches or diffs rather than full modified copies.

Use it when you want people to obtain the original work from the original source.

### M4 - Extensions And Plugins Only

`M4` allows add-ons, plugins, themes, adapters, or integration layers, but not modified core copies.

Use it for ecosystems where extension is welcome but core forks are not.

## 13. Redistribution

Redistribution controls whether people can share the work downstream.

### No Redistribution Module

Redistribution is governed by the core and related modules only.

Use it when you do not need a standalone redistribution rule.

### R0 - No Redistribution

`R0` blocks third-party redistribution.

Use it for internal-only or tightly controlled access.

Do not pair it casually with distribution-triggered duties like `A3`, `SA`, `SD`, `FD`, `MN`, or `OC`.

### R1 - Unmodified Only

`R1` allows exact unmodified copies only.

Use it when mirrors are acceptable but modified downstream distributions are not.

### R2 - Redistribution Allowed

`R2` allows redistribution, subject to all other modules.

Use it for normal source-sharing.

### R3 - Source Redistribution Only

`R3` allows redistribution only when source form is provided.

Use it when object-only packages should not be the only thing recipients receive.

### R4 - Registered Recipient Only

`R4` limits redistribution to named, tracked, or auditable recipients.

Use it for controlled partner, customer, affiliate, or compliance-heavy distribution.

## 14. Derivative Obligations

Derivative obligations are checkbox duties that apply when modified versions are allowed and shared or deployed.

### SA - Share Alike

`SA` requires modified versions to stay under the same PLF variant.

Use it when you want reciprocal licensing.

### SD - Source Disclosure

`SD` requires editable source when compiled derivatives are shipped.

Use it when downstream recipients should not receive object-only derivatives.

### FD - File Diff Disclosure

`FD` requires modified files to say what changed and when.

Use it for transparency and maintenance.

### MN - Modified Naming Required

`MN` requires modified forks to be clearly renamed or relabeled.

Use it to prevent confusion between the original work and a fork.

### OC - Offer Changes Back

`OC` requires downstream modifiers to offer significant changes back to the original licensor.

Use it when you want a feedback loop without necessarily imposing full share-alike.

## 15. Resale

Resale controls whether the work itself can be sold.

### No Resale Module

No standalone resale rule is added.

Use it when resale is governed by commercial and redistribution choices only.

### NR - No Resale

`NR` blocks selling, leasing, renting, bundling, or sublicensing the work as the primary standalone value.

Use it to prevent clone packaging or direct resale.

### LR - Limited Resale

`LR` allows resale only when the work is materially transformed or integrated into something larger.

Use it when value-added products are acceptable but raw resale is not.

### FR - Free Resale

`FR` allows paid resale and fee-based distribution.

Use it for permissive or broad commercial variants.

### CR - Cost Recovery Only

`CR` allows fees only for reasonable hosting, media, packaging, fulfillment, or support cost recovery.

Use it when users can cover costs but not profit from the work itself.

### BS - Bundled Resale Only

`BS` allows resale only when the work is a non-primary component of a larger product or service.

Use it when commercial bundles are acceptable but standalone resale is not.

## 16. AI And Training

AI and training controls machine-learning uses.

### No AI Module

No extra AI-training rule is added.

Use it only when AI use is handled elsewhere or not a concern.

### NT - No AI Training

`NT` blocks training, fine-tuning, evaluation, benchmarking, distillation, scraping, and model development.

Use it when your strongest line is "do not use this as model fuel."

### AT - AI By Permission Only

`AT` puts AI training outside the default grant unless the licensor separately approves it.

Use it when AI deals are possible, but should be negotiated.

### OA - Open AI Allowed

`OA` allows AI and ML use.

Use it when you are intentionally comfortable with model training and evaluation.

### RA - Research AI Only

`RA` allows non-commercial academic, public-interest, or internal research AI use, but blocks production or monetized model use by default.

Use it when research is fine but commercial model pipelines are not.

### LA - Local And Private AI Only

`LA` allows local, private, non-public AI work, but not hosted, customer-facing, or externally accessible AI services.

Use it when experimentation is okay but platform-scale AI use is not.

## 17. Ethical Restrictions

Ethical restrictions are field-of-use limits.

They can be useful, but they increase review burden and may affect claims of open-source compatibility.

### HM - No Harmful Military

`HM` blocks weapons, offensive military systems, lethal targeting, and severe harm contexts.

### NS - No Surveillance

`NS` blocks surveillance, profiling, non-consensual biometric monitoring, predictive policing, and unlawful tracking.

### HE - High-Risk Human Rights Restrict

`HE` blocks use tied to human-rights abuses, forced labor, state repression, unlawful discrimination, or civil-rights violations.

### DS - No Disinformation Systems

`DS` blocks deceptive propaganda, fraudulent impersonation, synthetic influence operations, and disinformation campaigns.

### BX - No Biometric Exploitation

`BX` blocks biometric monetization or sensitive behavioral profiling without informed consent.

## 18. Branding

Branding controls trademark, trade name, logo, product name, and origin presentation.

### No Branding Module

No standalone branding rule is added.

Use it when trademark permission is handled outside the PLF variant.

### BU - Branding Use Allowed

`BU` allows truthful factual references to the licensor's branding.

Use it when downstream users can say where the work came from.

### BN - Nominative Branding Only

`BN` allows minimal references needed for compatibility, provenance, or factual origin.

Use it when brand use should stay narrow.

### BR - Branding Restricted

`BR` mostly restricts trademark and brand use except basic origin references.

Use it when you want strong control without requiring a separate permission for every factual origin reference.

### BP - Branding By Permission

`BP` requires separate written permission for branding use.

Use it when trademark control is strict.

## 19. Branding Add-ons

Branding add-ons stack on top of the branding posture.

### WL - No White-Label Rebranding

`WL` prevents downstream parties from hiding or replacing the origin identity of the work.

Use it when people may reuse the work, but may not make it look like they created the original.

`WL` is separate from `BR` or `BP`. That is intentional. Trademark rules control brand use; white-label rules control origin concealment.

## 20. Hosting And SaaS

Hosting controls network-accessible deployments.

### No Hosting Module

No standalone hosted-service rule is added.

Use it when hosting is controlled by other factors or not important.

### S0 - No Hosted Service

`S0` blocks making the work available to third parties over a network as SaaS, PaaS, ASP, or remote API access.

Use it to stop public hosted clones.

### S1 - Internal Hosting Only

`S1` allows network hosting only for internal users, employees, and authorized contractors.

Use it for company intranet or internal enterprise use.

### S2 - Public Hosting Allowed

`S2` allows public hosted-service use, subject to other modules.

Use it when SaaS deployment is acceptable.

### S3 - Named-Customer Hosting Only

`S3` allows hosted use only for named customers, pilots, or controlled client-specific deployments.

Use it when customer deployments are acceptable but broad public multi-tenant SaaS is not.

### S4 - Managed Service By Permission

`S4` allows managed-service hosting only with separate permission or a commercial partnership.

Use it when managed-service rights should be negotiated.

## 21. Network Reciprocity

Network reciprocity controls duties triggered by hosted or network use.

Do not add network duties if hosting is prohibited. The generator disables or warns about several network duties under `S0`.

### No Network Reciprocity Module

No extra network reciprocity obligation is added.

Use it when hosted-service reciprocity is not part of your policy.

### N1 - Hosted Source Offer

`N1` requires hosted users to receive a source offer for the hosted implementation.

Use it for AGPL-like network source access.

### N2 - Service Modification Disclosure

`N2` requires disclosure of material service-side modifications.

Use it when network users should know what changed from the original work.

### N3 - Public API Notice

`N3` requires accessible documentation identifying the license variant, operator identity, and user-facing API/service restrictions.

Use it when hosted deployments should expose legal/operator context.

### N4 - Remote User Legal Notice

`N4` requires a visible user-facing notice in hosted instances.

Use it when remote users should see that the service is powered by the PLF-covered work.

### N5 - Interoperability Export Right

`N5` requires hosted users to have a reasonable way to export key migration-related data.

Use it when avoiding lock-in is part of your hosted-service policy.

## 22. Patents

Patent settings define patent comfort or patent limits.

Patent choices are especially review-sensitive. For public or enterprise-facing projects, do not guess casually.

### No Patent Module

No explicit patent term is added.

Use it only if patent treatment is intentionally left outside the PLF variant.

### P0 - No Patent License

`P0` says no patent rights are granted.

Use it when the licensor does not want to provide patent comfort.

This may increase enterprise review friction.

### P1 - Limited Patent License

`P1` grants a limited patent license tied to the work and terminates on patent aggression.

Use it for Apache-style patent comfort without giving broader patent rights.

### P2 - Broad Patent Grant

`P2` grants broader patent comfort with retaliation if the licensee becomes patent-aggressive.

Use it when patent comfort is important and the licensor is willing to grant broader coverage.

### P3 - Evaluation Non-Assert

`P3` gives narrower patent non-assert comfort mainly for evaluation, testing, and internal use.

Use it for pilots or internal enterprise review.

## 23. Patent Defense Add-ons

Patent defense add-ons are not standalone patent grants.

### P4 - Defensive Suspension

`P4` suspends patent rights if the licensee launches offensive patent claims around the work.

Use it only with `P1`, `P2`, or `P3`.

The generator treats `P4` as requiring patent comfort first.

## 24. Education And Research

Education and research modules are checkboxes because these permissions and restrictions can stack.

### ED - Educational Reuse Allowed

`ED` allows educators and educational institutions to copy, adapt, and present the work for non-profit teaching.

Use it when classroom use should be clearly allowed.

### ED-NP - Non-Profit Education Only

`ED-NP` limits educational permissions to non-profit teaching and study.

Use it when you want education rights but not paid course products.

Requires `ED`.

### ED-ACC - Accredited Institutions Only

`ED-ACC` scopes education permissions to accredited or formally recognized institutions.

Use it when you want schools, colleges, universities, and comparable institutions covered.

Requires `ED`.

### ED-IND - Independent Educators Allowed

`ED-IND` lets independent educators, tutors, trainers, and workshop leaders use the work instructionally.

Use it when you want individual teachers included.

Requires `ED`.

### ED-CORP - Internal Corporate Training Allowed

`ED-CORP` allows internal employee or contractor training.

Use it when companies may train staff with the work, but not sell an external course built from it.

Requires `ED`.

### CE - Course Extraction Restricted

`CE` blocks extracting or repackaging the work as a competing commercial course, textbook, curriculum, certification program, or structured training material.

Use it when your work has educational value you do not want copied into a competing course product.

### CE-COMP - Competing Course Banned

`CE-COMP` blocks courses or curricula that compete with the licensor's educational offerings.

Use it when course competition is the specific problem.

Requires `CE`.

### CE-CERT - Certification Extraction Banned

`CE-CERT` blocks paid certificate, credential, exam, assessment bank, or certification-prep extraction.

Use it when certification products are the concern.

Requires `CE`.

### RE - Research Reuse Allowed

`RE` allows non-commercial academic and independent research reuse, adaptation, experimentation, benchmarking, and publication.

Use it when research should be clearly allowed.

### CL - Classroom Display Right

`CL` allows classroom, workshop, seminar, and internal training display or demonstration.

Use it when showing the work publicly inside an instructional context should be allowed.

### SC - Student Copying Allowed

`SC` lets students or trainees receive and keep copies for study, coursework, or portfolio review.

Use it when learners need their own copies.

## 25. Compliance And Governance

Compliance modules add operational duties.

These can be useful for enterprise, regulated, high-risk, or public-interest deployments, but they can increase adoption friction.

### EX - Export And Sanctions Compliance

`EX` requires downstream users to follow export controls, sanctions, and trade restrictions.

Use it when cross-border distribution risk matters.

### PR - Privacy Compliance Duty

`PR` requires privacy-law compliance when the work processes personal data.

Use it when the work handles users, customers, analytics, identity, logs, or any personal information.

### AU - Audit Record Preservation

`AU` requires enough records to demonstrate compliance in regulated, commercial, or high-risk settings.

Use it when traceability matters.

### SR - Security Review Before High-Risk Use

`SR` requires a security and misuse review before high-risk deployment.

Use it for safety-sensitive, security-sensitive, or public-impact systems.

### TR - Transparency Reporting Duty

`TR` requires transparency summaries for large-scale, critical-infrastructure, or public-facing automated decision deployments.

Use it when public accountability matters.

## 26. Read The Variant Code

The right panel shows a generated variant code.

Example:

```text
PLF-1.0-C1-A2-CW-M2-R2-FD-MN-NR-AT-NS-BR-WL-S0-P1-P4-CE-CE-COMP-RE-PR-SR
```

The code is a compact map of your selections.

It starts with:

```text
PLF-1.0
```

Then it includes the selected core and active modules.

You can copy this code to discuss, compare, import, or document the variant.

## 27. Copy The Variant Code

Use `Copy variant code` when you want to share the compact identifier.

This is useful for issues, pull requests, legal review notes, release docs, or registry entries.

The variant code is not a substitute for the full license text. Always include the generated `LICENSE` file in a real repository.

## 28. Copy The LICENSE Quickly

The top-right `Copy LICENSE` button copies the generated legal text.

This is the fastest way to test the export, but for a real repository you should also review the export artifacts section.

If the export is locked because of blocked findings, you must acknowledge the custom/legal-review-required state before copying or downloading artifacts.

## 29. Understand Classification

The classification panel tells you whether the current variant looks like:

- A low-restriction source-sharing profile.
- A source-available profile that is not necessarily OSI-open-source.

PLF can generate source-available restrictions that are useful for creators but not OSI-open-source compatible.

Common reasons for the source-available warning include:

- Non-commercial terms.
- No resale.
- AI training restrictions.
- Hosted-service restrictions.
- Ethical field-of-use limits.
- White-label bans.
- Compliance duties.

Use this panel to avoid accidentally calling a restrictive license "open source" when it may not qualify.

## 30. Review Intent Path Summary

If you chose an intent path, the right panel shows:

- The intent applied.
- The assumptions made.
- The factors changed.

This is useful for beginners because it explains why the generator selected certain modules.

If you manually change a module afterward, the intent summary disappears and the selection becomes `Custom`.

## 31. Read Consequence Feedback

The `Because you selected this` panel translates legal modules into practical outcomes.

It is split into:

- `Allowed`
- `Blocked`
- `Required`
- `Review before use`

Read this before reading the legal text.

It helps answer the beginner question: "What does this variant actually do?"

## 32. Read Legal-Risk Badges

Legal-risk badges highlight important review themes.

Examples include:

- Source-available warning.
- Patent review warning.
- Patent add-on mismatch.
- AI/commercial boundary.
- Field-of-use restriction.
- Education scope ambiguity.
- Hosting/network mismatch.
- Jurisdiction and enforceability review.
- Community core with commercial override.
- Metadata incomplete.
- High restriction density.

Badges are not necessarily errors. They are signals that a human should understand the policy boundary before publishing.

## 33. Understand Preset Drift

Preset drift compares your current custom variant to the nearest golden preset.

It shows:

- The nearest preset.
- How many categories differ.
- The preset value.
- The current value.
- The review impact of each difference.

If drift is zero, you match a canonical preset.

If drift is high, you are making a more custom license. That may be fine, but it will require more review and explanation.

## 34. Use Export Artifacts

The export section produces practical files and snippets for real repositories.

### Copy LICENSE

Copies the full generated legal text.

Use this for your top-level `LICENSE` file.

### Copy NOTICE

Copies the `NOTICE` artifact when attribution or branding modules make a notice useful or required.

If no notice is needed, the app marks `NOTICE` as optional.

### Copy Human Deed

Copies the plain-English summary of the selected PLF variant.

Use this in documentation, onboarding, or legal review packets.

### Copy SPDX Header

Copies a custom SPDX identifier:

```text
SPDX-License-Identifier: LicenseRef-PLF-1.0-...
```

Use this in source files until the relevant PLF variant has formal SPDX-list treatment.

### Copy package.json Snippet

Copies npm-compatible custom license metadata:

```json
{
  "license": "SEE LICENSE IN LICENSE"
}
```

Use this for JavaScript packages with custom or unlisted license text.

### Copy README License Section

Copies a ready-to-paste README section describing the license variant.

Use it to make your repository's license posture obvious.

### Copy Registry Entry

Copies a JSON registry entry with:

- PLF version.
- Generator version.
- Variant code.
- SHA-256 hash.
- Hash input.
- Timestamp.
- Preset base.
- Drift count.
- SPDX license ref.
- Metadata.

Use it when you want machine-readable tracking for exact generated text.

### Copy Contributor Policy

Copies a starter contributor policy.

Use it for contributor-heavy projects so inbound contribution expectations are explicit.

### Copy Commercial Exception Notice

Copies a starter notice for separate commercial, hosted-service, AI-training, trademark, patent, or other permissions outside the default PLF variant.

Use it when you expect to sell exceptions or grant written permissions.

### Copy Review Summary

Copies a compact review summary with legal-risk badges, review findings, SHA-256 hash, preset drift, and scenario preview.

Use it for legal review, issue discussion, or release notes.

### Download Buttons

The generator can download:

- `LICENSE`
- `NOTICE`
- `README-license-section.md`
- `plf-registry-entry.json`
- `CONTRIBUTING-LICENSE.md`
- `COMMERCIAL-EXCEPTION.md`

Use downloads when you want ready-made files instead of copied snippets.

### Print Review Summary

This opens a printable review summary.

If popup printing fails, the app falls back to copying the review summary.

Use it for counsel, compliance, procurement, or stakeholder review.

## 35. Understand Export Locking

Some combinations produce blocked findings.

When blocked findings exist, the app locks exports until you explicitly acknowledge that the variant is custom and legal-review-required.

This acknowledgement does not make the license safe.

It prevents accidental export of a hard contradiction.

## 36. Watch The Legal Text Hash

The export panel shows a SHA-256 hash of the exact generated `LICENSE` text.

Use this hash to pin a canonical generated artifact.

If the legal text changes after you copied or downloaded it, the app shows a stale-export warning.

When publishing a final variant, always re-copy or re-download after the last edit.

## 37. Use Source Headers

The source headers section gives SPDX-style comments for common languages:

- JS / TS
- Python
- HTML
- CSS
- Markdown
- Shell

Use these at the top of source files when appropriate.

The header points to the custom `LicenseRef-PLF-1.0-...` identifier, but the full corresponding license text still belongs in the repository.

## 38. Read SPDX Interoperability

The SPDX section explains the current practical pattern:

- Use a custom `LicenseRef-...` source header.
- Include the full generated `LICENSE` text.
- Use `"license": "SEE LICENSE IN LICENSE"` for npm-style metadata.

This is important because PLF variants are generated custom identifiers, not currently standard SPDX license-list IDs.

## 39. Read Clause Lineage

Clause lineage explains inspiration, not compatibility.

The generator includes notes such as:

- Warranty and liability language follows Apache-style patterns.
- Network reciprocity is inspired by AGPL-style remote-user source rights.
- File-difference notices are inspired by MPL-style change notices.
- The presentation model follows the Creative Commons legal-code, human-deed, machine-readable pattern.

Inspired by does not mean legally compatible with.

Use lineage notes to understand the drafting tradition behind a clause, not to assume license equivalence.

## 40. Read Review Findings

Review findings are grouped by severity.

### Blocked

Blocked findings mean the combination is structurally unsafe or contradictory enough that exports should not happen casually.

Examples:

- `P0` with `P4`.
- `S0` with network duties.
- `R0` with distribution-triggered duties.
- `M0` with derivative obligations.
- Education sub-scope modules without `ED`.
- Course sub-scope modules without `CE`.

### Conflict

Conflicts are combinations that may be valid only with careful explanation.

Example:

- Commercial use allowed with no resale.

This can be valid if commercial services are allowed but selling the work itself is blocked.

### Redundancy

Redundancies are overlapping or dormant modules.

Example:

- `BR` plus `WL` is intentionally layered.
- `P1` plus `P4` may overlap because `P1` already has a patent aggression termination hook.

Redundancy is not always bad. Sometimes it is deliberate emphasis.

### Review Risk

Review risks are valid but subtle combinations.

Example:

- AI restrictions with commercial use.
- Ethical field-of-use limits.
- Education permissions with course-extraction restrictions.
- High restriction density.

### Helpful Note

Helpful notes remind you about non-error context.

Example:

- Third-party dependencies keep their own license terms.
- Custom variants should be reviewed even when they are near a preset.

## 41. Read Scenario Preview

Scenario preview explains likely outcomes for common real-world situations:

- A company uses the work internally.
- A SaaS clone hosts the work publicly.
- An AI lab scrapes the work for model training.
- A school uses the work in class.
- A company sells a modified fork.
- A proprietary product includes PLF-covered code.

Each scenario is marked as:

- `Allowed`
- `Blocked`
- `Needs review`

Use this section to sanity-check whether the license matches your intent.

## 42. Read License Family Comparison

The comparison panel situates PLF against familiar families:

- MIT
- Apache-2.0
- GPL / AGPL
- Elastic / BSL-style source-available
- Selected PLF variant

Use it for orientation only.

PLF is not automatically compatible with those licenses just because a clause was inspired by a familiar pattern.

## 43. Read Compatibility Snapshot

The compatibility snapshot gives rough ecosystem guidance for:

- MIT / BSD codebases.
- Apache-2.0 codebases.
- GPL / AGPL codebases.
- Proprietary internal use.
- Proprietary distributed products.
- SaaS products.
- AI company use.

Statuses include:

- Generally low friction.
- Case by case.
- Usually possible with scope review.
- Constrained / review required.
- Restricted / review required.
- High review burden.

Use this before mixing PLF-covered work with other projects or distribution models.

## 44. Read The Generated Legal Text

The bottom of the right panel is the generated legal text.

It includes:

- Title and variant code.
- Work metadata.
- Acceptance language.
- Human-readable deed.
- Review-sensitive flags.
- Definitions.
- Core grant.
- Conditions and specific restrictions.
- General provisions.

The legal text is the normative artifact. The deed, badges, and previews help humans understand it, but the generated legal text controls.

## 45. Understand Definitions

The generated license defines key terms including:

- `License`
- `Licensor`
- `Contributor`
- `Contribution`
- `Legal Entity`
- `You` or `Licensee`
- `Licensed Rights`
- `Work`
- `Derivative Work`
- `Source`
- `Object`

Do not skip definitions. Many modules depend on these terms.

## 46. Use A Safe Beginner Workflow

If you are new to PLF, use this sequence:

1. Pick the closest intent path.
2. Fill project metadata.
3. Read `Because you selected this`.
4. Check legal-risk badges.
5. Check preset drift.
6. Read review findings.
7. Read scenario preview.
8. Adjust modules only if the outcome is wrong.
9. Re-check badges and findings.
10. Export only after metadata and blocked findings are handled.

## 47. Example: Protect Against AI Training

Goal:

```text
Allow normal commercial reuse, but block model training.
```

Steps:

1. Choose `I do not want AI companies scraping my work`.
2. Fill metadata.
3. Confirm AI module is `NT - No AI Training`.
4. Confirm commercial module is `MC - Commercial Allowed`.
5. Read the AI/commercial legal-risk badge.
6. Check scenario preview for "An AI lab scrapes the work for model training".
7. Export `LICENSE`, README section, SPDX headers, and registry entry.

Use this when your boundary is commercial reuse yes, AI training no.

## 48. Example: Stop SaaS Clones

Goal:

```text
Let people inspect and adapt the work, but stop public hosted clones.
```

Steps:

1. Choose `I do not want someone wrapping this as a hosted clone`.
2. Confirm hosting is `S0 - No Hosted Service`.
3. Confirm network reciprocity is `No Network Reciprocity Module`.
4. Confirm resale is `NR - No Resale`.
5. Confirm branding has `BR` and optionally `WL`.
6. Read the hosting/network mismatch badge if present.
7. Export after blocked findings are clear.

Use this when SaaS cloning is the main threat.

## 49. Example: Start From A Preset

Goal:

```text
Use a stable named variant with less custom review.
```

Steps:

1. Choose `PLF-Balanced`.
2. Fill metadata.
3. Check preset drift.
4. If drift is zero, you are still on the preset.
5. Export `LICENSE`.
6. Keep the registry entry and SHA-256 hash with your release notes.

Use this when you want a recognizable review anchor.

## 50. Common Beginner Mistakes

### Calling Every PLF Variant Open Source

Many PLF variants are source-available, not OSI-open-source.

If commercial use, AI training, SaaS, ethics, resale, or field-of-use limits are active, avoid calling the variant open source without review.

### Forgetting Metadata

Do not publish placeholder project, licensor, contact, year, or project URL fields.

### Selecting Network Duties While Blocking Hosting

If `S0` blocks hosted use, network duties like `N1` through `N5` usually become impossible or misleading.

### Selecting Derivative Duties While Blocking Modifications

If `M0` blocks modification, derivative duties like `FD`, `MN`, `SA`, `SD`, and `OC` usually do not have a trigger.

### Selecting Distribution Duties While Blocking Redistribution

If `R0` blocks redistribution, distribution-triggered duties usually become dormant or contradictory.

### Treating P4 As A Patent Grant

`P4` is a defensive add-on. It needs `P1`, `P2`, or `P3`.

### Exporting Before The Last Change

If you changed a module after copying the license, re-copy or re-download the artifacts.

The app warns when exported text is stale.

### Forgetting Dependencies

PLF applies to your work.

It does not automatically relicense dependencies, assets, or inbound contributions under other terms.

## 51. What To Put In A Repository

For a real PLF-covered project, include:

- Top-level `LICENSE` generated by PLF.
- `NOTICE` if generated or required.
- README license section.
- SPDX headers in source files where useful.
- `package.json` metadata if relevant.
- Contributor policy if you accept outside contributions.
- Commercial exception notice if you sell separate permissions.
- Registry entry or release note with the exact SHA-256 hash.

## 52. When To Ask For Legal Review

Ask for review when:

- Money, patents, trademarks, or enterprise adoption matter.
- You use ethical field-of-use restrictions.
- You block AI training but allow commercial use.
- You block SaaS but allow client work or named-customer hosting.
- You mix PLF-covered work with GPL, AGPL, Apache-2.0, or proprietary code.
- You rely on education, certification, or course-extraction boundaries.
- You want the license to be canonical, hash-pinned, and publicly relied upon.

## 53. Final Publishing Checklist

Before publishing:

- Metadata is complete.
- The selected variant matches your intent.
- There are no unhandled blocked findings.
- Preset drift is understood.
- Scenario preview matches your expectations.
- The generated `LICENSE` has been re-copied after the final edit.
- The SHA-256 hash is recorded if you need canonical tracking.
- Dependencies and contributor terms are reviewed separately.
- The README accurately describes the selected PLF variant.

Once those are done, your PLF variant is ready to publish as a drafted artifact.
