# PLF Versioning Policy

PLF license text must be treated as immutable once published for a specific variant and version.

## Policy

- `PLF-1.0` means the PLF 1.0 clause family and module vocabulary.
- Published canonical preset texts must not be silently rewritten.
- If legal text changes, publish a new hash and explain the change.
- If module semantics change materially, publish a new PLF version such as `PLF-1.1` or `PLF-2.0`.
- Users should pin the exact generated `LICENSE` text, variant code, and SHA-256 hash.

## Why This Matters

Two projects using the same PLF code should not end up with different legal text because the generator changed later. The variant code identifies the selected modules, while the hash pins the exact text that was generated.

## Recommended Pinning Pattern

Include these in a project repository:

- top-level `LICENSE`
- `SPDX-License-Identifier: LicenseRef-<variant>` headers where appropriate
- a README license section
- optional `NOTICE`
- registry entry containing the variant code, PLF version, generator version, hash method, SHA-256 hash, hash input, generation timestamp, preset base, and custom drift count

## Canonical Preset Registry

The canonical PLF 1.0 preset registry lives at:

```text
registry/plf-1.0-presets.json
```

Custom variants should generate their own registry entry from the UI and store it with the consuming project.

Registry entries must distinguish final hashes from placeholders:

- Use `status: "canonical"` only for finalized legal text with a real SHA-256 hash.
- Use `status: "draft"` and `legalTextHash: null` for preset entries that still need final text regeneration.
- Generated custom entries should record `hashInput: "exact LICENSE text UTF-8"` so another reviewer can reproduce the hash.

For this repository, regenerate canonical preset artifacts with `npm run generate:presets` and verify them with `npm run test:presets` before publishing.
