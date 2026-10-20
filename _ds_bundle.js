/* @ds-bundle: {"format":4,"namespace":"LehrerUzDesignSystem_0855c7","components":[{"name":"CourseCard","sourcePath":"components/commerce/CourseCard.jsx"},{"name":"CourseCover","sourcePath":"components/commerce/CourseCover.jsx"},{"name":"PaymentMethod","sourcePath":"components/commerce/PaymentMethod.jsx"},{"name":"PriceTag","sourcePath":"components/commerce/PriceTag.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Wordmark","sourcePath":"components/core/Wordmark.jsx"},{"name":"ICONS","sourcePath":"components/core/iconData.js"},{"name":"Avatar","sourcePath":"components/display/Avatar.jsx"},{"name":"Badge","sourcePath":"components/display/Badge.jsx"},{"name":"ProgressBar","sourcePath":"components/display/ProgressBar.jsx"},{"name":"Rating","sourcePath":"components/display/Rating.jsx"},{"name":"Tag","sourcePath":"components/display/Tag.jsx"},{"name":"Tooltip","sourcePath":"components/display/Tooltip.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Comment","sourcePath":"components/learning/Comment.jsx"},{"name":"FileItem","sourcePath":"components/learning/FileItem.jsx"},{"name":"LessonItem","sourcePath":"components/learning/LessonItem.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/commerce/CourseCard.jsx":"97d3577d9ff3","components/commerce/CourseCover.jsx":"c0c9ffdc60ea","components/commerce/PaymentMethod.jsx":"797600fc79bb","components/commerce/PriceTag.jsx":"31e9a8cd446b","components/core/Button.jsx":"c621befb6ef3","components/core/Icon.jsx":"ef474f1ee6e6","components/core/IconButton.jsx":"91f61225c659","components/core/Wordmark.jsx":"6570f978be32","components/core/iconData.js":"1e57ed5cec14","components/display/Avatar.jsx":"9d857a2bb683","components/display/Badge.jsx":"f11f79a4d09a","components/display/ProgressBar.jsx":"0793ea2349eb","components/display/Rating.jsx":"a7a66fcb0c1e","components/display/Tag.jsx":"a4ad904870a0","components/display/Tooltip.jsx":"3b6032ac90b4","components/feedback/Dialog.jsx":"16e9c6206938","components/feedback/Toast.jsx":"e40e3e6b4c19","components/forms/Checkbox.jsx":"577b0a35bd38","components/forms/Input.jsx":"6b865a20da2e","components/forms/Radio.jsx":"645411664e7a","components/forms/Select.jsx":"246c2ba8733c","components/forms/Switch.jsx":"77403d8dcc2d","components/learning/Comment.jsx":"46a31ddc3b23","components/learning/FileItem.jsx":"f6f498158b29","components/learning/LessonItem.jsx":"5e899d0dc182","components/navigation/Tabs.jsx":"4bb16d1adf94","ui_kits/web/Checkout.jsx":"e451e130ee48","ui_kits/web/Chrome.jsx":"c198e3430f7c","ui_kits/web/CourseDetail.jsx":"3f94db7817e7","ui_kits/web/Exam.jsx":"b189c429a823","ui_kits/web/ExamData.js":"eca4ffa878d2","ui_kits/web/Home.jsx":"dd6d58c8f8f1","ui_kits/web/HomeMore.jsx":"4cd7baf02e21","ui_kits/web/Login.jsx":"0921d65176ab","ui_kits/web/Market.jsx":"3542c4d381ff","ui_kits/web/MobileApp.jsx":"173c0e7eb234","ui_kits/web/Motion.jsx":"42a709a2f1ba","ui_kits/web/Player.jsx":"b5c6d766f98e","ui_kits/web/data.js":"544d60d26f5b"},"inlinedExternals":[],"unexposedExports":[{"name":"formatSom","sourcePath":"components/commerce/PriceTag.jsx"}]} */

(() => {

const __ds_ns = (window.LehrerUzDesignSystem_0855c7 = window.LehrerUzDesignSystem_0855c7 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/commerce/CourseCover.jsx
try { (() => {
const TONES = {
  gold: {
    bg: 'var(--gold-500)',
    fg: 'var(--ink-900)',
    ghost: 'rgba(20,22,27,0.08)',
    chip: 'var(--ink-900)',
    chipFg: '#fff'
  },
  ink: {
    bg: 'var(--ink-900)',
    fg: '#fff',
    ghost: 'rgba(255,198,41,0.14)',
    chip: 'var(--gold-500)',
    chipFg: 'var(--ink-900)'
  },
  paper: {
    bg: 'var(--paper-100)',
    fg: 'var(--ink-900)',
    ghost: 'rgba(20,22,27,0.06)',
    chip: 'var(--ink-900)',
    chipFg: '#fff'
  },
  red: {
    bg: 'var(--red-500)',
    fg: '#fff',
    ghost: 'rgba(255,255,255,0.14)',
    chip: '#fff',
    chipFg: 'var(--red-700)'
  },
  green: {
    bg: 'var(--green-600)',
    fg: '#fff',
    ghost: 'rgba(255,255,255,0.12)',
    chip: 'var(--gold-500)',
    chipFg: 'var(--ink-900)'
  },
  blue: {
    bg: 'var(--blue-500)',
    fg: '#fff',
    ghost: 'rgba(255,255,255,0.13)',
    chip: '#fff',
    chipFg: 'var(--blue-700)'
  }
};
function CourseCover({
  level = 'A1',
  word = 'Hallo!',
  tone = 'gold',
  label = 'Deutsch',
  src,
  ratio = '16 / 9',
  radius = 12,
  style
}) {
  const t = TONES[tone] || TONES.gold;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: ratio,
      borderRadius: radius,
      overflow: 'hidden',
      background: t.bg,
      color: t.fg,
      containerType: 'inline-size',
      ...style
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      right: '-4cqw',
      bottom: '-14cqw',
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: '62cqw',
      lineHeight: 1,
      letterSpacing: '-0.06em',
      color: t.ghost
    }
  }, level), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: '6cqw',
      top: '6cqw',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '1.6cqw',
      padding: '1.2cqw 2.6cqw',
      borderRadius: 999,
      background: t.chip,
      color: t.chipFg,
      fontFamily: 'var(--font-ui)',
      fontWeight: 700,
      fontSize: 'max(10px, 3.6cqw)',
      letterSpacing: '0.04em',
      textTransform: 'uppercase'
    }
  }, label, " \xB7 ", level), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: '6cqw',
      right: '6cqw',
      bottom: '6cqw',
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: '11cqw',
      lineHeight: 0.98,
      letterSpacing: '-0.04em',
      textWrap: 'balance'
    }
  }, word)));
}
Object.assign(__ds_scope, { CourseCover });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/CourseCover.jsx", error: String((e && e.message) || e) }); }

// components/commerce/PriceTag.jsx
try { (() => {
const formatSom = n => Math.round(n).toLocaleString('ru-RU').replace(/\u00a0/g, ' ') + ' so‘m';
function PriceTag({
  price,
  oldPrice,
  size = 'md',
  free = false,
  showDiscount = true,
  style
}) {
  const fs = size === 'lg' ? 32 : size === 'sm' ? 15 : 18;
  const pct = oldPrice && oldPrice > price ? Math.round((1 - price / oldPrice) * 100) : 0;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'baseline',
      flexWrap: 'wrap',
      gap: size === 'lg' ? 12 : 8,
      fontFamily: 'var(--font-ui)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      fontFamily: size === 'lg' ? 'var(--font-display)' : 'var(--font-ui)',
      fontSize: fs,
      fontWeight: 700,
      letterSpacing: size === 'lg' ? '-0.02em' : '-0.01em',
      color: 'var(--text-strong)'
    }
  }, free ? 'Bepul' : formatSom(price)), !free && oldPrice > price && /*#__PURE__*/React.createElement("s", {
    style: {
      fontSize: Math.round(fs * 0.72),
      color: 'var(--text-subtle)'
    }
  }, formatSom(oldPrice)), !free && showDiscount && pct > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: Math.max(12, Math.round(fs * 0.62)),
      fontWeight: 700,
      color: 'var(--text-sale)'
    }
  }, "\u2212", pct, "%"));
}
Object.assign(__ds_scope, { formatSom, PriceTag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/PriceTag.jsx", error: String((e && e.message) || e) }); }

// components/core/Wordmark.jsx
try { (() => {
function Wordmark({
  size = 26,
  inverse = false,
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: size,
      lineHeight: 1,
      letterSpacing: '-0.04em',
      color: inverse ? 'var(--paper-0)' : 'var(--ink-900)',
      whiteSpace: 'nowrap',
      ...style
    }
  }, "lehrer", /*#__PURE__*/React.createElement("span", {
    style: {
      color: inverse ? 'var(--gold-500)' : 'var(--gold-600)'
    }
  }, ".uz"));
}
Object.assign(__ds_scope, { Wordmark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Wordmark.jsx", error: String((e && e.message) || e) }); }

// components/core/iconData.js
try { (() => {
// Lucide v0.469.0 (ISC) — copied programmatically from lucide-static. Inner SVG markup for a 24×24 viewBox.
const ICONS = {
  "arrow-left": "<path d=\"m12 19-7-7 7-7\" /><path d=\"M19 12H5\" />",
  "arrow-right": "<path d=\"M5 12h14\" /><path d=\"m12 5 7 7-7 7\" />",
  "award": "<path d=\"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526\" /><circle cx=\"12\" cy=\"8\" r=\"6\" />",
  "badge-check": "<path d=\"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z\" /><path d=\"m9 12 2 2 4-4\" />",
  "bell": "<path d=\"M10.268 21a2 2 0 0 0 3.464 0\" /><path d=\"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326\" />",
  "book-open": "<path d=\"M12 7v14\" /><path d=\"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z\" />",
  "bookmark": "<path d=\"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z\" />",
  "calendar": "<path d=\"M8 2v4\" /><path d=\"M16 2v4\" /><rect width=\"18\" height=\"18\" x=\"3\" y=\"4\" rx=\"2\" /><path d=\"M3 10h18\" />",
  "captions": "<rect width=\"18\" height=\"14\" x=\"3\" y=\"5\" rx=\"2\" ry=\"2\" /><path d=\"M7 15h4M15 15h2M7 11h2M13 11h4\" />",
  "check": "<path d=\"M20 6 9 17l-5-5\" />",
  "chevron-down": "<path d=\"m6 9 6 6 6-6\" />",
  "chevron-left": "<path d=\"m15 18-6-6 6-6\" />",
  "chevron-right": "<path d=\"m9 18 6-6-6-6\" />",
  "chevron-up": "<path d=\"m18 15-6-6-6 6\" />",
  "circle-alert": "<circle cx=\"12\" cy=\"12\" r=\"10\" /><line x1=\"12\" x2=\"12\" y1=\"8\" y2=\"12\" /><line x1=\"12\" x2=\"12.01\" y1=\"16\" y2=\"16\" />",
  "circle-check": "<circle cx=\"12\" cy=\"12\" r=\"10\" /><path d=\"m9 12 2 2 4-4\" />",
  "circle-play": "<circle cx=\"12\" cy=\"12\" r=\"10\" /><polygon points=\"10 8 16 12 10 16 10 8\" />",
  "clock": "<circle cx=\"12\" cy=\"12\" r=\"10\" /><polyline points=\"12 6 12 12 16 14\" />",
  "credit-card": "<rect width=\"20\" height=\"14\" x=\"2\" y=\"5\" rx=\"2\" /><line x1=\"2\" x2=\"22\" y1=\"10\" y2=\"10\" />",
  "download": "<path d=\"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4\" /><polyline points=\"7 10 12 15 17 10\" /><line x1=\"12\" x2=\"12\" y1=\"15\" y2=\"3\" />",
  "ellipsis": "<circle cx=\"12\" cy=\"12\" r=\"1\" /><circle cx=\"19\" cy=\"12\" r=\"1\" /><circle cx=\"5\" cy=\"12\" r=\"1\" />",
  "eye": "<path d=\"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0\" /><circle cx=\"12\" cy=\"12\" r=\"3\" />",
  "file-archive": "<path d=\"M10 12v-1\" /><path d=\"M10 18v-2\" /><path d=\"M10 7V6\" /><path d=\"M14 2v4a2 2 0 0 0 2 2h4\" /><path d=\"M15.5 22H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v16a2 2 0 0 0 .274 1.01\" /><circle cx=\"10\" cy=\"20\" r=\"2\" />",
  "file-audio": "<path d=\"M17.5 22h.5a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3\" /><path d=\"M14 2v4a2 2 0 0 0 2 2h4\" /><path d=\"M2 19a2 2 0 1 1 4 0v1a2 2 0 1 1-4 0v-4a6 6 0 0 1 12 0v4a2 2 0 1 1-4 0v-1a2 2 0 1 1 4 0\" />",
  "file-text": "<path d=\"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z\" /><path d=\"M14 2v4a2 2 0 0 0 2 2h4\" /><path d=\"M10 9H8\" /><path d=\"M16 13H8\" /><path d=\"M16 17H8\" />",
  "flame": "<path d=\"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z\" />",
  "gauge": "<path d=\"m12 14 4-4\" /><path d=\"M3.34 19a10 10 0 1 1 17.32 0\" />",
  "globe": "<circle cx=\"12\" cy=\"12\" r=\"10\" /><path d=\"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20\" /><path d=\"M2 12h20\" />",
  "graduation-cap": "<path d=\"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z\" /><path d=\"M22 10v6\" /><path d=\"M6 12.5V16a6 3 0 0 0 12 0v-3.5\" />",
  "headphones": "<path d=\"M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3\" />",
  "heart": "<path d=\"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z\" />",
  "infinity": "<path d=\"M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4Zm0 0c2 2.67 4 4 6 4a4 4 0 0 0 0-8c-2 0-4 1.33-6 4Z\" />",
  "info": "<circle cx=\"12\" cy=\"12\" r=\"10\" /><path d=\"M12 16v-4\" /><path d=\"M12 8h.01\" />",
  "languages": "<path d=\"m5 8 6 6\" /><path d=\"m4 14 6-6 2-3\" /><path d=\"M2 5h12\" /><path d=\"M7 2h1\" /><path d=\"m22 22-5-10-5 10\" /><path d=\"M14 18h6\" />",
  "layout-grid": "<rect width=\"7\" height=\"7\" x=\"3\" y=\"3\" rx=\"1\" /><rect width=\"7\" height=\"7\" x=\"14\" y=\"3\" rx=\"1\" /><rect width=\"7\" height=\"7\" x=\"14\" y=\"14\" rx=\"1\" /><rect width=\"7\" height=\"7\" x=\"3\" y=\"14\" rx=\"1\" />",
  "library": "<path d=\"m16 6 4 14\" /><path d=\"M12 6v14\" /><path d=\"M8 8v12\" /><path d=\"M4 4v16\" />",
  "list": "<path d=\"M3 12h.01\" /><path d=\"M3 18h.01\" /><path d=\"M3 6h.01\" /><path d=\"M8 12h13\" /><path d=\"M8 18h13\" /><path d=\"M8 6h13\" />",
  "lock": "<rect width=\"18\" height=\"11\" x=\"3\" y=\"11\" rx=\"2\" ry=\"2\" /><path d=\"M7 11V7a5 5 0 0 1 10 0v4\" />",
  "log-in": "<path d=\"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4\" /><polyline points=\"10 17 15 12 10 7\" /><line x1=\"15\" x2=\"3\" y1=\"12\" y2=\"12\" />",
  "log-out": "<path d=\"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4\" /><polyline points=\"16 17 21 12 16 7\" /><line x1=\"21\" x2=\"9\" y1=\"12\" y2=\"12\" />",
  "mail": "<rect width=\"20\" height=\"16\" x=\"2\" y=\"4\" rx=\"2\" /><path d=\"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7\" />",
  "maximize": "<path d=\"M8 3H5a2 2 0 0 0-2 2v3\" /><path d=\"M21 8V5a2 2 0 0 0-2-2h-3\" /><path d=\"M3 16v3a2 2 0 0 0 2 2h3\" /><path d=\"M16 21h3a2 2 0 0 0 2-2v-3\" />",
  "menu": "<line x1=\"4\" x2=\"20\" y1=\"12\" y2=\"12\" /><line x1=\"4\" x2=\"20\" y1=\"6\" y2=\"6\" /><line x1=\"4\" x2=\"20\" y1=\"18\" y2=\"18\" />",
  "message-circle": "<path d=\"M7.9 20A9 9 0 1 0 4 16.1L2 22Z\" />",
  "mic": "<path d=\"M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z\" /><path d=\"M19 10v2a7 7 0 0 1-14 0v-2\" /><line x1=\"12\" x2=\"12\" y1=\"19\" y2=\"22\" />",
  "minus": "<path d=\"M5 12h14\" />",
  "monitor-play": "<path d=\"M10 7.75a.75.75 0 0 1 1.142-.638l3.664 2.249a.75.75 0 0 1 0 1.278l-3.664 2.25a.75.75 0 0 1-1.142-.64z\" /><path d=\"M12 17v4\" /><path d=\"M8 21h8\" /><rect x=\"2\" y=\"3\" width=\"20\" height=\"14\" rx=\"2\" />",
  "notebook-pen": "<path d=\"M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4\" /><path d=\"M2 6h4\" /><path d=\"M2 10h4\" /><path d=\"M2 14h4\" /><path d=\"M2 18h4\" /><path d=\"M21.378 5.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z\" />",
  "paperclip": "<path d=\"M13.234 20.252 21 12.3\" /><path d=\"m16 6-8.414 8.586a2 2 0 0 0 0 2.828 2 2 0 0 0 2.828 0l8.414-8.586a4 4 0 0 0 0-5.656 4 4 0 0 0-5.656 0l-8.415 8.585a6 6 0 1 0 8.486 8.486\" />",
  "pause": "<rect x=\"14\" y=\"4\" width=\"4\" height=\"16\" rx=\"1\" /><rect x=\"6\" y=\"4\" width=\"4\" height=\"16\" rx=\"1\" />",
  "percent": "<line x1=\"19\" x2=\"5\" y1=\"5\" y2=\"19\" /><circle cx=\"6.5\" cy=\"6.5\" r=\"2.5\" /><circle cx=\"17.5\" cy=\"17.5\" r=\"2.5\" />",
  "phone": "<path d=\"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z\" />",
  "play": "<polygon points=\"6 3 20 12 6 21 6 3\" />",
  "plus": "<path d=\"M5 12h14\" /><path d=\"M12 5v14\" />",
  "rotate-ccw": "<path d=\"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8\" /><path d=\"M3 3v5h5\" />",
  "search": "<circle cx=\"11\" cy=\"11\" r=\"8\" /><path d=\"m21 21-4.3-4.3\" />",
  "send": "<path d=\"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z\" /><path d=\"m21.854 2.147-10.94 10.939\" />",
  "settings": "<path d=\"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z\" /><circle cx=\"12\" cy=\"12\" r=\"3\" />",
  "shield-check": "<path d=\"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z\" /><path d=\"m9 12 2 2 4-4\" />",
  "shopping-cart": "<circle cx=\"8\" cy=\"21\" r=\"1\" /><circle cx=\"19\" cy=\"21\" r=\"1\" /><path d=\"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12\" />",
  "skip-back": "<polygon points=\"19 20 9 12 19 4 19 20\" /><line x1=\"5\" x2=\"5\" y1=\"19\" y2=\"5\" />",
  "skip-forward": "<polygon points=\"5 4 15 12 5 20 5 4\" /><line x1=\"19\" x2=\"19\" y1=\"5\" y2=\"19\" />",
  "sliders-horizontal": "<line x1=\"21\" x2=\"14\" y1=\"4\" y2=\"4\" /><line x1=\"10\" x2=\"3\" y1=\"4\" y2=\"4\" /><line x1=\"21\" x2=\"12\" y1=\"12\" y2=\"12\" /><line x1=\"8\" x2=\"3\" y1=\"12\" y2=\"12\" /><line x1=\"21\" x2=\"16\" y1=\"20\" y2=\"20\" /><line x1=\"12\" x2=\"3\" y1=\"20\" y2=\"20\" /><line x1=\"14\" x2=\"14\" y1=\"2\" y2=\"6\" /><line x1=\"8\" x2=\"8\" y1=\"10\" y2=\"14\" /><line x1=\"16\" x2=\"16\" y1=\"18\" y2=\"22\" />",
  "smartphone": "<rect width=\"14\" height=\"20\" x=\"5\" y=\"2\" rx=\"2\" ry=\"2\" /><path d=\"M12 18h.01\" />",
  "square-play": "<rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\" /><path d=\"m9 8 6 4-6 4Z\" />",
  "star": "<path d=\"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z\" />",
  "tag": "<path d=\"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z\" /><circle cx=\"7.5\" cy=\"7.5\" r=\".5\" fill=\"currentColor\" />",
  "thumbs-up": "<path d=\"M7 10v12\" /><path d=\"M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z\" />",
  "trash-2": "<path d=\"M3 6h18\" /><path d=\"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6\" /><path d=\"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2\" /><line x1=\"10\" x2=\"10\" y1=\"11\" y2=\"17\" /><line x1=\"14\" x2=\"14\" y1=\"11\" y2=\"17\" />",
  "trending-up": "<polyline points=\"22 7 13.5 15.5 8.5 10.5 2 17\" /><polyline points=\"16 7 22 7 22 13\" />",
  "user": "<path d=\"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2\" /><circle cx=\"12\" cy=\"7\" r=\"4\" />",
  "users": "<path d=\"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2\" /><circle cx=\"9\" cy=\"7\" r=\"4\" /><path d=\"M22 21v-2a4 4 0 0 0-3-3.87\" /><path d=\"M16 3.13a4 4 0 0 1 0 7.75\" />",
  "volume-2": "<path d=\"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z\" /><path d=\"M16 9a5 5 0 0 1 0 6\" /><path d=\"M19.364 18.364a9 9 0 0 0 0-12.728\" />",
  "volume-x": "<path d=\"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z\" /><line x1=\"22\" x2=\"16\" y1=\"9\" y2=\"15\" /><line x1=\"16\" x2=\"22\" y1=\"9\" y2=\"15\" />",
  "x": "<path d=\"M18 6 6 18\" /><path d=\"m6 6 12 12\" />"
};
Object.assign(__ds_scope, { ICONS });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/iconData.js", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function Icon({
  name,
  size = 20,
  strokeWidth = 2,
  color = 'currentColor',
  fill = 'none',
  style,
  title
}) {
  const inner = __ds_scope.ICONS[name];
  if (!inner) return null;
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: fill,
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": title ? undefined : true,
    role: title ? 'img' : undefined,
    style: {
      flex: 'none',
      display: 'block',
      ...style
    },
    dangerouslySetInnerHTML: {
      __html: (title ? '<title>' + title + '</title>' : '') + inner
    }
  });
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/commerce/PaymentMethod.jsx
try { (() => {
const {
  useState
} = React;
const NAMES = {
  click: 'Click',
  payme: 'Payme',
  uzum: 'Uzum',
  card: 'Bank kartasi'
};
function PaymentMethod({
  provider = 'click',
  logoSrc,
  title,
  subtitle,
  selected = false,
  onSelect,
  style
}) {
  const [hover, setHover] = useState(false);
  const [broken, setBroken] = useState(false);
  const name = title || NAMES[provider] || provider;
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    role: "radio",
    "aria-checked": selected,
    onClick: () => onSelect && onSelect(provider),
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      width: '100%',
      minHeight: 64,
      padding: '12px 16px',
      borderRadius: 14,
      cursor: 'pointer',
      textAlign: 'left',
      background: 'var(--surface-card)',
      fontFamily: 'var(--font-ui)',
      border: '1px solid ' + (selected ? 'var(--ink-900)' : hover ? 'var(--ink-400)' : 'var(--border-default)'),
      boxShadow: selected ? 'inset 0 0 0 1px var(--ink-900), var(--focus-ring)' : 'none',
      transition: 'border-color var(--dur-fast) var(--ease-out)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      borderRadius: '50%',
      flex: 'none',
      background: '#fff',
      border: selected ? '6px solid var(--ink-900)' : '1.5px solid var(--ink-300)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 96,
      height: 32,
      flex: 'none',
      display: 'flex',
      alignItems: 'center'
    }
  }, provider === 'card' ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "credit-card",
    size: 26,
    color: "var(--ink-900)"
  }) : logoSrc && !broken ? /*#__PURE__*/React.createElement("img", {
    src: logoSrc,
    alt: name,
    onError: () => setBroken(true),
    style: {
      maxHeight: 26,
      maxWidth: 96,
      objectFit: 'contain'
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 18,
      fontWeight: 700,
      color: 'var(--ink-900)'
    }
  }, name)), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, provider === 'card' ? name : name + ' orqali'), subtitle && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, subtitle)));
}
Object.assign(__ds_scope, { PaymentMethod });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/PaymentMethod.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
const {
  useState
} = React;
const SIZES = {
  sm: {
    height: 36,
    padding: '0 14px',
    fontSize: 14,
    gap: 6,
    icon: 16,
    radius: 10
  },
  md: {
    height: 44,
    padding: '0 18px',
    fontSize: 15,
    gap: 8,
    icon: 18,
    radius: 12
  },
  lg: {
    height: 52,
    padding: '0 24px',
    fontSize: 16,
    gap: 10,
    icon: 20,
    radius: 12
  }
};
const VARIANTS = {
  primary: {
    bg: 'var(--action-primary)',
    hover: 'var(--action-primary-hover)',
    press: 'var(--action-primary-press)',
    fg: 'var(--text-inverse)',
    border: 'transparent'
  },
  accent: {
    bg: 'var(--action-accent)',
    hover: 'var(--action-accent-hover)',
    press: 'var(--action-accent-press)',
    fg: 'var(--text-on-gold)',
    border: 'transparent'
  },
  secondary: {
    bg: 'var(--surface-card)',
    hover: 'var(--paper-100)',
    press: 'var(--paper-200)',
    fg: 'var(--text-strong)',
    border: 'var(--border-default)'
  },
  ghost: {
    bg: 'transparent',
    hover: 'var(--action-ghost-hover)',
    press: 'var(--paper-200)',
    fg: 'var(--text-strong)',
    border: 'transparent'
  },
  danger: {
    bg: 'var(--red-500)',
    hover: 'var(--red-600)',
    press: 'var(--red-700)',
    fg: 'var(--text-inverse)',
    border: 'transparent'
  },
  inverse: {
    bg: 'var(--paper-0)',
    hover: 'var(--gold-100)',
    press: 'var(--gold-200)',
    fg: 'var(--ink-900)',
    border: 'transparent'
  }
};
function Button({
  children,
  variant = 'primary',
  size = 'md',
  iconLeft,
  iconRight,
  fullWidth = false,
  disabled = false,
  type = 'button',
  onClick,
  style
}) {
  const [hover, setHover] = useState(false);
  const [press, setPress] = useState(false);
  const s = SIZES[size] || SIZES.md;
  const v = VARIANTS[variant] || VARIANTS.primary;
  const bg = disabled ? v.bg : press ? v.press : hover ? v.hover : v.bg;
  return /*#__PURE__*/React.createElement("button", {
    type: type,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: s.gap,
      height: s.height,
      padding: s.padding,
      width: fullWidth ? '100%' : undefined,
      fontFamily: 'var(--font-ui)',
      fontSize: s.fontSize,
      fontWeight: 600,
      letterSpacing: '-0.005em',
      whiteSpace: 'nowrap',
      color: v.fg,
      background: bg,
      border: '1px solid ' + v.border,
      borderRadius: s.radius,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      transform: press && !disabled ? 'scale(0.98)' : 'none',
      transition: 'background var(--dur-fast) var(--ease-out), transform var(--dur-fast) var(--ease-out)',
      ...style
    }
  }, iconLeft && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconLeft,
    size: s.icon
  }), children, iconRight && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconRight,
    size: s.icon
  }));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
const {
  useState
} = React;
const SIZES = {
  sm: [32, 16, 8],
  md: [40, 20, 10],
  lg: [48, 22, 12]
};
const VARIANTS = {
  ghost: {
    bg: 'transparent',
    hover: 'var(--paper-100)',
    fg: 'var(--text-strong)',
    border: 'transparent'
  },
  secondary: {
    bg: 'var(--surface-card)',
    hover: 'var(--paper-100)',
    fg: 'var(--text-strong)',
    border: 'var(--border-default)'
  },
  primary: {
    bg: 'var(--action-primary)',
    hover: 'var(--action-primary-hover)',
    fg: 'var(--text-inverse)',
    border: 'transparent'
  },
  accent: {
    bg: 'var(--action-accent)',
    hover: 'var(--action-accent-hover)',
    fg: 'var(--ink-900)',
    border: 'transparent'
  },
  player: {
    bg: 'transparent',
    hover: 'rgba(255,255,255,0.12)',
    fg: '#fff',
    border: 'transparent'
  }
};
function IconButton({
  icon,
  label,
  variant = 'ghost',
  size = 'md',
  round = false,
  active = false,
  badge,
  disabled = false,
  onClick,
  style
}) {
  const [hover, setHover] = useState(false);
  const [d, i, r] = SIZES[size] || SIZES.md;
  const v = VARIANTS[variant] || VARIANTS.ghost;
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": label,
    title: label,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: 'relative',
      width: d,
      height: d,
      padding: 0,
      flex: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: active && variant !== 'player' ? 'var(--ink-900)' : v.fg,
      background: active && variant !== 'player' ? 'var(--gold-100)' : hover && !disabled ? v.hover : v.bg,
      border: '1px solid ' + v.border,
      borderRadius: round ? 999 : r,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.4 : 1,
      transition: 'background var(--dur-fast) var(--ease-out)',
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: i,
    fill: active && icon === 'heart' ? 'currentColor' : 'none'
  }), badge != null && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: -4,
      right: -4,
      minWidth: 18,
      height: 18,
      padding: '0 5px',
      borderRadius: 999,
      background: 'var(--red-500)',
      color: '#fff',
      fontSize: 11,
      fontWeight: 700,
      lineHeight: '18px',
      fontFamily: 'var(--font-ui)',
      boxShadow: '0 0 0 2px var(--paper-0)'
    }
  }, badge));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/display/Avatar.jsx
try { (() => {
const PALETTE = [['var(--gold-100)', 'var(--gold-700)'], ['var(--green-100)', 'var(--green-700)'], ['var(--blue-100)', 'var(--blue-700)'], ['var(--red-100)', 'var(--red-700)'], ['var(--paper-200)', 'var(--ink-700)']];
function Avatar({
  name = '',
  src,
  size = 40,
  ring = false,
  style
}) {
  const initials = name.split(/\s+/).filter(Boolean).slice(0, 2).map(w => w[0]).join('').toUpperCase();
  const idx = [...name].reduce((a, c) => a + c.charCodeAt(0), 0) % PALETTE.length;
  const [bg, fg] = PALETTE[idx];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      width: size,
      height: size,
      borderRadius: '50%',
      flex: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      background: bg,
      color: fg,
      fontFamily: 'var(--font-ui)',
      fontWeight: 700,
      fontSize: Math.round(size * 0.38),
      boxShadow: ring ? '0 0 0 2px var(--paper-0), 0 0 0 4px var(--gold-500)' : 'none',
      ...style
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : initials);
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/display/Badge.jsx
try { (() => {
const TONES = {
  neutral: ['var(--paper-100)', 'var(--ink-700)'],
  gold: ['var(--gold-500)', 'var(--ink-900)'],
  goldSoft: ['var(--gold-100)', 'var(--gold-700)'],
  success: ['var(--status-success-soft)', 'var(--status-success-text)'],
  danger: ['var(--status-danger-soft)', 'var(--status-danger-text)'],
  sale: ['var(--red-500)', '#fff'],
  info: ['var(--status-info-soft)', 'var(--status-info-text)'],
  inverse: ['var(--ink-900)', '#fff']
};
function Badge({
  children,
  tone = 'neutral',
  size = 'md',
  icon,
  style
}) {
  const [bg, fg] = TONES[tone] || TONES.neutral;
  const sm = size === 'sm';
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4,
      height: sm ? 20 : 24,
      padding: sm ? '0 6px' : '0 8px',
      borderRadius: 6,
      background: bg,
      color: fg,
      fontFamily: 'var(--font-ui)',
      fontSize: sm ? 11 : 12,
      fontWeight: 600,
      letterSpacing: '0.01em',
      whiteSpace: 'nowrap',
      ...style
    }
  }, icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: sm ? 12 : 14,
    strokeWidth: 2.25
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/display/ProgressBar.jsx
try { (() => {
const TONES = {
  gold: 'var(--gold-500)',
  success: 'var(--green-500)',
  ink: 'var(--ink-900)',
  inverse: 'var(--gold-500)'
};
function ProgressBar({
  value = 0,
  tone = 'gold',
  height = 6,
  label,
  showValue = false,
  style
}) {
  const v = Math.max(0, Math.min(100, value));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...style
    }
  }, (label || showValue) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontFamily: 'var(--font-ui)',
      fontSize: 13,
      color: tone === 'inverse' ? 'rgba(255,255,255,.7)' : 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", null, label), showValue && /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      color: tone === 'inverse' ? '#fff' : 'var(--text-strong)'
    }
  }, Math.round(v), "%")), /*#__PURE__*/React.createElement("div", {
    style: {
      height,
      borderRadius: 999,
      background: tone === 'inverse' ? 'rgba(255,255,255,.18)' : 'var(--paper-200)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: v + '%',
      height: '100%',
      borderRadius: 999,
      background: TONES[tone] || TONES.gold,
      transition: 'width var(--dur-slow) var(--ease-out)'
    }
  })));
}
Object.assign(__ds_scope, { ProgressBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/ProgressBar.jsx", error: String((e && e.message) || e) }); }

// components/display/Rating.jsx
try { (() => {
function Rating({
  value = 0,
  count,
  size = 'md',
  showValue = true,
  style
}) {
  const px = size === 'sm' ? 13 : size === 'lg' ? 18 : 15;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontFamily: 'var(--font-ui)',
      fontSize: px,
      ...style
    }
  }, showValue && /*#__PURE__*/React.createElement("b", {
    style: {
      fontWeight: 700,
      color: 'var(--gold-700)'
    }
  }, value.toFixed(1).replace('.', ',')), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      gap: 1,
      color: 'var(--rating-star)'
    }
  }, [0, 1, 2, 3, 4].map(i => /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    key: i,
    name: "star",
    size: px,
    strokeWidth: 1.75,
    fill: value >= i + 0.75 ? 'currentColor' : 'none',
    color: value >= i + 0.25 ? 'currentColor' : 'var(--ink-300)'
  }))), count != null && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)',
      fontSize: px - 1
    }
  }, "(", count.toLocaleString('ru-RU'), ")"));
}
Object.assign(__ds_scope, { Rating });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Rating.jsx", error: String((e && e.message) || e) }); }

// components/commerce/CourseCard.jsx
try { (() => {
const {
  useState
} = React;
function CourseCard({
  course = {},
  progress,
  layout = 'vertical',
  onClick,
  style
}) {
  const [hover, setHover] = useState(false);
  const c = {
    title: 'Nemis tili A1: noldan boshlab',
    instructor: 'Dilnoza Karimova',
    rating: 4.8,
    reviews: 1240,
    price: 349000,
    oldPrice: 590000,
    level: 'A1',
    cover: {},
    lessons: 42,
    hours: 9.5,
    ...course
  };
  const horizontal = layout === 'horizontal';
  return /*#__PURE__*/React.createElement("article", {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      flexDirection: horizontal ? 'row' : 'column',
      gap: horizontal ? 20 : 12,
      cursor: onClick ? 'pointer' : 'default',
      fontFamily: 'var(--font-ui)',
      minWidth: 0,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      flex: horizontal ? '0 0 260px' : 'none',
      transform: hover ? 'translateY(-2px)' : 'none',
      boxShadow: hover ? 'var(--shadow-md)' : 'none',
      borderRadius: 12,
      transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.CourseCover, {
    level: c.level,
    tone: c.cover.tone,
    word: c.cover.word,
    label: c.cover.label,
    src: c.cover.src
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      minWidth: 0,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-ui)',
      fontSize: 16,
      fontWeight: 700,
      lineHeight: 1.3,
      letterSpacing: '-0.01em',
      color: 'var(--text-strong)',
      textDecoration: hover ? 'underline' : 'none',
      textDecorationColor: 'var(--gold-500)',
      textDecorationThickness: 2,
      textUnderlineOffset: 3
    }
  }, c.title), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, c.instructor), progress == null ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(__ds_scope.Rating, {
    value: c.rating,
    count: c.reviews,
    size: "sm"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "circle-play",
    size: 14
  }), c.lessons, " dars"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "clock",
    size: 14
  }), String(c.hours).replace('.', ','), " soat")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      flexWrap: 'wrap',
      marginTop: 2
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.PriceTag, {
    price: c.price,
    oldPrice: c.oldPrice,
    size: "sm",
    showDiscount: false
  }), c.badge && /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: c.badge === 'Bestseller' ? 'gold' : c.badge === 'Yangi' ? 'info' : 'goldSoft',
    size: "sm"
  }, c.badge))) : /*#__PURE__*/React.createElement(__ds_scope.ProgressBar, {
    value: progress,
    label: progress >= 100 ? 'Tugallandi' : 'Davom etmoqda',
    showValue: true,
    tone: progress >= 100 ? 'success' : 'gold',
    style: {
      marginTop: 6
    }
  })));
}
Object.assign(__ds_scope, { CourseCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/CourseCard.jsx", error: String((e && e.message) || e) }); }

// components/display/Tag.jsx
try { (() => {
const {
  useState
} = React;
function Tag({
  children,
  selected = false,
  icon,
  count,
  onClick,
  style
}) {
  const [hover, setHover] = useState(false);
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      height: 36,
      padding: '0 14px',
      borderRadius: 999,
      fontFamily: 'var(--font-ui)',
      fontSize: 14,
      fontWeight: 500,
      cursor: 'pointer',
      whiteSpace: 'nowrap',
      background: selected ? 'var(--ink-900)' : hover ? 'var(--paper-100)' : 'var(--surface-card)',
      color: selected ? '#fff' : 'var(--text-strong)',
      border: '1px solid ' + (selected ? 'var(--ink-900)' : 'var(--border-default)'),
      transition: 'background var(--dur-fast) var(--ease-out)',
      ...style
    }
  }, icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 16
  }), children, count != null && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      opacity: 0.6,
      fontWeight: 500
    }
  }, count));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Tag.jsx", error: String((e && e.message) || e) }); }

// components/display/Tooltip.jsx
try { (() => {
const {
  useState
} = React;
function Tooltip({
  label,
  children,
  placement = 'top',
  open,
  style
}) {
  const [hover, setHover] = useState(false);
  const show = open ?? hover;
  const pos = placement === 'bottom' ? {
    top: 'calc(100% + 8px)'
  } : {
    bottom: 'calc(100% + 8px)'
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-flex',
      ...style
    },
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, children, /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: 'absolute',
      left: '50%',
      ...pos,
      transform: 'translateX(-50%) translateY(' + (show ? 0 : placement === 'bottom' ? -4 : 4) + 'px)',
      opacity: show ? 1 : 0,
      pointerEvents: 'none',
      whiteSpace: 'nowrap',
      zIndex: 50,
      background: 'var(--ink-900)',
      color: '#fff',
      fontFamily: 'var(--font-ui)',
      fontSize: 12,
      fontWeight: 500,
      lineHeight: 1.3,
      padding: '6px 10px',
      borderRadius: 8,
      boxShadow: 'var(--shadow-md)',
      transition: 'opacity var(--dur-fast) var(--ease-out), transform var(--dur-fast) var(--ease-out)'
    }
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
const {
  useEffect
} = React;
function Dialog({
  open = false,
  onClose,
  title,
  subtitle,
  children,
  footer,
  width = 520,
  style
}) {
  useEffect(() => {
    if (!open) return;
    const k = e => {
      if (e.key === 'Escape' && onClose) onClose();
    };
    window.addEventListener('keydown', k);
    return () => window.removeEventListener('keydown', k);
  }, [open, onClose]);
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 100,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 24,
      background: 'rgba(14,16,20,0.52)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    onClick: e => e.stopPropagation(),
    style: {
      width: '100%',
      maxWidth: width,
      maxHeight: 'calc(100vh - 48px)',
      overflow: 'auto',
      background: 'var(--surface-raised)',
      borderRadius: 24,
      boxShadow: 'var(--shadow-lg)',
      fontFamily: 'var(--font-ui)',
      ...style
    }
  }, (title || onClose) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 16,
      padding: '24px 24px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 24,
      fontWeight: 700,
      letterSpacing: '-0.02em',
      color: 'var(--text-strong)',
      lineHeight: 1.2
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--text-muted)'
    }
  }, subtitle)), onClose && /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "x",
    label: "Yopish",
    size: "sm",
    variant: "ghost",
    onClick: onClose
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 12,
      padding: '16px 24px',
      borderTop: '1px solid var(--border-hairline)'
    }
  }, footer)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
const TONES = {
  success: ['circle-check', 'var(--green-500)'],
  info: ['info', 'var(--gold-500)'],
  danger: ['circle-alert', 'var(--red-500)']
};
function Toast({
  tone = 'success',
  title,
  message,
  action,
  onAction,
  onClose,
  style
}) {
  const [icon, color] = TONES[tone] || TONES.info;
  return /*#__PURE__*/React.createElement("div", {
    role: "status",
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 12,
      width: 380,
      maxWidth: '100%',
      padding: '14px 14px 14px 16px',
      borderRadius: 14,
      background: 'var(--ink-900)',
      color: '#fff',
      boxShadow: 'var(--shadow-lg)',
      fontFamily: 'var(--font-ui)',
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 20,
    color: color,
    style: {
      marginTop: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 600
    }
  }, title), message && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'rgba(255,255,255,.7)',
      lineHeight: 1.45
    }
  }, message)), action && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onAction,
    style: {
      border: 0,
      background: 'transparent',
      color: 'var(--gold-500)',
      fontWeight: 600,
      fontSize: 14,
      cursor: 'pointer',
      padding: '2px 4px'
    }
  }, action), onClose && /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Yopish",
    onClick: onClose,
    style: {
      border: 0,
      background: 'transparent',
      color: 'rgba(255,255,255,.6)',
      cursor: 'pointer',
      padding: 0
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 18
  })));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  checked = false,
  onChange,
  label,
  description,
  disabled = false,
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      fontFamily: 'var(--font-ui)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: checked,
    disabled: disabled,
    onChange: e => onChange && onChange(e.target.checked),
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      marginTop: 1,
      borderRadius: 6,
      flex: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: checked ? 'var(--ink-900)' : 'var(--surface-card)',
      border: '1.5px solid ' + (checked ? 'var(--ink-900)' : 'var(--ink-300)'),
      color: 'var(--gold-500)',
      transition: 'background var(--dur-fast) var(--ease-out)'
    }
  }, checked && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 14,
    strokeWidth: 3
  })), (label || description) && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      color: 'var(--text-strong)'
    }
  }, label), description && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, description)));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
const {
  useState
} = React;
function Input({
  label,
  hint,
  error,
  iconLeft,
  iconRight,
  size = 'md',
  type = 'text',
  placeholder,
  value,
  defaultValue,
  onChange,
  name,
  autoFocus,
  disabled = false,
  style
}) {
  const [focus, setFocus] = useState(false);
  const h = size === 'lg' ? 52 : size === 'sm' ? 38 : 46;
  const border = error ? 'var(--red-500)' : focus ? 'var(--ink-900)' : 'var(--border-default)';
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'var(--font-ui)',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      height: h,
      padding: '0 14px',
      borderRadius: 12,
      background: disabled ? 'var(--paper-100)' : 'var(--surface-card)',
      border: '1px solid ' + border,
      boxShadow: focus ? error ? '0 0 0 3px var(--red-100)' : 'var(--focus-ring)' : 'var(--shadow-xs)',
      color: 'var(--text-muted)',
      transition: 'box-shadow var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out)'
    }
  }, iconLeft && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconLeft,
    size: 18
  }), /*#__PURE__*/React.createElement("input", {
    type: type,
    name: name,
    placeholder: placeholder,
    value: value,
    defaultValue: defaultValue,
    onChange: onChange,
    autoFocus: autoFocus,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      minWidth: 0,
      height: '100%',
      border: 0,
      outline: 0,
      background: 'transparent',
      fontSize: size === 'sm' ? 14 : 15,
      color: 'var(--text-strong)'
    }
  }), iconRight && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconRight,
    size: 18
  })), (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: error ? 'var(--red-600)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function Radio({
  checked = false,
  onChange,
  label,
  description,
  name,
  value,
  disabled = false,
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      fontFamily: 'var(--font-ui)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "radio",
    name: name,
    value: value,
    checked: checked,
    disabled: disabled,
    onChange: () => onChange && onChange(value),
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      marginTop: 1,
      borderRadius: '50%',
      flex: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--surface-card)',
      border: checked ? '6px solid var(--ink-900)' : '1.5px solid var(--ink-300)',
      transition: 'border var(--dur-fast) var(--ease-out)'
    }
  }), (label || description) && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      color: 'var(--text-strong)'
    }
  }, label), description && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, description)));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
const {
  useState
} = React;
function Select({
  label,
  options = [],
  value,
  onChange,
  size = 'md',
  style
}) {
  const [focus, setFocus] = useState(false);
  const h = size === 'sm' ? 38 : 46;
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'var(--font-ui)',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("select", {
    value: value,
    onChange: e => onChange && onChange(e.target.value),
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      appearance: 'none',
      width: '100%',
      height: h,
      padding: '0 40px 0 14px',
      borderRadius: 12,
      cursor: 'pointer',
      border: '1px solid ' + (focus ? 'var(--ink-900)' : 'var(--border-default)'),
      background: 'var(--surface-card)',
      boxShadow: focus ? 'var(--focus-ring)' : 'var(--shadow-xs)',
      outline: 0,
      fontSize: size === 'sm' ? 14 : 15,
      color: 'var(--text-strong)'
    }
  }, options.map(o => typeof o === 'string' ? /*#__PURE__*/React.createElement("option", {
    key: o,
    value: o
  }, o) : /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 18,
    color: "var(--text-muted)",
    style: {
      position: 'absolute',
      right: 14,
      pointerEvents: 'none'
    }
  })));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch({
  checked = false,
  onChange,
  label,
  disabled = false,
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      fontFamily: 'var(--font-ui)',
      fontSize: 15,
      color: 'var(--text-strong)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    role: "switch",
    "aria-checked": checked,
    disabled: disabled,
    onClick: () => onChange && onChange(!checked),
    style: {
      width: 40,
      height: 24,
      padding: 2,
      borderRadius: 999,
      border: 0,
      cursor: 'inherit',
      flex: 'none',
      background: checked ? 'var(--ink-900)' : 'var(--ink-300)',
      transition: 'background var(--dur-base) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      width: 20,
      height: 20,
      borderRadius: '50%',
      background: checked ? 'var(--gold-500)' : '#fff',
      boxShadow: 'var(--shadow-xs)',
      transform: checked ? 'translateX(16px)' : 'none',
      transition: 'transform var(--dur-base) var(--ease-out), background var(--dur-base) var(--ease-out)'
    }
  })), label);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/learning/Comment.jsx
try { (() => {
function Comment({
  author,
  time,
  text,
  likes = 0,
  liked = false,
  instructor = false,
  timestamp,
  onLike,
  onReply,
  children,
  style
}) {
  const act = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 5,
    border: 0,
    background: 'transparent',
    padding: 0,
    cursor: 'pointer',
    fontSize: 13,
    fontWeight: 600,
    color: 'var(--text-muted)',
    fontFamily: 'var(--font-ui)'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      fontFamily: 'var(--font-ui)',
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Avatar, {
    name: author,
    size: 36,
    ring: instructor
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      fontSize: 14,
      fontWeight: 700,
      color: 'var(--text-strong)'
    }
  }, author), instructor && /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "gold",
    size: "sm"
  }, "O\u2018qituvchi"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--text-subtle)'
    }
  }, time)), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 15,
      lineHeight: 1.55,
      color: 'var(--text-body)'
    }
  }, timestamp && /*#__PURE__*/React.createElement("span", {
    className: "lz-mono",
    style: {
      fontSize: 13,
      padding: '1px 6px',
      marginRight: 6,
      borderRadius: 6,
      background: 'var(--gold-100)',
      color: 'var(--gold-700)'
    }
  }, timestamp), text), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onLike,
    style: {
      ...act,
      color: liked ? 'var(--ink-900)' : act.color
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "thumbs-up",
    size: 15,
    fill: liked ? 'var(--gold-500)' : 'none'
  }), likes), onReply && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onReply,
    style: act
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "message-circle",
    size: 15
  }), "Javob berish")), children && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      marginTop: 8,
      paddingLeft: 4
    }
  }, children)));
}
Object.assign(__ds_scope, { Comment });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/learning/Comment.jsx", error: String((e && e.message) || e) }); }

// components/learning/FileItem.jsx
try { (() => {
const KIND = {
  pdf: ['file-text', 'var(--red-100)', 'var(--red-700)', 'PDF'],
  audio: ['file-audio', 'var(--blue-100)', 'var(--blue-700)', 'MP3'],
  zip: ['file-archive', 'var(--gold-100)', 'var(--gold-700)', 'ZIP']
};
function FileItem({
  name,
  size,
  kind = 'pdf',
  onDownload,
  style
}) {
  const [icon, bg, fg, ext] = KIND[kind] || KIND.pdf;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      padding: '12px 12px 12px 14px',
      borderRadius: 14,
      border: '1px solid var(--border-hairline)',
      background: 'var(--surface-card)',
      fontFamily: 'var(--font-ui)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 40,
      height: 40,
      borderRadius: 10,
      flex: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: bg,
      color: fg
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 20
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      minWidth: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--text-strong)',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, ext, " \xB7 ", size)), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "download",
    label: "Yuklab olish",
    variant: "secondary",
    size: "sm",
    onClick: onDownload
  }));
}
Object.assign(__ds_scope, { FileItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/learning/FileItem.jsx", error: String((e && e.message) || e) }); }

// components/learning/LessonItem.jsx
try { (() => {
const {
  useState
} = React;
const TYPE_ICON = {
  video: 'circle-play',
  quiz: 'notebook-pen',
  file: 'file-text',
  audio: 'headphones'
};
function LessonItem({
  index,
  title,
  duration,
  type = 'video',
  state = 'open',
  preview = false,
  onClick,
  inverse = false,
  style
}) {
  const [hover, setHover] = useState(false);
  const current = state === 'current',
    done = state === 'done',
    locked = state === 'locked';
  const fg = inverse ? '#fff' : 'var(--text-strong)';
  const muted = inverse ? 'rgba(255,255,255,.55)' : 'var(--text-muted)';
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: locked ? undefined : onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      width: '100%',
      padding: '10px 12px',
      border: 0,
      borderRadius: 10,
      textAlign: 'left',
      fontFamily: 'var(--font-ui)',
      cursor: locked ? 'default' : 'pointer',
      background: current ? inverse ? 'rgba(255,198,41,.14)' : 'var(--gold-100)' : hover && !locked ? inverse ? 'rgba(255,255,255,.06)' : 'var(--paper-100)' : 'transparent',
      transition: 'background var(--dur-fast) var(--ease-out)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 28,
      height: 28,
      borderRadius: '50%',
      flex: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 12,
      fontWeight: 700,
      background: done ? 'var(--green-500)' : current ? 'var(--gold-500)' : inverse ? 'rgba(255,255,255,.08)' : 'var(--paper-100)',
      color: done ? '#fff' : current ? 'var(--ink-900)' : muted
    }
  }, done ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 15,
    strokeWidth: 3
  }) : current ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "play",
    size: 13,
    fill: "currentColor"
  }) : locked ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "lock",
    size: 13
  }) : index), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      minWidth: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: current ? 700 : 500,
      color: locked ? muted : fg,
      lineHeight: 1.35
    }
  }, title), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      fontSize: 12,
      color: muted
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: TYPE_ICON[type] || 'circle-play',
    size: 13
  }), duration, preview && /*#__PURE__*/React.createElement("span", {
    style: {
      color: inverse ? 'var(--gold-500)' : 'var(--gold-700)',
      fontWeight: 600
    }
  }, "\xB7 Bepul ko\u2018rish"))));
}
Object.assign(__ds_scope, { LessonItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/learning/LessonItem.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function Tabs({
  items = [],
  value,
  onChange,
  variant = 'underline',
  inverse = false,
  style
}) {
  if (variant === 'pill') {
    return /*#__PURE__*/React.createElement("div", {
      role: "tablist",
      style: {
        display: 'inline-flex',
        gap: 4,
        padding: 4,
        borderRadius: 12,
        background: 'var(--paper-100)',
        fontFamily: 'var(--font-ui)',
        ...style
      }
    }, items.map(it => {
      const on = it.id === value;
      return /*#__PURE__*/React.createElement("button", {
        key: it.id,
        role: "tab",
        "aria-selected": on,
        type: "button",
        onClick: () => onChange && onChange(it.id),
        style: {
          display: 'inline-flex',
          alignItems: 'center',
          gap: 6,
          height: 34,
          padding: '0 14px',
          borderRadius: 9,
          border: 0,
          cursor: 'pointer',
          fontSize: 14,
          fontWeight: 600,
          background: on ? 'var(--surface-card)' : 'transparent',
          color: on ? 'var(--text-strong)' : 'var(--text-muted)',
          boxShadow: on ? 'var(--shadow-sm)' : 'none',
          transition: 'background var(--dur-fast) var(--ease-out)'
        }
      }, it.icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
        name: it.icon,
        size: 16
      }), it.label);
    }));
  }
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: 'flex',
      gap: 28,
      borderBottom: '1px solid ' + (inverse ? 'rgba(255,255,255,.12)' : 'var(--border-hairline)'),
      fontFamily: 'var(--font-ui)',
      overflowX: 'auto',
      overflowY: 'hidden',
      scrollbarWidth: 'none',
      ...style
    }
  }, items.map(it => {
    const on = it.id === value;
    return /*#__PURE__*/React.createElement("button", {
      key: it.id,
      role: "tab",
      "aria-selected": on,
      type: "button",
      onClick: () => onChange && onChange(it.id),
      style: {
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        height: 48,
        padding: 0,
        border: 0,
        background: 'transparent',
        cursor: 'pointer',
        fontSize: 15,
        fontWeight: 600,
        whiteSpace: 'nowrap',
        color: on ? inverse ? '#fff' : 'var(--text-strong)' : inverse ? 'rgba(255,255,255,.55)' : 'var(--text-muted)'
      }
    }, it.icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: it.icon,
      size: 18
    }), it.label, it.count != null && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        fontWeight: 600,
        padding: '1px 7px',
        borderRadius: 999,
        background: on ? 'var(--gold-500)' : inverse ? 'rgba(255,255,255,.1)' : 'var(--paper-100)',
        color: on ? 'var(--ink-900)' : 'inherit'
      }
    }, it.count), /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: -1,
        height: 2,
        borderRadius: 2,
        background: on ? inverse ? 'var(--gold-500)' : 'var(--ink-900)' : 'transparent'
      }
    }));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web/Checkout.jsx
try { (() => {
// Design-system components are destructured once in index.html.

const LZ_PROVIDERS = [{
  id: 'click',
  subtitle: 'Click ilovasi orqali tasdiqlash'
}, {
  id: 'payme',
  logo: '../../assets/payments/payme.png',
  subtitle: 'Uzcard · Humo · Payme hamyoni'
}, {
  id: 'uzum',
  logo: '../../assets/payments/uzum.png',
  subtitle: 'Uzum Bank · 3–12 oyga bo‘lib to‘lash'
}, {
  id: 'card',
  subtitle: 'Visa, Mastercard, Uzcard, Humo'
}];
function CheckoutDialog({
  open,
  items,
  data,
  onClose,
  onPaid
}) {
  const [provider, setProvider] = React.useState('click');
  const [promo, setPromo] = React.useState('');
  const [promoOk, setPromoOk] = React.useState(false);
  const [agree, setAgree] = React.useState(true);
  const [stage, setStage] = React.useState('form');
  React.useEffect(() => {
    if (open) {
      setStage('form');
    }
  }, [open]);
  const courses = items.map(id => data.courses.find(c => c.id === id)).filter(Boolean);
  const subtotal = courses.reduce((a, c) => a + c.price, 0);
  const discount = promoOk ? Math.round(subtotal * 0.1) : 0;
  const total = subtotal - discount;
  const pay = () => {
    setStage('processing');
    setTimeout(() => setStage('done'), 1400);
  };
  if (stage === 'done') {
    return /*#__PURE__*/React.createElement(Dialog, {
      open: open,
      onClose: () => onPaid(items),
      width: 440
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        gap: 14,
        padding: '8px 0'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 72,
        height: 72,
        borderRadius: '50%',
        background: 'var(--green-100)',
        color: 'var(--green-600)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "circle-check",
      size: 36
    })), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: 28
      }
    }, "To\u2018lov muvaffaqiyatli!"), /*#__PURE__*/React.createElement("p", {
      style: {
        color: 'var(--text-muted)'
      }
    }, data.fmt(total), " so\u2018m qabul qilindi. Kurs \u201CMening kurslarim\u201D bo\u2018limida \u2014 umrbod."), /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      fullWidth: true,
      iconLeft: "play",
      onClick: () => onPaid(items, true)
    }, "Darsni boshlash")));
  }
  return /*#__PURE__*/React.createElement(Dialog, {
    open: open,
    onClose: onClose,
    title: "To\u2018lovni rasmiylashtirish",
    subtitle: "Xavfsiz to\u2018lov \xB7 ma\u2019lumotlaringiz shifrlangan",
    width: 560,
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      style: {
        marginRight: 'auto',
        display: 'flex',
        flexDirection: 'column'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        color: 'var(--text-muted)'
      }
    }, "Jami"), /*#__PURE__*/React.createElement("b", {
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: 24,
        letterSpacing: '-0.02em'
      }
    }, data.fmt(total), " so\u2018m")), /*#__PURE__*/React.createElement(Button, {
      variant: "accent",
      size: "lg",
      disabled: !agree || stage === 'processing',
      iconLeft: stage === 'processing' ? 'rotate-ccw' : 'lock',
      onClick: pay
    }, stage === 'processing' ? 'Kutilmoqda…' : 'To‘lash'))
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, courses.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.id,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(CourseCover, {
    level: c.level,
    tone: c.cover.tone,
    word: c.cover.word,
    radius: 8,
    style: {
      width: 96,
      flex: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      fontSize: 15,
      lineHeight: 1.3
    }
  }, c.title), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, data.instructors[c.instructor].name)), /*#__PURE__*/React.createElement(PriceTag, {
    price: c.price,
    oldPrice: c.oldPrice,
    size: "sm",
    showDiscount: false,
    style: {
      flexDirection: 'column',
      alignItems: 'flex-end',
      gap: 0
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    },
    role: "radiogroup"
  }, /*#__PURE__*/React.createElement("span", {
    className: "lz-overline"
  }, "To\u2018lov usuli"), LZ_PROVIDERS.map(p => /*#__PURE__*/React.createElement(PaymentMethod, {
    key: p.id,
    provider: p.id,
    logoSrc: p.logo,
    subtitle: p.subtitle,
    selected: provider === p.id,
    onSelect: setProvider
  }))), provider === 'card' && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 120px',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Karta raqami",
    iconLeft: "credit-card",
    placeholder: "8600 0000 0000 0000"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Muddati",
    placeholder: "MM/YY"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Promokod",
    placeholder: "Masalan, LEHRER10",
    value: promo,
    onChange: e => {
      setPromo(e.target.value);
      setPromoOk(false);
    },
    hint: promoOk ? '−10% chegirma qo‘llandi' : undefined,
    style: {
      flex: 1
    },
    iconLeft: "tag"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => setPromoOk(promo.trim().length > 0),
    style: {
      marginBottom: promoOk ? 25 : 0
    }
  }, "Qo\u2018llash")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontSize: 14,
      padding: 16,
      borderRadius: 12,
      background: 'var(--paper-50)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Kurslar (", courses.length, ")"), /*#__PURE__*/React.createElement("span", null, data.fmt(subtotal), " so\u2018m")), discount > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      color: 'var(--green-700)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Promokod"), /*#__PURE__*/React.createElement("span", null, "\u2212", data.fmt(discount), " so\u2018m")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Komissiya"), /*#__PURE__*/React.createElement("span", null, "0 so\u2018m"))), /*#__PURE__*/React.createElement(Checkbox, {
    checked: agree,
    onChange: setAgree,
    label: "Ommaviy oferta shartlariga roziman"
  })));
}
function CartScreen({
  data,
  cart,
  onRemove,
  onCheckout,
  go
}) {
  const courses = cart.map(id => data.courses.find(c => c.id === id)).filter(Boolean);
  const total = courses.reduce((a, c) => a + c.price, 0);
  const old = courses.reduce((a, c) => a + (c.oldPrice || c.price), 0);
  return /*#__PURE__*/React.createElement("main", {
    style: {
      maxWidth: 1240,
      margin: '0 auto',
      padding: '40px 24px 0'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 40,
      marginBottom: 8
    }
  }, "Savat"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-muted)',
      marginBottom: 28
    }
  }, courses.length, " ta kurs"), courses.length ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) 340px',
      gap: 40,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, courses.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.id,
    style: {
      display: 'flex',
      gap: 20,
      padding: '20px 0',
      borderTop: '1px solid var(--border-hairline)',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(CourseCover, {
    level: c.level,
    tone: c.cover.tone,
    word: c.cover.word,
    style: {
      width: 180,
      flex: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      fontSize: 17
    }
  }, c.title), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: 'var(--text-muted)'
    }
  }, data.instructors[c.instructor].name, " \xB7 ", c.lessons, " dars"), /*#__PURE__*/React.createElement(Rating, {
    value: c.rating,
    count: c.reviews,
    size: "sm"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    iconLeft: "trash-2",
    onClick: () => onRemove(c.id),
    style: {
      alignSelf: 'flex-start',
      marginLeft: -10
    }
  }, "Olib tashlash")), /*#__PURE__*/React.createElement(PriceTag, {
    price: c.price,
    oldPrice: c.oldPrice,
    style: {
      flexDirection: 'column',
      alignItems: 'flex-end',
      gap: 2
    }
  })))), /*#__PURE__*/React.createElement("aside", {
    style: {
      padding: 24,
      borderRadius: 20,
      background: 'var(--surface-card)',
      border: '1px solid var(--border-hairline)',
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: 'var(--text-muted)'
    }
  }, "Jami:"), /*#__PURE__*/React.createElement(PriceTag, {
    price: total,
    oldPrice: old,
    size: "lg"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "lg",
    fullWidth: true,
    onClick: onCheckout
  }, "Rasmiylashtirish"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--text-muted)',
      textAlign: 'center'
    }
  }, "Click \xB7 Payme \xB7 Uzum \xB7 bank kartasi"))) : /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '72px 24px',
      textAlign: 'center',
      borderRadius: 20,
      background: 'var(--paper-100)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "shopping-cart",
    size: 36,
    color: "var(--ink-400)"
  }), /*#__PURE__*/React.createElement("h3", null, "Savat bo\u2018sh"), /*#__PURE__*/React.createElement(Button, {
    onClick: () => go('market')
  }, "Kurslarni ko\u2018rish")));
}
Object.assign(window, {
  CheckoutDialog,
  CartScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web/Checkout.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web/Chrome.jsx
try { (() => {
// Design-system components are destructured once in index.html.
function SiteHeader({
  go,
  route,
  user,
  cartCount,
  onSearch
}) {
  const [q, setQ] = React.useState('');
  const link = (name, label) => /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => go(name),
    style: {
      border: 0,
      background: 'transparent',
      cursor: 'pointer',
      padding: '8px 4px',
      fontFamily: 'var(--font-ui)',
      fontSize: 15,
      fontWeight: 600,
      color: route === name ? 'var(--text-strong)' : 'var(--text-muted)',
      borderBottom: '2px solid ' + (route === name ? 'var(--gold-500)' : 'transparent')
    }
  }, label);
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 40,
      background: 'rgba(250,248,243,0.94)',
      borderBottom: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1240,
      margin: '0 auto',
      padding: '0 24px',
      height: 68,
      display: 'flex',
      alignItems: 'center',
      gap: 28
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => go('home'),
    style: {
      border: 0,
      background: 'transparent',
      padding: 0,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    size: 26
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 20
    }
  }, link('market', 'Kurslar'), link('exam', 'Mock imtihon'), user && link('my', 'Mening kurslarim')), /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      onSearch(q);
    },
    style: {
      flex: 1,
      maxWidth: 440
    }
  }, /*#__PURE__*/React.createElement(Input, {
    size: "sm",
    iconLeft: "search",
    placeholder: "Kurs, mavzu yoki o\u2018qituvchi\u2026",
    value: q,
    onChange: e => setQ(e.target.value)
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Tooltip, {
    label: "Savat",
    placement: "bottom"
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "shopping-cart",
    label: "Savat",
    badge: cartCount || undefined,
    onClick: () => go('cart')
  })), user ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => go('my'),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      border: 0,
      background: 'transparent',
      cursor: 'pointer',
      padding: 0,
      fontFamily: 'var(--font-ui)',
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: user.name,
    size: 36
  }), user.name.split(' ')[0]) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    onClick: () => go('login')
  }, "Kirish"), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    onClick: () => go('login')
  }, "Ro\u2018yxatdan o\u2018tish")))));
}
function SiteFooter({
  go
}) {
  const col = (title, items) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "lz-overline",
    style: {
      color: 'rgba(255,255,255,.5)'
    }
  }, title), items.map(i => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      fontSize: 14,
      color: 'rgba(255,255,255,.82)'
    }
  }, i)));
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--ink-900)',
      color: '#fff',
      marginTop: 96
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1240,
      margin: '0 auto',
      padding: '56px 24px 32px',
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr 1fr 1fr',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    inverse: true,
    size: 28
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      color: 'rgba(255,255,255,.65)',
      maxWidth: 280
    }
  }, "Nemis tilini o\u2018zbek tilida \u2014 A1 dan C1 gacha video darslar, mashqlar va sertifikat."), /*#__PURE__*/React.createElement("span", {
    className: "lz-overline",
    style: {
      color: 'rgba(255,255,255,.5)',
      marginTop: 8
    }
  }, "Mobil ilova"), /*#__PURE__*/React.createElement(StoreBadges, {
    apple: 38,
    google: 54,
    gap: 8
  })), col('Darajalar', ['A1 · Boshlang‘ich', 'A2 · Elementar', 'B1 · O‘rta', 'B2 · O‘rtadan yuqori']), col('lehrer.uz', ['Biz haqimizda', 'Mock imtihon', 'O‘qituvchi bo‘lish', 'Biznes uchun']), col('Yordam', ['+998 71 200 45 45', 'support@lehrer.uz', 'Ommaviy oferta', 'Maxfiylik siyosati'])), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1240,
      margin: '0 auto',
      padding: '20px 24px 28px',
      borderTop: '1px solid rgba(255,255,255,.1)',
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: 13,
      color: 'rgba(255,255,255,.5)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 lehrer.uz"), /*#__PURE__*/React.createElement("span", null, "To\u2018lovlar: Click \xB7 Payme \xB7 Uzum")));
}
Object.assign(window, {
  SiteHeader,
  SiteFooter
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web/Chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web/CourseDetail.jsx
try { (() => {
// Design-system components are destructured once in index.html.

function CourseDetailScreen({
  data,
  courseId,
  owned,
  inCart,
  onBuy,
  onAddCart,
  openPlayer,
  go
}) {
  const c = data.courses.find(x => x.id === courseId) || data.courses[0];
  const t = data.instructors[c.instructor];
  const [tab, setTab] = React.useState('about');
  const [open, setOpen] = React.useState([0]);
  const isOwned = owned.includes(c.id);
  const total = data.curriculum.reduce((a, s) => a + s.lessons.length, 0);
  const wrap = {
    maxWidth: 1240,
    margin: '0 auto',
    padding: '0 24px'
  };
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--ink-900)',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) 380px',
      gap: 48,
      padding: '40px 24px 48px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      maxWidth: 720
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      fontSize: 13,
      color: 'rgba(255,255,255,.6)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => go('market'),
    style: {
      border: 0,
      background: 'none',
      color: 'var(--gold-500)',
      cursor: 'pointer',
      padding: 0,
      fontWeight: 600,
      fontSize: 13
    }
  }, "Kurslar"), /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-right",
    size: 14
  }), /*#__PURE__*/React.createElement("span", null, c.level), /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-right",
    size: 14
  }), /*#__PURE__*/React.createElement("span", null, c.topic)), /*#__PURE__*/React.createElement("h1", {
    style: {
      color: '#fff',
      fontSize: 44,
      lineHeight: 1.08
    }
  }, c.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      color: 'rgba(255,255,255,.78)'
    }
  }, c.subtitle), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      flexWrap: 'wrap',
      fontSize: 14,
      color: 'rgba(255,255,255,.75)'
    }
  }, c.badge && /*#__PURE__*/React.createElement(Badge, {
    tone: "gold"
  }, c.badge), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--gold-500)'
    }
  }, /*#__PURE__*/React.createElement(Rating, {
    value: c.rating,
    count: c.reviews,
    size: "sm",
    style: {
      color: 'var(--gold-500)'
    }
  })), /*#__PURE__*/React.createElement("span", null, c.students.toLocaleString('ru-RU'), " o\u2018quvchi")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      fontSize: 14,
      color: 'rgba(255,255,255,.75)'
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: t.name,
    size: 28
  }), "Muallif: ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: '#fff'
    }
  }, t.name)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 20,
      fontSize: 13,
      color: 'rgba(255,255,255,.6)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      gap: 6,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "calendar",
    size: 15
  }), "Yangilangan: ", c.updated), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      gap: 6,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "languages",
    size: 15
  }), "O\u2018zbek \xB7 Deutsch"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      gap: 6,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "captions",
    size: 15
  }), "Subtitrlar"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) 380px',
      gap: 48,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 24
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    value: tab,
    onChange: setTab,
    items: [{
      id: 'about',
      label: 'Kurs haqida'
    }, {
      id: 'program',
      label: 'Dastur',
      count: c.lessons
    }, {
      id: 'teacher',
      label: 'O‘qituvchi'
    }, {
      id: 'reviews',
      label: 'Sharhlar',
      count: c.reviews.toLocaleString('ru-RU')
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 28
    }
  }, tab === 'about' && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24,
      borderRadius: 16,
      border: '1px solid var(--border-hairline)',
      background: 'var(--surface-card)'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      marginBottom: 16
    }
  }, "Nimalarni o\u2018rganasiz"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '12px 24px'
    }
  }, data.outcomes.map(o => /*#__PURE__*/React.createElement("div", {
    key: o,
    style: {
      display: 'flex',
      gap: 10,
      fontSize: 15
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 18,
    color: "var(--green-500)",
    strokeWidth: 2.5,
    style: {
      marginTop: 2
    }
  }), o)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("h3", null, "Kurs kimlar uchun"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16
    }
  }, "Nemis tilini noldan boshlayotganlar, Germaniyada o\u2018qish yoki ishlashni rejalashtirayotganlar va Goethe A1 imtihoniga tayyorlanayotganlar uchun. Har bir mavzu o\u2018zbek tilida tushuntiriladi, misollar esa ona tili sohiblari ovozida."))), tab === 'program' && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: 'var(--text-muted)'
    }
  }, data.curriculum.length, " bo\u2018lim \xB7 ", c.lessons, " dars \xB7 ", String(c.hours).replace('.', ','), " soat (namuna: ", total, " dars ko\u2018rsatilgan)"), data.curriculum.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: s.title,
    style: {
      borderRadius: 14,
      border: '1px solid var(--border-hairline)',
      background: 'var(--surface-card)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setOpen(open.includes(i) ? open.filter(x => x !== i) : [...open, i]),
    style: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '16px 18px',
      border: 0,
      background: 'var(--paper-50)',
      cursor: 'pointer',
      textAlign: 'left',
      fontFamily: 'var(--font-ui)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: open.includes(i) ? 'chevron-up' : 'chevron-down',
    size: 18
  }), /*#__PURE__*/React.createElement("b", {
    style: {
      flex: 1,
      fontSize: 15,
      color: 'var(--text-strong)'
    }
  }, s.title), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, s.lessons.length, " dars")), open.includes(i) && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 6
    }
  }, s.lessons.map(l => /*#__PURE__*/React.createElement(LessonItem, {
    key: l.id,
    index: l.id,
    title: l.title,
    duration: l.duration,
    type: l.type,
    preview: l.preview && !isOwned,
    state: isOwned || l.preview ? 'open' : 'locked',
    onClick: () => (isOwned || l.preview) && openPlayer(c.id, l.id)
  })))))), tab === 'teacher' && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: t.name,
    size: 88,
    ring: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("h3", null, t.name), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)'
    }
  }, t.role), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 20,
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement("span", null, "\u2605 ", String(t.rating).replace('.', ','), " reyting"), /*#__PURE__*/React.createElement("span", null, t.students.toLocaleString('ru-RU'), " o\u2018quvchi"), /*#__PURE__*/React.createElement("span", null, t.courses, " kurs")), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: 560
    }
  }, t.bio))), tab === 'reviews' && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 56,
      fontWeight: 800,
      letterSpacing: '-0.04em',
      color: 'var(--gold-700)'
    }
  }, String(c.rating).replace('.', ',')), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Rating, {
    value: c.rating,
    showValue: false,
    size: "lg"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--text-muted)'
    }
  }, c.reviews.toLocaleString('ru-RU'), " ta sharh"))), data.reviews.map(r => /*#__PURE__*/React.createElement("div", {
    key: r.author,
    style: {
      display: 'flex',
      gap: 14,
      paddingTop: 20,
      borderTop: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: r.author,
    size: 40
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("b", null, r.author), /*#__PURE__*/React.createElement(Rating, {
    value: r.rating,
    showValue: false,
    size: "sm"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--text-subtle)'
    }
  }, r.time)), /*#__PURE__*/React.createElement("p", null, r.text))))))), /*#__PURE__*/React.createElement("aside", {
    style: {
      marginTop: -260,
      position: 'sticky',
      top: 92,
      background: 'var(--surface-card)',
      borderRadius: 20,
      boxShadow: 'var(--shadow-md)',
      border: '1px solid var(--border-hairline)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(CourseCover, {
    level: c.level,
    tone: c.cover.tone,
    word: c.cover.word,
    radius: 0
  }), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => openPlayer(c.id, 2),
    style: {
      position: 'absolute',
      inset: 0,
      border: 0,
      background: 'rgba(14,16,20,.18)',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 64,
      height: 64,
      borderRadius: '50%',
      background: '#fff',
      color: 'var(--ink-900)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: 'var(--shadow-md)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "play",
    size: 26,
    fill: "currentColor"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24,
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, isOwned ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Badge, {
    tone: "success",
    icon: "circle-check",
    style: {
      alignSelf: 'flex-start'
    }
  }, "Kurs sizda bor"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    fullWidth: true,
    iconLeft: "play",
    onClick: () => openPlayer(c.id)
  }, "Darsni davom ettirish")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PriceTag, {
    price: c.price,
    oldPrice: c.oldPrice,
    free: c.free,
    size: "lg"
  }), c.oldPrice && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--red-600)',
      fontWeight: 600,
      display: 'inline-flex',
      gap: 6,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "clock",
    size: 15
  }), "Chegirma yana 2 kun"), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "lg",
    fullWidth: true,
    onClick: () => onBuy(c.id)
  }, c.free ? 'Bepul yozilish' : 'Sotib olish'), !c.free && /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    fullWidth: true,
    iconLeft: inCart ? 'check' : 'shopping-cart',
    onClick: () => inCart ? go('cart') : onAddCart(c.id)
  }, inCart ? 'Savatga o‘tish' : 'Savatga qo‘shish'), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--text-muted)',
      textAlign: 'center'
    }
  }, "30 kun ichida pulni qaytarish kafolati")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      paddingTop: 14,
      borderTop: '1px solid var(--border-hairline)',
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement("b", null, "Kursga kiradi:"), [['monitor-play', `${String(c.hours).replace('.', ',')} soat video`], ['file-text', '24 ta PDF mashq varaqasi'], ['headphones', 'Audio dialoglar'], ['infinity', 'Umrbod kirish'], ['award', 'Tugatganlik sertifikati']].map(([i, l]) => /*#__PURE__*/React.createElement("span", {
    key: l,
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'center',
      color: 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: i,
    size: 17
  }), l))), !isOwned && !c.free && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 18,
      paddingTop: 14,
      borderTop: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      fontSize: 15
    }
  }, "Click"), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/payments/payme.png",
    alt: "Payme",
    style: {
      height: 18
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/payments/uzum.png",
    alt: "Uzum",
    style: {
      height: 18
    }
  }))))));
}
Object.assign(window, {
  CourseDetailScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web/CourseDetail.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web/Exam.jsx
try { (() => {
// Design-system components are destructured once in index.html.

const lzMM = s => String(Math.floor(s / 60)).padStart(2, '0') + ':' + String(s % 60).padStart(2, '0');
const lzSpeak = (text, onEnd) => {
  if (!('speechSynthesis' in window)) return false;
  const u = new SpeechSynthesisUtterance(text);
  u.lang = 'de-DE';
  u.rate = 0.85;
  u.onend = onEnd;
  speechSynthesis.cancel();
  speechSynthesis.speak(u);
  return true;
};
function Choice({
  label,
  state,
  selected,
  onClick,
  letter,
  disabled
}) {
  const [hover, setHover] = React.useState(false);
  const border = state === 'ok' ? 'var(--green-500)' : state === 'bad' ? 'var(--red-500)' : selected ? 'var(--ink-900)' : hover ? 'var(--ink-400)' : 'var(--border-default)';
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      minHeight: 48,
      padding: '8px 14px',
      borderRadius: 12,
      textAlign: 'left',
      cursor: disabled ? 'default' : 'pointer',
      fontFamily: 'var(--font-ui)',
      fontSize: 15,
      color: 'var(--text-strong)',
      border: '1px solid ' + border,
      background: state === 'ok' ? 'var(--green-50)' : state === 'bad' ? 'var(--red-50)' : selected ? 'var(--gold-100)' : 'var(--surface-card)',
      boxShadow: selected ? 'inset 0 0 0 1px var(--ink-900)' : 'none',
      transition: 'all var(--dur-fast) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 26,
      height: 26,
      borderRadius: '50%',
      flex: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 12,
      fontWeight: 700,
      background: selected ? 'var(--ink-900)' : 'var(--paper-100)',
      color: selected ? 'var(--gold-500)' : 'var(--text-muted)'
    }
  }, letter), label);
}
function Question({
  q,
  n,
  value,
  onPick,
  review
}) {
  const opts = q.type === 'tf' ? ['Richtig', 'Falsch'] : q.o;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      fontSize: 16,
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "lz-mono",
    style: {
      color: 'var(--text-muted)'
    }
  }, n, "."), q.text), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: q.type === 'tf' ? '1fr 1fr' : '1fr',
      gap: 8
    }
  }, opts.map((o, i) => /*#__PURE__*/React.createElement(Choice, {
    key: i,
    letter: q.type === 'tf' ? i ? '✗' : '✓' : 'abc'[i],
    label: o,
    selected: value === i,
    onClick: () => onPick(i),
    disabled: review,
    state: review ? i === q.a ? 'ok' : value === i ? 'bad' : null : null
  }))));
}
function AudioPlayer({
  say,
  plays,
  setPlays
}) {
  const [on, setOn] = React.useState(false);
  const [fallback, setFallback] = React.useState(false);
  const play = () => {
    if (plays >= 2 || on) return;
    setPlays(plays + 1);
    setOn(true);
    const ok = lzSpeak(say, () => setOn(false));
    if (!ok) {
      setFallback(true);
      setTimeout(() => setOn(false), 4000);
    } else setTimeout(() => setOn(false), say.length * 75 + 800);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      padding: 16,
      borderRadius: 16,
      background: 'var(--ink-900)',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: play,
    disabled: plays >= 2,
    "aria-label": "Eshitish",
    style: {
      width: 56,
      height: 56,
      borderRadius: '50%',
      border: 0,
      flex: 'none',
      cursor: plays >= 2 ? 'not-allowed' : 'pointer',
      background: plays >= 2 ? 'rgba(255,255,255,.2)' : 'var(--gold-500)',
      color: 'var(--ink-900)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: on ? 'volume-2' : 'play',
    size: 24,
    fill: on ? 'none' : 'currentColor'
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      gap: 3,
      height: 40
    }
  }, Array.from({
    length: 42
  }).map((_, i) => /*#__PURE__*/React.createElement("i", {
    key: i,
    style: {
      flex: 1,
      minWidth: 2,
      borderRadius: 2,
      background: on ? 'var(--gold-500)' : 'rgba(255,255,255,.3)',
      height: 8 + i * 37 % 26,
      transformOrigin: 'center',
      animation: on ? `lz-float ${0.5 + i % 5 * 0.12}s ${i % 7 * 0.05}s ease-in-out infinite` : 'none'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      fontSize: 13,
      color: 'rgba(255,255,255,.7)'
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      color: '#fff'
    }
  }, 2 - plays, " / 2"), "marta eshitish", fallback && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--gold-500)'
    }
  }, "Brauzer ovozni qo\u2018llamaydi")));
}
function RecordCard({
  part,
  done,
  onDone
}) {
  const [rec, setRec] = React.useState(false);
  const [sec, setSec] = React.useState(0);
  React.useEffect(() => {
    if (!rec) return;
    const id = setInterval(() => setSec(s => s + 1), 1000);
    return () => clearInterval(id);
  }, [rec]);
  const toggle = () => {
    if (rec) {
      setRec(false);
      onDone(true);
    } else {
      setSec(0);
      setRec(true);
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 20,
      borderRadius: 16,
      background: 'var(--surface-card)',
      border: '1px solid ' + (rec ? 'var(--red-500)' : 'var(--border-hairline)'),
      display: 'flex',
      alignItems: 'center',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "lz-overline"
  }, part.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      color: 'var(--text-strong)'
    }
  }, part.task)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 6,
      width: 110
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: toggle,
    "aria-label": rec ? 'To‘xtatish' : 'Yozib olish',
    style: {
      width: 56,
      height: 56,
      borderRadius: '50%',
      border: 0,
      cursor: 'pointer',
      background: rec ? 'var(--red-500)' : done ? 'var(--green-500)' : 'var(--ink-900)',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: rec ? '0 0 0 6px var(--red-100)' : 'none',
      transition: 'box-shadow .3s'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: rec ? 'pause' : done ? 'check' : 'mic',
    size: 24
  })), /*#__PURE__*/React.createElement("span", {
    className: "lz-mono",
    style: {
      fontSize: 13,
      color: rec ? 'var(--red-600)' : 'var(--text-muted)'
    }
  }, rec ? lzMM(sec) : done ? 'Saqlandi' : 'Yozish')));
}
function ExamIntro({
  lvl,
  setLvl,
  onStart,
  go
}) {
  const E = window.LZ_EXAMS[lvl];
  const total = E.modules.reduce((a, m) => a + m.min, 0);
  return /*#__PURE__*/React.createElement("main", {
    style: {
      maxWidth: 1240,
      margin: '0 auto',
      padding: '40px 24px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) 360px',
      gap: 48,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "lz-overline"
  }, "Mock imtihon \xB7 onlayn"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 48,
      lineHeight: 1.05
    }
  }, "Goethe imtihonini ", /*#__PURE__*/React.createElement("span", {
    className: "lz-mark"
  }, "oldindan"), " sinab ko\u2018ring"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      maxWidth: 640
    }
  }, "To\u2018rt modul \u2014 Lesen, H\xF6ren, Schreiben, Sprechen \u2014 rasmiy format va vaqt bilan. Natija darhol, xatolar tahlili bilan.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap'
    }
  }, ['A1', 'A2', 'B1', 'B2', 'C1'].map(l => /*#__PURE__*/React.createElement(Tag, {
    key: l,
    selected: lvl === l,
    onClick: () => window.LZ_EXAMS[l] && setLvl(l),
    style: {
      opacity: window.LZ_EXAMS[l] ? 1 : 0.45,
      cursor: window.LZ_EXAMS[l] ? 'pointer' : 'not-allowed'
    }
  }, l, window.LZ_EXAMS[l] ? '' : ' · tez orada'))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 14
    }
  }, E.modules.map((m, i) => /*#__PURE__*/React.createElement("div", {
    key: m.id,
    className: "lz-lift",
    style: {
      padding: 20,
      borderRadius: 16,
      background: 'var(--surface-card)',
      border: '1px solid var(--border-hairline)',
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 44,
      height: 44,
      borderRadius: 12,
      background: i === 0 ? 'var(--gold-500)' : 'var(--gold-100)',
      color: 'var(--ink-900)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: m.icon,
    size: 22
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 22,
      letterSpacing: '-0.02em'
    }
  }, m.name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, m.uz)), /*#__PURE__*/React.createElement("span", {
    className: "lz-mono",
    style: {
      fontSize: 13,
      color: 'var(--text-body)'
    }
  }, m.min, " daqiqa")))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24,
      borderRadius: 16,
      background: 'var(--paper-100)',
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      fontSize: 16
    }
  }, "Qoidalar"), [['clock', `Har modulning o‘z taymeri bor (jami ≈ ${total} daqiqa). Vaqt tugasa, keyingi modulga o‘tiladi.`], ['headphones', 'Hören: har bir audio faqat 2 marta eshittiriladi. Quloqchin tavsiya etiladi.'], ['mic', 'Sprechen: brauzer mikrofoni ruxsati kerak; yozuv o‘qituvchiga yuboriladi.'], ['percent', 'O‘tish chegarasi har modul bo‘yicha 60%. Bu mashq imtihoni — rasmiy sertifikat emas.']].map(([i, t]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: 'flex',
      gap: 12,
      fontSize: 15
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: i,
    size: 18,
    color: "var(--gold-700)",
    style: {
      marginTop: 2
    }
  }), t)))), /*#__PURE__*/React.createElement("aside", {
    style: {
      position: 'sticky',
      top: 92,
      padding: 28,
      borderRadius: 20,
      background: 'var(--ink-900)',
      color: '#fff',
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "lz-overline",
    style: {
      color: 'var(--gold-500)'
    }
  }, E.note), /*#__PURE__*/React.createElement("h2", {
    style: {
      color: '#fff',
      fontSize: 32
    }
  }, E.title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      fontSize: 15,
      color: 'rgba(255,255,255,.8)'
    }
  }, [['circle-check', 'Lesen va Hören avtomatik tekshiriladi'], ['notebook-pen', 'Schreiben — so‘z hisoblagich bilan'], ['users', 'Sprechen — o‘qituvchi 48 soatda baholaydi'], ['rotate-ccw', 'Istagancha qayta topshirish']].map(([i, t]) => /*#__PURE__*/React.createElement("span", {
    key: t,
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: i,
    size: 17,
    color: "var(--gold-500)"
  }), t))), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "lg",
    fullWidth: true,
    iconRight: "arrow-right",
    onClick: onStart
  }, "Imtihonni boshlash"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    fullWidth: true,
    onClick: () => go('market'),
    style: {
      color: '#fff'
    }
  }, "Avval tayyorlanish: kurslar"))));
}
function ExamRun({
  lvl,
  onFinish,
  onExit
}) {
  const E = window.LZ_EXAMS[lvl];
  const [mi, setMi] = React.useState(0);
  const [rem, setRem] = React.useState(() => Object.fromEntries(E.modules.map(m => [m.id, m.min * 60])));
  const [ans, setAns] = React.useState({});
  const [text, setText] = React.useState('');
  const [rec, setRec] = React.useState({});
  const [plays, setPlays] = React.useState({});
  const mod = E.modules[mi];
  React.useEffect(() => {
    const id = setInterval(() => setRem(r => ({
      ...r,
      [mod.id]: Math.max(0, r[mod.id] - 1)
    })), 1000);
    return () => clearInterval(id);
  }, [mi]);
  React.useEffect(() => {
    if (rem[mod.id] === 0) next();
  }, [rem[mod.id]]);
  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  const next = () => {
    speechSynthesis && speechSynthesis.cancel && speechSynthesis.cancel();
    if (mi < E.modules.length - 1) {
      setMi(mi + 1);
      window.scrollTo(0, 0);
    } else finish();
  };
  const finish = () => onFinish({
    ans,
    words,
    rec
  });
  const answered = id => ans[id] !== undefined;
  const groups = mod.id === 'lesen' ? E.lesen : mod.id === 'horen' ? E.horen : null;
  let n = 0;
  const low = rem[mod.id] < 60;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100vh',
      background: 'var(--bg-page)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 30,
      background: 'var(--ink-950)',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1240,
      margin: '0 auto',
      padding: '0 24px',
      height: 64,
      display: 'flex',
      alignItems: 'center',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    inverse: true,
    size: 20
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 1,
      height: 24,
      background: 'rgba(255,255,255,.15)'
    }
  }), /*#__PURE__*/React.createElement("b", {
    style: {
      fontSize: 15
    }
  }, E.title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      marginLeft: 16
    }
  }, E.modules.map((m, i) => /*#__PURE__*/React.createElement("span", {
    key: m.id,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      height: 34,
      padding: '0 14px',
      borderRadius: 999,
      fontSize: 14,
      fontWeight: 600,
      background: i === mi ? 'var(--gold-500)' : 'rgba(255,255,255,.08)',
      color: i === mi ? 'var(--ink-900)' : i < mi ? '#fff' : 'rgba(255,255,255,.5)'
    }
  }, i < mi ? /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 14,
    strokeWidth: 3
  }) : /*#__PURE__*/React.createElement(Icon, {
    name: m.icon,
    size: 14
  }), m.name))), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "lz-mono",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      fontSize: 20,
      fontWeight: 600,
      color: low ? '#ff8f91' : '#fff',
      animation: low ? 'lz-float 1s ease-in-out infinite' : 'none'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "clock",
    size: 20
  }), lzMM(rem[mod.id])), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    onClick: onExit,
    style: {
      color: 'rgba(255,255,255,.75)'
    }
  }, "Chiqish"))), /*#__PURE__*/React.createElement("main", {
    style: {
      maxWidth: 840,
      margin: '0 auto',
      padding: '36px 24px 120px',
      display: 'flex',
      flexDirection: 'column',
      gap: 28
    },
    key: mod.id
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "lz-overline"
  }, mod.name, " \xB7 ", mod.uz), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 32
    }
  }, mod.id === 'schreiben' ? E.schreiben.title : mod.id === 'sprechen' ? 'Mikrofon orqali javob bering' : mod.name)), groups && groups.map(g => /*#__PURE__*/React.createElement("section", {
    key: g.title,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18,
      animation: 'lz-rise .5s var(--ease-out) both'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 20,
      letterSpacing: '-0.01em'
    }
  }, g.title), g.passage && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 22,
      borderRadius: 16,
      background: 'var(--surface-card)',
      border: '1px solid var(--border-hairline)',
      fontSize: 17,
      lineHeight: 1.65,
      whiteSpace: 'pre-line',
      color: 'var(--text-strong)',
      fontFamily: 'var(--font-display)',
      fontWeight: 500
    }
  }, g.passage), g.say && /*#__PURE__*/React.createElement(AudioPlayer, {
    say: g.say,
    plays: plays[g.title] || 0,
    setPlays: v => setPlays({
      ...plays,
      [g.title]: v
    })
  }), g.prompt && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: 'var(--text-muted)'
    }
  }, g.prompt), g.qs.map(q => {
    n++;
    return /*#__PURE__*/React.createElement(Question, {
      key: q.id,
      q: q,
      n: n,
      value: ans[q.id],
      onPick: i => setAns({
        ...ans,
        [q.id]: i
      })
    });
  }))), mod.id === 'schreiben' && /*#__PURE__*/React.createElement("section", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 20,
      borderRadius: 16,
      background: 'var(--gold-100)',
      fontSize: 16,
      color: 'var(--ink-900)'
    }
  }, E.schreiben.task), /*#__PURE__*/React.createElement("textarea", {
    value: text,
    onChange: e => setText(e.target.value),
    placeholder: "Liebe Frau \u2026,",
    rows: 10,
    style: {
      width: '100%',
      padding: 18,
      borderRadius: 14,
      border: '1px solid var(--border-default)',
      background: 'var(--surface-card)',
      fontFamily: 'var(--font-ui)',
      fontSize: 16,
      lineHeight: 1.6,
      resize: 'vertical',
      outline: 0,
      boxShadow: 'var(--shadow-xs)'
    },
    onFocus: e => e.target.style.boxShadow = 'var(--focus-ring)',
    onBlur: e => e.target.style.boxShadow = 'var(--shadow-xs)'
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(ProgressBar, {
    value: Math.min(100, words / E.schreiben.min * 100),
    tone: words >= E.schreiben.min ? 'success' : 'gold',
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "lz-mono",
    style: {
      fontSize: 13,
      color: words >= E.schreiben.min ? 'var(--green-700)' : 'var(--text-muted)'
    }
  }, words, " / ", E.schreiben.min, "+ so\u2018z"))), mod.id === 'sprechen' && /*#__PURE__*/React.createElement("section", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, E.sprechen.map((p, i) => /*#__PURE__*/React.createElement(RecordCard, {
    key: i,
    part: p,
    done: !!rec[i],
    onDone: () => setRec({
      ...rec,
      [i]: true
    })
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(255,255,255,.96)',
      borderTop: '1px solid var(--border-hairline)',
      zIndex: 30
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 840,
      margin: '0 auto',
      padding: '14px 24px',
      display: 'flex',
      alignItems: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: 'var(--text-muted)'
    }
  }, mod.id === 'lesen' || mod.id === 'horen' ? `${(groups || []).flatMap(g => g.qs).filter(q => answered(q.id)).length} / ${(groups || []).flatMap(g => g.qs).length} javob berildi` : mod.id === 'schreiben' ? `${words} so‘z` : `${Object.keys(rec).length} / ${E.sprechen.length} yozildi`), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(Button, {
    variant: mi === E.modules.length - 1 ? 'accent' : 'primary',
    iconRight: mi === E.modules.length - 1 ? 'circle-check' : 'arrow-right',
    onClick: next
  }, mi === E.modules.length - 1 ? 'Imtihonni topshirish' : `Keyingi: ${E.modules[mi + 1].name}`))));
}
function ExamResult({
  lvl,
  run,
  onRetry,
  go
}) {
  const E = window.LZ_EXAMS[lvl];
  const score = list => {
    const qs = list.flatMap(g => g.qs);
    const ok = qs.filter(q => run.ans[q.id] === q.a).length;
    return {
      pct: Math.round(ok / qs.length * 100),
      ok,
      total: qs.length,
      qs
    };
  };
  const L = score(E.lesen),
    H = score(E.horen);
  const S = Math.min(100, Math.round(run.words / E.schreiben.min * 70));
  const P = Math.round(Object.keys(run.rec).length / E.sprechen.length * 75);
  const rows = [['lesen', L.pct, `${L.ok}/${L.total} to‘g‘ri`, true], ['horen', H.pct, `${H.ok}/${H.total} to‘g‘ri`, true], ['schreiben', S, `${run.words} so‘z yozildi`, false], ['sprechen', P, `${Object.keys(run.rec).length}/${E.sprechen.length} qism yozildi`, false]];
  const passed = rows.every(r => r[1] >= 60);
  const wrong = [...L.qs, ...H.qs].filter(q => run.ans[q.id] !== q.a);
  const [ref, on] = useInView(0);
  const avg = Math.round(rows.reduce((a, r) => a + r[1], 0) / rows.length);
  return /*#__PURE__*/React.createElement("main", {
    style: {
      maxWidth: 1000,
      margin: '0 auto',
      padding: '48px 24px 0',
      display: 'flex',
      flexDirection: 'column',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      borderRadius: 24,
      background: 'var(--ink-900)',
      color: '#fff',
      padding: '40px 44px',
      display: 'flex',
      alignItems: 'center',
      gap: 36,
      animation: 'lz-rise .6s var(--ease-out) both'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: 148,
      height: 148,
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 120 120",
    width: "148",
    height: "148",
    style: {
      transform: 'rotate(-90deg)'
    }
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "60",
    cy: "60",
    r: "52",
    fill: "none",
    stroke: "rgba(255,255,255,.14)",
    strokeWidth: "10"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "60",
    cy: "60",
    r: "52",
    fill: "none",
    stroke: passed ? 'var(--gold-500)' : 'var(--red-500)',
    strokeWidth: "10",
    strokeLinecap: "round",
    strokeDasharray: 2 * Math.PI * 52,
    strokeDashoffset: on ? 2 * Math.PI * 52 * (1 - avg / 100) : 2 * Math.PI * 52,
    style: {
      transition: 'stroke-dashoffset 1.4s var(--ease-out)'
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 44,
      letterSpacing: '-0.03em'
    }
  }, /*#__PURE__*/React.createElement(CountUp, {
    to: avg,
    on: on,
    suffix: "%"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: passed ? 'gold' : 'danger',
    icon: passed ? 'award' : 'info'
  }, passed ? 'Bestanden — o‘tdingiz' : 'Hali tayyor emas'), /*#__PURE__*/React.createElement("h1", {
    style: {
      color: '#fff',
      fontSize: 40
    }
  }, passed ? 'Sehr gut! Imtihonga tayyorsiz.' : 'Yaxshi urinish — yana mashq qiling.'), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'rgba(255,255,255,.7)',
      fontSize: 16,
      maxWidth: 520
    }
  }, E.title, " \xB7 mashq natijasi. Schreiben va Sprechen ballari taxminiy \u2014 o\u2018qituvchi 48 soat ichida yakuniy bahoni yuboradi."))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: 16
    }
  }, rows.map(([id, pct, sub, auto], i) => {
    const m = E.modules.find(x => x.id === id),
      pass = pct >= 60;
    return /*#__PURE__*/React.createElement("div", {
      key: id,
      style: {
        padding: 22,
        borderRadius: 16,
        background: 'var(--surface-card)',
        border: '1px solid var(--border-hairline)',
        display: 'flex',
        flexDirection: 'column',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 40,
        height: 40,
        borderRadius: 12,
        background: 'var(--gold-100)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: m.icon,
      size: 20
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("b", {
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: 20
      }
    }, m.name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: 'var(--text-muted)'
      }
    }, sub, auto ? '' : ' · taxminiy')), /*#__PURE__*/React.createElement("b", {
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: 34,
        letterSpacing: '-0.03em',
        color: pass ? 'var(--green-700)' : 'var(--red-600)'
      }
    }, /*#__PURE__*/React.createElement(CountUp, {
      to: pct,
      on: on
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        height: 8,
        borderRadius: 8,
        background: 'var(--paper-200)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: on ? pct + '%' : '0%',
        height: '100%',
        borderRadius: 8,
        background: pass ? 'var(--green-500)' : 'var(--red-500)',
        transition: `width 1.2s ${0.2 + i * 0.15}s var(--ease-out)`
      }
    }), /*#__PURE__*/React.createElement("i", {
      style: {
        position: 'absolute',
        left: '60%',
        top: -4,
        bottom: -4,
        width: 2,
        background: 'var(--ink-900)',
        borderRadius: 2
      }
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        color: 'var(--text-muted)'
      }
    }, "O\u2018tish chegarasi \u2014 60%"));
  })), wrong.length > 0 && /*#__PURE__*/React.createElement("section", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("h3", null, "Xatolar tahlili"), wrong.map(q => /*#__PURE__*/React.createElement("div", {
    key: q.id,
    style: {
      padding: 20,
      borderRadius: 16,
      background: 'var(--surface-card)',
      border: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement(Question, {
    q: q,
    n: q.id.toUpperCase(),
    value: run.ans[q.id],
    review: true,
    onPick: () => {}
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    iconLeft: "rotate-ccw",
    onClick: onRetry
  }, "Qayta topshirish"), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "lg",
    iconRight: "arrow-right",
    onClick: () => go('course', {
      id: lvl === 'A1' ? 'a1' : 'b1'
    })
  }, lvl, " kursiga tayyorlanish")));
}
function ExamScreen({
  go,
  setChromeless
}) {
  const [stage, setStage] = React.useState('intro');
  const [lvl, setLvl] = React.useState('A1');
  const [run, setRun] = React.useState(null);
  React.useEffect(() => {
    setChromeless(stage === 'run');
    return () => setChromeless(false);
  }, [stage]);
  if (stage === 'run') return /*#__PURE__*/React.createElement(ExamRun, {
    key: lvl + run,
    lvl: lvl,
    onExit: () => setStage('intro'),
    onFinish: r => {
      setRun(r);
      setStage('result');
      window.scrollTo(0, 0);
    }
  });
  if (stage === 'result') return /*#__PURE__*/React.createElement(ExamResult, {
    lvl: lvl,
    run: run,
    go: go,
    onRetry: () => {
      setRun(null);
      setStage('run');
    }
  });
  return /*#__PURE__*/React.createElement(ExamIntro, {
    lvl: lvl,
    setLvl: setLvl,
    go: go,
    onStart: () => {
      setRun(Date.now());
      setStage('run');
      window.scrollTo(0, 0);
    }
  });
}
Object.assign(window, {
  ExamScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web/Exam.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web/ExamData.js
try { (() => {
// Mock exam content — Goethe-style (Lesen · Hören · Schreiben · Sprechen). Sample material for the UI kit.
window.LZ_EXAMS = {
  A1: {
    title: 'Start Deutsch 1',
    cefr: 'A1',
    note: 'Goethe-Zertifikat A1 formatida',
    modules: [{
      id: 'lesen',
      name: 'Lesen',
      uz: 'O‘qish',
      min: 25,
      icon: 'book-open'
    }, {
      id: 'horen',
      name: 'Hören',
      uz: 'Tinglash',
      min: 20,
      icon: 'headphones'
    }, {
      id: 'schreiben',
      name: 'Schreiben',
      uz: 'Yozish',
      min: 20,
      icon: 'notebook-pen'
    }, {
      id: 'sprechen',
      name: 'Sprechen',
      uz: 'Gapirish',
      min: 15,
      icon: 'mic'
    }],
    lesen: [{
      title: 'Teil 1 · E-Mail',
      passage: 'Hallo Anna,\nam Samstag mache ich eine kleine Party. Sie beginnt um 18 Uhr bei mir zu Hause, Bahnhofstraße 12. Bitte bring etwas zu trinken mit. Kommst du?\nViele Grüße\nLena',
      prompt: 'Richtig oder falsch?',
      qs: [{
        id: 'l1',
        type: 'tf',
        text: 'Die Party ist am Sonntag.',
        a: 1
      }, {
        id: 'l2',
        type: 'tf',
        text: 'Die Party beginnt um 18 Uhr.',
        a: 0
      }, {
        id: 'l3',
        type: 'tf',
        text: 'Anna soll Essen mitbringen.',
        a: 1
      }, {
        id: 'l4',
        type: 'tf',
        text: 'Lena wohnt in der Bahnhofstraße.',
        a: 0
      }]
    }, {
      title: 'Teil 2 · Anzeige',
      passage: 'CAFÉ SONNE\nMontag bis Freitag: 8–18 Uhr\nSamstag: 9–14 Uhr\nSonntag: geschlossen\nFrühstück ab 3,50 €',
      prompt: 'Wählen Sie die richtige Antwort.',
      qs: [{
        id: 'l5',
        type: 'mc',
        text: 'Wann ist das Café am Sonntag geöffnet?',
        o: ['Von 9 bis 14 Uhr', 'Von 8 bis 18 Uhr', 'Gar nicht'],
        a: 2
      }, {
        id: 'l6',
        type: 'mc',
        text: 'Was kostet das Frühstück?',
        o: ['Ab 3,50 €', 'Ab 5 €', 'Es ist kostenlos'],
        a: 0
      }]
    }],
    horen: [{
      title: 'Teil 1 · Im Café',
      say: 'Guten Tag, ich möchte einen Kaffee und ein Brötchen, bitte. — Das macht vier Euro fünfzig.',
      qs: [{
        id: 'h1',
        type: 'mc',
        text: 'Was bestellt die Frau?',
        o: ['Kaffee und Brötchen', 'Tee und Kuchen', 'Wasser und Brot'],
        a: 0
      }, {
        id: 'h2',
        type: 'mc',
        text: 'Wie viel kostet es?',
        o: ['4,50 €', '5,40 €', '14,50 €'],
        a: 0
      }]
    }, {
      title: 'Teil 2 · Am Bahnhof',
      say: 'Achtung an Gleis fünf: Der Zug nach München fährt heute nicht um neun Uhr, sondern um neun Uhr dreißig.',
      qs: [{
        id: 'h3',
        type: 'mc',
        text: 'Wann fährt der Zug?',
        o: ['9:00 Uhr', '9:30 Uhr', '9:15 Uhr'],
        a: 1
      }, {
        id: 'h4',
        type: 'mc',
        text: 'Von welchem Gleis fährt der Zug?',
        o: ['Gleis 3', 'Gleis 5', 'Gleis 9'],
        a: 1
      }]
    }],
    schreiben: {
      title: 'E-Mail an die Lehrerin',
      task: 'Sie sind krank und können morgen nicht zum Deutschkurs kommen. Schreiben Sie eine kurze E-Mail an Ihre Lehrerin (ca. 30 Wörter). Warum schreiben Sie? Wann kommen Sie wieder?',
      min: 25
    },
    sprechen: [{
      title: 'Teil 1 · Sich vorstellen',
      task: 'Stellen Sie sich vor: Name, Land, Wohnort, Sprachen, Hobby.'
    }, {
      title: 'Teil 2 · Fragen stellen',
      task: 'Stellen Sie eine Frage zum Stichwort: „Geburtstag?“ und antworten Sie auf die Frage Ihres Partners.'
    }, {
      title: 'Teil 3 · Bitten',
      task: 'Formulieren Sie eine Bitte: „Sie sind im Restaurant. Bitten Sie um die Speisekarte.“'
    }]
  },
  B1: {
    title: 'Zertifikat B1',
    cefr: 'B1',
    note: 'Goethe-Zertifikat B1 formatida',
    modules: [{
      id: 'lesen',
      name: 'Lesen',
      uz: 'O‘qish',
      min: 65,
      icon: 'book-open'
    }, {
      id: 'horen',
      name: 'Hören',
      uz: 'Tinglash',
      min: 40,
      icon: 'headphones'
    }, {
      id: 'schreiben',
      name: 'Schreiben',
      uz: 'Yozish',
      min: 60,
      icon: 'notebook-pen'
    }, {
      id: 'sprechen',
      name: 'Sprechen',
      uz: 'Gapirish',
      min: 15,
      icon: 'mic'
    }],
    lesen: [{
      title: 'Teil 1 · Zeitungsartikel',
      passage: 'Immer mehr Menschen in Deutschland fahren mit dem Fahrrad zur Arbeit. Das ist gesund und spart Geld. Allerdings fehlen in vielen Städten noch sichere Radwege. Deshalb fordern Verbände mehr Investitionen, damit das Fahrrad nicht nur ein Hobby, sondern ein echtes Verkehrsmittel wird.',
      prompt: 'Richtig oder falsch?',
      qs: [{
        id: 'l1',
        type: 'tf',
        text: 'Immer weniger Menschen fahren mit dem Rad zur Arbeit.',
        a: 1
      }, {
        id: 'l2',
        type: 'tf',
        text: 'In vielen Städten gibt es noch zu wenige sichere Radwege.',
        a: 0
      }, {
        id: 'l3',
        type: 'tf',
        text: 'Radfahren ist laut Text nur ein Hobby.',
        a: 1
      }]
    }, {
      title: 'Teil 2 · Leserbrief',
      passage: 'Ich arbeite seit zwei Jahren im Homeoffice und möchte es nicht mehr missen. Ich spare täglich anderthalb Stunden Fahrzeit und kann mich besser konzentrieren. Nur den Kontakt zu den Kollegen vermisse ich manchmal.',
      prompt: 'Wählen Sie die richtige Antwort.',
      qs: [{
        id: 'l4',
        type: 'mc',
        text: 'Was ist ein Vorteil des Homeoffice für den Schreiber?',
        o: ['Er spart Fahrzeit.', 'Er verdient mehr.', 'Er hat mehr Urlaub.'],
        a: 0
      }, {
        id: 'l5',
        type: 'mc',
        text: 'Was vermisst er manchmal?',
        o: ['Das Büro-Essen', 'Den Kontakt zu Kollegen', 'Seinen Chef'],
        a: 1
      }]
    }],
    horen: [{
      title: 'Teil 1 · Ansage',
      say: 'Liebe Fahrgäste, wegen einer Baustelle fällt die Linie fünf zwischen Hauptbahnhof und Rathaus heute aus. Bitte nutzen Sie den Ersatzbus vor dem Haupteingang.',
      qs: [{
        id: 'h1',
        type: 'mc',
        text: 'Warum fällt die Linie fünf aus?',
        o: ['Wegen eines Streiks', 'Wegen einer Baustelle', 'Wegen des Wetters'],
        a: 1
      }, {
        id: 'h2',
        type: 'mc',
        text: 'Wo fährt der Ersatzbus ab?',
        o: ['Am Rathaus', 'Am Hauptbahnhof, vor dem Haupteingang', 'An der Haltestelle Süd'],
        a: 1
      }]
    }],
    schreiben: {
      title: 'Forumsbeitrag',
      task: 'Im Internetforum diskutiert man über das Thema „Sollen Kinder früh eine Fremdsprache lernen?“ Schreiben Sie Ihre Meinung (ca. 80 Wörter). Begründen Sie Ihre Meinung und nennen Sie ein Beispiel.',
      min: 60
    },
    sprechen: [{
      title: 'Teil 1 · Gemeinsam planen',
      task: 'Planen Sie mit Ihrem Partner eine Geburtstagsfeier für einen Freund: Ort, Essen, Programm.'
    }, {
      title: 'Teil 2 · Präsentation',
      task: 'Halten Sie eine kurze Präsentation zum Thema „Mein Alltag mit der deutschen Sprache“.'
    }, {
      title: 'Teil 3 · Reagieren',
      task: 'Reagieren Sie auf die Präsentation Ihres Partners: Frage stellen und kurz Feedback geben.'
    }]
  }
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web/ExamData.js", error: String((e && e.message) || e) }); }

// ui_kits/web/Home.jsx
try { (() => {
// Design-system components are destructured once in index.html.

const LZ_GREETINGS = [['Hallo', 'Salom'], ['Guten Morgen', 'Xayrli tong'], ['Danke schön', 'Katta rahmat'], ['Bis bald', 'Tez orada ko‘rishamiz'], ['Viel Erfolg', 'Omad tilayman']];
const LZ_PHRASES = [['Guten Tag', 'Xayrli kun'], ['Wie geht’s?', 'Ishlar qalay?'], ['Ich lerne Deutsch', 'Men nemis tilini o‘rganaman'], ['Danke schön', 'Katta rahmat'], ['Alles klar', 'Hammasi joyida'], ['Bis morgen!', 'Ertagacha!'], ['Sprechen Sie langsam, bitte', 'Sekinroq gapiring, iltimos'], ['Schön, dich kennenzulernen', 'Tanishganimdan xursandman']];
function HeroGreeting() {
  const [i, setI] = React.useState(0);
  React.useEffect(() => {
    const id = setInterval(() => setI(x => (x + 1) % LZ_GREETINGS.length), 2600);
    return () => clearInterval(id);
  }, []);
  const [de, uz] = LZ_GREETINGS[i];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      alignSelf: 'flex-start',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      height: 36,
      padding: '0 6px 0 14px',
      borderRadius: 999,
      background: 'var(--surface-card)',
      border: '1px solid var(--border-hairline)',
      fontSize: 14,
      animation: 'lz-rise .6s var(--ease-out) both'
    }
  }, /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      display: 'inline-flex',
      gap: 8,
      alignItems: 'baseline',
      animation: 'lz-swap 2.6s var(--ease-out) both',
      minWidth: 190
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 16,
      fontWeight: 700,
      letterSpacing: '-0.01em'
    }
  }, de), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)'
    }
  }, "= ", uz)), /*#__PURE__*/React.createElement("span", {
    style: {
      height: 24,
      padding: '0 10px',
      borderRadius: 999,
      background: 'var(--gold-500)',
      color: 'var(--ink-900)',
      fontWeight: 700,
      fontSize: 12,
      display: 'inline-flex',
      alignItems: 'center'
    }
  }, "A1 \u2192 C1"));
}
function Hero({
  go,
  openCourse
}) {
  const [prog, setProg] = React.useState(0);
  React.useEffect(() => {
    const id = setTimeout(() => setProg(58), 900);
    return () => clearTimeout(id);
  }, []);
  const words = ['Nemis', 'tilini'];
  const covers = [{
    level: 'A1',
    tone: 'gold',
    word: 'Hallo!',
    d: 0,
    mt: 0
  }, {
    level: 'B1',
    tone: 'ink',
    word: 'Ich schaffe das.',
    d: 1.2,
    mt: 44
  }, {
    level: 'A2',
    tone: 'paper',
    word: 'Wie geht’s?',
    d: 2.1,
    mt: 0
  }, {
    level: 'B2',
    tone: 'red',
    word: 'Auf geht’s!',
    d: 0.6,
    mt: 44
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      maxWidth: 1240,
      margin: '0 auto',
      padding: '56px 24px 88px',
      display: 'grid',
      gridTemplateColumns: '1.1fr 1fr',
      gap: 56,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(HeroGreeting, null), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 68,
      lineHeight: 1.01,
      letterSpacing: '-0.035em',
      fontWeight: 800
    }
  }, words.map((w, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: w
  }, /*#__PURE__*/React.createElement("span", {
    className: "lz-w",
    style: {
      animationDelay: 0.1 + i * 0.08 + 's'
    }
  }, w), ' ')), /*#__PURE__*/React.createElement("span", {
    className: "lz-w",
    style: {
      animationDelay: '0.3s'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "lz-mark anim"
  }, "o\u2018zbek tilida")), ' ', /*#__PURE__*/React.createElement("span", {
    className: "lz-w",
    style: {
      animationDelay: '0.42s'
    }
  }, "o\u2018rganing.")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 19,
      maxWidth: 530,
      animation: 'lz-rise .8s .55s var(--ease-out) both'
    }
  }, "Qisqa video darslar, audio mashqlar va Goethe formatidagi testlar. Telefon yoki kompyuterda \u2014 o\u2018zingizga qulay vaqtda."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      flexWrap: 'wrap',
      animation: 'lz-rise .8s .7s var(--ease-out) both'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "lg",
    iconRight: "arrow-right",
    onClick: () => go('market')
  }, "Kurslarni ko\u2018rish"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    iconLeft: "circle-play",
    onClick: () => openCourse('aussprache')
  }, "Bepul darsdan boshlash")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 36,
      marginTop: 8,
      animation: 'lz-rise .8s .85s var(--ease-out) both'
    }
  }, [[31200, 0, '+', 'o‘quvchi'], [4.8, 1, '', 'o‘rtacha baho'], [120, 0, '+', 'soat video']].map(([n, d, s, l]) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 30,
      fontWeight: 800,
      letterSpacing: '-0.02em',
      color: 'var(--text-strong)'
    }
  }, /*#__PURE__*/React.createElement(CountUp, {
    to: n,
    decimals: d,
    suffix: s
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: 'var(--text-muted)'
    }
  }, l))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 14
    }
  }, covers.map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: c.level,
    style: {
      marginTop: c.mt,
      marginBottom: i === 3 ? -44 : 0,
      animation: `lz-rise .9s ${0.25 + i * 0.12}s var(--ease-out) both`
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "lz-float",
    style: {
      animation: `lz-float ${5 + i * 0.7}s ${c.d}s ease-in-out infinite`
    }
  }, /*#__PURE__*/React.createElement(CourseCover, {
    level: c.level,
    tone: c.tone,
    word: c.word,
    ratio: "4 / 3",
    radius: 16
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "lz-float",
    style: {
      position: 'absolute',
      right: -14,
      top: -18,
      animation: 'lz-pop .6s 1.2s var(--ease-out) both, lz-float 5.5s 1.8s ease-in-out infinite'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      height: 40,
      padding: '0 16px 0 12px',
      borderRadius: 999,
      background: 'var(--ink-900)',
      color: '#fff',
      fontWeight: 600,
      fontSize: 14,
      boxShadow: 'var(--shadow-md)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "award",
    size: 18,
    color: "var(--gold-500)"
  }), "Goethe sertifikati")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: -32,
      bottom: 30,
      width: 268,
      padding: 16,
      borderRadius: 16,
      background: '#fff',
      boxShadow: 'var(--shadow-md)',
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      animation: 'lz-rise .8s 1s var(--ease-out) both'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "Nilufar Saidova",
    size: 34
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      fontSize: 14
    }
  }, "Nilufar \xB7 A1"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, "7-dars: Der, die, das")), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 24,
      height: 24,
      borderRadius: '50%',
      background: 'var(--green-500)',
      color: '#fff',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      animation: 'lz-pop .5s 1.9s var(--ease-out) both'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 14,
    strokeWidth: 3
  }))), /*#__PURE__*/React.createElement(ProgressBar, {
    value: prog,
    showValue: true,
    label: "Kurs bo\u2018yicha"
  }))));
}
function PhraseBand() {
  const row = [...LZ_PHRASES, ...LZ_PHRASES];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--gold-500)',
      color: 'var(--ink-900)',
      overflow: 'hidden',
      borderTop: '1px solid var(--ink-900)',
      borderBottom: '1px solid var(--ink-900)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "lz-marquee",
    style: {
      padding: '18px 0'
    }
  }, row.map(([de, uz], i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      display: 'inline-flex',
      alignItems: 'baseline',
      gap: 12,
      paddingRight: 40,
      whiteSpace: 'nowrap'
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 26,
      fontWeight: 800,
      letterSpacing: '-0.02em'
    }
  }, de), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      fontWeight: 500,
      opacity: 0.8
    }
  }, uz), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: 'var(--ink-900)',
      alignSelf: 'center',
      marginLeft: 28
    }
  })))));
}
function Roadmap({
  data,
  go
}) {
  const [ref, on] = useInView(0.25);
  const cert = {
    A1: 'Start Deutsch 1',
    A2: 'Start Deutsch 2',
    B1: 'Goethe-Zertifikat B1',
    B2: 'Goethe-Zertifikat B2',
    C1: 'Goethe-Zertifikat C1'
  };
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 8,
      right: 8,
      top: 11,
      height: 3,
      borderRadius: 3,
      background: 'var(--paper-200)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      borderRadius: 3,
      background: 'var(--ink-900)',
      width: on ? '100%' : '0%',
      transition: 'width 1.8s .2s var(--ease-in-out)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'grid',
      gridTemplateColumns: 'repeat(5, 1fr)',
      gap: 14
    }
  }, data.levels.map((l, i) => /*#__PURE__*/React.createElement("div", {
    key: l.id,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 26,
      height: 26,
      borderRadius: '50%',
      background: i === 0 ? 'var(--gold-500)' : 'var(--surface-card)',
      border: '3px solid var(--ink-900)',
      boxShadow: '0 0 0 4px var(--bg-page)',
      opacity: 0,
      animation: on ? `lz-pop .5s ${0.2 + i * 0.36}s var(--ease-out) forwards` : 'none'
    }
  }), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "lz-lift",
    onClick: () => go('market', {
      level: l.id
    }),
    style: {
      textAlign: 'left',
      cursor: 'pointer',
      padding: 20,
      borderRadius: 16,
      border: '1px solid var(--border-hairline)',
      background: i === 0 ? 'var(--gold-500)' : 'var(--surface-card)',
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      fontFamily: 'var(--font-ui)',
      opacity: on ? 1 : 0,
      transform: on ? 'none' : 'translateY(16px)',
      transition: `opacity .6s ${0.3 + i * 0.3}s var(--ease-out), transform .6s ${0.3 + i * 0.3}s var(--ease-out), box-shadow var(--dur-base)`
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 48,
      letterSpacing: '-0.04em',
      lineHeight: 1,
      color: 'var(--ink-900)'
    }
  }, l.id), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      fontSize: 15,
      color: 'var(--ink-900)'
    }
  }, l.name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: i === 0 ? 'var(--ink-700)' : 'var(--text-muted)'
    }
  }, l.count, " kurs \xB7 ", l.weeks)), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontSize: 12,
      fontWeight: 600,
      color: i === 0 ? 'var(--ink-900)' : 'var(--gold-700)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "award",
    size: 14
  }), cert[l.id]))))));
}
function PaymentBand() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 32,
      padding: '28px 36px',
      borderRadius: 20,
      background: 'var(--surface-card)',
      border: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 24
    }
  }, "Qulay to\u2018lov \u2014 bir daqiqada"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-muted)'
    }
  }, "To\u2018lovdan so\u2018ng kurs darhol ochiladi. Komissiya yo\u2018q, 30 kunlik qaytarish kafolati.")), [['Click', null], ['Payme', '../../assets/payments/payme.png'], ['Uzum', '../../assets/payments/uzum.png']].map(([n, src]) => /*#__PURE__*/React.createElement("span", {
    key: n,
    className: "lz-lift",
    style: {
      width: 150,
      height: 64,
      borderRadius: 14,
      border: '1px solid var(--border-hairline)',
      background: 'var(--paper-50)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: n,
    style: {
      height: 26,
      maxWidth: 110,
      objectFit: 'contain'
    }
  }) : /*#__PURE__*/React.createElement("b", {
    style: {
      fontSize: 22,
      color: 'var(--ink-900)',
      letterSpacing: '-0.02em'
    }
  }, n))));
}
function HomeScreen({
  go,
  openCourse,
  data
}) {
  const {
    courses,
    instructors
  } = data;
  const popular = courses.filter(c => ['a1', 'b1', 'grammar', 'vocab'].includes(c.id));
  const wrap = {
    maxWidth: 1240,
    margin: '0 auto',
    padding: '0 24px'
  };
  const head = (over, title, action) => /*#__PURE__*/React.createElement(Reveal, {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 16,
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, over && /*#__PURE__*/React.createElement("span", {
    className: "lz-overline"
  }, over), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 36
    }
  }, title)), action);
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Hero, {
    go: go,
    openCourse: openCourse
  }), /*#__PURE__*/React.createElement(PhraseBand, null), /*#__PURE__*/React.createElement("section", {
    style: {
      ...wrap,
      padding: '96px 24px 0'
    }
  }, head('Yo‘l xaritasi', 'A1 dan C1 gacha — qadam-baqadam'), /*#__PURE__*/React.createElement(Roadmap, {
    data: data,
    go: go
  })), /*#__PURE__*/React.createElement("section", {
    style: {
      ...wrap,
      padding: '96px 24px 0'
    }
  }, head('Mashhur', 'Eng ko‘p tanlangan kurslar', /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    iconRight: "arrow-right",
    onClick: () => go('market')
  }, "Barchasi")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
      gap: 24
    }
  }, popular.map((c, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: c.id,
    delay: i * 90
  }, /*#__PURE__*/React.createElement(CourseCard, {
    course: {
      ...c,
      instructor: instructors[c.instructor].name
    },
    onClick: () => openCourse(c.id)
  }))))), /*#__PURE__*/React.createElement(HomePractice, {
    data: data,
    openCourse: openCourse
  }), /*#__PURE__*/React.createElement(HomeWhy, {
    go: go
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      ...wrap,
      padding: '96px 24px 0'
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(PaymentBand, null))), /*#__PURE__*/React.createElement(HomeHow, null), /*#__PURE__*/React.createElement(HomeApp, null), /*#__PURE__*/React.createElement(HomeStories, null), /*#__PURE__*/React.createElement("section", {
    style: {
      ...wrap,
      padding: '96px 24px 0'
    }
  }, head('Jamoa', 'O‘qituvchilar'), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 20
    }
  }, Object.values(instructors).map((t, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: t.id,
    delay: i * 90
  }, /*#__PURE__*/React.createElement("div", {
    className: "lz-lift",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      padding: 20,
      borderRadius: 16,
      background: 'var(--surface-card)',
      border: '1px solid var(--border-hairline)',
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: t.name,
    size: 64,
    ring: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      fontSize: 17
    }
  }, t.name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--text-muted)',
      lineHeight: 1.4
    }
  }, t.role)), /*#__PURE__*/React.createElement("span", {
    style: {
      marginTop: 'auto',
      fontSize: 13,
      display: 'flex',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", null, "\u2605 ", String(t.rating).replace('.', ',')), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)'
    }
  }, t.students.toLocaleString('ru-RU'), " o\u2018quvchi"))))))), /*#__PURE__*/React.createElement(HomeFaq, null), /*#__PURE__*/React.createElement(HomeCta, {
    openCourse: openCourse
  }));
}
Object.assign(window, {
  HomeScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web/HomeMore.jsx
try { (() => {
// Design-system components are destructured once in index.html.

const LZ_WORDS = [['der', 'Tisch', 'stol'], ['die', 'Lampe', 'chiroq'], ['das', 'Buch', 'kitob'], ['der', 'Apfel', 'olma'], ['die', 'Katze', 'mushuk'], ['das', 'Wasser', 'suv'], ['der', 'Hund', 'it'], ['die', 'Schule', 'maktab'], ['das', 'Haus', 'uy'], ['die', 'Zeit', 'vaqt']];
const LZ_ART = {
  der: 'var(--blue-500)',
  die: 'var(--red-500)',
  das: 'var(--green-500)'
};
function Flashcard() {
  const [i, setI] = React.useState(0);
  const [flip, setFlip] = React.useState(false);
  const [art, de, uz] = LZ_WORDS[i];
  const next = () => {
    setFlip(false);
    setTimeout(() => setI((i + 1) % LZ_WORDS.length), 250);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: 'lz-flip' + (flip ? ' on' : ''),
    onClick: () => setFlip(!flip),
    style: {
      cursor: 'pointer',
      height: 260
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "f",
    style: {
      borderRadius: 20,
      background: 'var(--surface-card)',
      border: '1px solid var(--border-hairline)',
      boxShadow: 'var(--shadow-sm)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "lz-overline"
  }, "Kun so\u2018zi \xB7 ", i + 1, "/", LZ_WORDS.length), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 64,
      letterSpacing: '-0.03em',
      color: 'var(--text-strong)'
    }
  }, de), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: 'var(--text-muted)',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "rotate-ccw",
    size: 14
  }), "Artiklni o\u2018ylang va bosing")), /*#__PURE__*/React.createElement("div", {
    className: "b",
    style: {
      borderRadius: 20,
      background: LZ_ART[art],
      color: '#fff',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 64,
      letterSpacing: '-0.03em'
    }
  }, art, " ", de), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 22,
      fontWeight: 500,
      opacity: 0.9
    }
  }, "= ", uz)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, Object.entries(LZ_ART).map(([a, c]) => /*#__PURE__*/React.createElement("span", {
    key: a,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("i", {
    style: {
      width: 10,
      height: 10,
      borderRadius: '50%',
      background: c
    }
  }), a))), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    iconRight: "arrow-right",
    onClick: next,
    style: {
      marginLeft: 'auto'
    }
  }, "Keyingi so\u2018z")));
}
function MiniQuiz({
  openCourse
}) {
  const qs = React.useMemo(() => [4, 1, 7, 5, 2].map(k => LZ_WORDS[k]), []);
  const [i, setI] = React.useState(0);
  const [pick, setPick] = React.useState(null);
  const [score, setScore] = React.useState(0);
  const done = i >= qs.length;
  const choose = a => {
    if (pick) return;
    setPick(a);
    if (a === qs[i][0]) setScore(s => s + 1);
    setTimeout(() => {
      setPick(null);
      setI(x => x + 1);
    }, 1100);
  };
  const reset = () => {
    setI(0);
    setScore(0);
    setPick(null);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 20,
      background: 'var(--ink-900)',
      color: '#fff',
      padding: 28,
      minHeight: 320,
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "lz-overline",
    style: {
      color: 'var(--gold-500)'
    }
  }, "30 soniyalik test"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      gap: 4
    }
  }, qs.map((_, k) => /*#__PURE__*/React.createElement("i", {
    key: k,
    style: {
      flex: 1,
      height: 4,
      borderRadius: 4,
      background: k < i ? 'var(--gold-500)' : 'rgba(255,255,255,.18)',
      transition: 'background .3s'
    }
  }))), /*#__PURE__*/React.createElement("span", {
    className: "lz-mono",
    style: {
      fontSize: 13,
      color: 'rgba(255,255,255,.6)'
    }
  }, Math.min(i + 1, qs.length), "/", qs.length)), !done ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 6,
      animation: 'lz-rise .4s var(--ease-out) both'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: 'rgba(255,255,255,.6)'
    }
  }, "Qaysi artikl? \xB7 ", qs[i][2]), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 56,
      letterSpacing: '-0.03em'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: pick ? LZ_ART[qs[i][0]] : 'var(--gold-500)'
    }
  }, pick ? qs[i][0] : '___'), " ", qs[i][1])), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10
    }
  }, ['der', 'die', 'das'].map(a => {
    const ok = pick && a === qs[i][0],
      bad = pick === a && a !== qs[i][0];
    return /*#__PURE__*/React.createElement("button", {
      key: a,
      type: "button",
      onClick: () => choose(a),
      style: {
        flex: 1,
        height: 52,
        borderRadius: 12,
        cursor: pick ? 'default' : 'pointer',
        fontFamily: 'var(--font-ui)',
        fontSize: 18,
        fontWeight: 700,
        color: '#fff',
        border: '1.5px solid ' + (ok ? 'var(--green-500)' : bad ? 'var(--red-500)' : 'rgba(255,255,255,.25)'),
        background: ok ? 'var(--green-500)' : bad ? 'var(--red-500)' : 'transparent',
        animation: bad ? 'lz-shake .35s' : 'none',
        transition: 'background .15s, border-color .15s'
      }
    }, a);
  }))) : /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 14,
      textAlign: 'center',
      animation: 'lz-rise .5s var(--ease-out) both'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 72,
      letterSpacing: '-0.04em',
      color: 'var(--gold-500)'
    }
  }, score, "/", qs.length), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 17,
      color: 'rgba(255,255,255,.8)'
    }
  }, score >= 4 ? 'Ajoyib! Siz A1 ga tayyorsiz.' : 'Yaxshi boshlanish! Artikllarni kursda mustahkamlaymiz.'), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    iconRight: "arrow-right",
    onClick: () => openCourse('aussprache')
  }, "Bepul darsni boshlash"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: reset,
    style: {
      color: '#fff'
    }
  }, "Qayta urinish"))));
}
function HomePractice({
  openCourse
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      marginTop: 96,
      background: 'var(--paper-100)',
      padding: '80px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1240,
      margin: '0 auto',
      padding: '0 24px'
    }
  }, /*#__PURE__*/React.createElement(Reveal, {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "lz-overline"
  }, "Hoziroq sinab ko\u2018ring"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 36
    }
  }, "Ro\u2018yxatdan o\u2018tmasdan \u2014 ", /*#__PURE__*/React.createElement("span", {
    className: "lz-mark"
  }, "birinchi dars"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Flashcard, null)), /*#__PURE__*/React.createElement(Reveal, {
    delay: 120
  }, /*#__PURE__*/React.createElement(MiniQuiz, {
    openCourse: openCourse
  })))));
}
function HomeWhy({
  go
}) {
  const items = [['graduation-cap', 'Universitet', 'Germaniyada o‘qish', 'Ko‘pgina dasturlar uchun odatda B2–C1 daraja so‘raladi. TestDaF/DSH formatiga tayyorlaning.', 'B2–C1', 'Imtihon'], ['trending-up', 'Ausbildung va ish', 'Kasb va karyera', 'Rezyume, Anschreiben va intervyu nemis tilida. Odatda B1–B2 darajadan boshlanadi.', 'B1–B2', 'Ish va karyera'], ['heart', 'Pflege', 'Hamshiralik va tibbiyot', 'Tibbiy lug‘at, bemor bilan muloqot va hujjatlar — maxsus B2 kurs.', 'B2', 'Pflege']];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1240,
      margin: '0 auto',
      padding: '96px 24px 0'
    }
  }, /*#__PURE__*/React.createElement(Reveal, {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "lz-overline"
  }, "Nega nemis tili?"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 36,
      maxWidth: 640
    }
  }, "Maqsadingizga mos ", /*#__PURE__*/React.createElement("span", {
    className: "lz-mark"
  }, "yo\u2018nalish"), " tanlang")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 20
    }
  }, items.map(([ic, over, title, text, lvl, q], i) => /*#__PURE__*/React.createElement(Reveal, {
    key: title,
    delay: i * 110
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "lz-lift",
    onClick: () => go('market', {
      q
    }),
    style: {
      width: '100%',
      height: '100%',
      textAlign: 'left',
      cursor: 'pointer',
      padding: 28,
      borderRadius: 20,
      border: '1px solid var(--border-hairline)',
      background: i === 1 ? 'var(--gold-500)' : 'var(--surface-card)',
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      fontFamily: 'var(--font-ui)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 48,
      height: 48,
      borderRadius: 14,
      background: i === 1 ? 'var(--ink-900)' : 'var(--gold-100)',
      color: i === 1 ? 'var(--gold-500)' : 'var(--gold-700)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 24
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 28,
      letterSpacing: '-0.03em',
      color: 'var(--ink-900)'
    }
  }, lvl)), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "lz-overline",
    style: {
      color: i === 1 ? 'var(--ink-800)' : undefined
    }
  }, over), /*#__PURE__*/React.createElement("b", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 24,
      letterSpacing: '-0.02em',
      color: 'var(--ink-900)'
    }
  }, title), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      color: i === 1 ? 'var(--ink-800)' : 'var(--text-muted)'
    }
  }, text)), /*#__PURE__*/React.createElement("span", {
    style: {
      marginTop: 'auto',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontWeight: 600,
      fontSize: 14,
      color: 'var(--ink-900)'
    }
  }, "Kurslarni ko\u2018rish ", /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    size: 16
  })))))));
}
function HomeHow() {
  const steps = [['search', 'Kursni tanlang', 'Darajangiz va maqsadingizga mos kursni toping. Har birida bepul namunaviy darslar bor.'], ['credit-card', 'To‘lang va boshlang', 'Click, Payme yoki Uzum orqali. Kurs darhol ochiladi — umrbod.'], ['headphones', 'Har kuni 15 daqiqa', 'Video, audio va PDF mashqlar. Izohlarda o‘qituvchidan savol so‘rang.'], ['award', 'Sertifikat oling', 'Kurs oxirida test topshiring va lehrer.uz sertifikatini yuklab oling.']];
  const [ref, on] = useInView(0.3);
  return /*#__PURE__*/React.createElement("section", {
    ref: ref,
    style: {
      maxWidth: 1240,
      margin: '0 auto',
      padding: '96px 24px 0'
    }
  }, /*#__PURE__*/React.createElement(Reveal, {
    style: {
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 36
    }
  }, "Qanday ishlaydi")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 20
    }
  }, steps.map(([ic, t, d], i) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      padding: '0 8px 0 0',
      opacity: on ? 1 : 0,
      transform: on ? 'none' : 'translateY(18px)',
      transition: `all .6s ${i * 0.14}s var(--ease-out)`
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 64,
      letterSpacing: '-0.05em',
      lineHeight: 1,
      color: 'var(--gold-500)',
      WebkitTextStroke: '0'
    }
  }, i + 1), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: 2,
      background: 'var(--border-default)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 40,
      height: 40,
      borderRadius: 12,
      background: 'var(--ink-900)',
      color: 'var(--gold-500)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 20
  }))), /*#__PURE__*/React.createElement("h4", null, t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      color: 'var(--text-muted)'
    }
  }, d)))));
}
function HomeStories() {
  const stories = [['Nilufar Saidova', 'A1 → B1', '5 oy', 'Noldan boshladim. Har kuni tramvayda bitta dars ko‘rardim — beshinchi oyda Goethe B1 ni topshirdim.', true], ['Otabek Mirzayev', 'A2 → B2', '8 oy', 'Grammatikani o‘zbekcha tushuntirishgani hal qiluvchi bo‘ldi. Ausbildung uchun intervyuni nemis tilida topshirdim.', false], ['Kamola Rahimova', 'B1 → B2', '4 oy', 'Pflege kursi aynan menga kerak edi: tibbiy lug‘at va real dialoglar. Audio fayllarni yo‘lda tinglayman.', false]];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1240,
      margin: '0 auto',
      padding: '96px 24px 0'
    }
  }, /*#__PURE__*/React.createElement(Reveal, {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "lz-overline"
  }, "O\u2018quvchilar"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 36
    }
  }, "Ular boshladi \u2014 ", /*#__PURE__*/React.createElement("span", {
    className: "lz-mark"
  }, "siz ham"), " boshlang")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 20
    }
  }, stories.map(([n, path, time, q, dark], i) => /*#__PURE__*/React.createElement(Reveal, {
    key: n,
    delay: i * 110
  }, /*#__PURE__*/React.createElement("figure", {
    className: "lz-lift",
    style: {
      margin: 0,
      height: '100%',
      padding: 28,
      borderRadius: 20,
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
      background: dark ? 'var(--ink-900)' : 'var(--surface-card)',
      color: dark ? '#fff' : 'var(--text-body)',
      border: '1px solid ' + (dark ? 'var(--ink-900)' : 'var(--border-hairline)')
    }
  }, /*#__PURE__*/React.createElement(Rating, {
    value: 5,
    showValue: false
  }), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      fontSize: 17,
      lineHeight: 1.55,
      color: dark ? 'rgba(255,255,255,.9)' : 'var(--text-strong)'
    }
  }, "\u201C", q, "\u201D"), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      marginTop: 'auto',
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: n,
    size: 44
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      fontSize: 15
    }
  }, n), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: dark ? 'rgba(255,255,255,.6)' : 'var(--text-muted)'
    }
  }, time, " ichida")), /*#__PURE__*/React.createElement(Badge, {
    tone: dark ? 'gold' : 'goldSoft'
  }, path)))))));
}
function HomeFaq() {
  const faqs = [['Nemis tilini noldan boshlasam bo‘ladimi?', 'Ha. A1 kursi alifbodan boshlanadi, har bir mavzu o‘zbek tilida tushuntiriladi. Avval bepul talaffuz mini-kursini ko‘rishingiz mumkin.'], ['To‘lovdan keyin kurs qachon ochiladi?', 'Darhol. Click, Payme yoki Uzum orqali to‘lov tasdiqlangach, kurs “Mening kurslarim” bo‘limida paydo bo‘ladi va umrbod sizniki.'], ['To‘lovda qo‘shimcha komissiya bormi?', 'Yo‘q. Ko‘rsatilgan narx — to‘laydigan narxingiz. Uzum orqali 3–12 oyga bo‘lib to‘lash ham mumkin.'], ['Pulni qaytarib olsam bo‘ladimi?', 'Ha, xariddan keyin 30 kun ichida sababsiz qaytarib beramiz.'], ['Sertifikat Goethe imtihoniga teng keladimi?', 'Yo‘q — kurs oxirida lehrer.uz sertifikati beriladi. Goethe-Zertifikat alohida topshiriladi, kurslarimiz esa shu format uchun tayyorlaydi.']];
  const [open, setOpen] = React.useState(0);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 880,
      margin: '0 auto',
      padding: '96px 24px 0'
    }
  }, /*#__PURE__*/React.createElement(Reveal, {
    style: {
      marginBottom: 28,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 36
    }
  }, "Ko\u2018p so\u2018raladigan savollar")), /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 20,
      background: 'var(--surface-card)',
      border: '1px solid var(--border-hairline)',
      overflow: 'hidden'
    }
  }, faqs.map(([q, a], i) => /*#__PURE__*/React.createElement("div", {
    key: q,
    style: {
      borderTop: i ? '1px solid var(--border-hairline)' : 0
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setOpen(open === i ? -1 : i),
    style: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      padding: '20px 24px',
      border: 0,
      background: 'transparent',
      cursor: 'pointer',
      textAlign: 'left',
      fontFamily: 'var(--font-ui)',
      fontSize: 17,
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, q), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 32,
      height: 32,
      borderRadius: '50%',
      background: open === i ? 'var(--gold-500)' : 'var(--paper-100)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      transform: open === i ? 'rotate(45deg)' : 'none',
      transition: 'transform .3s var(--ease-out), background .2s'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "plus",
    size: 18
  }))), /*#__PURE__*/React.createElement("div", {
    className: 'lz-faq' + (open === i ? ' on' : '')
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      padding: '0 24px 22px',
      color: 'var(--text-muted)',
      fontSize: 16,
      maxWidth: 680
    }
  }, a))))))));
}
function HomeCta({
  openCourse
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1240,
      margin: '0 auto',
      padding: '96px 24px 0'
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      borderRadius: 28,
      background: 'var(--ink-900)',
      color: '#fff',
      padding: '56px 64px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      right: 180,
      bottom: -110,
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 380,
      lineHeight: 1,
      letterSpacing: '-0.06em',
      color: 'rgba(255,198,41,.08)',
      animation: 'lz-float 7s ease-in-out infinite'
    }
  }, "Ja!"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      color: '#fff',
      fontSize: 44
    }
  }, "Birinchi darsni ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--gold-500)'
    }
  }, "bugun"), " boshlang."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'rgba(255,255,255,.72)',
      fontSize: 18
    }
  }, "Talaffuz mini-kursi \u2014 bepul. Ro\u2018yxatdan o\u2018tish 30 soniya.")), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "lg",
    iconRight: "arrow-right",
    onClick: () => openCourse('aussprache'),
    style: {
      position: 'relative'
    }
  }, "Bepul boshlash"))));
}
Object.assign(window, {
  HomePractice,
  HomeWhy,
  HomeHow,
  HomeStories,
  HomeFaq,
  HomeCta
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web/HomeMore.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web/Login.jsx
try { (() => {
// Design-system components are destructured once in index.html.

function LoginScreen({
  onLogin,
  onGuest,
  go
}) {
  const [mode, setMode] = React.useState('login');
  const [name, setName] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [pass, setPass] = React.useState('');
  const submit = e => {
    e.preventDefault();
    onLogin({
      name: name.trim() || 'Aziza Rahimova',
      phone
    });
  };
  return /*#__PURE__*/React.createElement("main", {
    style: {
      minHeight: '100vh',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      padding: '32px 48px'
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onGuest,
    style: {
      alignSelf: 'flex-start',
      border: 0,
      background: 'none',
      padding: 0,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    size: 26
  })), /*#__PURE__*/React.createElement("form", {
    onSubmit: submit,
    style: {
      margin: 'auto 0',
      width: '100%',
      maxWidth: 400,
      alignSelf: 'center',
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 40
    }
  }, mode === 'login' ? 'Xush kelibsiz!' : 'Hisob yaratish'), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-muted)'
    }
  }, mode === 'login' ? 'Darslaringizni davom ettirish uchun kiring.' : '30 soniya — va birinchi bepul dars sizniki.')), /*#__PURE__*/React.createElement(Tabs, {
    variant: "pill",
    value: mode,
    onChange: setMode,
    items: [{
      id: 'login',
      label: 'Kirish'
    }, {
      id: 'signup',
      label: 'Ro‘yxatdan o‘tish'
    }],
    style: {
      alignSelf: 'flex-start'
    }
  }), mode === 'signup' && /*#__PURE__*/React.createElement(Input, {
    label: "Ism va familiya",
    placeholder: "Aziza Rahimova",
    value: name,
    onChange: e => setName(e.target.value)
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Telefon yoki email",
    iconLeft: "phone",
    placeholder: "+998 90 123 45 67",
    value: phone,
    onChange: e => setPhone(e.target.value),
    autoFocus: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Parol",
    type: "password",
    iconLeft: "lock",
    placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",
    value: pass,
    onChange: e => setPass(e.target.value),
    hint: mode === 'login' ? 'Demo: istalgan ma’lumot bilan kirish mumkin' : undefined
  }), /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    size: "lg",
    fullWidth: true
  }, mode === 'login' ? 'Kirish' : 'Hisob yaratish'), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      fontSize: 13,
      color: 'var(--text-subtle)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: 1,
      background: 'var(--border-hairline)'
    }
  }), "yoki", /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: 1,
      background: 'var(--border-hairline)'
    }
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    fullWidth: true,
    iconLeft: "send",
    onClick: () => onLogin({
      name: 'Aziza Rahimova'
    })
  }, "Telegram orqali kirish"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    fullWidth: true,
    iconRight: "arrow-right",
    onClick: onGuest
  }, "Mehmon sifatida kurslarni ko\u2018rish"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      color: 'var(--text-muted)',
      textAlign: 'center'
    }
  }, "Davom etish orqali ", /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "ommaviy oferta"), " shartlariga rozilik bildirasiz."))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--ink-900)',
      color: '#fff',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: 48,
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      right: -40,
      bottom: -120,
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 520,
      lineHeight: 1,
      letterSpacing: '-0.06em',
      color: 'rgba(255,198,41,.08)'
    }
  }, "A1"), /*#__PURE__*/React.createElement("span", {
    className: "lz-overline",
    style: {
      color: 'var(--gold-500)'
    }
  }, "Bugungi ibora"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 72,
      letterSpacing: '-0.04em',
      lineHeight: 1
    }
  }, "\xDCbung macht", /*#__PURE__*/React.createElement("br", null), "den ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--gold-500)'
    }
  }, "Meister.")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      color: 'rgba(255,255,255,.7)'
    }
  }, "\u201CMashq \u2014 mahorat kaliti.\u201D Har kuni 15 daqiqa yetarli.")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      gap: 32,
      fontSize: 14,
      color: 'rgba(255,255,255,.7)'
    }
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", {
    style: {
      color: '#fff',
      fontSize: 20,
      display: 'block'
    }
  }, "31 200+"), "o\u2018quvchi"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", {
    style: {
      color: '#fff',
      fontSize: 20,
      display: 'block'
    }
  }, "4,8 \u2605"), "o\u2018rtacha baho"))));
}
Object.assign(window, {
  LoginScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web/Login.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web/Market.jsx
try { (() => {
// Design-system components are destructured once in index.html.

function MarketScreen({
  data,
  openCourse,
  initial = {}
}) {
  const {
    courses,
    instructors,
    levels
  } = data;
  const [level, setLevel] = React.useState(initial.level || 'all');
  const [topics, setTopics] = React.useState([]);
  const [price, setPrice] = React.useState('all');
  const [minRating, setMinRating] = React.useState(0);
  const [sort, setSort] = React.useState('popular');
  const q = (initial.q || '').toLowerCase();
  const allTopics = [...new Set(courses.map(c => c.topic))];
  let list = courses.filter(c => (level === 'all' || c.level === level) && (!topics.length || topics.includes(c.topic)) && (price === 'all' || (price === 'free' ? c.free : !c.free)) && c.rating >= minRating && (!q || (c.title + ' ' + instructors[c.instructor].name + ' ' + c.topic).toLowerCase().includes(q)));
  list = [...list].sort((a, b) => sort === 'cheap' ? a.price - b.price : sort === 'rating' ? b.rating - a.rating : b.students - a.students);
  const groupTitle = t => /*#__PURE__*/React.createElement("span", {
    className: "lz-overline",
    style: {
      marginBottom: 4
    }
  }, t);
  return /*#__PURE__*/React.createElement("main", {
    style: {
      maxWidth: 1240,
      margin: '0 auto',
      padding: '40px 24px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 40
    }
  }, q ? /*#__PURE__*/React.createElement(React.Fragment, null, "\u201C", initial.q, "\u201D bo\u2018yicha natijalar") : /*#__PURE__*/React.createElement(React.Fragment, null, "Nemis tili ", /*#__PURE__*/React.createElement("span", {
    className: "lz-mark"
  }, "kurslari"))), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-muted)'
    }
  }, list.length, " ta kurs \xB7 barcha darslar o\u2018zbek tilida izohlangan")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap',
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    selected: level === 'all',
    onClick: () => setLevel('all')
  }, "Barcha darajalar"), levels.map(l => /*#__PURE__*/React.createElement(Tag, {
    key: l.id,
    selected: level === l.id,
    onClick: () => setLevel(l.id),
    count: courses.filter(c => c.level === l.id).length
  }, l.id, " \xB7 ", l.name))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '232px 1fr',
      gap: 40,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("aside", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 28,
      position: 'sticky',
      top: 92
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, groupTitle('Mavzu'), allTopics.map(t => /*#__PURE__*/React.createElement(Checkbox, {
    key: t,
    label: t,
    checked: topics.includes(t),
    onChange: v => setTopics(v ? [...topics, t] : topics.filter(x => x !== t))
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, groupTitle('Narx'), [['all', 'Barchasi'], ['paid', 'Pullik'], ['free', 'Bepul']].map(([v, l]) => /*#__PURE__*/React.createElement(Radio, {
    key: v,
    name: "price",
    value: v,
    label: l,
    checked: price === v,
    onChange: setPrice
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, groupTitle('Reyting'), [[0, 'Barchasi'], [4.5, '4,5 va yuqori'], [4.8, '4,8 va yuqori']].map(([v, l]) => /*#__PURE__*/React.createElement(Radio, {
    key: v,
    name: "rating",
    value: v,
    label: l,
    checked: minRating === v,
    onChange: setMinRating
  })))), /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement(Select, {
    size: "sm",
    value: sort,
    onChange: setSort,
    style: {
      width: 200
    },
    options: [{
      value: 'popular',
      label: 'Eng mashhur'
    }, {
      value: 'rating',
      label: 'Eng yuqori baho'
    }, {
      value: 'cheap',
      label: 'Arzonroq'
    }]
  })), list.length ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
      gap: '32px 24px'
    }
  }, list.map(c => /*#__PURE__*/React.createElement(CourseCard, {
    key: c.id,
    course: {
      ...c,
      instructor: instructors[c.instructor].name
    },
    onClick: () => openCourse(c.id)
  }))) : /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '64px 24px',
      textAlign: 'center',
      borderRadius: 16,
      background: 'var(--paper-100)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("h3", null, "Hech narsa topilmadi"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-muted)'
    }
  }, "Filtrlarni o\u2018zgartirib ko\u2018ring.")))));
}
function MyCoursesScreen({
  data,
  owned,
  progress,
  openCourse,
  openPlayer
}) {
  const [tab, setTab] = React.useState('all');
  const list = data.courses.filter(c => owned.includes(c.id)).filter(c => tab === 'all' || (tab === 'done' ? (progress[c.id] || 0) >= 100 : (progress[c.id] || 0) < 100));
  return /*#__PURE__*/React.createElement("main", {
    style: {
      maxWidth: 1240,
      margin: '0 auto',
      padding: '40px 24px 0'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 40,
      marginBottom: 20
    }
  }, "Mening kurslarim"), /*#__PURE__*/React.createElement(Tabs, {
    variant: "pill",
    value: tab,
    onChange: setTab,
    items: [{
      id: 'all',
      label: 'Barchasi'
    }, {
      id: 'progress',
      label: 'Davom etayotgan'
    }, {
      id: 'done',
      label: 'Tugallangan'
    }],
    style: {
      marginBottom: 28
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
      gap: 24
    }
  }, list.map(c => /*#__PURE__*/React.createElement(CourseCard, {
    key: c.id,
    course: {
      ...c,
      instructor: data.instructors[c.instructor].name
    },
    progress: progress[c.id] || 0,
    onClick: () => openPlayer(c.id)
  }))), !list.length && /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-muted)'
    }
  }, "Bu bo\u2018limda hozircha kurs yo\u2018q."));
}
Object.assign(window, {
  MarketScreen,
  MyCoursesScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web/Market.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web/MobileApp.jsx
try { (() => {
// Design-system components are destructured once in index.html.

function StoreBadges({
  gap = 12,
  apple = 44,
  google = 62,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap,
      flexWrap: 'wrap',
      ...style
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    "aria-label": "App Store'dan yuklab olish",
    className: "lz-lift",
    style: {
      display: 'inline-flex',
      borderRadius: 8
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/stores/appstore.svg",
    alt: "Download on the App Store",
    style: {
      height: apple,
      display: 'block'
    }
  })), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    "aria-label": "Google Play'dan yuklab olish",
    className: "lz-lift",
    style: {
      display: 'inline-flex',
      borderRadius: 8
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/stores/googleplay.svg",
    alt: "Get it on Google Play",
    style: {
      height: google,
      display: 'block',
      margin: '-9px 0'
    }
  })));
}
function PhoneMock() {
  const lessons = [['Der, die, das — artikllar', '12:40', 'current'], ['Raqamlar 1–100', '09:05', 'open'], ['Kafeda buyurtma berish', '13:10', 'open']];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: 292,
      height: 560
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 44,
      background: 'var(--ink-950)',
      padding: 10,
      boxShadow: 'var(--shadow-lg)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: '100%',
      borderRadius: 34,
      background: 'var(--bg-page)',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 30,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 84,
      height: 18,
      borderRadius: 12,
      background: 'var(--ink-950)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '4px 14px 10px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    size: 18
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4,
      fontSize: 12,
      fontWeight: 700
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "flame",
    size: 15,
    color: "var(--gold-600)"
  }), "12 kun")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 14px'
    }
  }, /*#__PURE__*/React.createElement(CourseCover, {
    level: "A1",
    tone: "ink",
    word: "Der, die, das",
    radius: 14
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 14px 6px',
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      fontSize: 14
    }
  }, "Nemis tili A1: noldan boshlab"), /*#__PURE__*/React.createElement(ProgressBar, {
    value: 58,
    showValue: true,
    height: 5
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '4px 8px',
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, lessons.map(([t, d, s], i) => /*#__PURE__*/React.createElement(LessonItem, {
    key: t,
    index: i + 7,
    title: t,
    duration: d,
    state: s,
    style: {
      padding: '8px 8px'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      display: 'flex',
      justifyContent: 'space-around',
      padding: '10px 6px 14px',
      borderTop: '1px solid var(--border-hairline)',
      background: '#fff'
    }
  }, [['library', 'Kurslar', true], ['search', 'Qidiruv'], ['download', 'Oflayn'], ['user', 'Profil']].map(([ic, l, on]) => /*#__PURE__*/React.createElement("span", {
    key: l,
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 2,
      fontSize: 10,
      fontWeight: 600,
      color: on ? 'var(--ink-900)' : 'var(--text-subtle)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 20
  }), l))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: -48,
      top: 96,
      animation: 'lz-pop .6s .3s var(--ease-out) both, lz-float 5s 1s ease-in-out infinite'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      height: 40,
      padding: '0 16px 0 12px',
      borderRadius: 999,
      background: '#fff',
      boxShadow: 'var(--shadow-md)',
      fontWeight: 600,
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "download",
    size: 18,
    color: "var(--green-600)"
  }), "Oflayn yuklandi")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: -40,
      bottom: 120,
      animation: 'lz-pop .6s .6s var(--ease-out) both, lz-float 6s 1.4s ease-in-out infinite'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      height: 40,
      padding: '0 16px 0 12px',
      borderRadius: 999,
      background: 'var(--ink-900)',
      color: '#fff',
      boxShadow: 'var(--shadow-md)',
      fontWeight: 600,
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "bell",
    size: 18,
    color: "var(--gold-500)"
  }), "Bugungi dars vaqti!")));
}
function HomeApp() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1240,
      margin: '0 auto',
      padding: '96px 24px 0'
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      borderRadius: 28,
      background: 'var(--gold-500)',
      padding: '64px 72px',
      display: 'grid',
      gridTemplateColumns: '1fr 360px',
      gap: 40,
      alignItems: 'center',
      minHeight: 520
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      left: -30,
      bottom: -150,
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 460,
      lineHeight: 1,
      letterSpacing: '-0.06em',
      color: 'rgba(20,22,27,.07)'
    }
  }, "App"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      gap: 22
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "lz-overline",
    style: {
      color: 'var(--ink-800)'
    }
  }, "Mobil ilova \xB7 iOS va Android"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 46,
      lineHeight: 1.05,
      color: 'var(--ink-900)'
    }
  }, "lehrer.uz endi ", /*#__PURE__*/React.createElement("span", {
    style: {
      background: 'var(--ink-900)',
      color: 'var(--gold-500)',
      padding: '0 .18em',
      borderRadius: 10
    }
  }, "cho\u2018ntagingizda")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      color: 'var(--ink-800)',
      maxWidth: 480
    }
  }, "Darslarni yo\u2018lda, navbatda yoki tanaffusda davom ettiring. Hisobingiz sayt bilan bir xil \u2014 progress avtomatik sinxronlanadi."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      fontSize: 16,
      color: 'var(--ink-900)'
    }
  }, [['download', 'Videolarni oflayn yuklab oling'], ['headphones', 'Audio mashqlar fon rejimida ishlaydi'], ['bell', 'Har kuni dars vaqti haqida eslatma'], ['notebook-pen', 'Mock imtihon va flashcard’lar']].map(([i, t]) => /*#__PURE__*/React.createElement("span", {
    key: t,
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'center',
      fontWeight: 500
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: i,
    size: 19
  }), t))), /*#__PURE__*/React.createElement(StoreBadges, {
    style: {
      marginTop: 8
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(PhoneMock, null)))));
}
Object.assign(window, {
  StoreBadges,
  HomeApp
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web/MobileApp.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web/Motion.jsx
try { (() => {
function Reveal({
  children,
  delay = 0,
  style
}) {
  const ref = React.useRef(null);
  const [on, setOn] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setOn(true);
        io.disconnect();
      }
    }, {
      threshold: 0.12
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    className: 'lz-rv' + (on ? ' in' : ''),
    style: {
      transitionDelay: delay + 'ms',
      ...style
    }
  }, children);
}
function useInView(threshold = 0.3) {
  const ref = React.useRef(null);
  const [on, setOn] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setOn(true);
        io.disconnect();
      }
    }, {
      threshold
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return [ref, on];
}
function useCount(to, on, ms = 1500) {
  const [v, setV] = React.useState(0);
  React.useEffect(() => {
    if (!on) return;
    let raf, t0;
    const step = t => {
      t0 = t0 || t;
      const p = Math.min(1, (t - t0) / ms);
      setV(Math.round(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [on, to]);
  return v;
}
function CountUp({
  to,
  decimals = 0,
  suffix = '',
  on = true
}) {
  const v = useCount(decimals ? Math.round(to * 10) : to, on);
  const shown = decimals ? (v / 10).toFixed(1).replace('.', ',') : v.toLocaleString('ru-RU');
  return /*#__PURE__*/React.createElement("span", {
    className: "lz-mono-num",
    style: {
      fontVariantNumeric: 'tabular-nums'
    }
  }, shown, suffix);
}
Object.assign(window, {
  Reveal,
  useInView,
  useCount,
  CountUp
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web/Motion.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web/Player.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Design-system components are destructured once in index.html.

const LZ_SLIDES = {
  7: [['der', 'Tisch', 'var(--blue-500)'], ['die', 'Lampe', 'var(--red-500)'], ['das', 'Buch', 'var(--green-500)']],
  3: [['', 'Hallo!', 'var(--gold-500)'], ['', 'Guten Tag!', 'var(--gold-500)'], ['', 'Tschüss!', 'var(--gold-500)']]
};
const lzSecs = d => {
  const m = /^(\d+):(\d+)$/.exec(d || '');
  return m ? +m[1] * 60 + +m[2] : 0;
};
const lzClock = s => String(Math.floor(s / 60)).padStart(2, '0') + ':' + String(Math.floor(s % 60)).padStart(2, '0');
function QuizStage() {
  const [pick, setPick] = React.useState(null);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "lz-overline",
    style: {
      color: 'rgba(255,255,255,.55)'
    }
  }, "Savol 3 / 10 \xB7 Artiklni tanlang"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 64,
      letterSpacing: '-0.03em',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--gold-500)'
    }
  }, "___"), " M\xE4dchen"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12
    }
  }, ['der', 'die', 'das'].map(a => {
    const state = pick && (a === 'das' ? 'ok' : a === pick ? 'bad' : null);
    return /*#__PURE__*/React.createElement("button", {
      key: a,
      type: "button",
      onClick: () => setPick(a),
      style: {
        width: 120,
        height: 56,
        borderRadius: 12,
        cursor: 'pointer',
        fontFamily: 'var(--font-ui)',
        fontSize: 20,
        fontWeight: 700,
        border: '1.5px solid ' + (state === 'ok' ? 'var(--green-500)' : state === 'bad' ? 'var(--red-500)' : 'rgba(255,255,255,.25)'),
        background: state === 'ok' ? 'var(--green-500)' : state === 'bad' ? 'var(--red-500)' : 'transparent',
        color: '#fff'
      }
    }, a);
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      minHeight: 22,
      color: 'rgba(255,255,255,.75)',
      fontSize: 15
    }
  }, pick && (pick === 'das' ? 'To‘g‘ri! -chen qo‘shimchali so‘zlar doim “das”.' : 'Deyarli! -chen bilan tugagan so‘zlar — das.')));
}
function VideoStage({
  lesson,
  course,
  playing,
  setPlaying,
  t,
  setT
}) {
  const dur = lzSecs(lesson.duration);
  const slide = LZ_SLIDES[lesson.id];
  const [hoverBar, setHoverBar] = React.useState(false);
  if (lesson.type === 'quiz') {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        aspectRatio: '16 / 9',
        background: 'var(--surface-player)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement(QuizStage, {
      key: lesson.id
    }));
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: '16 / 9',
      background: 'var(--surface-player)',
      overflow: 'hidden',
      containerType: 'inline-size'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: () => setPlaying(!playing),
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '0 8cqw',
      gap: '2.4cqw',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "lz-overline",
    style: {
      color: 'rgba(255,255,255,.5)',
      fontSize: 'max(11px,1.3cqw)'
    }
  }, "Lektion ", lesson.id, " \xB7 ", course.level), slide ? slide.map(([art, w, col], i) => /*#__PURE__*/React.createElement("div", {
    key: w,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '2cqw',
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: '6.4cqw',
      letterSpacing: '-0.03em',
      lineHeight: 1,
      color: '#fff',
      opacity: t > i * 2 || !playing ? 1 : 0.15,
      transition: 'opacity var(--dur-slow) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("i", {
    style: {
      width: '1.6cqw',
      height: '1.6cqw',
      borderRadius: '50%',
      background: col,
      flex: 'none'
    }
  }), art && /*#__PURE__*/React.createElement("span", {
    style: {
      color: col
    }
  }, art), w)) : /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: '5.6cqw',
      letterSpacing: '-0.03em',
      lineHeight: 1.05,
      color: '#fff',
      maxWidth: '70cqw'
    }
  }, lesson.title)), !playing && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setPlaying(true),
    "aria-label": "Ijro etish",
    style: {
      position: 'absolute',
      right: '6cqw',
      top: '50%',
      transform: 'translateY(-50%)',
      width: 80,
      height: 80,
      borderRadius: '50%',
      border: 0,
      background: 'var(--gold-500)',
      color: 'var(--ink-900)',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: 'var(--shadow-lg)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "play",
    size: 32,
    fill: "currentColor"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      padding: '28px 16px 10px',
      background: 'linear-gradient(transparent, rgba(14,16,20,.85))',
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setHoverBar(true),
    onMouseLeave: () => setHoverBar(false),
    onClick: e => {
      const r = e.currentTarget.getBoundingClientRect();
      setT((e.clientX - r.left) / r.width * dur);
    },
    style: {
      height: 14,
      display: 'flex',
      alignItems: 'center',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      flex: 1,
      height: hoverBar ? 6 : 4,
      borderRadius: 999,
      background: 'rgba(255,255,255,.22)',
      transition: 'height var(--dur-fast)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: (dur ? t / dur * 100 : 0) + '%',
      height: '100%',
      borderRadius: 999,
      background: 'var(--gold-500)'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    variant: "player",
    icon: playing ? 'pause' : 'play',
    label: playing ? 'Pauza' : 'Ijro',
    onClick: () => setPlaying(!playing)
  }), /*#__PURE__*/React.createElement(IconButton, {
    variant: "player",
    icon: "rotate-ccw",
    label: "10 soniya orqaga",
    onClick: () => setT(Math.max(0, t - 10))
  }), /*#__PURE__*/React.createElement(IconButton, {
    variant: "player",
    icon: "volume-2",
    label: "Ovoz"
  }), /*#__PURE__*/React.createElement("span", {
    className: "lz-mono",
    style: {
      color: '#fff',
      fontSize: 13,
      marginLeft: 8
    }
  }, lzClock(t), " / ", lesson.duration), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("button", {
    type: "button",
    style: {
      height: 28,
      padding: '0 10px',
      borderRadius: 8,
      border: '1px solid rgba(255,255,255,.3)',
      background: 'transparent',
      color: '#fff',
      fontWeight: 600,
      fontSize: 13,
      cursor: 'pointer'
    }
  }, "1\xD7"), /*#__PURE__*/React.createElement(IconButton, {
    variant: "player",
    icon: "captions",
    label: "Subtitr"
  }), /*#__PURE__*/React.createElement(IconButton, {
    variant: "player",
    icon: "settings",
    label: "Sozlamalar"
  }), /*#__PURE__*/React.createElement(IconButton, {
    variant: "player",
    icon: "maximize",
    label: "To\u2018liq ekran"
  }))));
}
function PlayerScreen({
  data,
  courseId,
  lessonId,
  done,
  setDone,
  go,
  notify
}) {
  const course = data.courses.find(c => c.id === courseId) || data.courses[0];
  const all = data.curriculum.flatMap(s => s.lessons);
  const [cur, setCur] = React.useState(lessonId || 7);
  const [tab, setTab] = React.useState('comments');
  const [playing, setPlaying] = React.useState(false);
  const [t, setT] = React.useState(0);
  const [comments, setComments] = React.useState(data.comments);
  const [draft, setDraft] = React.useState('');
  const [liked, setLiked] = React.useState({});
  const lesson = all.find(l => l.id === cur) || all[0];
  const dur = lzSecs(lesson.duration);
  React.useEffect(() => {
    setT(0);
    setPlaying(false);
  }, [cur]);
  React.useEffect(() => {
    if (!playing || !dur) return;
    const iv = setInterval(() => setT(x => {
      if (x + 1 >= dur) {
        setPlaying(false);
        return dur;
      }
      return x + 1;
    }), 1000);
    return () => clearInterval(iv);
  }, [playing, dur]);
  const idx = all.findIndex(l => l.id === cur);
  const next = () => {
    setDone({
      ...done,
      [cur]: true
    });
    if (all[idx + 1]) setCur(all[idx + 1].id);
  };
  const pct = Math.round(Object.keys(done).length / all.length * 100);
  const send = () => {
    if (!draft.trim()) return;
    setComments([{
      id: Date.now(),
      author: 'Aziza Rahimova',
      time: 'hozir',
      timestamp: lzClock(t),
      text: draft,
      likes: 0,
      replies: []
    }, ...comments]);
    setDraft('');
    notify('Izoh qo‘shildi');
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100vh',
      background: 'var(--bg-page)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 60,
      background: 'var(--ink-950)',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      padding: '0 16px'
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    variant: "player",
    icon: "arrow-left",
    label: "Orqaga",
    onClick: () => go('course', {
      id: course.id
    })
  }), /*#__PURE__*/React.createElement(Wordmark, {
    inverse: true,
    size: 20
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 1,
      height: 24,
      background: 'rgba(255,255,255,.15)'
    }
  }), /*#__PURE__*/React.createElement("b", {
    style: {
      fontSize: 15,
      flex: 1,
      minWidth: 0,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, course.title), /*#__PURE__*/React.createElement(ProgressBar, {
    value: pct,
    tone: "inverse",
    style: {
      width: 160
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'rgba(255,255,255,.7)'
    }
  }, Object.keys(done).length, "/", all.length, " dars")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) 360px',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(VideoStage, {
    lesson: lesson,
    course: course,
    playing: playing,
    setPlaying: setPlaying,
    t: t,
    setT: setT
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 920,
      padding: '24px 32px 64px',
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, data.curriculum.find(s => s.lessons.includes(lesson)).title), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 28
    }
  }, lesson.id, ". ", lesson.title)), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    iconLeft: "bookmark",
    onClick: () => notify('Eslatma saqlandi · ' + lzClock(t))
  }, "Eslatma"), /*#__PURE__*/React.createElement(Button, {
    iconRight: "skip-forward",
    onClick: next
  }, "Keyingi dars")), /*#__PURE__*/React.createElement(Tabs, {
    value: tab,
    onChange: setTab,
    items: [{
      id: 'overview',
      label: 'Umumiy'
    }, {
      id: 'files',
      label: 'Fayllar',
      count: data.files.length
    }, {
      id: 'comments',
      label: 'Izohlar',
      count: comments.length
    }]
  }), tab === 'overview' && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("p", null, "Bu darsda nemis tilidagi uch jins \u2014 erkak (der), ayol (die) va o\u2018rta (das) \u2014 va ularni qanday eslab qolishni o\u2018rganamiz. Rangli belgilar butun kurs davomida bir xil: ko\u2018k \u2014 der, qizil \u2014 die, yashil \u2014 das."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: data.instructors[course.instructor].name,
    ring: true,
    size: 40
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, data.instructors[course.instructor].name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, data.instructors[course.instructor].role)))), tab === 'files' && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 12
    }
  }, data.files.map(f => /*#__PURE__*/React.createElement(FileItem, _extends({
    key: f.name
  }, f, {
    onDownload: () => notify('Yuklab olinmoqda: ' + f.name)
  })))), tab === 'comments' && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "Aziza Rahimova",
    size: 36
  }), /*#__PURE__*/React.createElement(Input, {
    placeholder: 'Savol yoki izoh yozing… (' + lzClock(t) + ' vaqt belgisi bilan)',
    value: draft,
    onChange: e => setDraft(e.target.value),
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(Button, {
    iconLeft: "send",
    onClick: send,
    disabled: !draft.trim()
  }, "Yuborish")), comments.map(c => /*#__PURE__*/React.createElement(Comment, _extends({
    key: c.id
  }, c, {
    liked: !!liked[c.id],
    likes: c.likes + (liked[c.id] ? 1 : 0),
    onLike: () => setLiked({
      ...liked,
      [c.id]: !liked[c.id]
    }),
    onReply: () => setDraft('@' + c.author.split(' ')[0] + ' ')
  }), c.replies.length ? c.replies.map(r => /*#__PURE__*/React.createElement(Comment, _extends({
    key: r.id
  }, r, {
    liked: !!liked[r.id],
    likes: r.likes + (liked[r.id] ? 1 : 0),
    onLike: () => setLiked({
      ...liked,
      [r.id]: !liked[r.id]
    })
  }))) : null))))), /*#__PURE__*/React.createElement("aside", {
    style: {
      position: 'sticky',
      top: 0,
      height: 'calc(100vh - 60px)',
      overflow: 'auto',
      background: 'var(--surface-card)',
      borderLeft: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '18px 16px 10px',
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      fontSize: 16
    }
  }, "Kurs dasturi"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, pct, "% tugallandi")), data.curriculum.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.title,
    style: {
      padding: '6px 8px 10px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "lz-overline",
    style: {
      padding: '8px 8px 6px'
    }
  }, s.title), s.lessons.map(l => /*#__PURE__*/React.createElement(LessonItem, {
    key: l.id,
    index: l.id,
    title: l.title,
    duration: l.duration,
    type: l.type,
    state: l.id === cur ? 'current' : done[l.id] ? 'done' : 'open',
    onClick: () => setCur(l.id)
  })))))));
}
Object.assign(window, {
  PlayerScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web/Player.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web/data.js
try { (() => {
// lehrer.uz UI kit — sample data (German-language course catalogue)
window.LZ_DATA = (() => {
  const instructors = {
    dilnoza: {
      id: 'dilnoza',
      name: 'Dilnoza Karimova',
      role: 'Nemis tili o‘qituvchisi, Goethe-Institut sertifikati',
      students: 28400,
      courses: 4,
      rating: 4.8,
      bio: '9 yildan beri Toshkent va Berlinda nemis tilini o‘qitadi. Grammatikani o‘zbekcha misollar bilan oddiy tushuntiradi.'
    },
    anna: {
      id: 'anna',
      name: 'Anna Weber',
      role: 'Muttersprachlerin · DaF-o‘qituvchi, Leipzig',
      students: 9700,
      courses: 3,
      rating: 4.9,
      bio: 'Leipziglik ona tili sohibi. Imtihon formatlari va jonli gapirish bo‘yicha mutaxassis.'
    },
    bekzod: {
      id: 'bekzod',
      name: 'Bekzod Rahimov',
      role: 'Germaniyada 6 yil · Ausbildung bitiruvchisi',
      students: 15200,
      courses: 2,
      rating: 4.7,
      bio: 'Germaniyada o‘qish va ishlash tajribasini kurslarga olib kirgan. Hujjatlar, intervyu va ish tili.'
    },
    madina: {
      id: 'madina',
      name: 'Madina Yusupova',
      role: 'Filolog, B2–C1 tayyorlov markazi asoschisi',
      students: 11300,
      courses: 2,
      rating: 4.8,
      bio: 'Lug‘at va talaffuz bo‘yicha qisqa, kundalik mashqlar muallifi.'
    }
  };
  const courses = [{
    id: 'a1',
    title: 'Nemis tili A1: noldan boshlab',
    subtitle: 'Alifbodan birinchi suhbatgacha — 8 haftada A1 darajasi va sertifikat.',
    instructor: 'dilnoza',
    level: 'A1',
    cover: {
      tone: 'gold',
      word: 'Hallo!'
    },
    rating: 4.8,
    reviews: 2418,
    students: 12840,
    price: 349000,
    oldPrice: 590000,
    lessons: 42,
    hours: 9.5,
    badge: 'Bestseller',
    topic: 'Umumiy',
    updated: '2026-yil sentabr'
  }, {
    id: 'a2',
    title: 'A2: kundalik muloqot',
    subtitle: 'Do‘konda, shifokorda, ishda — real vaziyatlar uchun tayyor iboralar.',
    instructor: 'dilnoza',
    level: 'A2',
    cover: {
      tone: 'paper',
      word: 'Wie geht’s?'
    },
    rating: 4.7,
    reviews: 1106,
    students: 6210,
    price: 399000,
    oldPrice: 650000,
    lessons: 48,
    hours: 11,
    topic: 'Umumiy',
    updated: '2026-yil avgust'
  }, {
    id: 'b1',
    title: 'Goethe-Zertifikat B1: imtihonga tayyorlov',
    subtitle: 'Lesen, Hören, Schreiben, Sprechen — 4 modul, 6 ta to‘liq sinov imtihoni.',
    instructor: 'anna',
    level: 'B1',
    cover: {
      tone: 'ink',
      word: 'Prüfung? Kein Problem.'
    },
    rating: 4.9,
    reviews: 874,
    students: 4120,
    price: 690000,
    oldPrice: 990000,
    lessons: 56,
    hours: 14.5,
    badge: 'Bestseller',
    topic: 'Imtihon',
    updated: '2026-yil oktabr'
  }, {
    id: 'grammar',
    title: 'Grammatika: Akkusativ, Dativ va Perfekt',
    subtitle: 'Eng ko‘p xato qilinadigan mavzular — jadval va 300+ mashq bilan.',
    instructor: 'bekzod',
    level: 'A2',
    cover: {
      tone: 'blue',
      word: 'der · den · dem'
    },
    rating: 4.8,
    reviews: 1530,
    students: 8930,
    price: 249000,
    oldPrice: 420000,
    lessons: 36,
    hours: 7,
    topic: 'Grammatika',
    updated: '2026-yil iyul'
  }, {
    id: 'speak',
    title: 'Sprechen: gapirish to‘sig‘ini yengish',
    subtitle: 'Har kuni 15 daqiqa jonli mashq va talaffuz tahlili.',
    instructor: 'anna',
    level: 'B1',
    cover: {
      tone: 'red',
      word: 'Auf geht’s!'
    },
    rating: 4.6,
    reviews: 402,
    students: 1980,
    price: 459000,
    lessons: 30,
    hours: 6,
    badge: 'Yangi',
    topic: 'Gapirish',
    updated: '2026-yil oktabr'
  }, {
    id: 'job',
    title: 'Ish uchun nemis tili: Ausbildung va Job',
    subtitle: 'Rezyume, Anschreiben, intervyu va ish joyidagi muloqot.',
    instructor: 'bekzod',
    level: 'B1',
    cover: {
      tone: 'green',
      word: 'Ich bewerbe mich.'
    },
    rating: 4.7,
    reviews: 318,
    students: 2650,
    price: 549000,
    oldPrice: 790000,
    lessons: 40,
    hours: 10,
    topic: 'Ish va karyera',
    updated: '2026-yil sentabr'
  }, {
    id: 'vocab',
    title: '2000 ta eng kerakli so‘z',
    subtitle: 'Mavzular bo‘yicha lug‘at, audio va takrorlash kartochkalari.',
    instructor: 'madina',
    level: 'A1',
    cover: {
      tone: 'gold',
      word: 'Wortschatz'
    },
    rating: 4.7,
    reviews: 3102,
    students: 17400,
    price: 149000,
    oldPrice: 290000,
    lessons: 60,
    hours: 5,
    topic: 'Lug‘at',
    updated: '2026-yil iyun'
  }, {
    id: 'pflege',
    title: 'Pflege: hamshiralar uchun nemis tili',
    subtitle: 'Tibbiyot lug‘ati, bemor bilan muloqot va hujjatlar — B2 darajada.',
    instructor: 'madina',
    level: 'B2',
    cover: {
      tone: 'paper',
      word: 'Pflege auf Deutsch'
    },
    rating: 4.8,
    reviews: 256,
    students: 1140,
    price: 790000,
    lessons: 44,
    hours: 12,
    badge: 'Yangi',
    topic: 'Ish va karyera',
    updated: '2026-yil oktabr'
  }, {
    id: 'b2',
    title: 'B2: erkin gapirish va yozish',
    subtitle: 'Murakkab grammatika, esse va munozara — telc/Goethe B2 formatida.',
    instructor: 'anna',
    level: 'B2',
    cover: {
      tone: 'ink',
      word: 'Fließend.'
    },
    rating: 4.9,
    reviews: 198,
    students: 860,
    price: 890000,
    oldPrice: 1190000,
    lessons: 64,
    hours: 18,
    topic: 'Imtihon',
    updated: '2026-yil avgust'
  }, {
    id: 'aussprache',
    title: 'Nemis talaffuzi: bepul mini-kurs',
    subtitle: 'ä, ö, ü, ch va r tovushlari — 6 ta qisqa video.',
    instructor: 'madina',
    level: 'A1',
    cover: {
      tone: 'red',
      word: 'Ä · Ö · Ü'
    },
    rating: 4.8,
    reviews: 5210,
    students: 31200,
    price: 0,
    free: true,
    lessons: 6,
    hours: 1,
    topic: 'Talaffuz',
    updated: '2026-yil may'
  }];
  const curriculum = [{
    title: 'Erste Schritte — birinchi qadamlar',
    lessons: [{
      id: 1,
      title: 'Kursga xush kelibsiz',
      duration: '03:20',
      preview: true
    }, {
      id: 2,
      title: 'Nemis alifbosi va talaffuz',
      duration: '11:30',
      preview: true
    }, {
      id: 3,
      title: 'Salomlashish: Hallo, Guten Tag',
      duration: '08:12'
    }, {
      id: 4,
      title: 'Mashq: salomlashish',
      duration: '8 savol',
      type: 'quiz'
    }]
  }, {
    title: 'Ich bin… — o‘zim haqimda',
    lessons: [{
      id: 5,
      title: 'Kishilik olmoshlari: ich, du, er, sie',
      duration: '10:45'
    }, {
      id: 6,
      title: '“sein” fe’li va tanishuv',
      duration: '12:05'
    }, {
      id: 7,
      title: 'Der, die, das — artikllar',
      duration: '12:40'
    }, {
      id: 8,
      title: 'Raqamlar 1–100',
      duration: '09:05'
    }, {
      id: 9,
      title: 'Mashq: artiklni toping',
      duration: '10 savol',
      type: 'quiz'
    }]
  }, {
    title: 'Alltag — kundalik hayot',
    lessons: [{
      id: 10,
      title: 'Kafeda buyurtma berish',
      duration: '13:10'
    }, {
      id: 11,
      title: 'Vaqt va soat: Wie spät ist es?',
      duration: '09:50'
    }, {
      id: 12,
      title: 'Audio mashq: dialogni tinglang',
      duration: '06:15',
      type: 'audio'
    }]
  }, {
    title: 'Abschluss — yakun',
    lessons: [{
      id: 13,
      title: 'Yakuniy test A1',
      duration: '30 savol',
      type: 'quiz'
    }, {
      id: 14,
      title: 'Sertifikat va keyingi qadam',
      duration: '02:40'
    }]
  }];
  const outcomes = ['O‘zingiz, oilangiz va ishingiz haqida gapirish', 'Kafe, do‘kon va transportda muloqot', 'Der/die/das va asosiy fe’llar tuslanishi', 'Goethe A1 “Start Deutsch 1” formatidagi sinov', '600+ eng kerakli so‘z, audio bilan', 'Kurs oxirida lehrer.uz sertifikati'];
  const files = [{
    name: 'Lektion-07-Arbeitsblatt.pdf',
    size: '1,2 MB',
    kind: 'pdf'
  }, {
    name: 'Artikel-Tabelle.pdf',
    size: '480 KB',
    kind: 'pdf'
  }, {
    name: 'Lektion-07-Dialog.mp3',
    size: '8,4 MB',
    kind: 'audio'
  }, {
    name: 'A1-Wortschatz-Karten.zip',
    size: '24 MB',
    kind: 'zip'
  }];
  const comments = [{
    id: 1,
    author: 'Jasur Toshmatov',
    time: '2 soat oldin',
    timestamp: '04:12',
    text: 'Nega “Ich sehe den Tisch” bo‘ldi, “der Tisch” emas?',
    likes: 3,
    replies: [{
      id: 11,
      author: 'Dilnoza Karimova',
      instructor: true,
      time: '1 soat oldin',
      text: 'Akkusativda erkak jinsi artikli der → den ga o‘zgaradi. 9-darsda batafsil jadval bor.',
      likes: 12
    }]
  }, {
    id: 2,
    author: 'Madina Aliyeva',
    time: 'kecha',
    text: 'Artikl jadvali PDF juda foydali bo‘ldi, rahmat! Telefonga saqlab oldim.',
    likes: 8,
    replies: []
  }, {
    id: 3,
    author: 'Sardor Qodirov',
    time: '3 kun oldin',
    timestamp: '09:30',
    text: '“das Mädchen” nega “das”? Qiz-ku…',
    likes: 21,
    replies: []
  }];
  const reviews = [{
    author: 'Nilufar S.',
    rating: 5,
    time: '2 hafta oldin',
    text: 'Noldan boshladim, 2 oyda A1 imtihonidan o‘tdim. Har bir dars qisqa va tushunarli.'
  }, {
    author: 'Otabek M.',
    rating: 5,
    time: '1 oy oldin',
    text: 'Grammatika o‘zbekcha tushuntirilgani katta yordam. Audio mashqlar zo‘r.'
  }, {
    author: 'Kamola R.',
    rating: 4,
    time: '1 oy oldin',
    text: 'Juda yaxshi kurs. Gapirish mashqlari ko‘proq bo‘lsa yanada yaxshi bo‘lardi.'
  }];
  const levels = [{
    id: 'A1',
    name: 'Boshlang‘ich',
    weeks: '8 hafta',
    count: 24
  }, {
    id: 'A2',
    name: 'Elementar',
    weeks: '10 hafta',
    count: 18
  }, {
    id: 'B1',
    name: 'O‘rta',
    weeks: '12 hafta',
    count: 15
  }, {
    id: 'B2',
    name: 'O‘rtadan yuqori',
    weeks: '14 hafta',
    count: 9
  }, {
    id: 'C1',
    name: 'Ilg‘or',
    weeks: '16 hafta',
    count: 4
  }];
  const fmt = n => Math.round(n).toLocaleString('ru-RU').replace(/\u00a0/g, ' ');
  return {
    instructors,
    courses,
    curriculum,
    outcomes,
    files,
    comments,
    reviews,
    levels,
    fmt
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web/data.js", error: String((e && e.message) || e) }); }

__ds_ns.CourseCard = __ds_scope.CourseCard;

__ds_ns.CourseCover = __ds_scope.CourseCover;

__ds_ns.PaymentMethod = __ds_scope.PaymentMethod;

__ds_ns.PriceTag = __ds_scope.PriceTag;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Wordmark = __ds_scope.Wordmark;

__ds_ns.ICONS = __ds_scope.ICONS;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.ProgressBar = __ds_scope.ProgressBar;

__ds_ns.Rating = __ds_scope.Rating;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Comment = __ds_scope.Comment;

__ds_ns.FileItem = __ds_scope.FileItem;

__ds_ns.LessonItem = __ds_scope.LessonItem;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
