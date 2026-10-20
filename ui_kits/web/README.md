# lehrer.uz — Web UI kit

Click-through recreation of the lehrer.uz learning marketplace (German-language focus). Open `index.html`.

**Flow:** Home → Kurslar (market, filters) → Course page → *Sotib olish* → Login (any input works) → Checkout dialog (Click / Payme / Uzum / card, promo code, oferta) → success → Player (video stage, curriculum, Fayllar, Izohlar). Cart and "Mening kurslarim" are reachable from the header. State persists in `localStorage` (`lehrer-kit-v1`); clear that key to reset the demo.

| File | Surfaces |
|---|---|
| `data.js` | 10 courses, 4 instructors, curriculum, files, comments, reviews |
| `Chrome.jsx` | `SiteHeader` (wordmark, nav, search, cart, auth) · `SiteFooter` |
| `Home.jsx` · `HomeMore.jsx` · `Motion.jsx` · `home.css` | Animated hero (word reveal, marker draw, floating covers, count-up), German phrase marquee, A1–C1 roadmap, popular courses, flashcard + mini-quiz, goals (Studium/Ausbildung/Pflege), payment band, 4 steps, stories, instructors, FAQ accordion, CTA. Scroll-reveal; respects reduced-motion |
| `Market.jsx` | `MarketScreen` (level tags, topic/price/rating filters, sort, grid) · `MyCoursesScreen` |
| `CourseDetail.jsx` | Ink hero band, sticky purchase card, tabs: about / curriculum accordion / instructor / reviews |
| `Checkout.jsx` | `CheckoutDialog` (payment methods, promo, totals, processing → success) · `CartScreen` |
| `Player.jsx` | `PlayerScreen` — dark top bar, simulated video with gender-coloured slide, quiz stage, controls, lesson sidebar, files, comments with timestamps |
| `Exam.jsx` · `ExamData.js` | Mock imtihon (Goethe format): level pick → timed Lesen / Hören (browser TTS, 2 plays) / Schreiben (word counter) / Sprechen (mic UI) → scored result + error review |
| `MobileApp.jsx` | App Store / Google Play badges (`assets/stores/`) + phone mock section |
| `Login.jsx` | Split login / sign-up — no real auth |

All primitives come from the compiled design-system bundle (`window.LehrerUzDesignSystem_0855c7`), destructured once in `index.html`.

There is no production codebase yet — this kit **is** the reference design, not a recreation.
