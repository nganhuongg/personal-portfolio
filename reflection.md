# Reflection Log

---

## 2026-04-02 — Single-page scrollable layout with interactive toggles

### What was done
Redesigned the portfolio from a multi-page navigation structure into a single-page scrollable layout with interactive expand/collapse components.

**Specific changes:**
- `theme.css` — Added `scroll-behavior: smooth` to the `html` element so anchor links animate.
- `Layout.tsx` — Nav items now use anchor-scroll links (`#about`, `#projects`, etc.) instead of route links. A `SectionNavLink` component handles two cases: on the home page it calls `scrollIntoView`, on other pages it navigates to `/` first, then scrolls after a short timeout.
- `Home.tsx` — Major rewrite. Each section got an `id` attribute. Projects section now uses `ProjectToggleCard` (collapsed = title + hashtag tech tags, expanded = description + action links). Achievements use `AchievementToggleCard` (collapsed = title + event, expanded = description + algorithm tags). A Skills section was added inline. Experience was expanded to all 3 entries.
- `Projects.tsx` — Replaced the vertical scroll list with a tab interface. One project shown at a time. Tabs update the URL hash (`/projects#eda-agent`) so the page is bookmarkable and the "Full Details" link from home pre-selects the right tab.

### Why this approach was chosen
The design goal was "compact presentation + interactive depth." Toggles let recruiters scan all projects by title and tags first, then choose which ones to expand — instead of being forced to read everything linearly. The tab interface on the Projects page isolates one project at a time so there's no visual noise from other projects.

**Alternatives considered:**
- Keeping separate pages for each section (current state) — rejected because it breaks the single-page reading flow.
- Using a CSS animation library (e.g., Framer Motion) for smooth open/close — skipped to keep the implementation simple and readable.
- Accordion-style where only one item can be open at a time — chose multi-open instead, so users can compare projects side-by-side.

### Concept or pattern this demonstrates
**Toggle / Accordion UI pattern** — a component that manages its own open/closed state and uses a `ChevronDown` icon that rotates 180° as a visual affordance. The parent tracks *which* items are open in a `Set<string>` so multiple can be open simultaneously.

**Anchor-based single-page navigation** — using `id` attributes on sections combined with `scrollIntoView({ behavior: 'smooth' })` to replace route-based navigation. The `scroll-mt-16` Tailwind class offsets the scroll target so the sticky navbar doesn't cover the section heading.

**URL-hash-based tab state** — storing the active tab in the URL hash (`/projects#eda-agent`) means the state survives a page reload and allows deep-linking from other parts of the site.

### What to look at / think about
- In `Layout.tsx`, look at the `SectionNavLink` component. Notice how it uses `useNavigate` (a React Router hook) alongside a plain `setTimeout`. The timeout is necessary because `navigate("/")` is asynchronous — the DOM doesn't have the target element yet when we try to scroll to it. This is a common pattern when you need to act *after* a navigation completes.
- In `Home.tsx`, look at how `expandedProjects` uses `Set<string>` instead of a single boolean. Using a Set means you can track many open items with one piece of state, and adding/removing from it is clean: `new Set(prev)` creates a copy (important — never mutate state directly), then `.add()` or `.delete()`.
- In `Projects.tsx`, look at how `key={project.id}` on the `<Card>` causes React to unmount and remount the card when the tab changes. This resets any internal state inside `ProjectDemo` without needing an explicit reset call.
