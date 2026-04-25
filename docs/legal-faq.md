# Dear Corporate Legal

This page is written for legal and compliance reviewers evaluating the Prism License Framework.

## Executive Summary

PLF is a modular source-available licensing framework. It is designed to reduce the gap between permissive licenses and bespoke proprietary terms by assembling familiar licensing patterns into reviewable combinations. The project intentionally pushes most users toward a small set of canonical presets so legal teams can pre-approve recognizable variants.

## 1. Is PLF trying to replace familiar open-source doctrine with something novel?

No. The framework is modular, but the major concepts are familiar:

- Apache-style notice and disclaimer patterns
- AGPL-style concern for network delivery
- MPL-style change-disclosure instincts
- Creative Commons-style presentation layers

The goal is not novelty for its own sake. The goal is structured reuse of familiar licensing ideas.

Familiar lineage does not mean license compatibility. A PLF variant must be reviewed on its actual generated text, active modules, and pinned hash.

## 2. What is the inbound / outbound posture?

That depends on the selected preset or variant.

- Inbound: permissive dependencies are usually the easiest fit
- Outbound: the main review points are redistribution, SaaS, resale, AI, branding, and reciprocal obligations

For most organizations, the fastest path is to review the canonical presets rather than every possible generated variant.

## 3. Does PLF “infect” proprietary code like GPL is sometimes said to?

PLF is not one single reciprocity model. Some variants are relatively low-friction. Others deliberately impose stronger outbound conditions.

The correct question is not “Does PLF infect?” It is:

> Which modules are active, and what do they require for redistribution, hosting, derivatives, and source disclosure?

That is why the compatibility matrix should be reviewed alongside the selected variant code.

## 4. How should we think about patents?

Patent treatment is configurable. Some variants provide no explicit patent grant. Others provide limited or broader grants with retaliation or defensive-suspension mechanics. `P4` is now treated as a defensive add-on, not a standalone patent posture, so it should be paired with `P1`, `P2`, or `P3`.

Patent review should focus on:

- whether a patent license is granted at all
- whether patent retaliation is triggered by offensive claims
- whether defensive suspension is layered on top of an actual patent grant or non-assert
- whether the business expects Apache-style patent comfort

The UI should treat no-patent and no-explicit-patent variants as high-friction for enterprise adoption.

## 5. What about warranty disclaimer and limitation of liability?

PLF uses familiar risk-allocation language in the style of well-known permissive licenses. The objective is that legal teams recognize the structure immediately instead of treating it as bespoke novelty.

## 6. What about severability and jurisdiction?

PLF includes severability language and an entire-agreement style clause in the base text. Teams using PLF in significant commercial settings should still decide whether they want a jurisdiction rider, governing-law rider, or enterprise amendment outside the default text.

## 7. How should we review this efficiently?

Recommended process:

1. Start with a canonical preset.
2. Compare the preset against your inbound dependency stack.
3. Review outbound posture for internal use, distributed product, and hosted service separately.
4. Review AI, branding, patent, and compliance modules explicitly.
5. If the team wants a custom variant, treat it as an exception rather than the default path.
6. Pin the exact generated `LICENSE` text and registry hash.

## 8. What is the recommended adoption path?

For organizations that want low review overhead:

- pre-approve PLF-Open, PLF-Balanced, and PLF-Protected
- discourage ad hoc one-off variants except where business needs justify the extra review
- require any custom variant to include a human-readable deed and compatibility review
- require custom variants to store a registry entry with the generated text hash

## 9. What is the versioning policy?

PLF variant codes identify selected modules, but the exact legal text should still be pinned by hash. Canonical preset text should not change silently. Material clause changes should publish a new hash and, where necessary, a new PLF version.

## 10. Is this legal advice?

No. PLF is a drafting and policy framework. Final enforceability, jurisdictional treatment, and enterprise risk posture should be reviewed by qualified counsel.
