# Brew & Co — Component Specifications

Developer reference for all UI components. For visual examples, open `style-guide.html`.

---

## Fonts

Load both typefaces in `layout.tsx` via `next/font/google`:

```tsx
import { Cormorant_Garamond, DM_Sans } from "next/font/google";

const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  axes: ["opsz"],
});
```

Then add both variables to `<html className>`.

---

## Buttons

### Variants

| Variant     | Use case                              | Token mapping                        |
|-------------|---------------------------------------|--------------------------------------|
| `primary`   | Main call to action                   | bg: `mahogany`, text: `parchment`    |
| `secondary` | Alternate action, same hierarchy      | border: `mahogany`, text: `mahogany` |
| `ghost`     | Tertiary action, in-line links        | no border, text: `fg`                |

### Sizes

| Size  | Font size | Padding              |
|-------|-----------|----------------------|
| `sm`  | `text-11` | `spacing-2` / `spacing-4` |
| `md`  | `text-13` | `spacing-3` / `spacing-5` |
| `lg`  | `text-16` | `spacing-4` / `spacing-8` |

### States

- **Default**: base token values
- **Hover**: `bark` fill for primary; `rgba(mahogany, 0.08)` for secondary
- **Focus-visible**: 2px outline in `amber` with 2px offset
- **Disabled**: `opacity-40`, `cursor-not-allowed`
- **Loading**: spinner replaces leading icon, text becomes "…"

### On dark backgrounds

- Primary → `caramel` fill, `bark` text
- Secondary → `parchment` border and text
- Ghost → `caramel` text

---

## Badges

Small, non-interactive labels. Max one line of text.

| Variant   | Token mapping                              | Usage                      |
|-----------|--------------------------------------------|----------------------------|
| `origin`  | bg: `roast`, text: `caramel`               | Country or region of origin |
| `process` | bg: `mist`, text: `bark`                   | Washed / Natural / Honey   |
| `new`     | bg: `amber`, text: `parchment`             | New arrival, limited batch |
| `roast`   | bg: `parchment`, border: `mist`, text: `mahogany` | Roast level        |

All badges: `radius-pill`, `text-11`, `tracking-label`, uppercase, `font-weight: 500`.

---

## Form Inputs

### Text input / Textarea

```
border: 1.5px solid --mist
border-radius: --radius-md
padding: --spacing-3 --spacing-4
font: --font-sans / --text-16
color: --fg
background: --bg
```

States:
- **Focus**: `border-color: --amber`
- **Error**: `border-color: #B84040` + error message below in `text-13`
- **Disabled**: `opacity-50`, `cursor-not-allowed`

Hint text: `text-11`, `--fg-muted`, below the input.

### Select

Inherits text input styling. Use native `<select>` with custom arrow via CSS `appearance: none` + background SVG.

### Checkbox / Radio

Minimum touch target: 44×44px. Use `accent-color: var(--amber)` for browser-native styling.

---

## Product Card

```
background: --bg-alt
border: 1px solid --border
border-radius: --radius-md
overflow: hidden
```

### Anatomy

1. **Image** — `aspect-ratio: 4/3`, full-bleed, no border-radius
2. **Body** — `padding: --spacing-4 --spacing-5`
   - Badges row (origin + process)
   - Title: `font-display`, `text-22`, `leading-heading`
   - Tasting notes: `font-sans`, `text-13`, `fg-muted`
3. **Footer** — `padding: --spacing-3 --spacing-5 --spacing-4`, `border-top: 1px solid --border`
   - Price: `font-display`, `text-22`, `tabular-nums`
   - CTA: `btn-primary btn-sm`

---

## Typography Components

### Display (`<h1>`)
```
font-family: --font-display
font-size: clamp(3.5rem, 10vw, --text-96)
font-weight: 300
letter-spacing: --tracking-tight
line-height: --leading-tight
```

### Section Heading (`<h2>`)
```
font-family: --font-display
font-size: --text-48
font-weight: 400
letter-spacing: -0.02em
line-height: --leading-heading
text-wrap: balance
```

### Subsection Heading (`<h3>`)
```
font-family: --font-display
font-size: --text-28
font-weight: 400
line-height: --leading-heading
```

### Lead Paragraph
```
font-family: --font-sans
font-size: --text-22
font-weight: 400
line-height: --leading-snug
color: --fg-muted
max-width: 55ch
```

### Body
```
font-family: --font-sans
font-size: --text-16
line-height: --leading-body
color: --fg
max-width: 65ch
```

### Caption / Label
```
font-family: --font-sans
font-size: --text-11
font-weight: 500
letter-spacing: --tracking-label
text-transform: uppercase
color: --fg-muted
```

### Pull Quote
```
font-family: --font-display
font-style: italic
font-size: --text-28
line-height: 1.4
border-left: 3px solid --amber
padding-left: --spacing-6
max-width: 50ch
```

---

## Navigation

### Desktop

```
height: 60px
background: --bark
border-bottom: 1px solid rgba(93, 46, 24, 0.4)
padding: 0 max(--spacing-8, env(safe-area-inset-left))
```

- Logo: `font-display`, `text-18`, `tracking-normal`, `parchment`
- Links: `font-sans`, `text-11`, `tracking-label`, uppercase, `ash`
- Active / hover: `caramel`
- CTA button: `btn-primary btn-sm` aligned to right

### Mobile

Collapsed by default. Hamburger icon opens a full-width drawer from the left edge.
Drawer: `background: --bark`, full height, `z-nav`.

---

## Graphic Motifs

### Checker Band
```css
background-image: conic-gradient(
  #5C2E18 90deg,
  #EDE5D8 90deg 180deg,
  #5C2E18 180deg 270deg,
  #EDE5D8 270deg
);
background-size: 10px 10px;
height: 10px;
```
Use as a section divider between light and dark regions.

### Ampersand Watermark
Large `&` in `font-display`, `font-weight: 700`, `color: --mahogany`, `opacity: 0.35–0.5`.
Used as a background texture element (absolutely positioned) behind editorial content on dark surfaces.

---

## Layout

### Page Grid
- Max content width: `1200px`, centered
- Side gutter: `max(32px, env(safe-area-inset-left, 0px))`
- Section vertical padding: `--spacing-16` desktop, `--spacing-10` mobile

### Breakpoints

| Name   | Min width | Column count |
|--------|-----------|--------------|
| `sm`   | 640px     | 4            |
| `md`   | 768px     | 8            |
| `lg`   | 1024px    | 12           |

### Card grids
Use `grid-template-columns: repeat(auto-fill, minmax(220px, 1fr))` with `gap: --spacing-6`.
Never use a fixed column count that leaves orphaned items in a half-filled last row.

---

## Dark Mode

All components inherit dark-mode values from CSS token redefinitions.
No component sets literal color values — always reference a semantic token.

Key dark-mode token swaps (defined in `tokens.css` and `globals.css`):

| Token          | Light           | Dark            |
|----------------|-----------------|-----------------|
| `--color-bg`   | `--steam`       | `#150B05`       |
| `--color-bg-alt` | `--parchment` | `#2A1810`       |
| `--color-fg`   | `--roast`       | `--parchment`   |
| `--color-fg-muted` | `--ash`     | `--ash`         |
| `--color-brand` | `--mahogany`   | `--caramel`     |
| `--color-accent` | `--amber`     | `--caramel`     |
| `--color-border` | `--mist`      | `#3D2318`       |
