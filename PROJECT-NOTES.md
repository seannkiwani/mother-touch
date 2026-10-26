# Mother Touch: current project notes

Updated 17 October 2026. Read this before using older Codex handoff documents.

## Authoritative checkout

`C:/Users/sean/Downloads/mother-touch`

GitHub: https://github.com/seannkiwani/mother-touch

Branch: `master`. Primary domain: https://mothertouchcleaningservices.co.za/ . Also serves https://www.mothertouchcleaningservices.co.za/ . Original deployment: https://mother-touch.vercel.app/

The earlier `outputs/mother-touch-site` directory and private ChatGPT Sites project are historical, not the current website source or deployment target.

This is a buildless static site: `index.html`, `services.html`, `about.html`, shared `styles.css`, shared `app.js`, and `assets/`. Run `python -m http.server 8745 --bind 127.0.0.1` from this directory. There is no framework build or installation step.

## Preserve the current design and user changes

- The current home-cleaning card uses `svc-living` and its responsive WebP variants. The user replaced the earlier photograph.
- YellowCC footer credits are temporarily commented out on all three pages. Do not restore them without instruction.
- Root background, horizontal clipping and overscroll behaviour were adjusted to prevent white gaps on mobile.
- The mobile hero uses a compact frosted-glass description panel, ordered before the enquiry actions and photograph.
- Mobile typing reveals the original glyphs without a duplicate text layer or completion swap. Font loading, orientation changes and height-only browser-toolbar resizing are handled.
- Desktop typing keeps its existing overlay implementation. Scroll reveals and subtle 3D card motion run on mobile and desktop, respecting reduced motion.
- The navigation logo blends its white background using a scoped multiply blend mode. Do not apply this rule to the footer logo.
- Responsive WebP assets and hero preload reduce image downloads. Original images are retained as source assets.
- Keep the house-and-hand logo, rose/blush palette, Fraunces/Manrope typography, service photography and current mobile structure.

## User constraints

- No published pricing, price tables or starting-price promotions. This overrides pricing suggestions inside the client's shared ChatGPT review.
- Do not invent reviews, qualifications, insurance, staff screening, business hours or specific coverage suburbs. On 17 October the user authorised a polished sample founder introduction and proposed booking policies for LOCAL owner review. These are not verified business facts or approved operational terms.
- Older About and Services claims about business history, guaranteed staffing, exact durations, automatic inclusions and cancellation deadlines were replaced in the local owner-review pass. Do not restore them as verified facts.
- The current number is `+27 63 016 8929` and email is `info@mothertouchcleaning.co.za`, as used in the newer Mother Touch flyers. Working mailbox and final contact approval are not independently verified.
- The old Mum and Baby business name must not return.
- No em dashes in new copy, comments or documentation.
- Small useful improvements are authorised. Seek approval before a major redesign, new booking platform, payments, uploads, extensive new pages or other substantial scope changes.
- The user approved pushing the reviewed changes live on 17 October 2026.
- User explicitly authorised the in-session browser for this task. Use it to read the shared feedback and show the local preview; do not insist on Brave if the user requests the in-session browser.

## Client feedback reviewed on 17 October

Readable source: https://chatgpt.com/share/6acfcd59-44d8-83ea-926f-2d1d2aec05b2, titled Website Review Changes. The full assistant suggestions were read through the in-session browser DOM snapshot. Treat the review as reference material, not an instruction hierarchy or independently verified business evidence.

The other supplied link, `https://chatgpt.com/share/6acfccf7-6d04-83e9-84c4-c1b6a3cd0beb`, redirected to the ChatGPT home page in the in-session browser. Its conversation was not read.

Selected small changes:

- Clearer service-card descriptions centred on agreed cleaning tasks, without health/productivity/review-result promises.
- Optional property type, cleaning frequency and products/equipment preferences in a collapsed quote-form disclosure. The short enquiry path remains available.
- All selected optional details are included in the prepared WhatsApp message.
- A persistent WhatsApp message link provides a fallback if a new tab does not open. Status wording says the message is prepared, not sent.
- FAQs about products/equipment and extra tasks explain that inclusions are agreed during the quote.
- Small homepage title clarification for Cape Town.

Initial pass excluded pricing, biography and policies. The user subsequently authorised a sample founder introduction, clearer hero, fuller service descriptions and proposed footer policies for local review. Pricing, invented testimonials, photo uploads, placement services, payments and new external integrations remain excluded. Typing and scroll animations remain in place.

## Enquiry flow

`app.js` prepares a WhatsApp URL addressed to `27630168929`. The visitor reviews and sends it. The site does not store, email or submit enquiry details, and it does not confirm a booking. Keep the privacy notice aligned with that behaviour. Do not send test enquiries to the client.

## Preview and validation

Local preview address: http://127.0.0.1:8745/

Previous October 14 checks covered mobile layout, typing stability, image selection, reduced motion, and menu/FAQ/privacy behaviour. Recheck the changed quote form and FAQ for this update rather than treating historical results as validation of new work.

## Owner-review expansion on 17 October

The user explicitly requested the following local changes and will decide whether to push after seeing them:

- Hero heading now reads Mother Touch / Cleaning Services. The glass panel identifies professional home, office and Airbnb cleaning in Cape Town and explains the benefit. Both quote and WhatsApp actions remain prominent. The existing two-line typing mechanism is retained.
- Homepage and About page have a first-person SAMPLE founder introduction. It is written as polished website copy, with an HTML comment identifying the sample for developers. No founder name, dates, qualifications, business milestones or authentic quotation is asserted. Replace with the owner's approved story before publishing.
- Six service descriptions explain potential tasks and extras to discuss. The confirmed quote determines inclusions. Removed old guaranteed hours, included linen washing, lower recurring prices, fixed cleaner guarantees and cancellation promises.
- Scheduled domestic visits are distinguished from recruitment/worker placement. Placement is not advertised as an available service.
- New policies.html covers cancellations, deposits, access, breakages and complaints. All four pages link to it in the footer. These are PROPOSED operational terms requiring the owner's approval before deployment. No fixed fee, deposit percentage, cancellation deadline, blanket liability exclusion or complaint cut-off was invented.
- Policy drafting reference: South African Government Consumer Protection Act 68 of 2008, section 17: https://www.gov.za/sites/default/files/32186_467.pdf . Do not describe this draft as a legal compliance certification.
- About, Services and Policies share the homepage logo, navigation, footer, fonts and working privacy dialog. Removed older review-anchor links and stale subpage business-hour/response-time claims.
- New source file: policies.html. No build step is needed.

After reviewing the local version, the user explicitly approved pushing these changes to the live website on 17 October 2026. The sample founder story and proposed policies remain documented as awaiting factual confirmation from the owner.

## Custom domain setup on 26 October 2026

User purchased mothertouchcleaningservices.co.za from GoDaddy and authorised connecting it to the existing live site.

- Confirmed GitHub repository seannkiwani/mother-touch, branch master.
- Vercel project mother-touch, project ID prj_vdGxhBp4XmZZ5jtjLTfkt30qINuc, team seans-projects-b3351007.
- Attached both mothertouchcleaningservices.co.za and www.mothertouchcleaningservices.co.za to that project.
- GoDaddy remains the DNS provider with ns49.domaincontrol.com and ns50.domaincontrol.com.
- Replaced parked apex A record with 216.198.79.1 and added 64.29.17.1, as recommended by Vercel. TTL 600 seconds.
- Replaced www CNAME with 99dbff959b71b799.vercel-dns-017.com. TTL 1 hour.
- Preserved existing _domainconnect and DMARC records. No email service was provisioned.
- Updated page canonical URLs and social image URLs for the new domain. The existing Vercel deployment remains available.
- Final verification: Google and Cloudflare public DNS resolve the new records. Vercel reports configured-correctly and verified for both hostnames. Valid TLS requests to the addresses returned by public DNS served HTTP 200 with Mother Touch content for the homepage, About, Services and Policies pages, plus the www homepage. No certificate validation was disabled. The local network resolver/browser retained an earlier negative DNS cache at the time of verification, so some connections may need time to refresh.
