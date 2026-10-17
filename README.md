# Mother Touch Cleaning Services

Editorial redesign of the Mother Touch site. Buildless static site, deploys anywhere.

Current source and decisions are recorded in [PROJECT-NOTES.md](PROJECT-NOTES.md), updated 17 October 2026. Those notes supersede older design descriptions below and the original Codex handoff.

## Run locally

```bash
cd mother-touch
python -m http.server 8745
```

Open http://localhost:8745/

## Stack

- Three HTML pages, one shared CSS file, one shared JS file
- Fraunces (display serif) + Manrope (UI), loaded from Google Fonts
- No framework, no build step, no tracking
- Enquiry form prepares a WhatsApp message on the visitor's device. Nothing is sent, stored or emailed by the site itself.
- Honeypot anti-spam on the form (field name `website`).
- Optional property, frequency and equipment details feed into the prepared WhatsApp message. Nothing is sent until the visitor sends it in WhatsApp.

## Design

- Palette: porcelain `#FCF9F8`, blush `#F5E5E9`, deep rose `#873D55`, charcoal `#29252A`, muted `#655A60`, gold `#9A7629`.
- Hero: editorial split, Fraunces display with italic "feels" in rose.
- Services: asymmetric bento (Residential featured in cream, four smaller cards, regular-domestic strip in blush).
- About: image-left, big italic "Hello." headline.
- Process: three steps with gold italic numerals on hairline rules.
- Area: dark ink card with "Cape Town" in soft rose outline.
- FAQ: Fraunces summary lines, plus-to-dash morph.
- Contact: 1:1 form with rose focus ring, three contact-method rows.
- Footer: ink block, large wordmark.

## Before publishing

Confirm with the client:

1. **Public phone and WhatsApp number.** The site uses `+27 63 016 8929`. Older flyer shows `063 609 7548`. Update `app.js` (`WHATSAPP`) and `index.html` (two `wa.me` links) if different.
2. **Email address.** Currently `info@mothertouchcleaning.co.za`. Confirm the mailbox exists.
3. **Domain ownership** for `mothertouchcleaning.co.za`.
4. **Service area.** No suburbs are listed anywhere, by design. Add only confirmed areas later.
5. **Insurance / eco / background-check claims.** None are published. Add only if client confirms with evidence.
6. **Owner photo and short bio.** Not published. About section stays short until the owner provides her name, a real portrait, and a short account of the business.
7. **Images.** `assets/img/hero.jpg` and `assets/img/about.jpg` are illustrative mood photographs, generated. Replace with real cleaned-space photographs when permission is granted.

## Deploy

Any static host works. Netlify drop, Vercel, Cloudflare Pages, GitHub Pages, or a plain FTP upload.

For Vercel:
```
cd mother-touch
vercel --prod
```

No build command, no output directory override. Point the project at the folder root.
