
Goal
- Update the selected “Benefits” section (CompanyFormationConsultancyLanding.tsx around line ~422) to a minimal, modern look by:
  1) Replacing the current photo background + heavy overlays with a simple SectionBackgroundOverlay pattern.
  2) Adding a unique icon to each benefits card (different icon per card).

What I found in your code
- The selected element is the Benefits section background wrapper in:
  - src/pages/landing/CompanyFormationConsultancyLanding.tsx (around lines 412–424)
- It currently uses:
  - <img src={benefitsBgImage} ... />
  - overlay-navy-vertical + overlay-gold-radial-center + noise-texture
- The cards inside Benefits are rendered from a string array and currently show a Check icon on every card.

Planned changes (no new dependencies)
1) Make the Benefits section background minimal (no photo)
   - Remove the background <img> and the 3 overlay divs used for the photo treatment.
   - Add <SectionBackgroundOverlay> as the section background layer.
   - Use a subtle variant for minimal design, likely:
     - variant="grid-lines" (very clean, modern)
     - opacity tuned down (around 0.35–0.55)
     - masked enabled to fade edges (already supported by SectionBackgroundOverlay)
   - Keep the section readable with a simple base background:
     - add something like bg-secondary/30 (or keep current section styles if already good)
   - Result: clean pattern overlay, minimal visual noise, modern feel.

2) Add icons per Benefits card (different icon per card)
   - Change the benefits array from just strings to objects:
     - { label: string, description: string, icon: LucideIconComponent }
   - Import a small set of Lucide icons at the top of the file (examples that match the text):
     - “Clear, step-by-step guidance” → Route / ListChecks
     - “Transparent expectations on timelines” → Clock
     - “Practical document checklists” → FileText / ClipboardCheck
     - “Fast response and coordination” → MessageCircle / Headset
     - “Experience across many activities” → Briefcase / Layers
     - “Compliance-first planning” → ShieldCheck
     - “Advice tailored to your goals” → Target
   - Replace the current <Check .../> per card with <item.icon .../>.
   - Keep icons minimal:
     - Put the icon in a small rounded badge (e.g., 36–40px container)
     - Use subtle background (bg-white/10 or bg-primary-foreground/10 depending on the section’s text color)
     - Keep stroke and size consistent (size 18–20)

3) Make the cards themselves more minimal (still readable on patterned background)
   - Keep existing lp-glass-card if it already matches your design system, but simplify:
     - reduce border intensity, reduce shadow, remove extra glow if any
     - ensure consistent padding and spacing
   - If the section text remains “primary-foreground” (light text), ensure cards remain a subtle “glass” on top:
     - avoid heavy blur; prefer simple border + translucent background for performance and cleanliness.

Edge cases / safety checks
- Ensure the icons are statically imported (not dynamic icon maps) to avoid Lucide typing issues and keep bundle tree-shakeable.
- Verify contrast:
  - If the Benefits heading uses text-primary-foreground, background should remain dark enough or switch the text back to normal foreground on a light section.
- Confirm mobile spacing:
  - Cards should remain 1-column on small screens, current grid already supports it.

Files to change
- src/pages/landing/CompanyFormationConsultancyLanding.tsx
  - Benefits section background block (remove photo background, add SectionBackgroundOverlay)
  - Benefits array + mapping (add per-card icons, adjust card layout slightly)

Quick visual target (what you’ll see after)
- Benefits section: clean “modern minimal” pattern background, no large photo.
- Cards: consistent small icon badge + short title + optional concise supporting line, less “busy” feel.

After implementation testing checklist
- Load the landing page and scroll to Benefits
- Confirm:
  - Background is pattern-only (no image), looks minimal
  - Icons show correctly on each card
  - Readability is good on desktop and mobile
  - No console errors
