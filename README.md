# USThing Web Technical Test 2026 — USTFood

Prototype a food discovery experience for HKUST students. This repository is a **starter**, not a solution.

You have **7 days**. Stack: **Next.js**.

Live design reference: [app.usthing.xyz](https://app.usthing.xyz)  
Primary colour: `#003366`

## What you are building

**USTFood** should help a student quickly answer: *where should I eat, and what should I get?*

### Minimum (required)

1. **Discover** food options around HKUST: canteens, cafés, restaurants, takeaway, and nearby alternatives.
2. **Compare** options with useful facts: cuisine, price range, location, opening hours, estimated waiting time, and ratings.
3. **Inspect** a venue in more detail, including a menu (or an equally clear substitute).
4. **Review / rate / feedback**, even if it is a realistic mock with no real backend.

User experience counts as much as features. A cluttered tool that technically “has everything” is weaker than a calm product students would actually open between classes.

### Out of scope

You do **not** need a real backend, authentication, payments, or a production ordering system. Mock data is expected and encouraged.

### Extra features (optional, judged)

Go beyond the minimum if it makes USTFood more useful. Ideas from the brief:

- Search, filters, sorting
- Map or building-based discovery
- Popular dishes, photos, meal deals, availability
- Favorites, saved venues, recently viewed

Only add extras you can defend as feasible for a real USThing product. Live canteen seating counts, kitchen cameras, and full payment flows are examples of features that look impressive and fall apart under questions.

## How this starter helps — and what we still grade

| Included | Still your job |
| --- | --- |
| Next.js app that runs | Information architecture and UI |
| USThing colours, type, sidebar shell | Making it feel like a finished product |
| Type suggestions | Extending or replacing the data model |
| 3 sample venues, 2 sample reviews | A catalogue that feels like campus |
| Stub `/venues/[id]` route | Detail, menu, and review experiences |
| This brief | Trade-offs, extras, and polish |

You may throw the starter away and start from `create-next-app` if you prefer. Matching USThing’s dashboard look still matters.

Suggested layout if you keep this repo:

```text
src/app/                 routes
src/components/          UI you own
src/lib/types.ts         data shapes (optional to keep)
src/lib/sample-data.ts   expand this
docs/DESIGN.md           dashboard tokens
```

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Create a branch `LASTNAME-FirstName-SID` and push only that branch, not `main`.

## Suggested week (not mandatory)

Use this if you want a pacing guide. Skipping around is fine.

**Day 1 — Scope.** Walk campus (or use memory / maps). List 8–15 places students actually use. Write a one-line job for the product, e.g. “Decide lunch in 30 seconds before a 12:00 lecture.” Sketch two screens: browse and detail.

**Day 2 — Data.** Expand `src/lib/sample-data.ts`. Include mix of kinds, prices, and locations (Academic Building, Shaw, LG7, nearby Hang Hau / Clear Water Bay Road, etc.). Keep wait times honest: peak vs quiet is more useful than a fake live sensor.

**Day 3 — Discovery.** Replace the home canvas. Students should scan, filter or sort, and compare without reading a novel. Empty and no-result states count.

**Day 4 — Detail + reviews.** Venue page with hours, location, ratings, menu, and a mock review flow that updates the UI (local state or mock API is enough).

**Day 5 — Extra feature.** Pick **one** extra you can finish well. Search done properly beats five half-built gadgets.

**Day 6 — USThing fit.** Light/dark, mobile, Poppins, navy, sidebar language. Compare against [app.usthing.xyz](https://app.usthing.xyz). Remove starter placeholder copy.

**Day 7 — Ship.** README for *your* prototype (what you built, how to run, what is mock, why extras are feasible). Meaningful commits. Click through as a rushed student.

## Git and documentation

We read history and structure, not only the final demo.

- At least **3 meaningful commits**, each a logical unit
- Messages that explain the change
- Comments where intent is not obvious
- A short project README (you can extend this file) covering setup and product decisions

## What we grade

- Task completion of the minimum
- Clean workflow and organisation
- Meaningful commits, comments, documentation
- Stylistic and architectural choices
- Smooth, intuitive UX
- Relevance and execution of extra features
- Feasibility of extras under interview questions

## Integrity

Do not share this test. You may use the internet, docs, and AI tools; the submission must be work you can explain. If you use AI, you should still own the product decisions.

## Submission

Submit a URL to a Git repository (GitHub or similar) that we can clone and run.

Even a partial prototype is better than silence. Submit what you have.
