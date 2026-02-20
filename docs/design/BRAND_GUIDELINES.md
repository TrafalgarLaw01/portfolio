# Brand Guidelines & Design System

## 1. Core Identity
**Brand Name:** Pontus Corp.
**Vibe:** Cinematic, High-Tech, Premium, "Alive".
**Keywords:** Immersive, Fluid, Structured, Deep.

## 2. Color Palette

### Backgrounds
- **Void Black:** `#0a0a0a` (Main background)
- **Deep Slate:** `#121212` (Card backgrounds, Bento boxes)
- **Soft Charcoal:** `#1e1e1e` (Hover states)

### Accents (High-Tech Glow)
*Primary Blend: "Electric Aurora"*
- **Cyber Blue:** `#3b82f6`
- **Neon Purple:** `#8b5cf6`
- **Acid Green:** `#10b981` (Success/Active states)

### Text
- **Primary:** `#ffffff` (Headings)
- **Secondary:** `#a1a1aa` (Body text)
- **Muted:** `#52525b` (Subtitles, captions)

## 3. Typography
**Font Family:** `Inter` (Google Fonts) or `Switzer` (if available via CDN).

### Scale (Desktop)
- **Display (Hero):** 6rem (96px), Weight: 800, Tracking: -0.02em
- **H1:** 3.75rem (60px), Weight: 700
- **H2:** 2.25rem (36px), Weight: 600
- **Body:** 1rem (16px), Weight: 400, Line-height: 1.6

## 4. Layout System: "The Bento"

### Grid Structure
- **Container:** Max-width 1200px.
- **Gap:** `1.5rem` (24px).
- **Cards:** Rounded corners `xl` (24px) or `2xl` (32px).

### Card Styling
- **Surface:** Deep Slate (`#121212`)
- **Border:** 1px solid `rgba(255, 255, 255, 0.05)`
- **Hover:**
  - Scale: 1.02
  - Border: `rgba(255, 255, 255, 0.15)`
  - Shadow: `0 20px 40px -15px rgba(0,0,0,0.5)`

## 5. Motion & Micro-interactions
*Using Framer Motion*

- **Scrollytelling:**
  - Hero section text fades out and scales down as user scrolls.
  - "About" section elements slide in from sides based on scroll position.
- **Cursor:**
  - Custom circular cursor.
  - Expands and becomes transparent with a border when hovering interactive elements.
- **Page Transition:**
  - Smooth fade-in/slide-up on route change.
