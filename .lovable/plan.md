
# Generate MOA Page Images with Business Person Focus

## Overview
Generate 5 professional images for the MOA landing page, all featuring business professionals to maintain consistency with Keylink Corp's premium corporate aesthetic and Navy (#002C4D) / Gold (#C7A763) brand palette.

---

## Images to Generate

### 1. MOA Hero Image (Replace existing)
**File:** `src/assets/moa-hero-professional.jpg`

**Prompt:**
Professional Middle Eastern business consultant in navy suit reviewing legal documents at modern office desk, Memorandum of Association papers with gold notary seal visible, warm ambient lighting, corporate legal setting, shallow depth of field, high-end business photography style

**Purpose:** Main hero visual showing a professional reviewing MOA documents

---

### 2. MOA Team Collaboration Image (New)
**File:** `src/assets/moa-team-collaboration.jpg`

**Prompt:**
Diverse team of 3-4 business professionals collaborating around conference table reviewing legal documents, modern Bahrain office interior, navy blue and gold color accents, natural light from windows, professional corporate photography, warm and inviting atmosphere

**Purpose:** For the "Why Choose Keylink" section to show the legal team at work

---

### 3. Testimonial Portrait - Sarah M. (Tech Startup Co-Founder)
**File:** `src/assets/testimonial-sarah.jpg`

**Prompt:**
Professional headshot portrait of confident Middle Eastern businesswoman in her 30s, slight smile, navy blazer, neutral background with soft lighting, corporate portrait photography style, clean and modern look

**Purpose:** Testimonial author for tech startup co-founder quote

---

### 4. Testimonial Portrait - Ahmed K. (Managing Director)
**File:** `src/assets/testimonial-ahmed.jpg`

**Prompt:**
Professional headshot portrait of distinguished Arab businessman in his 40s, well-groomed beard, wearing navy business suit with subtle gold tie accent, confident expression, neutral gray background, executive portrait photography style

**Purpose:** Testimonial author for consulting firm managing director quote

---

### 5. Testimonial Portrait - James L. (Branch Manager)
**File:** `src/assets/testimonial-james.jpg`

**Prompt:**
Professional headshot portrait of British businessman in his 40s, clean-shaven, navy suit with white shirt, friendly professional smile, neutral background, corporate headshot photography style

**Purpose:** Testimonial author for UK company branch manager quote

---

## Technical Specifications

| Image | Dimensions | Format | Model |
|-------|-----------|--------|-------|
| MOA Hero | 1024x768 | JPG | flux2.dev |
| Team Collaboration | 1024x768 | JPG | flux2.dev |
| Sarah Portrait | 512x512 | JPG | flux2.dev |
| Ahmed Portrait | 512x512 | JPG | flux2.dev |
| James Portrait | 512x512 | JPG | flux2.dev |

---

## Files to Modify

| File | Change |
|------|--------|
| `src/assets/moa-hero-professional.jpg` | Replace with new generated image |
| `src/assets/moa-team-collaboration.jpg` | Create new file |
| `src/assets/testimonial-sarah.jpg` | Replace with new generated image |
| `src/assets/testimonial-ahmed.jpg` | Replace with new generated image |
| `src/assets/testimonial-james.jpg` | Replace with new generated image |
| `src/pages/services/MOA.tsx` | Update to use new team collaboration image |

---

## Implementation Steps

1. Generate all 5 images using AI image generation API
2. Save images to appropriate asset locations
3. Update `MOA.tsx` to import the new `moa-team-collaboration.jpg` instead of `cr-team-collaboration.jpg`
4. Verify all images display correctly on the page

---

## Brand Consistency Notes

- All images maintain Navy (#002C4D) and Gold (#C7A763) color accents
- Business professional attire throughout
- Modern corporate office environments
- High-quality photography aesthetic
- Diverse representation matching the international client base
