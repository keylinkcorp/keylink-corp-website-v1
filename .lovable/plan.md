
Goal (confirmed)
- Make `/lp/company-formation-consultancy-modern` a 1:1 copy of the original page `/company-formation-consultancy-bahrain` (V1) in design, sections, header/footer, and mobile sticky bar.
- Do this using the “last-known-good” V1 layout (restore to just before the last breaking change), then copy that restored V1 into Modern.
- Keep Modern’s meta tags unique (canonical/robots/FAQ JSON-LD markers), even though the layout matches V1.

Why this is needed (what I found in code)
- `/company-formation-consultancy-bahrain` is implemented in `src/pages/landing/CompanyFormationConsultancyLanding.tsx` and uses:
  - `LandingHeader` + `LandingFooter`
  - More complex split-section layout (`SplitSection`, `EditorialImage`, multiple sections)
  - `MobileStickyConsultationBar`
- `/lp/company-formation-consultancy-modern` is currently implemented in `src/pages/landing/CompanyFormationConsultancyLandingModern.tsx` and (right now) matches V2 structure (uses `ConsultancyV2Header` + `ConsultancyV2Footer`, “outcome strip” sections, etc.), not V1.
- Therefore, the correct approach is:
  1) Restore V1 to the last-good state (so we have the correct V1 source to copy)
  2) Then overwrite Modern page component to match that restored V1 component structure and UI

Constraints / Important note
- You are requesting a true “restore” point (“just before last change”). The safest and most accurate way is to use Lovable’s History Restore first (so we’re copying the correct version, not today’s broken file).
- With Lovable’s message-based revert: restoring cannot be undone (later changes get archived). We will step back carefully.

Implementation steps (what I will do once we switch to implementation mode)
Phase A — Restore V1 (source of truth)
1) Open History and locate the last message/edit that broke `/company-formation-consultancy-bahrain`.
2) Click Restore on the message immediately before that breaking change.
3) Validate that V1 is back to the expected layout:
   - Desktop + mobile: header, hero, split sections, spacing, and CTA behavior
   - Check that calculator → continue → booking still works

Phase B — Copy restored V1 into Modern (target)
4) Update `src/pages/landing/CompanyFormationConsultancyLandingModern.tsx` to be a clone of the restored V1 page:
   - Use the same imports/components as V1:
     - `LandingHeader`, `LandingFooter`
     - `SplitSection`, `EditorialImage` and the same images
     - Same section order and content blocks
     - Same `MobileStickyConsultationBar` behavior
     - Same CTA scroll targets/IDs (e.g., `top`, `book`, and any others V1 uses)
   - Keep Modern-specific meta unique:
     - `data-lp="company-formation-consultancy-modern"` markers
     - canonical should remain Modern URL (e.g. `/lp/company-formation-consultancy-modern`)
     - robots noindex follow (as you’ve been using)
     - FAQ JSON-LD script should keep a Modern-specific `data-lp` attribute to avoid collisions

5) Ensure Modern does not accidentally keep V2-only pieces:
   - Remove `ConsultancyV2Header`, `ConsultancyV2Footer`, V2 outcome strip sections, etc.
   - Make sure the hero props match the V1 copy exactly (V1 uses `CompanyFormationHeroMontage` too, but with V1 copy/CTAs)

Phase C — QA (must pass)
6) Side-by-side QA checklist (V1 vs Modern)
   - Open `/company-formation-consultancy-bahrain` and `/lp/company-formation-consultancy-modern`:
     - Confirm the header/nav looks identical (LandingHeader)
     - Confirm hero, typography, spacing identical
     - Confirm all sections and order match (SplitSections, services accordion, testimonials, booking, FAQs, etc.)
     - Confirm mobile sticky consultation bar matches
7) Regression checks
   - Confirm `/lp/company-formation-consultancy-v2` is unchanged
   - Confirm other landing routes still render correctly

Files involved
- Restore via History: affects whatever file(s) were changed in the breaking message (likely includes `src/pages/landing/CompanyFormationConsultancyLanding.tsx` and possibly shared components).
- Code change for the copy step (post-restore):
  - `src/pages/landing/CompanyFormationConsultancyLandingModern.tsx` (primary)
  - Potentially shared assets/import paths if Modern currently references V2-only assets

Expected outcome
- `/company-formation-consultancy-bahrain` returns to its last-known-good original layout (by restore).
- `/lp/company-formation-consultancy-modern` becomes an exact replica of that restored V1 layout and behavior, while keeping Modern’s SEO/meta identifiers unique.

Risks / how we mitigate
- Risk: Restoring in History might also roll back some unrelated recent improvements.
  - Mitigation: Restore only one message back at a time; immediately verify the target page; if too much is lost, restore a different (closer) message.
- Risk: V1 uses several shared components (SplitSection / images). If any of those were altered in the breaking change, they will be fixed automatically by the restore before we copy.

User action needed before I implement
- Perform the Restore step first (History → restore to just before the breaking change). After the restore is done and you confirm `/company-formation-consultancy-bahrain` looks correct again, I will clone that restored V1 layout into `/lp/company-formation-consultancy-modern` as described above.
