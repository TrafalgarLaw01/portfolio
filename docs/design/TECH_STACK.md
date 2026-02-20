# Tech Stack & Implementation Details

## Core Framework
- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **State Management:** React Context (for simple global state like Theme/Cursor)

## Styling
- **CSS Engine:** Tailwind CSS
  - Utility-first for layout and spacing.
  - Custom config for brand colors and fonts.
- **Icons:** Lucide React (Clean, modern SVG icons).

## Animation & Interaction
- **Animation Library:** Framer Motion
  - Scroll-linked animations (useScroll, useTransform).
  - Layout transitions (layout prop).
  - Gestures (hover, tap).
- **Smooth Scroll:** Lenis (React Lenis wrapper)
  - Essential for the high-end "heavy" feel of the scroll.

## 3D & Graphics (Optional/Future)
- **R3F (React Three Fiber):** If we decide to add a 3D object in the hero later.
- **Shaders:** Custom WebGL for background noise/grain (optional).

## Deployment
- **Platform:** Vercel
- **Analytics:** Vercel Analytics
