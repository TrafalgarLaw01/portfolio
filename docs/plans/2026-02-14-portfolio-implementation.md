# Portfolio Website Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build a premium, high-performance portfolio website with scrollytelling capabilities and interactive features to convert high-value clients.

**Architecture:** 
- **Framework:** Next.js 14+ (App Router) for SEO and performance.
- **Styling:** Tailwind CSS + shadcn/ui for consistent design tokens and accessible components.
- **Animation:** `framer-motion` for complex interactions (Hero Showreel, Style Simulator) and `lenis` for smooth scrolling.
- **Content:** Local JSON data for portfolio items (easy to migrate to CMS later).

**Tech Stack:** 
- `next`, `react`, `typescript`
- `tailwindcss`, `tailwind-merge`, `clsx`
- `framer-motion`, `@studio-freight/react-lenis` (or `@lenis/react`)
- `lucide-react` (icons)
- `shadcn-ui` (components)

---

### Task 1: Project Scaffolding & Design System

**Files:**
- Create: `package.json`, `tsconfig.json`, `next.config.mjs`
- Create: `app/layout.tsx`, `app/globals.css`
- Create: `lib/utils.ts` (cn helper)

**Step 1: Initialize Next.js Project**
Run: `npx create-next-app@latest . --typescript --tailwind --eslint`
(Configure: App Router, No src directory if preferred or yes, Import alias @)

**Step 2: Install Dependencies**
Run: `npm install framer-motion @studio-freight/react-lenis lucide-react class-variance-authority clsx tailwind-merge`
Run: `npx shadcn-ui@latest init` (Default style, Slate color)

**Step 3: Setup Smooth Scroll (Lenis)**
Create `components/ui/smooth-scroll.tsx`:
```tsx
'use client'
import { ReactLenis } from '@studio-freight/react-lenis'

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  return <ReactLenis root>{children}</ReactLenis>
}
```
Wrap `children` in `app/layout.tsx` with `<SmoothScroll>`.

**Step 4: Verify Setup**
Run: `npm run dev`
Check: localhost:3000 loads with smooth scrolling enabled.

---

### Task 2: Hero Section (The Showreel)

**Files:**
- Create: `components/home/hero-section.tsx`
- Create: `components/home/video-scrub.tsx`

**Step 1: Implement Sticky Scroll Layout**
Create a section that has `h-[300vh]` (or more) to allow for scrolling while the content remains sticky (`sticky top-0`).

**Step 2: Implement Video Frame Sequence**
Create `VideoScrub` component using `useScroll` and `useTransform` from `framer-motion`.
- Map scrollYProgress (0 to 1) to current video frame or image sequence index.
- Use a `<canvas>` or `<img>` array for performance, or a controlled `<video>` element if seeking is smooth enough (often frames are better for "scrubbing").
*Decision: Use an image sequence (array of optimized JPEGs) for smoothest cross-browser scrubbing.*

**Step 3: Add Overlays**
Add text motion that fades in/out as the sequence progresses (e.g., "From Concept..." -> "To Creation").

---

### Task 3: The Value Prop & Gallery

**Files:**
- Create: `components/home/value-prop.tsx`
- Create: `components/home/project-gallery.tsx`
- Create: `components/ui/project-card.tsx`
- Create: `data/projects.ts`

**Step 1: Value Prop Section**
Simple, elegant typography section. Large text, centered, balanced whitespace.
Motion: Fade up on scroll view.

**Step 2: Project Data Structure**
Define `Project` interface in `types/index.ts`.
Create mock data in `data/projects.ts` with categories: "Saúde", "Advocacia", "Varejo".

**Step 3: Filterable Gallery**
Implement `ProjectGallery` with state `activeFilter`.
- Filter buttons (Tabs or Pill shape).
- Animate list layout changes with `AnimatePresence`.

---

### Task 4: Interactive Style Simulator

**Files:**
- Create: `components/home/style-simulator.tsx`
- Create: `components/simulator/preview-frame.tsx`

**Step 1: Define Themes**
Create a configuration object for themes:
```ts
const themes = {
  traditional: { font: 'font-serif', bg: 'bg-navy-900', text: 'text-white' },
  modern: { font: 'font-sans', bg: 'bg-white', text: 'text-black' },
  human: { font: 'font-handwriting', bg: 'bg-stone-100', text: 'text-stone-800' }
}
```

**Step 2: Build Control Panel**
Buttons to switch current theme state.

**Step 3: Build Preview Component**
A dummy "Mini Hero" component that accepts `theme` as a prop and applies the classes dynamically.
Show immediate visual feedback when buttons are clicked.

---

### Task 5: Footer & Polish

**Files:**
- Create: `components/layout/footer.tsx`
- Modify: `app/page.tsx` (Assemble all sections)

**Step 1: Footer Implementation**
Grid layout with "Let's Talk" CTA.
Social links with hover effects.

**Step 2: Final Assembly**
Import all sections into `app/page.tsx`.
Ensure responsive spacing (mobile vs desktop).

**Step 3: SEO & Metadata**
Update `app/layout.tsx` with correct title and description from the brief.

---

## Verification Plan

### Automated Tests
- `npm run lint`: Ensure no linting errors.
- `npm run build`: Verify production build succeeds without type errors.

### Manual Verification
1. **Hero Scroll:** Verify the video/images scrub smoothly on Chrome and Edge.
2. **Responsiveness:** Check Hero and Gallery on mobile view (375px).
3. **Simulator:** Click all 3 themes and verify styles update instantly.
4. **Navigation:** Verify links in Footer open correctly.
