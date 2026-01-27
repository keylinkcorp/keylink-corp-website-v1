

# Remove Certificate Image Card from WhatIsCR Section

## Overview

Remove the certificate image card (lines 118-143) from the "What is Commercial Registration" section. This will leave only the Benefits Panel on the right side, creating a cleaner layout.

---

## Changes Required

### File: `src/components/services/cr/WhatIsCR.tsx`

**Remove:**
- Lines 118-143: The entire `motion.div` containing the certificate image and floating info card
- Line 15: The unused import `import crCertificateImage from "@/assets/cr-certificate-display.jpg"`
- Lines 33-36: The unused `imageReveal` animation variant
- Line 13: Remove `Sparkles` from lucide-react imports (only used in the removed card)

**Layout Adjustment:**
- The Benefits Panel will now be the only content on the right side
- The 2-column grid layout remains intact but will be simpler

---

## Technical Details

### Before (2 elements on right side):
```text
[Content Side]     [Certificate Image]
                   [Benefits Panel]
```

### After (1 element on right side):
```text
[Content Side]     [Benefits Panel]
```

---

## Code Changes Summary

| Line | Action | Description |
|------|--------|-------------|
| 13 | Modify | Remove `Sparkles` from imports |
| 15 | Delete | Remove `crCertificateImage` import |
| 33-36 | Delete | Remove `imageReveal` animation variant |
| 118-143 | Delete | Remove certificate image motion.div block |

**Total: 1 file modified**

