# Funtopia 6.0 — Development Context

## Overview

Multi-step team registration page for Funtopia 6.0 events (Valorant, Treasure Hunt, BGMI) on the UPES-CSA website.

## Key Files

- **JSX**: `src/pages/EventRegistrationPage/FuntopiaRegistrationPage/FuntopiaRegistrationsPage.jsx`
- **CSS**: `src/pages/EventRegistrationPage/FuntopiaRegistrationPage/FuntopiaRegistrationsPage.module.css`
- **Apps Script (local draft)**: `../appscript.txt` (workspace root: `c:/Users/rudra/coding/CSA/appscript.txt`)
- **Route**: `/Funtopia` in `src/App.jsx`
- **Navbar**: Button "Funtopia 6.0" → `/Funtopia` in `src/App.jsx`
- **Homepage Popup**: Funtopia 6.0 poster + link in `src/pages/HomePage/HomePage.jsx`

## Architecture

4-step multi-step form:

1. **Step 0 — Event Selection**: 3 event cards (Valorant, Treasure Hunt, BGMI) with poster, title, detail pills (mode, team size, date, fee), register button
2. **Step 1 — Team + Leader Details**: Team name, team size dropdown, leader form (name, email, phone, course, SAP ID, year, gender, CSA member, CSA ID)
3. **Step 2 — Team Members**: N-1 member forms (same fields as leader), rendered in cards
4. **Step 3 — Payment**: QR code, transaction ID, screenshot upload via FileSelect

## Tech Stack

- React + Vite, react-router-dom, CSS Modules
- Components: InputField, DropDownSelectField, FileSelect, FormLoading, Popup
- Validation: `src/utils/registrationValidations.js` (VALIDATENAME, VALIDATEEMAIL, VALIDATEPHONE, etc.)
- Submission: Google Apps Script endpoint + email via VITE_SERVER_URL
- Notifications: react-hot-toast
- Event integrations:
  - Valorant Sheet: `https://docs.google.com/spreadsheets/d/13aWpLM2RvMEgkhclhCJ74egt7qnbWupm3gewWfWJexs/edit?usp=sharing`
  - Valorant FolderId: `1m5JSjmJFFUjUsiHk_h4UycT1EdAowxkH`
  - BGMI Sheet: `https://docs.google.com/spreadsheets/d/1fdTSulaoJEZx_xdKT-M91cCvEIraL4Le1XVhzxrpAZw/edit?usp=sharing`
  - BGMI FolderId: `1FLCYZQO8V6VLgmZ3Mj99wBPWzpJBQsBq`
  - Treasure Hunt Sheet: `https://docs.google.com/spreadsheets/d/1DSJ0cqqlqe8dxUOS5O_K6CHE6xGPxc_oKBk97giCf5c/edit?usp=sharing`
  - Treasure Hunt FolderId: `1x4eA10vszFNtcgewyXkDUx-dRd-wypxC`

## Design Decisions

- **Background**: Original dark multi-color linear gradient (`to right` on desktop, `135deg` diagonal on mobile ≤600px)
- **Font**: Rajdhani for all headings (page title, card titles, card buttons, form heading bar). Maven Pro for body text
- **Cards**: `rgba(0,0,0,0.4)` with `backdrop-filter: blur(8px)`, 12px border-radius. `flex: 0 1 calc(33.333% - 1.75rem)` to fit 3 per row on laptop
- **Step Indicator**: Compact dots with labels underneath, checkmark for completed steps, no text-wrapping on mobile
- **Card Button**: Transparent with uppercase letter-spaced "REGISTER NOW →", subtle top border
- **Detail Pills**: Flex auto-width, no borders, muted text. Fee pill is full-width, uses only ₹ symbol (no icon image)
- **Title**: "FUNTOPIA 6.0" in Rajdhani 3.2rem/700, decorative gradient line accent below, muted uppercase subtitle
- **Back Arrow**: White SVG chevron (`<span>` wrapping inline `<svg>`) inside `.headingRow`. Styled as a 2rem circular button with `rgba(255,255,255,0.1)` background, brightens to 0.25 on hover. Shrinks to 1.75rem on mobile (≤1000px). No image dependency.
- **Form Schema Updates**:
  - Event-specific leader fields are now enabled (Valorant: Team Captain Riot ID, BGMI: IGL In Game Name + UID).
  - Team member fields now include event-specific data (Valorant Riot ID, BGMI In Game Name + UID).
  - Team member cards now include CSA Member + CSA ID capture.
- **Apps Script Mapping Behavior**:
  - Frontend now sends both flat keys (e.g., `LeaderName`, `Member2_Name`) and sheet-header keys (e.g., `Team Name`, `Name`, `Contact Number`).
  - For variable team-size events, extra player columns are intentionally appended as blank strings.
  - Example: Treasure Hunt with 2 players (lead + 1 member) leaves Member3/Member4 columns blank in the sheet.
- **Mobile Horizontal Scroll (≤1000px)**:
  - Event cards display in a horizontal scrollable container instead of vertical stack
  - Cards use 3:4 portrait aspect ratio for poster images
  - Scroll starts at Valorant (position 0), users swipe right for Treasure Hunt → BGMI
  - `scrollSpacer` div at end provides extra scroll space for last card
  - `useRef` + `useEffect` resets `scrollLeft` to 0 on mount
  - Touch-friendly: `touch-action: pan-x pan-y pinch-zoom`, `-webkit-overflow-scrolling: touch`
  - No scroll-snap (removed due to Chrome Android issues)

## Global Changes Made

- `App.css`: body `background-color` changed to `var(--bgDark)` (#020202) + `overscroll-behavior-y: none` (changed from `overscroll-behavior: none` to allow horizontal scroll in nested elements)
- `HomeSection.module.css`: Removed `background-attachment: fixed` from bg3.jpg to stop viewport-level blue bleed

## Changelog

1. Rebuilt FuntopiaRegistrationsPage from scratch (was just external Google Forms links)
2. Uncommented `/Funtopia` route in App.jsx
3. Updated HomePage popup for Funtopia 6.0
4. Updated Navbar button to "Funtopia 6.0"
5. Visual overhaul: better gradient, cards, title, pills, button styling
6. Restored original gradient (user preferred it over radial)
7. Replaced purple accents with warm tones matching gradient palette
8. Full visual redesign: darker cards, transparent buttons, compact layout
9. Set Rajdhani font across all headings and card elements
10. Fixed body background + overscroll to eliminate blue flash
11. Removed bg3.jpg fixed attachment
12. Redesigned step indicator (dots + labels, no wrapping)
13. Increased section heading / member section spacing
14. Restructured back arrow: moved from absolute-positioned inside `<form>` to a `.headingRow` wrapper around the heading. Arrow is now contained within the black heading bar, can't escape bounds on mobile. Added hover opacity transition. Sizes down on ≤1000px.
15. Replaced dark `<img>` arrow with white inline SVG chevron. Now a circular semi-transparent button (`rgba(255,255,255,0.1)` → `0.25` on hover), clearly visible on the black heading bar. No image dependency.
16. Fixed arrow/heading overlap: added `padding-inline: 3.5rem` (3rem on ≤600px) + `box-sizing: border-box` to `.heading` so centered text never collides with the arrow — works universally for all title lengths.
17. Implemented your latest event-wise schema updates: wired real Sheet/Folder IDs for Valorant, BGMI, Treasure Hunt and added event-specific lead/member fields with updated validation.
18. Added `appscript.txt` at workspace root with event-aware `doPost(e)` mapping for Valorant, BGMI, Treasure Hunt and dynamic blank-fill for non-applicable player columns.
19. Updated to Funtopia 6.0 branding
20. **Mobile UI Overhaul (≤1000px)**:
    - Changed event cards from vertical stack to horizontal scroll carousel
    - Cards use 3:4 portrait aspect ratio to show full poster height
    - Added `.scrollSpacer` class for end-of-scroll padding
    - Removed `overflow-x: hidden` from `.mainDiv` to allow nested scroll
21. **Chrome Android Scroll Fix**:
    - Changed `App.css` `overscroll-behavior: none` → `overscroll-behavior-y: none`
    - Removed `scroll-snap-type` and `scroll-snap-align` (caused centering issues)
    - Added `useRef` to cardsGrid with `scrollLeft = 0` reset on mount
    - Added touch-friendly CSS: `touch-action: pan-x pan-y pinch-zoom`
22. **Responsive Breakpoints**:
    - 1000px: Horizontal scroll, 280px card width, 3:4 aspect ratio
    - 600px: 240px card width, tighter spacing
    - 380px: 200px card width for extra small devices
