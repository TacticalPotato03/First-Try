# Claude Code Instructions: Add Vehicle Comparison to Projects

## Context
I have an Astro site at travis-campbell.com (GitHub Pages). I want to add a new
interactive project under my existing Projects section. The site already has:

- Navigation: Writing | Projects | About
- Projects live at `/projects/` with sub-pages at `/projects/[slug]/`
- Example existing project: `/projects/sales-leader-operating-card/`
- Site footer: "Built with Astro"

I'm adding an interactive React component (vehicle cost comparison tool with sliders)
as a new project page at `/projects/vehicle-replacement-analysis/`.

## Files I'm providing
- `VehicleComparison.jsx` — the React component (self-contained, no external deps)

## Step-by-step

### 1. Explore the repo structure first
Before changing anything, look at:
- `astro.config.mjs` — check for existing React/Tailwind integrations
- `src/pages/projects/` — see how the existing project pages are structured
- `src/pages/projects/sales-leader-operating-card/` — use this as the template
  for how project pages are built (layout, frontmatter, etc.)
- `src/content/` — check if projects use Astro content collections or are plain pages
- `src/layouts/` — identify the layout used for project pages
- `tailwind.config.mjs` or `tailwind.config.js` — check content paths

### 2. Add React integration (if not already present)
```bash
npx astro add react
```
This modifies `astro.config.mjs`. Accept the changes.

### 3. Place the component
Copy `VehicleComparison.jsx` to `src/components/VehicleComparison.jsx`

### 4. Create the project page
Create the new project page following the SAME pattern as the existing
`sales-leader-operating-card` project. This likely means one of:

**Option A: If projects are content collection entries (MDX/MD files in src/content/):**
Create a new entry with appropriate frontmatter (title, description, date, etc.)
and embed the React component using the MDX component syntax.

**Option B: If projects are plain Astro pages (files in src/pages/projects/):**
Create `src/pages/projects/vehicle-replacement-analysis/index.astro` using the
same layout and structure as the operating card page.

Either way, the page should:
- Use the same layout as other project pages
- Have this metadata:
  - Title: "Vehicle Replacement Analysis"
  - Description: "Interactive 48-month cost comparison: keeping our diesel vs. leasing a Kia PV5 or VW ID. Buzz."
  - Date: 2026-03-11
- Render the component with `client:load` directive:
  ```astro
  <VehicleComparison client:load />
  ```

**IMPORTANT:** The `client:load` directive is required. Without it, the sliders
and interactivity won't work. This tells Astro to hydrate the React component
in the browser.

### 5. Verify Tailwind content paths
Make sure the Tailwind config's `content` array includes `.jsx` files:
```js
content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}']
```
If it doesn't include jsx/tsx, add them.

### 6. Check that the project appears in the Projects listing
Look at how `src/pages/projects/index.astro` (or equivalent) generates the
project list. If it auto-discovers from a content collection, the new entry
should appear automatically. If the list is manually curated, add an entry for
the vehicle comparison with:
- Title: "Vehicle Replacement Analysis"  
- Description: "Interactive 48-month cost comparison: keeping our diesel vs. leasing a Kia PV5 or VW ID. Buzz."
- Link: /projects/vehicle-replacement-analysis/

### 7. Test locally
```bash
npm run dev
```
Check:
- [ ] `/projects/` listing page shows the new project
- [ ] `/projects/vehicle-replacement-analysis/` loads the full interactive tool
- [ ] All 6 sliders update the numbers in real-time
- [ ] The "How to read this page" explainer shows and can be toggled
- [ ] Layout, navigation, and footer match other pages on the site
- [ ] Responsive: cards stack on mobile, 4-column grid on desktop

### 8. Commit and push
```bash
git add -A
git commit -m "Add vehicle replacement analysis project"
git push
```

## Troubleshooting
- **"useState is not a function"** — `client:load` is missing on the component
- **Tailwind classes not applying** — jsx/tsx not in Tailwind content paths
- **Page 404s** — file path doesn't match the routing pattern of existing projects
- **Component renders but no interactivity** — `client:load` vs `client:visible`; 
  use `client:load` for immediate hydration
- **Project not showing in listing** — check how the projects index discovers entries

## What NOT to change
- Don't modify the site's existing layout, navigation structure, or styling
- Don't add external CSS or font imports (the component uses Tailwind + system fonts)
- Don't change the component code itself; it's tested and ready to deploy as-is
