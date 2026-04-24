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
- registry entry containing the variant code and SHA-256 hash

## Canonical Preset Registry

The canonical PLF 1.0 preset registry lives at:

```text
registry/plf-1.0-presets.json
```

Custom variants should generate their own registry entry from the UI and store it with the consuming project.
