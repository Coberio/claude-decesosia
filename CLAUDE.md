# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

DecesosIA is a static website for an AI-powered burial insurance project approved for the Spanish Financial Sandbox 2025. The site targets C-Level executives at insurance companies and the DGSFP (regulatory body).

**Live site:** https://coberio.github.io/claude-decesosia/

## Development

This is a static HTML/CSS/JS website with no build process.

### Local Preview
```bash
python3 -m http.server 8080
# Then open http://localhost:8080
```

### Deployment
The site is deployed via GitHub Pages from the `main` branch. Push to `main` to deploy.

## Architecture

```
index.html       # Main landing page
styles.css       # Mobile-first CSS (system fonts, Apple-style)
script.js        # Mobile menu toggle and smooth scroll
privacidad.html  # Privacy policy page
aviso-legal.html # Legal notice page
docs/            # PDF documents (DIU download)
referencias/     # Reference screenshots for design review
```

## Design Guidelines

- **Mobile-first approach** with breakpoints at 768px and 1024px
- **System fonts** (-apple-system, SF Pro) for native Apple feel
- **Minimal palette:** Black (#1d1d1f), grays (#424245, #86868b, #d2d2d7), white
- **Touch targets:** Minimum 44px for buttons and links
- **Accordion:** Uses native `<details>` element (no JS required)

## Key Sections

1. **Hero** - Main value proposition with key stats
2. **Propuesta** - Insurance coverage details
3. **Tecnología** - AI capabilities explanation
4. **Sandbox** - Regulatory framework information
5. **DIU** - Mandatory participant information (accordion + download)

## Pending Task

Add `DIU-DecesosIA.pdf` to the `docs/` folder. Convert from the source `.docx` file.
