# Anugraha Care Home — Website

A single-page static website for Anugraha Care Home, a residential elderly
care home in Kerala. Plain HTML/CSS/JS — no build step, no framework,
deploys directly to Netlify's free static hosting.

## Project structure

```
/
├── index.html            Everything — Home, About, Our Care, Facilities,
│                          Everyday Life, Kerala, Testimonials, Contact.
│                          Nav links are in-page anchors (#about, #contact...).
├── privacy-policy.html   Privacy Policy (kept as a separate page)
├── 404.html               Not-found page
├── css/style.css         Design system + all section styles
├── js/config.js          ⭐ Central editable config: org info, contact
│                          details, image paths
├── js/main.js            Nav toggle, form UI, image fallback
├── images/               Drop real photographs here (see images/README.md)
├── favicon.svg
├── robots.txt
├── sitemap.xml
└── netlify.toml
```

There is no separate gallery page — the **Facilities** section (`#facilities`
in `index.html`) doubles as the visual showcase, using the same image slots.

## Editing organisation details

Everything that changes per-organisation — phone number, email, address,
business hours, Google Maps link, social links, and image file paths —
lives in **`js/config.js`**. Edit that one file and the whole site updates;
you do not need to search through the HTML.

## Adding real photographs

Drop image files into `/images` using the exact file names listed in
`images/README.md`. Until a matching local file is present, the site shows
a temporary stock photo (Unsplash, free-to-use) or a labelled placeholder,
so the site never looks broken while real photos are being collected.

## Deploying to Netlify (free tier)

This is a plain static site, so it deploys with no build step:

1. Push this repository to GitHub/GitLab/Bitbucket (or drag-and-drop the
   folder into Netlify's dashboard).
2. In Netlify: **Add new site → Import an existing project**.
3. Build command: leave blank. Publish directory: `.` (repo root).
4. Deploy. That's it — no functions, no server, no cost beyond the free tier.

## Before going live — placeholder / temp-value checklist

Search the codebase for `[Add` / `[Confirm` / `TEMP` to find every
placeholder or temporary demo value. At minimum, replace in `js/config.js`:

- [ ] `officePhoneDisplay` and `officePhoneDial` — currently a TEMP demo number; use the official office phone only (no WhatsApp, no personal mobile)
- [ ] `email` — currently a TEMP demo address
- [ ] `addressLine1`, `addressLine2`, `district`, `pincode` — currently TEMP demo values
- [ ] `enquiryHours`
- [ ] `googleMapsUrl` / `googleMapsEmbedUrl` (once the exact location is confirmed)
- [ ] `yearEstablished` — currently a TEMP demo year
- [ ] `social.*` (leave blank to keep icons hidden if accounts aren't confirmed)
- [ ] All entries under `images` — currently TEMP stock photos from Unsplash; replace every one with a real photograph of Anugraha Care Home

Also replace by hand in `index.html`, since they are organisation-specific narrative content:

- [ ] `#about` → Our Story section (how the home started, founder/management info, philosophy)
- [ ] Testimonial — replace the sample quote with a genuine, permissioned family review
- [ ] `#facilities` — remove any "Confirm availability" tag once that facility is verified
- [ ] Contact section — Google Maps embed, once the address is confirmed
- [ ] LocalBusiness structured data in `<head>` (address/phone/email)
- [ ] `<link rel="canonical">` and Open Graph URLs (currently placeholder domain `anugrahacarehome.example`)
- [ ] `sitemap.xml` and `robots.txt` (update domain once the real one is known)

## Forms

The single enquiry form (in the Contact section, includes an optional
preferred-visit-date field) is UI-only: on submit it shows a confirmation
message but does not send data anywhere yet. Before launch, wire
`js/main.js`'s `wireForms()` submit handler to an email service, backend
API, or a form provider (e.g. Netlify Forms, Formspree).

## Accessibility & performance notes

- Semantic HTML, one `<h1>` per page, logical heading order.
- Visible focus states, skip-to-content link, labelled form fields.
- `prefers-reduced-motion` respected.
- Images are lazy-loaded (except the hero) and fall back to a labelled
  placeholder rather than a broken image icon.
- Google Fonts (Fraunces/Inter/Noto Sans Malayalam) are the only external
  requests the site makes; everything else is self-hosted static files.
