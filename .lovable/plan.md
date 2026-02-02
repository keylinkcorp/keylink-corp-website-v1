
# Add Coworking to Navigation & Replace Images

## Overview

This plan covers two tasks:
1. Add the coworking space service to the homepage services section
2. Guide you on replacing AI-generated images with real photos

---

## Task 1: Homepage Services Integration

### Current State
The homepage "Services" section displays 6 service cards. The "Workspace Solutions" card currently links to the Virtual Office page.

### Proposed Changes

**Option A: Update Existing Card**
Modify the "Workspace Solutions" card to better reflect coworking services:
- Change title from "Workspace Solutions" to "Coworking Space"
- Update description to focus on coworking
- Change link from `/services/virtual-office` to `/services/coworking-space`

**Option B: Add New Card (Recommended)**
Add a 7th card specifically for "Coworking Space" while keeping the existing "Workspace Solutions" card. This provides more visibility for both services.

### Implementation (Option B)

**File: `src/components/home/Services.tsx`**

Add a new service entry with the `Users` icon:

```text
{
  icon: Users,
  title: "Coworking Space",
  description: "Premium flexible workspaces in Manama with hot desks, private offices & meeting rooms. Join our thriving community.",
  href: "/services/coworking-space",
}
```

---

## Task 2: Navigation Verification

The coworking space is already correctly linked in the main navigation menu:
- **Location**: Workspace > Office Solutions > Co-working Space
- **URL**: `/services/coworking-space`

No changes needed here - navigation is already complete.

---

## Task 3: Replacing AI Images with Real Photos

### Images to Replace

The following 6 images need to be replaced with actual workspace photos:

| Current File | Used In | Recommended Photo |
|--------------|---------|-------------------|
| `hero-coworking.jpg` | Hero section, Gallery | Wide shot of main workspace area |
| `hot-desk.jpg` | Workspace Types, Gallery | Open desk area with people working |
| `private-office.jpg` | Workspace Types, Gallery | Enclosed private office space |
| `meeting-room.jpg` | Workspace Types, Gallery | Conference/meeting room setup |
| `lounge-kitchen.jpg` | Workspace Types, Gallery | Kitchen, lounge, or break area |
| `reception.jpg` | Gallery | Reception desk or entrance |

### How to Replace Images

You have two options:

**Option A: Upload via Chat (Easiest)**
1. Upload your real workspace photos directly in this chat
2. I will replace the AI-generated images with your photos

**Option B: Manual Replacement**
1. Name your photos exactly as listed above
2. Place them in `src/assets/coworking/`
3. The components will automatically use the new images

### Image Recommendations
- **Format**: JPG or WebP for better compression
- **Resolution**: 1920x1080 or higher for hero, 1200x800 for cards
- **Style**: Well-lit, professional photos showing real people working (if possible)
- **Orientation**: Landscape for all images

---

## Summary of Changes

| File | Change |
|------|--------|
| `src/components/home/Services.tsx` | Add new "Coworking Space" service card |
| `src/assets/coworking/*.jpg` | Replace with real photos (requires your upload) |

---

## Next Steps After Approval

1. I will add the new coworking service card to the homepage
2. You can then upload your real workspace photos, and I'll replace the AI-generated images
