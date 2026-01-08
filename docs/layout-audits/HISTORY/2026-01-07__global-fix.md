# Layout Audit: Global Container & Alignment Fix

**Date:** 2026-01-07
**Route:** Global (app/globals.css)
**Trigger:** User report "the entire page is shifted to the right" + "looks like shit on mobile"

## Issues Found

| Severity | Issue | Root Cause |
|----------|-------|------------|
| P0 | Content left-aligned (shifted) with empty space on right | Tailwind v4 `.container` utility lacks automatic centering (`mx-auto`) by default. |
| P1 | Content touching edges on mobile (potential) | `container` utility didn't have explicit padding-inline override for v4. |

## Fixes Applied

1.  **Global CSS (`app/globals.css`)**:
    - Added `@layer utilities` block for `.container`.
    - Applied `@apply mx-auto px-4 md:px-6 lg:px-8;`.
    - This forces all containers to be centered and have proper padding.

## Verification
- `npm run build` passed.
- Fixed root cause of "shifted" layout (left alignment).
- Confirmed `overflow-x-hidden` on body prevents scrollbars if content slightly overflows.

## Next Steps
- User to verify visual result.
