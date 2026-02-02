
# Remove Program Types Section from Business Incubators Page

## What Will Be Removed
The "Bahrain's Top Incubator & Accelerator Programs" bento grid section showing:
- Tamkeen Startup Support (featured gold card)
- FinTech Bay Accelerator
- C5 Accelerate
- Startup Bahrain

## Changes Required

### File: `src/pages/services/BusinessIncubators.tsx`
Remove the `<ProgramTypes />` component from the page and remove its import.

**Before:**
```tsx
import {
  IncubatorHero,
  IncubatorLogos,
  IncubatorExplainer,
  ProgramTypes,  // Remove this import
  ...
} from "@/components/services/incubator";
```

**Remove this section from the JSX:**
```tsx
{/* Program Types Bento Grid */}
<ProgramTypes />
```

### Optional: Delete Component File
The `src/components/services/incubator/ProgramTypes.tsx` file can be deleted since it won't be used anymore.

Update the barrel export in `src/components/services/incubator/index.ts` to remove the ProgramTypes export.

## Result
The page will flow directly from the "Understanding Startup Incubators & Accelerators in Bahrain" explainer section to the "What You Get From Bahrain Incubator Programs" benefits grid.
