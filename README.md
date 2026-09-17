# Photographer Portfolio

A single-page portfolio site for a travelling photographer working in Tenerife and Sofia — built with React and Vite, no UI framework and no runtime dependencies beyond React itself.

**Live:** https://250-orcin.vercel.app/

> The site interface and content are in Russian; the code and this README are in English.

## Overview

The site is one scrolling page assembled from independent sections: an intro splash, hero, about, service packages, a filterable portfolio, reviews, FAQ and contacts. All copy lives in a single data file, so the page structure and the text it renders stay separate — editing the site does not mean touching components.

## Features

- **Video intro splash** — plays once per browser session (tracked in `sessionStorage`), with a still photo as an instant poster while the video buffers.
- **Filterable gallery** — portfolio categories (couples, family, business, events) can be switched from the filter row or from a service card further up the page; both paths reset paging.
- **Lightbox** — opens in a portal, with keyboard navigation (`Esc`, `←`, `→`), touch swiping, focus restore on close and a scroll lock on the body.
- **Progressive images** — every photo ships in two widths with a tiny inlined blurred placeholder shown until the full image decodes.
- **Scroll-driven reveals** — sections fade in through `IntersectionObserver`, and the header highlights the section currently in view.
- **Reduced-motion aware** — animations and reveals are disabled when the visitor asks for less motion.
- **Accessibility** — skip link, semantic landmarks, ARIA tabs for the gallery filters and visible focus styles.

## Tech stack

- React 19
- Vite 8
- Plain CSS, one file per component
- Python + Pillow for the image build step

## Project structure

```
public/images/      photos, each with an @sm variant
public/video/       intro clip
scripts/photos.py   image pipeline
src/
  components/
    layout/         header, footer, intro splash
    sections/       hero, about, packages, portfolio, reviews, faq, contact
    ui/             photo, lightbox, button, section primitives, ornaments
  data/
    content.js      all site copy and portfolio entries
    photos.js       generated image map (do not edit by hand)
  hooks/            useInView, useScrollSpy, useScrolled, useBodyLock
  lib/              class name helper, SVG placeholder generator
  styles/base.css   design tokens and global styles
```

## Editing content

All text, portfolio entries, packages, reviews and FAQ items live in [`src/data/content.js`](src/data/content.js). Adding a portfolio photo means dropping the file into `public/images`, running the image script, and adding an entry with its `src`, `cat`, `title` and `ratio`.
