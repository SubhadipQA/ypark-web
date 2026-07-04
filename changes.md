Change summary
8
Remove completely
11
Modify / improve
4
Keep as-is


Colors & fonts — set these first, everything else follows
Global token changes — do this before touching any section
--ypark-bg
#0A2540
Keep. Primary dark navy background. Correct.
--ypark-bg-deep
#0D1F35
Keep for footer and alternate sections. Slightly deeper than base.
--ypark-accent
#F5A623
NEW. Replace all blue (#0F4CBB) CTAs with this amber. Primary action color for YPark.
--ypark-accent-dark
#E6940F
NEW. Amber hover state for buttons.
--ypark-text
#FFFFFF
Keep. Main headings and body on dark bg.
--ypark-text-muted
#94A3B8
Keep. Subtitles, captions, secondary text.
--ypark-card-bg
#1E3A5F
Keep. Card backgrounds, slightly lifted from base.
--REMOVE blue
#0F4CBB
REMOVE from YPark entirely. This is Prothom Analytica's brand color. Replace every instance with amber #F5A623.
Font
unchanged
Keep Plus Jakarta Sans if already set. If not set, add it now. No font change needed for YPark.


Section 1 — Navbar
1
Navbar
High priority
✕
Remove "A product of Prothom Analytica India" from navbar
It makes YPark look like a sub-page, not an independent product. Move this attribution to the footer only. Footer is the right place for parent brand credit.
→
Change "Download App" button color
#0F4CBB → #F5A623 with dark text #0A2540. This is the primary CTA. It must stand out in amber, not blend with Prothom's blue.
→
Nav links color on hover
Change hover color from blue to #F5A623. Active link underline should also be amber.

Section 2 — Hero
2
Hero section
High priority
✕
Remove "A product of Prothom Analytica India" above the headline
Appears twice — once in navbar, once here above the H1. Remove both. Footer only.
→
Fix headline line break
Current: "Parking in India, finally organized." — the double space mid-sentence is a forced break that looks broken on different screen sizes. Write it as one clean line. Let CSS handle wrapping.
→
Primary CTA button → amber
"Download on Play Store" button: blue → #F5A623 background, #0A2540 text. This is the most important button on the page. Make it impossible to miss.
→
Secondary CTA button → outline white
"List Your Parking Area" should be white outline + white text. Not blue. On dark bg, white outline looks clean and doesn't compete with amber primary.
✕
Remove emoji from the two audience cards
🏢 "For Parking Owners" and 🚗 "For Drivers" — remove emojis. Replace with either a clean SVG icon or just bold text label. Emojis on a product site = unfinished.
→
Audience cards — fix status badge colors
"Operational" badge: use #22C55E green bg + dark text. "Arriving" badge: use amber bg + dark text. Currently likely blue — change both.
Section 3 — The Problem
3
Problem section — "Parking in Indian cities is still running on paper"
High priority
→
Fix section heading line break
Current: "Parking in Indian cities is still running on paper." — double space forced break again. Remove it. One clean sentence.
→
Make the 4 stat numbers MUCH bigger and bolder
₹800Cr+, 90%, 20 min, 0 — these are your most powerful content. Right now they're probably small. Make them: font-size: 56–64px, font-weight: 700, color: #F5A623. The labels below them stay in muted white. This one change alone makes the section 10x more impactful.
→
Problem cards — remove blue accent if any
The 6 problem items (Paper registers, Zero visibility, etc.) — if they have any blue icon or border, change to amber or white.
→
"See how we solve this" link → amber
This CTA link at the bottom of the section: blue → #F5A623.
Section 4 — Parking Types (For Owners)
4
For Owners — "Built for every parking model"
Medium priority
✕
Remove all emojis — 🛣️ 🏢 🏛️
Three cards: Govt Authorized, Private Parking, YAdmin — all have emojis. Replace with clean SVG icons (a road icon, building icon, dashboard icon) or just remove and use a colored number/label instead.
→
"List This Zone →" button color → amber
All card CTA links/buttons: blue → #F5A623.
→
YAdmin card — make it visually distinct
YAdmin is a premium tier. Give its card a slightly different treatment — amber top border or amber badge label to signal it's the highest tier. "Request a Demo" button should be solid amber, not outline.
Section 5 — How It Works
5
How It Works — "Your zone live in 24 hours"
Medium priority
→
Fix heading line break
Current: "Your zone live in 24 hours." — double space again. Remove forced break.
→
Step numbers 01–04 → amber color
The large step numbers: blue → #F5A623. These are visual anchors — they should use the YPark accent, not Prothom's blue.
→
Step connector line → amber
If there's a vertical or horizontal line connecting the 4 steps: blue → amber or white at 20% opacity.
→
Bottom CTA buttons → amber primary, white outline secondary
"Download App" → amber. "Learn More" → white outline.
Section 6 — Features
6
Features — "The full parking stack"
Medium priority
→
Fix heading line break
Current: "The full parking stack, not just one tool." — same double space issue. Clean it up.
→
Feature category labels (Operations, Control, Scale, Discovery) → amber
These eyebrow labels above each feature: blue → #F5A623.
→
Feature link colors → amber
"See owner flow", "View YAdmin" etc.: blue → #F5A623.
→
Bullet point dots/icons → amber
If feature list items have colored dots or checkmarks: blue → #F5A623.
Section 7 — Download
7
Download section — "Get YPark. Start organizing today."
High priority
→
Fix heading line break
Current: "Get YPark. Start organizing today." — remove double space.
✕
Remove emojis from the two audience blocks
🏢 For Parking Owners and 🚗 For Vehicle Owners appear again here. Remove both emojis. Use a simple label or clean icon.
→
"Download YPark" button → solid amber
Most important CTA on this section. Solid #F5A623 background, dark text. Not blue.
→
"Notify Me When Live" button → white outline
This is a secondary/future action. White outline keeps it visible without competing with the amber primary.
Section 8 — FAQ
8
FAQ — "Questions we get asked"
Low priority
→
Accordion open state / active indicator → amber
When an FAQ item is open, the indicator (arrow, border, or +/- icon): blue → #F5A623.
→
Tab labels "For Parking Owners" / "For Vehicle Owners" → amber active state
Active tab underline or background: blue → #F5A623.
→
"Email Us" and "List Your Zone" buttons → amber
Bottom of FAQ section. Both should be amber.
Section 9 — Footer
9
Footer
Low priority
→
Keep "A product of Prothom Analytica" here — this is correct placement
Already in the footer. Good. Just make sure it's the only place it appears on the page now that you've removed it from navbar and hero.
→
Footer link hover color → amber
Any colored hover state on footer links: blue → #F5A623.
→
Social media icons hover → amber
LinkedIn, Instagram, YouTube icon hover: blue → #F5A623.