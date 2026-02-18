
Goal
- Restore the original landing page at **/company-formation-consultancy-bahrain** to the exact layout it had **just before the last change**, without making any new code edits in this chat turn.

What happened (why we’re doing this)
- You confirmed the **original (V1) route** is the one that’s broken.
- In this read-only mode, the correct way to undo unintended UI changes is to **revert the project** using Lovable’s **History / Restore** feature (not by writing new code to “manually undo” it).

Restoration steps (recommended, fastest)
1) Open your project’s **History** view (or scroll the chat to find the most recent AI edit).
2) Locate the **last AI message/edit** that introduced the layout break (it will be one of the most recent messages where files were edited).
3) Click **Restore/Revert** on the message **immediately before** that breaking change.
4) After restore completes:
   - Open **/company-formation-consultancy-bahrain** and confirm the layout is back to normal (desktop + mobile).
   - Also sanity-check that **/lp/company-formation-consultancy-v2** and **/lp/company-formation-consultancy-modern** still load.

How to pick the correct restore point (quick checklist)
- The correct “just before last change” version is the one where:
  - The hero section and header look like they used to (no unexpected nav/spacing changes)
  - The section order matches your original known-good layout
  - Mobile doesn’t have broken stacking/overflow

If the first restore point isn’t the right one
- Repeat the restore, but choose **one message earlier** in History until /company-formation-consultancy-bahrain matches the last known-good layout.
- Important: restoring archives later changes; you generally can’t “undo the revert” back to the newer state, so step back carefully one message at a time.

Open History from here
```xml
<lov-actions>
  <lov-open-history>View History</lov-open-history>
</lov-actions>
```

Validation after restore (what to test)
- Desktop:
  - Header looks correct
  - Hero layout correct
  - Sections in correct order
- Mobile:
  - No overlapping cards
  - Buttons visible and tappable
- End-to-end:
  - Calculator → continue → consultation flow still works
  - Calendly embed still loads on the booking section
