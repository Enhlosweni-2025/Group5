# Website Reconstruction Plan - Mthethweni Farming (Pty) Ltd

Reconstruct and standardize the Mthethweni Farming multi-page website into a polished, formal corporate site. This includes repairing malformed HTML structure across all pages, embedding a unified header/navigation bar with active page indicators, ensuring consistent footers, fixing image scaling/alignment issues, and creating a seamless mobile experience.

## User Review Required

> [!IMPORTANT]
> - **Navigation standardization**: Nav links will be standardized across all pages to: **Home** (`index.html`), **About** (`about.html`), **Products** (`product.html`), **Services** (`service.html`), and **Contact** (`contact.html`).
> - **Active Link Highlighting**: Each page will highlight its corresponding nav link with a distinct visual pill/accent state so users always know which page they are currently on.
> - **Image alignment & sizing**: Images will be constrained using CSS `object-fit` and responsive wrappers to prevent overflowing, unaligned photos, and high-resolution layout breaks.
> - **Script Addition**: A new lightweight `script.js` will be created to handle mobile navigation toggling and interactive features.

## Proposed Changes

### 1. Navigation & Header / Footer System
- Implement identical HTML `<nav class="navbar">` on `index.html`, `about.html`, `product.html`, `service.html`, and `contact.html`.
- Highlight current page using `class="navbar__links active"`.
- Implement identical, complete `footer` section on all 5 pages.
- Add floating WhatsApp quick-contact button across all pages.

---

### 2. File Restructuring & HTML Repairs

#### [MODIFY] [index.html](file:///c:/Users/20257/Downloads/Services/index.html)
- Clean up duplicate `<head>`, `<body>`, section tags, and duplicated direction links (lines 329+).
- Set active link state on "HOME".
- Ensure clean semantic layout from Hero through About, Map, Founders, Features, Products preview, FAQ, and Footer.

#### [MODIFY] [about.html](file:///c:/Users/20257/Downloads/Services/about.html)
- Reconstruct from raw section into a full HTML document (`<!DOCTYPE html>`, `<head>`, `<nav>`, `<footer>`).
- Set active link state on "ABOUT".
- Format About Hero, Vision & Mission, Founders section (COO Zamile Snenhlanhla Ntuli & CEO Malibongwe Mpilo Ngcobo), Sustainable Farming principles, and CTA.

#### [MODIFY] [product.html](file:///c:/Users/20257/Downloads/Services/product.html)
- Reconstruct into a complete HTML document with header, navbar, hero, product showcase cards, pricing & order details, and footer.
- Set active link state on "PRODUCT".
- Fix image src paths (`image/eggs.jpg`, `image/vegetables.jpg`, `image/broilers.png`, `image/portions.png`).

#### [MODIFY] [service.html](file:///c:/Users/20257/Downloads/Services/service.html)
- Add missing navigation bar and footer.
- Set active link state on "SERVICE".
- Polish service cards, bulk orders section, service process steps, and call to action.

#### [MODIFY] [contact.html](file:///c:/Users/20257/Downloads/Services/contact.html)
- Add missing navigation bar and footer.
- Set active link state on "CONTACT".
- Ensure form inputs, contact cards, map section, and business hours align cleanly.

---

### 3. Styling & Scripts

#### [MODIFY] [styles.css](file:///c:/Users/20257/Downloads/Services/styles.css)
- Unify color palette: Deep Forest Green (`#145226`), Vibrant Farm Green (`#1E7A35`), Soft Green Tint (`#E8F5E9`), Warm Gold (`#FFD166`), Dark Charcoal (`#1B1B1B`), Crisp White (`#FFFFFF`).
- Style active nav item pill (`.navbar__links.active`) with high visibility.
- Fix all image containers (`.about-image img`, `.owner img`, `.card img`, `.bulk-image img`) to prevent layout blowing out.
- Ensure proper grid gap, alignment, card hover dynamics, and responsive breakpoints for mobile/tablet screen sizes.

#### [NEW] [script.js](file:///c:/Users/20257/Downloads/Services/script.js)
- Mobile menu toggle handler (`#mobile-menu` and `.navbar__menu.active`).
- Form submission validation/handling for contact form.
- Smooth scroll & dynamic active nav highlight.

---

## Verification Plan

### Automated Tests / Syntax Checks
- Inspect HTML validation and check link references across all files.

### Manual Verification
- Open all 5 pages in browser/preview to ensure:
  1. Navbar is present on every single page.
  2. Active page nav link is clearly highlighted for each respective page.
  3. Images are constrained, properly aligned, and ratio-fitted.
  4. Mobile hamburger navigation opens and closes smoothly.
  5. Form and buttons are clickable and visually aligned.
