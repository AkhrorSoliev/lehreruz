// Design-system components are destructured once in index.html.

function StoreBadges({ gap = 12, apple = 44, google = 62, style }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap, flexWrap: 'wrap', ...style }}>
      <a href="#" onClick={e => e.preventDefault()} aria-label="App Store'dan yuklab olish" className="lz-lift" style={{ display: 'inline-flex', borderRadius: 8 }}><img src="../../assets/stores/appstore.svg" alt="Download on the App Store" style={{ height: apple, display: 'block' }} /></a>
      <a href="#" onClick={e => e.preventDefault()} aria-label="Google Play'dan yuklab olish" className="lz-lift" style={{ display: 'inline-flex', borderRadius: 8 }}><img src="../../assets/stores/googleplay.svg" alt="Get it on Google Play" style={{ height: google, display: 'block', margin: '-9px 0' }} /></a>
    </div>
  );
}

function PhoneMock() {
  const lessons = [['Der, die, das — artikllar', '12:40', 'current'], ['Raqamlar 1–100', '09:05', 'open'], ['Kafeda buyurtma berish', '13:10', 'open']];
  return (
    <div style={{ position: 'relative', width: 292, height: 560 }}>
      <div style={{ position: 'absolute', inset: 0, borderRadius: 44, background: 'var(--ink-950)', padding: 10, boxShadow: 'var(--shadow-lg)' }}>
        <div style={{ width: '100%', height: '100%', borderRadius: 34, background: 'var(--bg-page)', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
          <div style={{ height: 30, display: 'flex', justifyContent: 'center', alignItems: 'center' }}><span style={{ width: 84, height: 18, borderRadius: 12, background: 'var(--ink-950)' }} /></div>
          <div style={{ padding: '4px 14px 10px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}><Wordmark size={18} /><span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, fontSize: 12, fontWeight: 700 }}><Icon name="flame" size={15} color="var(--gold-600)" />12 kun</span></div>
          <div style={{ padding: '0 14px' }}><CourseCover level="A1" tone="ink" word="Der, die, das" radius={14} /></div>
          <div style={{ padding: '12px 14px 6px', display: 'flex', flexDirection: 'column', gap: 6 }}>
            <b style={{ fontSize: 14 }}>Nemis tili A1: noldan boshlab</b>
            <ProgressBar value={58} showValue height={5} />
          </div>
          <div style={{ padding: '4px 8px', display: 'flex', flexDirection: 'column', gap: 2 }}>
            {lessons.map(([t, d, s], i) => <LessonItem key={t} index={i + 7} title={t} duration={d} state={s} style={{ padding: '8px 8px' }} />)}
          </div>
          <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-around', padding: '10px 6px 14px', borderTop: '1px solid var(--border-hairline)', background: '#fff' }}>
            {[['library', 'Kurslar', true], ['search', 'Qidiruv'], ['download', 'Oflayn'], ['user', 'Profil']].map(([ic, l, on]) => <span key={l} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, fontSize: 10, fontWeight: 600, color: on ? 'var(--ink-900)' : 'var(--text-subtle)' }}><Icon name={ic} size={20} />{l}</span>)}
          </div>
        </div>
      </div>
      <div style={{ position: 'absolute', left: -48, top: 96, animation: 'lz-pop .6s .3s var(--ease-out) both, lz-float 5s 1s ease-in-out infinite' }}>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, height: 40, padding: '0 16px 0 12px', borderRadius: 999, background: '#fff', boxShadow: 'var(--shadow-md)', fontWeight: 600, fontSize: 14 }}><Icon name="download" size={18} color="var(--green-600)" />Oflayn yuklandi</span>
      </div>
      <div style={{ position: 'absolute', right: -40, bottom: 120, animation: 'lz-pop .6s .6s var(--ease-out) both, lz-float 6s 1.4s ease-in-out infinite' }}>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, height: 40, padding: '0 16px 0 12px', borderRadius: 999, background: 'var(--ink-900)', color: '#fff', boxShadow: 'var(--shadow-md)', fontWeight: 600, fontSize: 14 }}><Icon name="bell" size={18} color="var(--gold-500)" />Bugungi dars vaqti!</span>
      </div>
    </div>
  );
}

function HomeApp() {
  return (
    <section style={{ maxWidth: 1240, margin: '0 auto', padding: '96px 24px 0' }}>
      <Reveal>
        <div style={{ position: 'relative', overflow: 'hidden', borderRadius: 28, background: 'var(--gold-500)', padding: '64px 72px', display: 'grid', gridTemplateColumns: '1fr 360px', gap: 40, alignItems: 'center', minHeight: 520 }}>
          <span aria-hidden="true" style={{ position: 'absolute', left: -30, bottom: -150, fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 460, lineHeight: 1, letterSpacing: '-0.06em', color: 'rgba(20,22,27,.07)' }}>App</span>
          <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 22 }}>
            <span className="lz-overline" style={{ color: 'var(--ink-800)' }}>Mobil ilova · iOS va Android</span>
            <h2 style={{ fontSize: 46, lineHeight: 1.05, color: 'var(--ink-900)' }}>lehrer.uz endi <span style={{ background: 'var(--ink-900)', color: 'var(--gold-500)', padding: '0 .18em', borderRadius: 10 }}>cho‘ntagingizda</span></h2>
            <p style={{ fontSize: 18, color: 'var(--ink-800)', maxWidth: 480 }}>Darslarni yo‘lda, navbatda yoki tanaffusda davom ettiring. Hisobingiz sayt bilan bir xil — progress avtomatik sinxronlanadi.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, fontSize: 16, color: 'var(--ink-900)' }}>
              {[['download', 'Videolarni oflayn yuklab oling'], ['headphones', 'Audio mashqlar fon rejimida ishlaydi'], ['bell', 'Har kuni dars vaqti haqida eslatma'], ['notebook-pen', 'Mock imtihon va flashcard’lar']].map(([i, t]) => <span key={t} style={{ display: 'flex', gap: 10, alignItems: 'center', fontWeight: 500 }}><Icon name={i} size={19} />{t}</span>)}
            </div>
            <StoreBadges style={{ marginTop: 8 }} />
          </div>
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}><PhoneMock /></div>
        </div>
      </Reveal>
    </section>
  );
}

Object.assign(window, { StoreBadges, HomeApp });
