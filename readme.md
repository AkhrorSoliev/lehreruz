# lehrer.uz Design System

**lehrer.uz** ("Lehrer" = *teacher* in German) is an Uzbek online-course marketplace — Udemy-like in structure, but its own product: modern, warm, minimalist. The launch focus is **learning German** (A1 → C1, Goethe/telc exam prep, German for work/Ausbildung/Pflege). Payment is local: **Click, Payme, Uzum** and bank cards, priced in **so‘m**. UI language is **Uzbek (Latin)**, with German as the subject.

Core product surfaces (all in `ui_kits/web/`):
1. **Home** — German-first landing: hero, level picker, popular courses, payment trust, instructors.
2. **Login / sign-up** — lightweight; any input logs you in (demo).
3. **Kurslar (market)** — catalogue with level tags, topic/price/rating filters, sort.
4. **Course page** — info, outcomes, curriculum, instructor, reviews, sticky buy card with payment logos.
5. **Checkout** — Click / Payme / Uzum / card radio cards, promo code, oferta, success.
6. **Mock imtihon** — Goethe-format online exam (Lesen, Hören, Schreiben, Sprechen) with timer and scored result.
7. **Mobile apps** — App Store / Google Play promo on home + footer.
8. **Player** — video, lesson list, files (PDF/MP3/ZIP), comments with video timestamps.

## Sources
- **Brief only** — written by the user in Uzbek (no codebase, Figma, screenshots or brand files). Everything visual here is an original direction created for this system.
- Payment logos: **Payme** — Wikimedia Commons `File:Paymeuz logo.png`; **Uzum** — Wikimedia Commons `File:Uzum logo.png` (both trimmed to `assets/payments/*.png`). **Click** — official SVG at `https://click.uz/click/images/logo.svg` could not be downloaded or hotlinked here; Click's style guide is linked from click.uz (Notion). Until `assets/payments/click.svg` is supplied, Click renders as plain type.
- Icons: **Lucide v0.469.0** (ISC), copied from `lucide-static`.
- Fonts: Google Fonts (OFL), self-hosted in `fonts/`.
- **No logo exists.** The brand is rendered as a typed wordmark (`Wordmark` component) — not a drawn mark.

---

## Index
```
styles.css              ← entry: @imports only
tokens/                 fonts.css · colors.css · typography.css · spacing.css · base.css
fonts/                  Bricolage Grotesque, Onest, JetBrains Mono (woff2, latin + latin-ext)
assets/icons/           75 Lucide SVGs (24×24, stroke=currentColor)
assets/payments/        payme.png · uzum.png  (click.svg pending)
assets/stores/          appstore.svg · googleplay.svg (official badges, via Wikimedia Commons)
guidelines/             17 foundation cards (Colors, Type, Spacing, Brand)
components/             25 React primitives (+ .d.ts, .prompt.md, one card per folder)
ui_kits/web/            interactive web app — index.html + screen JSX
thumbnail.html          homepage tile
SKILL.md                Agent-Skills entry point
```

### Components
- **core/** — Icon, Button, IconButton, Wordmark
- **display/** — Badge, Tag, Avatar, Rating, ProgressBar, Tooltip
- **forms/** — Input, Select, Checkbox, Radio, Switch
- **navigation/** — Tabs
- **feedback/** — Dialog, Toast
- **commerce/** — CourseCover, CourseCard, PriceTag (+ `formatSom` helper), PaymentMethod
- **learning/** — LessonItem, FileItem, Comment

Intentional additions beyond a standard set (no source inventory existed): **Wordmark** (no logo file), **CourseCover** (typographic thumbnails instead of stock imagery), **PriceTag**, **PaymentMethod**, **LessonItem**, **FileItem**, **Comment**, **Rating** — all required by the brief's market/checkout/player flows.

### UI kits
- `ui_kits/web/` — lehrer.uz web app (see its README).

---

## CONTENT FUNDAMENTALS

**Language.** Product UI in Uzbek Latin; German appears as the *subject* — lesson titles, cover words, example sentences, a playful aside ("Viel Erfolg!"). Never mix Russian into UI copy. Use the proper Uzbek apostrophes: **o‘ g‘** (U+2018) in copy, and ’ for tutuq belgisi (ma’lumot, fe’l).

**Voice.** A friendly, competent teacher: warm, encouraging, concrete. Address the learner as **siz** (polite you), never "sen". The company is "biz" sparingly — prefer stating what the learner gets.

**Casing.** Sentence case everywhere: "Kurslarni ko‘rish", "Savatga qo‘shish". Overlines are the only UPPERCASE (`.lz-overline`: "BESTSELLER · A1"). German nouns keep their capitals (der Tisch).

**Rhythm.** Headlines ≤ 7 words, one highlighted word: "Nemis tilini **o‘zbek tilida** o‘rganing." Sub-copy gives one concrete fact: "Har bir dars 8–15 daqiqa: video, lug‘at va mashq." Buttons are verbs: *Sotib olish, Kirish, Yuborish, Keyingi dars*.

**Numbers.** Space thousands, comma decimals: **349 000 so‘m**, **4,8**, **9,5 soat**. Prices always with "so‘m". Discounts as **−40%** (true minus). Dates: "2026-yil sentabr". Durations mono: 12:40.

**Exclamation & emoji.** One "!" allowed for genuine moments (Xush kelibsiz!, To‘lov muvaffaqiyatli!). **No emoji** in UI. German phrases may carry their own punctuation ("Auf geht’s!").

Examples — ✅ "Birinchi darsni bugun boshlang." · "30 kun ichida pulni qaytarish kafolati" · "Kurs “Mening kurslarim” bo‘limida — umrbod." ❌ "🔥 SUPER CHEGIRMA!!!" · "Kursni xarid qilishingizni so‘raymiz" · "Kupit kurs".

---

## VISUAL FOUNDATIONS

**Palette — black, red, gold, quietly.** A nod to the German flag without flag-waving. **Ink** `#14161B` is the primary action and text colour; **Gelb (gold)** `#FFC629` is the brand accent — marker highlights, the *buy* button, focus rings, current-lesson state; **Rot** `#E5383B` only for sale/discount and destructive; **Grün** `#1F9D55` for done/success; **Blau** for info. Surfaces are warm **paper** (`#FAF8F3` page, white cards, `#E8E5DD` hairlines) — never cool grey.

**Der/die/das colour code.** In learning content: **blue = der**, **red = die**, **green = das** — consistent across player slides, worksheets and examples.

**Type.** Display **Bricolage Grotesque** 700–800 with tight tracking (−2 to −4%) for headlines, cover words and big numbers. UI/body **Onest** 400–700. **JetBrains Mono** 500 for timestamps and durations. Display never below 20px; body 16px, captions 13px.

**Signature motif — the marker.** `.lz-mark` paints a flat gold band behind the lower 60% of one word in a headline (like a highlighter on a vocab sheet). One per heading, max.

**Imagery.** No stock photography by default. Course thumbnails are **typographic covers** (`CourseCover`): a flat tone field, a level chip, one German word/phrase in display type, and a giant ghosted level code ("A1") bleeding off the corner. Real photos (instructors, promos) may replace covers via `src`; keep them warm, natural light, no heavy filters. Avatars without photos use warm tinted initials.

**Backgrounds.** Flat colour only. Section rhythm comes from whitespace (64–96px) and occasional full-width **ink** bands (course hero, CTA, footer, player chrome). No gradients except the functional protection gradient under video controls. No textures or patterns.

**Corner radii.** 6 badges · 8–10 small controls · **12 buttons/inputs/covers** · **16 cards** · 20 sticky purchase card · **24 dialogs & CTA bands** · full for tags/pills/avatars.

**Borders & cards.** Cards = white + 1px `--border-hairline` + 16px radius, **no shadow at rest**. Shadow appears only on lift (hover `--shadow-md`), floating UI (purchase card, popovers) and dialogs (`--shadow-lg`). Shadows are soft, ink-tinted, never coloured. No left-border accent cards.

**States.** Hover: ink buttons lighten to ink-700; gold buttons lighten to gold-400; neutral surfaces get `--paper-100` wash; cards lift 2px + shadow and the title gets a gold underline. Press: one step darker + `scale(.98)`. Focus: 3px gold ring (`--focus-ring`) + ink border on inputs. Selected (tags, payment cards): ink fill or ink 2px outline. Disabled: 45% opacity.

**Motion.** Quick and calm: 120ms hovers, 180ms state changes, 280ms progress fills; easing `cubic-bezier(.2,.8,.2,1)`. Fades and short translates (≤4px). No bounce, no parallax.

**Transparency & blur.** Only the modal scrim (`rgba(14,16,20,.52)`, no blur), the player-control protection gradient, and white-alpha text on ink. Sticky header is 94% paper, no blur.

**Layout.** Max width 1240px, 24px gutters, sticky 68px header. Course page = content + 380px sticky buy column overlapping the ink hero. Player = full-bleed video + 360px lesson sidebar. Grids: 4-up on home, 3-up in market beside a 232px filter rail.

---

## ICONOGRAPHY
- **Lucide** line icons (v0.469.0), 2px stroke, round caps/joins, `currentColor`. 75 glyphs are copied to `assets/icons/*.svg` and bundled into the `Icon` component (`components/core/iconData.js`) — no CDN needed. Need another glyph? Copy it from `lucide-static@0.469.0` into both places.
- Sizes: 14–16 inline meta, 18–20 controls, 22–26 feature tiles, 32+ empty states. Fill only for *play*, active *heart*, filled rating *stars* and a liked *thumbs-up*.
- Icon tiles: 44px gold-100 square, 12px radius, gold-700 glyph.
- **No emoji, no unicode-as-icon** (exceptions: "·" separators, "×" speed label, "★" inline in plain-text meta).
- Payment brand marks are **images**, never redrawn. Click logo pending (plain type stand-in).

## Fonts — substitution note
No brand fonts were supplied. Chosen from Google Fonts and self-hosted: **Bricolage Grotesque** (display), **Onest** (UI), **JetBrains Mono** (mono). Swap files in `fonts/` + `tokens/fonts.css` if a licensed face is chosen.
