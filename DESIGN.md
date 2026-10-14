---
name: Is my doctor using AI?
description: A single-page explainer built as a hospital wayfinding system.
colors:
  wall: "#f4f5f3"
  wall-2: "#e9ece9"
  paper: "#ffffff"
  plate: "#1e252b"
  plate-2: "#2a333a"
  on-plate: "#ffffff"
  on-plate-2: "#b9c2c9"
  ink: "#1b2126"
  ink-2: "#47515a"
  rule: "#d3d8d5"
  rule-strong: "#1b2126"
  link: "#1b56ad"
  yellow: "#f2c230"
  yellow-hover: "#ffd54f"
  blue: "#1f5fbf"
  green: "#007a53"
  red: "#c8102e"
  grey: "#5f6870"
  bar-0: "#9aa3a8"
  good: "#006b49"
  bad: "#b00e29"
  scope-black: "#07090b"
  hud: "#8ff5c2"
  box: "#19d17a"
typography:
  display:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2.9rem, 6.4vw, 5.4rem)"
    fontWeight: 800
    lineHeight: 0.96
    letterSpacing: "-0.03em"
    fontVariation: "'wdth' 94"
  headline:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2rem, 3.4vw, 2.6rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.02em"
    fontVariation: "'wdth' 98"
  title:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.7rem"
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: "-0.01em"
    fontVariation: "'wdth' 92"
  subtitle:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.35rem"
    fontWeight: 700
    lineHeight: 1.08
    fontVariation: "'wdth' 92"
  numeral:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "3.2rem"
    fontWeight: 800
    lineHeight: 1
    fontFeature: "'tnum'"
    fontVariation: "'wdth' 85"
  body:
    fontFamily: "Atkinson Hyperlegible, Segoe UI, Roboto, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.6
  lede:
    fontFamily: "Atkinson Hyperlegible, Segoe UI, Roboto, system-ui, sans-serif"
    fontSize: "clamp(1.1rem, 1.6vw, 1.28rem)"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.92rem"
    fontWeight: 600
    fontVariation: "'wdth' 92"
  mono:
    fontFamily: "ui-monospace, SFMono-Regular, Menlo, Consolas, monospace"
    fontSize: "0.9rem"
    fontWeight: 400
  handwriting:
    fontFamily: "Caveat, Segoe Print, cursive"
    fontSize: "2rem"
    fontWeight: 600
    lineHeight: 1.05
rounded:
  none: "0px"
spacing:
  gutter: "clamp(16px, 4vw, 40px)"
  measure: "66ch"
  wrap: "1160px"
  pictogram: "64px"
  pictogram-sm: "52px"
  section-top: "clamp(64px, 9vw, 120px)"
  section-bottom: "clamp(56px, 8vw, 104px)"
components:
  button-primary:
    backgroundColor: "{colors.yellow}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "12px 18px"
  button-primary-hover:
    backgroundColor: "{colors.yellow-hover}"
    textColor: "{colors.ink}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "12px 18px"
  button-secondary-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.wall}"
  topbar:
    backgroundColor: "{colors.plate}"
    textColor: "{colors.on-plate-2}"
    height: "58px"
  sign-plate:
    backgroundColor: "{colors.plate}"
    textColor: "{colors.on-plate}"
    typography: "{typography.headline}"
    rounded: "{rounded.none}"
    padding: "18px 30px 20px 24px"
  pictogram-tag:
    backgroundColor: "{colors.blue}"
    textColor: "{colors.on-plate}"
    size: "{spacing.pictogram}"
    rounded: "{rounded.none}"
  directory-row:
    backgroundColor: "{colors.plate}"
    textColor: "{colors.on-plate}"
    padding: "8px 20px 8px 24px"
  directory-row-hover:
    backgroundColor: "{colors.plate-2}"
  directory-row-selected:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
  door-plate:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    padding: "26px 28px 30px"
  check-in-sheet:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    padding: "26px 30px 18px"
  result-ticket:
    backgroundColor: "{colors.plate}"
    textColor: "{colors.on-plate}"
    padding: "28px 30px 30px"
  footer:
    backgroundColor: "{colors.plate}"
    textColor: "{colors.on-plate-2}"
    padding: "44px 40px 60px"
---

# Design System: Is my doctor using AI?

## Overview

**Creative North Star: "The Hospital Wayfinding System"**

The page works like the signs in a hospital. Grey corridor walls are the page background. Charcoal enamel plates with white Archivo lettering name each place. Small square pictogram tags give each one a colour code. You find where AI is used the same way you find a department in a real hospital: from the directory, by the colour of the wing, by the sign on the wall. Between the signs, the reading column is calm: Atkinson Hyperlegible at a comfortable line length, and no decoration.

Everything is built from plates and rules. Charcoal plates mean "this is a sign". White paper means "this is a form or a door you can open". A 2px ink rule means "a new piece of content starts here". Nothing floats, nothing has rounded corners, and no content sits in a card. No raster images ship: every illustration, icon and favicon is inline SVG or CSS.

**Key Characteristics:**
- Clinical white walls, signs in solid wayfinding colour, white paper for forms and door plates. Charcoal only for the top bar.
- Square pictogram tags in four wayfinding colours: information blue, procedure green, emergency red, caution yellow.
- Yellow means "go here / do this", so it is kept rare.
- Square corners, no shadows, no cards anywhere.
- Narrowed Archivo for signs, Atkinson Hyperlegible for reading.

## Colors

A bright, clean hospital corridor whose signs are solid wayfinding colour: blue, green or yellow. Charcoal is kept for the top bar; everything else is white and near-white, so the colour reads as direction.

### Primary
- **Direction Yellow** (yellow): the you-are-here bar under the current top-bar link, the square brand mark, primary buttons, the text link on the entrance plate, the skip link, text selection, the highlighted source row when you jump to a citation, and the one caution pictogram. Hover uses **Lit Yellow** (yellow-hover). Text on yellow is always ink (#1b2126), in light and dark mode.

### Secondary (wayfinding codes)
- **Information Blue** (blue): default pictogram tag, Imaging wing, survey bars.
- **Procedure Green** (green): procedure pictograms, the Procedures wing, "with AI" chart bars, the ADR meter, checkbox and slider accent, the switch when on, numbered question squares.
- **Emergency Red** (red): the Acute care wing and the "after" bars in the caution section. Never used for decoration.
- **Behind-the-Scenes Grey** (grey): the behind-the-scenes wing tag.

### Tertiary (scope illustration only)
- **Scope Black** (scope-black), **HUD Mint** (hud), **Detection Green** (box): used only inside the endoscope image, where they copy a real endoscopy monitor.

### Neutral
- **Corridor Wall** (wall): page background. **Second Wing** (wall-2): one step darker, used for the colonoscopy section band and empty meter tracks.
- **Paper** (paper): the check-in sheet, the door plate and the selected directory row only.
- **Charcoal Plate** (plate) and **Hover Plate** (plate-2): top bar, sign plates, entrance plate, directory board, result ticket, footer.
- **On Plate** (on-plate) and **Muted On Plate** (on-plate-2): text on charcoal and on coloured signs.
- **Ink** (ink) and **Muted Ink** (ink-2): body text and secondary text on the wall.
- **Rule** (rule): 1px dividers between rows. **Strong Rule** (rule-strong): the 2px and 4px rules that start a block of content.
- **Link Blue** (link): inline links, underlined 1px, 2px on hover.
- **Without-AI Grey** (bar-0): the comparison series in charts and the switch when off.
- **Good / Bad** (good, bad): green and red as *text* (ledger up/down, "copied" message). They are darker than the tag colours so they pass AA on the second-wing band.

### Named Rules
**The Yellow Means Go Rule.** Yellow is for direction and action only: where you are, what to press, where to go next, plus the single caution pictogram. Never use it as a background fill or decoration.

**The Plate Means Sign Rule.** Charcoal fills mean "this is signage or a fixed instrument" (top bar, section signs, directory board, result ticket, footer). Running text never sits on a plate except the entrance lede.

### Dark mode
Follows the system setting (prefers-color-scheme: dark), no toggle. The wall becomes near-black (#111518, second wing #161b1f), paper becomes dark slate (#1a2025), plates lighten slightly (#232b32, hover #2e3840) so they still read as signs, ink becomes #e8ecee (muted #b3bdc4), rules become #2f3a42 with a light strong rule, links and focus become #7fb0ff, good/bad become #4fd19a / #ff7a8a and the without-AI grey darkens to #56626a. Yellow, the wayfinding codes and the scope colours do not change. The selected directory row stays white with ink text in both modes.

## Typography

**Display Font:** Archivo (variable width 75 to 100, weight 500 to 800, with Helvetica Neue, Arial)
**Body Font:** Atkinson Hyperlegible (400, 700, italic, with Segoe UI, Roboto, system-ui)
**Mono Font:** the system monospace stack, for ledger numbers, the detection counter and the scope HUD.
**Handwriting:** Caveat (500 to 700), used only for the first-visit note on the hospital map, as if someone pencilled a hint onto a slip of paper.

**Character:** Archivo runs at or near its normal width (94 to 100%) so headings read like clean modern sign lettering rather than a squeezed poster; small labels stay at 92%. Atkinson Hyperlegible was designed for low-vision readers and keeps the long passages easy to read. Both are self-hosted from `fonts/` (latin subset, woff2), declared with @font-face at the top of styles.css.

### Hierarchy
- **Display** (h1): only the title on the entrance plate, capped at 11ch so it breaks into a stacked sign.
- **Headline** (h2): section titles, always inside a sign plate, capped at 24ch.
- **Title** (h3): sub-headings on the wall (three stops, caution headings, source columns). Larger h3s in the colonoscopy blocks and door plate use clamp(1.9rem, 3vw, 2.4rem).
- **Subtitle** (h4): headings inside the door plate.
- **Numeral**: big tabular numbers (ADR readout, survey values). Use tabular numbers wherever numbers line up.
- **Body**: 17px (16px under 560px), line-height 1.6, max 66ch. **Lede**: muted, max 60ch (44ch on the entrance plate).
- **Label**: top-bar links, wing names, table headers, glossary terms: Archivo 600 to 700, normal case.

### Named Rules
**The Sign Face Rule.** Archivo is for things you would see painted on a sign (headings, nav, buttons, numbers, labels). Anything you read as a sentence is Atkinson Hyperlegible.

**The Normal Case Rule.** Labels stay in sentence case at normal letter-spacing. No uppercase tracked labels above headings.

## Layout

- Content sits in a centred column up to 1160px wide, with a fluid side gutter (gutter). Full-bleed bands (top bar, colonoscopy section, footer) cancel the gutter with negative margins.
- Sections get generous vertical padding (section-top / section-bottom). Each section opens with a sign plate, then 32 to 52px of space before its content.
- Two-column layouts are uneven on purpose: hero 1.15 : 0.85, directory 5 : 6, check-in 1.15 : 0.85, question card 1.25 : 0.75. Colonoscopy blocks are 1 : 1 and alternate sides.
- The door plate and result ticket are sticky beside their column on desktop (top 76 to 80px); the top bar is sticky on all sizes.
- **Breakpoints:** at 1040px the top-bar nav scrolls sideways with faded edges; at 900px every two- or three-column layout stacks to one column and sticky panels become static; at 560px pictograms shrink to 52px, body drops to 16px and padding tightens.

## Elevation & Depth

Flat. There are no shadows anywhere (box-shadow is never used). Depth comes from material: near-white wall, a darker second-wing band, white paper and solid-colour signs. The only layering is the sticky top bar, door plate and result ticket, and they rely on their solid fill, not a shadow.

**The Mounted Flat Rule.** Things are mounted on the wall, not floating above it. If something needs to stand out, give it a plate or paper fill and a rule, never a shadow.

The one real 3D space is the hospital map (below). There, depth is geometry, not shadow: a rendered isometric floor plan with low back walls and soft, even light. The pixel people carry a 2px ink outline, not a shadow.

## Shapes

Every corner is square (rounded.none). Pictogram tags are fixed squares; bullet markers in the result ticket and the colour keys in legends are small squares; the switch track and thumb are rectangles. Pictogram line art uses a 2px stroke with square caps and mitred joins, on a 24-unit grid. Rules come in three weights: 1px (row dividers), 2px (start of a block), 4px (start of a stop or caution heading, and the you-are-here bar).

**The Square Corner Rule.** border-radius is never used. A rounded corner anywhere breaks the signage world.

## Components

### Top bar
Full-width charcoal strip, 58px tall, sticky; the one dark element on the page. Left: the brand name, in white Archivo (no logo), then, inside a room, a yellow "← Waiting room" link (on phones it replaces the name). Right: directory links in muted Archivo; hover turns them white; the current section gets white text and a 4px yellow bar underneath (set by script.js with aria-current). Focus rings on plates are yellow.

### Entrance plate (hero)
A charcoal plate holding a blue pictogram in the top-left corner, the h1, the lede, a yellow primary button and a yellow text link. Beside it, the scope illustration hangs on the wall with a placard caption under a 2px rule.

### Sign plate
Every h2 is a directional sign: a solid panel in the section's wayfinding colour (blue for information, green for procedures and care steps, yellow with ink lettering for the caution section), with the pictogram set into it on the left in the sign's own lettering colour. Lettering is Archivo 700 at normal width. The pictogram always sits beside the heading, never stacked above it.

### Buttons
- **Primary:** yellow fill, ink text, Archivo 700, 12px 18px padding, square, optional 20px arrow. Hover goes to lit yellow.
- **Secondary:** transparent with a 2px ink border; hover fills with ink and turns text wall-coloured.
- **Press:** both shift down 1px. Colour transitions are 0.15s.

### Directory board and door plate (signature)
The board is a white list grouped by wing (muted wing names in normal case), rows split by 1px rules. Each row: a 40px wing-coloured tag, the department name, the likelihood text, and a hidden arrow. Hover tints to the wall colour. The chosen row fills with a 13% tint of its wing colour and shows the arrow (aria-pressed). The door plate beside it opens with a wing-coloured header (56px tag, title, likelihood badge with a 2px border) that wipes in from the left, over a white body with headings, an example under a 2px rule, and links. The Clinics wing uses charcoal for its tag and door header.

### Check-in sheet and result ticket
The sheet is the quiz form on white paper: a legend in Archivo, then checkbox rows split by 1px rules, green accent, the label bolding when ticked. The ticket beside it is a green sign with a large verdict in Archivo 800 and reasons marked by small white squares.

### Panels on the wall
Interactive pieces in the colonoscopy section (ADR slider, scope toggle, evidence chart, ledger) are not boxes. Each starts under a 2px strong rule with 16px of space and sits directly on the wall. The readout splits into two cells with a 1px divider. Meters and bars are flat rectangles.

### Ledger tables
Collapsed borders, 1px row rules, a 2px rule under the header and above the total row. Row headings are body weight with a small muted note under them. Numbers are right-aligned in mono. Costs that go up use bad, costs that go down use good.

### Caution headings
In the caution section, each h3 is a plain ink heading under a 4px ink rule, with muted body text and a "fix" line under a 2px rule. Mini bar charts compare before (grey) and after (red).

### Question card and print card
Six questions in a list under a 2px rule, each with a 34px green numbered square and the question in Archivo. Beside it: a yellow "Copy" button and a secondary "Print" button. In print, only the question card prints, in black on white, without the top bar, footer, buttons or pictogram.

### Footer
A quiet plaque: a 1px rule across the top, muted text, ordinary links.

### Hospital map (signature)
script.js `initTour()` adds `html.tour` and turns the front page into a game-style hospital map. Without JavaScript, nothing changes and the page is the plain long version.
- **Intro, first visit only:** "Is my doctor using AI?" fades in, then "Yes, and you probably didn't notice." with the 16% line and a yellow Continue button. Skip intro and Esc always work. Whether it has been seen is stored in localStorage (`tour-intro`).
- **The map:** an isometric floor plan (rotateX 56°, rotateZ 45°, no perspective, so it reads like Theme Hospital). It has one room per section, four on each side of a central corridor that carries blue, green and yellow wayfinding lines.
  - **The building is a Blender render** (`images/map-desktop.webp`, `images/map-phone.webp`, transparent WebP). It is rendered with the same orthographic camera as the CSS floor, so the render sits flat under it, scaled by `--k` (render pixels per floor unit) and centred on `--cx`/`--cy`.
  - **Rooms:** furnished to match their section, with low back walls topped in the room's pictogram colour. The near side is cut away so you can see in.
  - **Code stays on top:** the CSS floor above the render is invisible. It holds the room links, signs and people, so clicking, focus and labels all stay in HTML. The render is `alt=""`.
  - **Signs:** each room has a standing sign facing you near its back wall, made of the colour band, the pictogram on a white tile and the top-bar label.
  - **Hover and focus:** the room's floor gets a light yellow wash and a 5px yellow outline. The cursor over rooms is a large ink arrow with a yellow edge.
  - **Phones:** the plan stands upright (rotateX 40°, no turn), with rooms in two columns on either side of the corridor.
- **Pixel people:** 8×12 pixel sprites drawn in script.js (doctor, nurse, patient, surgeon, and a small robot for the AI), with a 2px ink outline.
  - Five walk the corridor and one paces in each room (corridor only on phones, where the signs would hide them), turning at each end with a two-frame step.
  - The walking runs on a registered `--p` property over the corridor's container units.
- **Entering a room:** the map zooms 3.2× into the room you clicked in 0.42s, then that section shows as its own page. Every other section is `hidden`.
  - Each room opens with a secondary **Back to the waiting room** button above its sign. A yellow **Waiting room** link sits in the top bar while you read. All three zoom back out to the map.
  - Each room ends with a **Next room** door painted in the next room's colour, whose arrow nudges forward on hover. The last room's door is yellow and leads back to the waiting room.
- **Links and history:** top-bar links, citations and Next room doors switch rooms directly. Each move is a history entry, so Back returns to the previous room at the spot you left, and a deep link like `#ask` opens that room on load.
- **First-visit note:** a handwritten note in Caveat on a white slip points at the map (`tour-tutorial`). Entering a room or pressing Skip dismisses it.
- **Keyboard and screen readers:** rooms are real links inside a "Hospital map" nav. Focus moves to the room's h2 on entry and back to that room on return. Sprites and the corridor are aria-hidden.
- **Reduced motion:** the intro starts on slide two, there is no zoom, and the pixel people stand still.
- **Always lit:** with the map on, the page keeps its light colours even in dark mode, because a hospital is lit. The plain page without JavaScript still follows the system setting.
- **To add a room:** add a `<section id>` with a `.section-head .sign` (pictogram + h2) inside `main`, and a matching link in the top-bar nav. The map builds the room link and its sign from those. The floor grid and the render hold eight rooms, so a ninth room means re-rendering in Blender.

### Motion
Small and functional only. Buttons and directory rows fade colour in 0.12 to 0.15s. The door plate header wipes open in 0.32s; the switch thumb slides in 0.2s; the hero scope's detection boxes pop in once (0.6s, delays 0.8s and 2s). The easing for anything that moves is cubic-bezier(0.16, 1, 0.3, 1). With prefers-reduced-motion, all of this turns off and smooth scrolling becomes instant.

## Do's and Don'ts

### Do:
- **Do** use only the colour variables in styles.css; add new ones to both the light and dark blocks.
- **Do** open every new section with a sign plate and a pictogram tag in the right wayfinding colour.
- **Do** start blocks of content with a 2px strong rule instead of a box.
- **Do** keep paper fills for forms and door plates, and solid wayfinding colour for signs; charcoal is the top bar only.
- **Do** write new pictograms as 24x24 SVG line art with 2px square-capped strokes, using currentColor.
- **Do** check text contrast in both light and dark mode; use good/bad, not green/red, for coloured text.

### Don't:
- **Don't** round any corner or add any shadow.
- **Don't** put content in cards or bordered boxes.
- **Don't** use yellow for anything that is not direction, action or caution.
- **Don't** put an uppercase label or eyebrow above a heading.
- **Don't** add raster images or icon fonts; everything is SVG and CSS.
- **Don't** stack a pictogram above a heading; it sits beside it in the plate.

## Accessibility

- Skip link (yellow) appears on focus. Focus ring: 3px solid, 2px offset; blue on the wall, yellow on plates.
- Text meets WCAG AA in light and dark mode (checked in Chrome at 1440 and 390 wide).
- Pictograms are aria-hidden; the heading carries the meaning. The directory uses aria-pressed, the nav uses aria-current, the slider reports aria-valuetext, and the scope SVG has an aria-label.
- Checkbox and switch inputs are real inputs; the switch's focus ring is drawn on its track.
- Links with a hover state are always underlined; citations are numbered and jump to a highlighted source row.
- The hospital map only adds to the page. Its rooms are real links in a labelled nav, the intro is a labelled modal dialog with focus on Skip and then Continue, and turning JavaScript off gives the full long page.
