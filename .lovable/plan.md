

## Hero Section Headline Typography Improvement

Standardize and improve hero headline typography across all service pages to handle varying text lengths gracefully while maintaining visual consistency.

---

### Problem Identified

Current hero sections have inconsistent headline styling:

```text
Current Issues:
- Fixed font sizes don't adapt to text length
- Long headlines overflow or wrap awkwardly
- Different pages use different font size scales
- No max-width constraints on headline containers
- Accent line (underline) can overflow on longer text
```

---

### Hero Components to Update

| Component | Current Font Size | Issue |
|-----------|------------------|-------|
| WLLHero | 44px / 52px / 60px | Long "Build Your Partnership in 5-7 Days" overflows |
| SPCHero | 44px / 52px / 60px | Works well (short text) |
| LiquidationHero | 44px / 52px / 60px | "Avoid BHD 5,000+ in Penalties" slightly long |
| LeaseHero | 44px / 52px / 60px | "Same-Day Processing - 100% Compliant" very long |
| CRHero | 4xl / 5xl / 3.75rem | Inconsistent scale |
| PROHero | 4xl / 5xl / 3.25rem | Different scale |
| VisaServicesHero | 4xl / 5xl / 46px | Mixed units |
| ManagementConsultingHero | 4xl / 5xl / 6xl | Single long headline wraps poorly |

---

### Solution: Standardized Responsive Typography

**Unified Font Scale:**
```text
Mobile (base): text-[32px] or text-3xl
Tablet (md):   text-[40px] or text-4xl  
Desktop (lg):  text-[48px]
Large (xl):    text-[52px]
```

**Key Changes:**

1. **Consistent Base Scale**
   - Use `text-[32px] md:text-[40px] lg:text-[48px] xl:text-[52px]` for all headlines
   - Slightly smaller than current to prevent overflow

2. **Clamp-Based Scaling (Alternative)**
   - Use CSS `clamp()` for fluid typography
   - `font-size: clamp(2rem, 5vw, 3.25rem)`

3. **Max-Width Constraints**
   - Add `max-w-lg` or `max-w-xl` to headline containers
   - Prevents excessively wide headlines on large screens

4. **Improved Line Handling**
   - Use `text-balance` CSS property for natural line breaks
   - Add `hyphens-auto` for long words

5. **Accent Line Fix**
   - Change from `w-full` to `w-auto max-w-full`
   - Prevents underline from overflowing container

---

### Implementation Details

**Files to Update:**

1. `src/components/services/wll/WLLHero.tsx`
2. `src/components/services/spc/SPCHero.tsx`
3. `src/components/services/liquidation/LiquidationHero.tsx`
4. `src/components/services/lease/LeaseHero.tsx`
5. `src/components/services/cr/CRHero.tsx`
6. `src/components/services/pro/PROHero.tsx`
7. `src/components/services/visa/VisaServicesHero.tsx`
8. `src/components/services/management-consulting/ManagementConsultingHero.tsx`
9. `src/components/home/Hero.tsx`

---

### Headline Structure Pattern

**Before (problematic):**
```tsx
<h1 className="text-[44px] md:text-[52px] lg:text-[60px] font-bold tracking-tight leading-[1.1] mb-6">
  <span className="block text-primary">WLL Company Formation</span>
  <span className="block text-primary">in Bahrain</span>
  <span className="block text-gold relative inline-block">
    Build Your Partnership in 5-7 Days
    <span className="absolute -bottom-1 left-0 w-full h-2 bg-gold/20..." />
  </span>
</h1>
```

**After (improved):**
```tsx
<h1 className="text-[32px] md:text-[40px] lg:text-[48px] xl:text-[52px] font-bold tracking-tight leading-[1.15] mb-6">
  <span className="block text-primary">WLL Company Formation</span>
  <span className="block text-primary">in Bahrain</span>
  <span className="block text-accent relative">
    <span className="inline whitespace-normal">Build Your Partnership in 5-7 Days</span>
    <span className="absolute -bottom-1 left-0 right-0 h-2 bg-accent/20 rounded-full" />
  </span>
</h1>
```

---

### Typography Scale Comparison

```text
Current (inconsistent):
┌─────────────────────────────────────────────────────────┐
│ WLLHero:     44px → 52px → 60px                         │
│ CRHero:      ~36px → ~48px → ~60px (tailwind classes)   │
│ PROHero:     ~36px → ~48px → 52px                       │
│ VisaHero:    ~36px → ~48px → 46px                       │
└─────────────────────────────────────────────────────────┘

Proposed (consistent):
┌─────────────────────────────────────────────────────────┐
│ All Heroes:  32px → 40px → 48px → 52px                  │
│              (mobile → tablet → desktop → large)        │
└─────────────────────────────────────────────────────────┘
```

---

### Additional Improvements

1. **Leading (Line Height)**
   - Increase from `leading-[1.1]` to `leading-[1.15]` or `leading-tight`
   - Gives multi-line headlines more breathing room

2. **Tracking (Letter Spacing)**
   - Keep `tracking-tight` for professional look
   - Slightly tighter on larger sizes

3. **Text Balance**
   - Add Tailwind's `text-balance` class where supported
   - Creates more even line lengths

4. **Container Constraints**
   - Wrap headlines in `max-w-[600px]` or similar
   - Prevents overly long lines on wide screens

---

### Benefits

- Consistent typography scale across all hero sections
- Headlines adapt gracefully to varying content lengths
- Improved mobile experience with smaller starting sizes
- Accent underlines don't overflow their containers
- Better line breaking with text-balance
- Maintainable single pattern for all heroes

