// Design-system components are destructured once in index.html.

const LZ_GREETINGS = [['Hallo', 'Salom'], ['Guten Morgen', 'Xayrli tong'], ['Danke schön', 'Katta rahmat'], ['Bis bald', 'Tez orada ko‘rishamiz'], ['Viel Erfolg', 'Omad tilayman']];
const LZ_PHRASES = [['Guten Tag', 'Xayrli kun'], ['Wie geht’s?', 'Ishlar qalay?'], ['Ich lerne Deutsch', 'Men nemis tilini o‘rganaman'], ['Danke schön', 'Katta rahmat'], ['Alles klar', 'Hammasi joyida'], ['Bis morgen!', 'Ertagacha!'], ['Sprechen Sie langsam, bitte', 'Sekinroq gapiring, iltimos'], ['Schön, dich kennenzulernen', 'Tanishganimdan xursandman']];

function HeroGreeting() {
  const [i, setI] = React.useState(0);
  React.useEffect(() => { const id = setInterval(() => setI(x => (x + 1) % LZ_GREETINGS.length), 2600); return () => clearInterval(id); }, []);
  const [de, uz] = LZ_GREETINGS[i];
  return (
    <span style={{ alignSelf: 'flex-start', display: 'inline-flex', alignItems: 'center', gap: 10, height: 36, padding: '0 6px 0 14px', borderRadius: 999, background: 'var(--surface-card)', border: '1px solid var(--border-hairline)', fontSize: 14, animation: 'lz-rise .6s var(--ease-out) both' }}>
      <span key={i} style={{ display: 'inline-flex', gap: 8, alignItems: 'baseline', animation: 'lz-swap 2.6s var(--ease-out) both', minWidth: 190 }}>
        <b style={{ fontFamily: 'var(--font-display)', fontSize: 16, fontWeight: 700, letterSpacing: '-0.01em' }}>{de}</b>
        <span style={{ color: 'var(--text-muted)' }}>= {uz}</span>
      </span>
      <span style={{ height: 24, padding: '0 10px', borderRadius: 999, background: 'var(--gold-500)', color: 'var(--ink-900)', fontWeight: 700, fontSize: 12, display: 'inline-flex', alignItems: 'center' }}>A1 → C1</span>
    </span>
  );
}

function Hero({ go, openCourse }) {
  const [prog, setProg] = React.useState(0);
  React.useEffect(() => { const id = setTimeout(() => setProg(58), 900); return () => clearTimeout(id); }, []);
  const words = ['Nemis', 'tilini'];
  const covers = [
    { level: 'A1', tone: 'gold', word: 'Hallo!', d: 0, mt: 0 },
    { level: 'B1', tone: 'ink', word: 'Ich schaffe das.', d: 1.2, mt: 44 },
    { level: 'A2', tone: 'paper', word: 'Wie geht’s?', d: 2.1, mt: 0 },
    { level: 'B2', tone: 'red', word: 'Auf geht’s!', d: 0.6, mt: 44 },
  ];
  return (
    <section style={{ position: 'relative', maxWidth: 1240, margin: '0 auto', padding: '56px 24px 88px', display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 56, alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        <HeroGreeting />
        <h1 style={{ fontSize: 68, lineHeight: 1.01, letterSpacing: '-0.035em', fontWeight: 800 }}>
          {words.map((w, i) => <React.Fragment key={w}><span className="lz-w" style={{ animationDelay: 0.1 + i * 0.08 + 's' }}>{w}</span>{' '}</React.Fragment>)}
          <span className="lz-w" style={{ animationDelay: '0.3s' }}><span className="lz-mark anim">o‘zbek tilida</span></span>{' '}
          <span className="lz-w" style={{ animationDelay: '0.42s' }}>o‘rganing.</span>
        </h1>
        <p style={{ fontSize: 19, maxWidth: 530, animation: 'lz-rise .8s .55s var(--ease-out) both' }}>Qisqa video darslar, audio mashqlar va Goethe formatidagi testlar. Telefon yoki kompyuterda — o‘zingizga qulay vaqtda.</p>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', animation: 'lz-rise .8s .7s var(--ease-out) both' }}>
          <Button variant="accent" size="lg" iconRight="arrow-right" onClick={() => go('market')}>Kurslarni ko‘rish</Button>
          <Button variant="secondary" size="lg" iconLeft="circle-play" onClick={() => openCourse('aussprache')}>Bepul darsdan boshlash</Button>
        </div>
        <div style={{ display: 'flex', gap: 36, marginTop: 8, animation: 'lz-rise .8s .85s var(--ease-out) both' }}>
          {[[31200, 0, '+', 'o‘quvchi'], [4.8, 1, '', 'o‘rtacha baho'], [120, 0, '+', 'soat video']].map(([n, d, s, l]) => (
            <div key={l} style={{ display: 'flex', flexDirection: 'column' }}>
              <b style={{ fontFamily: 'var(--font-display)', fontSize: 30, fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--text-strong)' }}><CountUp to={n} decimals={d} suffix={s} /></b>
              <span style={{ fontSize: 14, color: 'var(--text-muted)' }}>{l}</span>
            </div>
          ))}
        </div>
      </div>
      <div style={{ position: 'relative' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
          {covers.map((c, i) => (
            <div key={c.level} style={{ marginTop: c.mt, marginBottom: i === 3 ? -44 : 0, animation: `lz-rise .9s ${0.25 + i * 0.12}s var(--ease-out) both` }}>
              <div className="lz-float" style={{ animation: `lz-float ${5 + i * 0.7}s ${c.d}s ease-in-out infinite` }}>
                <CourseCover level={c.level} tone={c.tone} word={c.word} ratio="4 / 3" radius={16} />
              </div>
            </div>
          ))}
        </div>
        <div className="lz-float" style={{ position: 'absolute', right: -14, top: -18, animation: 'lz-pop .6s 1.2s var(--ease-out) both, lz-float 5.5s 1.8s ease-in-out infinite' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, height: 40, padding: '0 16px 0 12px', borderRadius: 999, background: 'var(--ink-900)', color: '#fff', fontWeight: 600, fontSize: 14, boxShadow: 'var(--shadow-md)' }}><Icon name="award" size={18} color="var(--gold-500)" />Goethe sertifikati</span>
        </div>
        <div style={{ position: 'absolute', left: -32, bottom: 30, width: 268, padding: 16, borderRadius: 16, background: '#fff', boxShadow: 'var(--shadow-md)', display: 'flex', flexDirection: 'column', gap: 10, animation: 'lz-rise .8s 1s var(--ease-out) both' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <Avatar name="Nilufar Saidova" size={34} />
            <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}><b style={{ fontSize: 14 }}>Nilufar · A1</b><span style={{ fontSize: 12, color: 'var(--text-muted)' }}>7-dars: Der, die, das</span></div>
            <span style={{ width: 24, height: 24, borderRadius: '50%', background: 'var(--green-500)', color: '#fff', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', animation: 'lz-pop .5s 1.9s var(--ease-out) both' }}><Icon name="check" size={14} strokeWidth={3} /></span>
          </div>
          <ProgressBar value={prog} showValue label="Kurs bo‘yicha" />
        </div>
      </div>
    </section>
  );
}

function PhraseBand() {
  const row = [...LZ_PHRASES, ...LZ_PHRASES];
  return (
    <div style={{ background: 'var(--gold-500)', color: 'var(--ink-900)', overflow: 'hidden', borderTop: '1px solid var(--ink-900)', borderBottom: '1px solid var(--ink-900)' }}>
      <div className="lz-marquee" style={{ padding: '18px 0' }}>
        {row.map(([de, uz], i) => (
          <span key={i} style={{ display: 'inline-flex', alignItems: 'baseline', gap: 12, paddingRight: 40, whiteSpace: 'nowrap' }}>
            <b style={{ fontFamily: 'var(--font-display)', fontSize: 26, fontWeight: 800, letterSpacing: '-0.02em' }}>{de}</b>
            <span style={{ fontSize: 15, fontWeight: 500, opacity: 0.8 }}>{uz}</span>
            <span aria-hidden="true" style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--ink-900)', alignSelf: 'center', marginLeft: 28 }} />
          </span>
        ))}
      </div>
    </div>
  );
}

function Roadmap({ data, go }) {
  const [ref, on] = useInView(0.25);
  const cert = { A1: 'Start Deutsch 1', A2: 'Start Deutsch 2', B1: 'Goethe-Zertifikat B1', B2: 'Goethe-Zertifikat B2', C1: 'Goethe-Zertifikat C1' };
  return (
    <div ref={ref} style={{ position: 'relative' }}>
      <div style={{ position: 'absolute', left: 8, right: 8, top: 11, height: 3, borderRadius: 3, background: 'var(--paper-200)' }}>
        <div style={{ height: '100%', borderRadius: 3, background: 'var(--ink-900)', width: on ? '100%' : '0%', transition: 'width 1.8s .2s var(--ease-in-out)' }} />
      </div>
      <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 14 }}>
        {data.levels.map((l, i) => (
          <div key={l.id} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <span style={{ width: 26, height: 26, borderRadius: '50%', background: i === 0 ? 'var(--gold-500)' : 'var(--surface-card)', border: '3px solid var(--ink-900)', boxShadow: '0 0 0 4px var(--bg-page)', opacity: 0, animation: on ? `lz-pop .5s ${0.2 + i * 0.36}s var(--ease-out) forwards` : 'none' }} />
            <button type="button" className="lz-lift" onClick={() => go('market', { level: l.id })}
              style={{ textAlign: 'left', cursor: 'pointer', padding: 20, borderRadius: 16, border: '1px solid var(--border-hairline)', background: i === 0 ? 'var(--gold-500)' : 'var(--surface-card)', display: 'flex', flexDirection: 'column', gap: 16, fontFamily: 'var(--font-ui)', opacity: on ? 1 : 0, transform: on ? 'none' : 'translateY(16px)', transition: `opacity .6s ${0.3 + i * 0.3}s var(--ease-out), transform .6s ${0.3 + i * 0.3}s var(--ease-out), box-shadow var(--dur-base)` }}>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 48, letterSpacing: '-0.04em', lineHeight: 1, color: 'var(--ink-900)' }}>{l.id}</span>
              <span style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <b style={{ fontSize: 15, color: 'var(--ink-900)' }}>{l.name}</b>
                <span style={{ fontSize: 13, color: i === 0 ? 'var(--ink-700)' : 'var(--text-muted)' }}>{l.count} kurs · {l.weeks}</span>
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 12, fontWeight: 600, color: i === 0 ? 'var(--ink-900)' : 'var(--gold-700)' }}><Icon name="award" size={14} />{cert[l.id]}</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

function PaymentBand() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 32, padding: '28px 36px', borderRadius: 20, background: 'var(--surface-card)', border: '1px solid var(--border-hairline)' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 4, flex: 1 }}>
        <h3 style={{ fontSize: 24 }}>Qulay to‘lov — bir daqiqada</h3>
        <p style={{ color: 'var(--text-muted)' }}>To‘lovdan so‘ng kurs darhol ochiladi. Komissiya yo‘q, 30 kunlik qaytarish kafolati.</p>
      </div>
      {[['Click', null], ['Payme', '../../assets/payments/payme.png'], ['Uzum', '../../assets/payments/uzum.png']].map(([n, src]) => (
        <span key={n} className="lz-lift" style={{ width: 150, height: 64, borderRadius: 14, border: '1px solid var(--border-hairline)', background: 'var(--paper-50)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
          {src ? <img src={src} alt={n} style={{ height: 26, maxWidth: 110, objectFit: 'contain' }} /> : <b style={{ fontSize: 22, color: 'var(--ink-900)', letterSpacing: '-0.02em' }}>{n}</b>}
        </span>
      ))}
    </div>
  );
}

function HomeScreen({ go, openCourse, data }) {
  const { courses, instructors } = data;
  const popular = courses.filter(c => ['a1', 'b1', 'grammar', 'vocab'].includes(c.id));
  const wrap = { maxWidth: 1240, margin: '0 auto', padding: '0 24px' };
  const head = (over, title, action) => (
    <Reveal style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 16, marginBottom: 32 }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>{over && <span className="lz-overline">{over}</span>}<h2 style={{ fontSize: 36 }}>{title}</h2></div>{action}
    </Reveal>
  );
  return (
    <main>
      <Hero go={go} openCourse={openCourse} />
      <PhraseBand />
      <section style={{ ...wrap, padding: '96px 24px 0' }}>
        {head('Yo‘l xaritasi', 'A1 dan C1 gacha — qadam-baqadam')}
        <Roadmap data={data} go={go} />
      </section>
      <section style={{ ...wrap, padding: '96px 24px 0' }}>
        {head('Mashhur', 'Eng ko‘p tanlangan kurslar', <Button variant="ghost" iconRight="arrow-right" onClick={() => go('market')}>Barchasi</Button>)}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', gap: 24 }}>
          {popular.map((c, i) => <Reveal key={c.id} delay={i * 90}><CourseCard course={{ ...c, instructor: instructors[c.instructor].name }} onClick={() => openCourse(c.id)} /></Reveal>)}
        </div>
      </section>
      <HomePractice data={data} openCourse={openCourse} />
      <HomeWhy go={go} />
      <section style={{ ...wrap, padding: '96px 24px 0' }}><Reveal><PaymentBand /></Reveal></section>
      <HomeHow />
      <HomeApp />
      <HomeStories />
      <section style={{ ...wrap, padding: '96px 24px 0' }}>
        {head('Jamoa', 'O‘qituvchilar')}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
          {Object.values(instructors).map((t, i) => (
            <Reveal key={t.id} delay={i * 90}>
              <div className="lz-lift" style={{ display: 'flex', flexDirection: 'column', gap: 14, padding: 20, borderRadius: 16, background: 'var(--surface-card)', border: '1px solid var(--border-hairline)', height: '100%' }}>
                <Avatar name={t.name} size={64} ring />
                <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                  <b style={{ fontSize: 17 }}>{t.name}</b>
                  <span style={{ fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.4 }}>{t.role}</span>
                </div>
                <span style={{ marginTop: 'auto', fontSize: 13, display: 'flex', gap: 12 }}><span>★ {String(t.rating).replace('.', ',')}</span><span style={{ color: 'var(--text-muted)' }}>{t.students.toLocaleString('ru-RU')} o‘quvchi</span></span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <HomeFaq />
      <HomeCta openCourse={openCourse} />
    </main>
  );
}

Object.assign(window, { HomeScreen });
