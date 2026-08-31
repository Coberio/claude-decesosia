# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

DecesosIA is a static website for an AI-powered burial insurance project approved for the Spanish Financial Sandbox 2025. The site targets C-Level executives at insurance companies and the DGSFP (regulatory body).

**Live site:** https://decesosia.com (custom domain via `CNAME`, served from GitHub Pages)

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
cookies.html     # Cookie policy page
docs/            # DIU-DecesosIA.pdf (public download)
referencias/     # Reference screenshots for design review
```

The three legal pages share the same layout (`.legal-page` / `.legal-content`) and
carry no publication date — the texts are supplied by the client and should be
copied verbatim rather than paraphrased.

## Design Guidelines

- **Mobile-first approach** with breakpoints at 768px and 1024px
- **System fonts** (-apple-system, SF Pro) for native Apple feel
- **Minimal palette:** Black (#1d1d1f), grays (#424245, #86868b, #d2d2d7), white
- **Touch targets:** Minimum 44px for buttons and links
- **Accordion:** Uses native `<details>` element (no JS required)

## Key Sections

Numbered sections on `index.html` (the `01`–`05` labels are `.section-number`):

- **Hero** - Main value proposition, "Participar en el piloto" CTA, key stats (unnumbered)
- **01 Propuesta** - Insurance coverage details
- **02 Tecnología** - AI capabilities explanation
- **03 Sandbox** - Regulatory framework information
- **04 DIU** - Mandatory participant information (accordion + PDF download)
- **05 Participar** - Tally form embed (`#participar`)

The DIU deliberately comes **before** the form: the user should read the mandatory
information and download the document before submitting their details.

The site deliberately has **no direct WhatsApp entry point**. Contacting Álex before
signing the DIU would let users interact with the AI agent outside the Sandbox
protocol, so the form is the only route in: the user picks WhatsApp or a phone call
inside Tally, and contact happens only once the DIU is signed. Do not add a
`wa.me` link back to the landing page.

Adding or reordering a section means updating its `.section-number`, the nav links
(desktop `.nav-links` and `.mobile-menu` are two separate lists), and this file.

## Conventions

- **DIU download:** the file is served as `docs/DIU-DecesosIA.pdf` (ASCII path, since
  spaces and accents in URLs break on GitHub Pages). The `download` attribute renames it
  to `DOCUMENTO INFORMATIVO ÚNICO (DIU) - DECESOSIA.pdf` on the user's machine — keep both
  in sync if the document is replaced.
- **Contact details:** the legal pages use the corporate contacts (`hola@coberio.com`,
  `dpo@coberio.com`, `+34 680 837 887`) exactly as the client's texts specify. The landing
  page itself exposes no contact channel — participation goes through the Tally form.
- **Source documents:** `Documentos DecesosIA/` holds client originals (`.docx`, product PDFs)
  and is untracked working material, not published content.
- **Participation form:** section 04 embeds Tally form `7RkXoZ` with the official
  `data-tally-src` iframe plus `https://tally.so/widgets/embed.js`, loaded once at the end of
  `index.html`. Do not rebuild the fields locally and never put a Tally API key in the frontend —
  only the public form ID belongs here. The field copy, the two required consent checkboxes and
  the confirmation flow are edited in Tally, not in this repo. If `embed.js` fails, the inline
  script reveals `#participar-fallback`, which links to `https://tally.so/r/7RkXoZ`.
