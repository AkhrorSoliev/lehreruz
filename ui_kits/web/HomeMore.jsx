// Design-system components are destructured once in index.html.

const LZ_WORDS = [['der', 'Tisch', 'stol'], ['die', 'Lampe', 'chiroq'], ['das', 'Buch', 'kitob'], ['der', 'Apfel', 'olma'], ['die', 'Katze', 'mushuk'], ['das', 'Wasser', 'suv'], ['der', 'Hund', 'it'], ['die', 'Schule', 'maktab'], ['das', 'Haus', 'uy'], ['die', 'Zeit', 'vaqt']];
const LZ_ART = { der: 'var(--blue-500)', die: 'var(--red-500)', das: 'var(--green-500)' };

function Flashcard() {
  const [i, setI] = React.useState(0);
  const [flip, setFlip] = React.useState(false);
  const [art, de, uz] = LZ_WORDS[i];
  const next = () => { setFlip(false); setTimeout(() => setI((i + 1) % LZ_WORDS.length), 250); };
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div className={'lz-flip' + (flip ? ' on' : '')} onClick={() => setFlip(!flip)} style={{ cursor: 'pointer', height: 260 }}>
        <div style={{ height: '100%' }}>
          <div className="f" style={{ borderRadius: 20, background: 'var(--surface-card)', border: '1px solid var(--border-hairline)', boxShadow: 'var(--shadow-sm)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 14 }}>
            <span className="lz-overline">Kun so‘zi · {i + 1}/{LZ_WORDS.length}</span>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 64, letterSpacing: '-0.03em', color: 'var(--text-strong)' }}>{de}</span>
            <span style={{ fontSize: 14, color: 'var(--text-muted)', display: 'inline-flex', alignItems: 'center', gap: 6 }}><Icon name="rotate-ccw" size={14} />Artiklni o‘ylang va bosing</span>
          </div>
          <div className="b" style={{ borderRadius: 20, background: LZ_ART[art], color: '#fff', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 10 }}>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 64, letterSpacing: '-0.03em' }}>{art} {de}</span>
            <span style={{ fontSize: 22, fontWeight: 500, opacity: 0.9 }}>= {uz}</span>
          </div>
        </div>
      </div>
      <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
        <div style={{ display: 'flex', gap: 14, fontSize: 13, color: 'var(--text-muted)' }}>{Object.entries(LZ_ART).map(([a, c]) => <span key={a} style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}><i style={{ width: 10, height: 10, borderRadius: '50%', background: c }} />{a}</span>)}</div>
        <Button variant="secondary" iconRight="arrow-right" onClick={next} style={{ marginLeft: 'auto' }}>Keyingi so‘z</Button>
      </div>
    </div>
  );
}

function MiniQuiz({ openCourse }) {
  const qs = React.useMemo(() => [4, 1, 7, 5, 2].map(k => LZ_WORDS[k]), []);
  const [i, setI] = React.useState(0);
  const [pick, setPick] = React.useState(null);
  const [score, setScore] = React.useState(0);
  const done = i >= qs.length;
  const choose = a => { if (pick) return; setPick(a); if (a === qs[i][0]) setScore(s => s + 1); setTimeout(() => { setPick(null); setI(x => x + 1); }, 1100); };
  const reset = () => { setI(0); setScore(0); setPick(null); };
  return (
    <div style={{ borderRadius: 20, background: 'var(--ink-900)', color: '#fff', padding: 28, minHeight: 320, display: 'flex', flexDirection: 'column', gap: 18 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <span className="lz-overline" style={{ color: 'var(--gold-500)' }}>30 soniyalik test</span>
        <div style={{ flex: 1, display: 'flex', gap: 4 }}>{qs.map((_, k) => <i key={k} style={{ flex: 1, height: 4, borderRadius: 4, background: k < i ? 'var(--gold-500)' : 'rgba(255,255,255,.18)', transition: 'background .3s' }} />)}</div>
        <span className="lz-mono" style={{ fontSize: 13, color: 'rgba(255,255,255,.6)' }}>{Math.min(i + 1, qs.length)}/{qs.length}</span>
      </div>
      {!done ? (
        <>
          <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 6, animation: 'lz-rise .4s var(--ease-out) both' }}>
            <span style={{ fontSize: 14, color: 'rgba(255,255,255,.6)' }}>Qaysi artikl? · {qs[i][2]}</span>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 56, letterSpacing: '-0.03em' }}><span style={{ color: pick ? LZ_ART[qs[i][0]] : 'var(--gold-500)' }}>{pick ? qs[i][0] : '___'}</span> {qs[i][1]}</span>
          </div>
          <div style={{ display: 'flex', gap: 10 }}>
            {['der', 'die', 'das'].map(a => {
              const ok = pick && a === qs[i][0], bad = pick === a && a !== qs[i][0];
              return <button key={a} type="button" onClick={() => choose(a)} style={{ flex: 1, height: 52, borderRadius: 12, cursor: pick ? 'default' : 'pointer', fontFamily: 'var(--font-ui)', fontSize: 18, fontWeight: 700, color: '#fff',
                border: '1.5px solid ' + (ok ? 'var(--green-500)' : bad ? 'var(--red-500)' : 'rgba(255,255,255,.25)'), background: ok ? 'var(--green-500)' : bad ? 'var(--red-500)' : 'transparent', animation: bad ? 'lz-shake .35s' : 'none', transition: 'background .15s, border-color .15s' }}>{a}</button>;
            })}
          </div>
        </>
      ) : (
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 14, textAlign: 'center', animation: 'lz-rise .5s var(--ease-out) both' }}>
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 72, letterSpacing: '-0.04em', color: 'var(--gold-500)' }}>{score}/{qs.length}</span>
          <span style={{ fontSize: 17, color: 'rgba(255,255,255,.8)' }}>{score >= 4 ? 'Ajoyib! Siz A1 ga tayyorsiz.' : 'Yaxshi boshlanish! Artikllarni kursda mustahkamlaymiz.'}</span>
          <div style={{ display: 'flex', gap: 10 }}><Button variant="accent" iconRight="arrow-right" onClick={() => openCourse('aussprache')}>Bepul darsni boshlash</Button><Button variant="ghost" onClick={reset} style={{ color: '#fff' }}>Qayta urinish</Button></div>
        </div>
      )}
    </div>
  );
}

function HomePractice({ openCourse }) {
  return (
    <section style={{ marginTop: 96, background: 'var(--paper-100)', padding: '80px 0' }}>
      <div style={{ maxWidth: 1240, margin: '0 auto', padding: '0 24px' }}>
        <Reveal style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 32 }}>
          <span className="lz-overline">Hoziroq sinab ko‘ring</span>
          <h2 style={{ fontSize: 36 }}>Ro‘yxatdan o‘tmasdan — <span className="lz-mark">birinchi dars</span></h2>
        </Reveal>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
          <Reveal><Flashcard /></Reveal>
          <Reveal delay={120}><MiniQuiz openCourse={openCourse} /></Reveal>
        </div>
      </div>
    </section>
  );
}

function HomeWhy({ go }) {
  const items = [
    ['graduation-cap', 'Universitet', 'Germaniyada o‘qish', 'Ko‘pgina dasturlar uchun odatda B2–C1 daraja so‘raladi. TestDaF/DSH formatiga tayyorlaning.', 'B2–C1', 'Imtihon'],
    ['trending-up', 'Ausbildung va ish', 'Kasb va karyera', 'Rezyume, Anschreiben va intervyu nemis tilida. Odatda B1–B2 darajadan boshlanadi.', 'B1–B2', 'Ish va karyera'],
    ['heart', 'Pflege', 'Hamshiralik va tibbiyot', 'Tibbiy lug‘at, bemor bilan muloqot va hujjatlar — maxsus B2 kurs.', 'B2', 'Pflege'],
  ];
  return (
    <section style={{ maxWidth: 1240, margin: '0 auto', padding: '96px 24px 0' }}>
      <Reveal style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 32 }}>
        <span className="lz-overline">Nega nemis tili?</span>
        <h2 style={{ fontSize: 36, maxWidth: 640 }}>Maqsadingizga mos <span className="lz-mark">yo‘nalish</span> tanlang</h2>
      </Reveal>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
        {items.map(([ic, over, title, text, lvl, q], i) => (
          <Reveal key={title} delay={i * 110}>
            <button type="button" className="lz-lift" onClick={() => go('market', { q })} style={{ width: '100%', height: '100%', textAlign: 'left', cursor: 'pointer', padding: 28, borderRadius: 20, border: '1px solid var(--border-hairline)', background: i === 1 ? 'var(--gold-500)' : 'var(--surface-card)', display: 'flex', flexDirection: 'column', gap: 16, fontFamily: 'var(--font-ui)' }}>
              <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ width: 48, height: 48, borderRadius: 14, background: i === 1 ? 'var(--ink-900)' : 'var(--gold-100)', color: i === 1 ? 'var(--gold-500)' : 'var(--gold-700)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}><Icon name={ic} size={24} /></span>
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 28, letterSpacing: '-0.03em', color: 'var(--ink-900)' }}>{lvl}</span>
              </span>
              <span style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                <span className="lz-overline" style={{ color: i === 1 ? 'var(--ink-800)' : undefined }}>{over}</span>
                <b style={{ fontFamily: 'var(--font-display)', fontSize: 24, letterSpacing: '-0.02em', color: 'var(--ink-900)' }}>{title}</b>
                <span style={{ fontSize: 15, color: i === 1 ? 'var(--ink-800)' : 'var(--text-muted)' }}>{text}</span>
              </span>
              <span style={{ marginTop: 'auto', display: 'inline-flex', alignItems: 'center', gap: 6, fontWeight: 600, fontSize: 14, color: 'var(--ink-900)' }}>Kurslarni ko‘rish <Icon name="arrow-right" size={16} /></span>
            </button>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function HomeHow() {
  const steps = [['search', 'Kursni tanlang', 'Darajangiz va maqsadingizga mos kursni toping. Har birida bepul namunaviy darslar bor.'], ['credit-card', 'To‘lang va boshlang', 'Click, Payme yoki Uzum orqali. Kurs darhol ochiladi — umrbod.'], ['headphones', 'Har kuni 15 daqiqa', 'Video, audio va PDF mashqlar. Izohlarda o‘qituvchidan savol so‘rang.'], ['award', 'Sertifikat oling', 'Kurs oxirida test topshiring va lehrer.uz sertifikatini yuklab oling.']];
  const [ref, on] = useInView(0.3);
  return (
    <section ref={ref} style={{ maxWidth: 1240, margin: '0 auto', padding: '96px 24px 0' }}>
      <Reveal style={{ marginBottom: 32 }}><h2 style={{ fontSize: 36 }}>Qanday ishlaydi</h2></Reveal>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
        {steps.map(([ic, t, d], i) => (
          <div key={t} style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 12, padding: '0 8px 0 0', opacity: on ? 1 : 0, transform: on ? 'none' : 'translateY(18px)', transition: `all .6s ${i * 0.14}s var(--ease-out)` }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 64, letterSpacing: '-0.05em', lineHeight: 1, color: 'var(--gold-500)', WebkitTextStroke: '0' }}>{i + 1}</span>
              <span style={{ flex: 1, height: 2, background: 'var(--border-default)' }} />
              <span style={{ width: 40, height: 40, borderRadius: 12, background: 'var(--ink-900)', color: 'var(--gold-500)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}><Icon name={ic} size={20} /></span>
            </span>
            <h4>{t}</h4>
            <p style={{ fontSize: 15, color: 'var(--text-muted)' }}>{d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function HomeStories() {
  const stories = [
    ['Nilufar Saidova', 'A1 → B1', '5 oy', 'Noldan boshladim. Har kuni tramvayda bitta dars ko‘rardim — beshinchi oyda Goethe B1 ni topshirdim.', true],
    ['Otabek Mirzayev', 'A2 → B2', '8 oy', 'Grammatikani o‘zbekcha tushuntirishgani hal qiluvchi bo‘ldi. Ausbildung uchun intervyuni nemis tilida topshirdim.', false],
    ['Kamola Rahimova', 'B1 → B2', '4 oy', 'Pflege kursi aynan menga kerak edi: tibbiy lug‘at va real dialoglar. Audio fayllarni yo‘lda tinglayman.', false],
  ];
  return (
    <section style={{ maxWidth: 1240, margin: '0 auto', padding: '96px 24px 0' }}>
      <Reveal style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 32 }}>
        <span className="lz-overline">O‘quvchilar</span>
        <h2 style={{ fontSize: 36 }}>Ular boshladi — <span className="lz-mark">siz ham</span> boshlang</h2>
      </Reveal>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
        {stories.map(([n, path, time, q, dark], i) => (
          <Reveal key={n} delay={i * 110}>
            <figure className="lz-lift" style={{ margin: 0, height: '100%', padding: 28, borderRadius: 20, display: 'flex', flexDirection: 'column', gap: 20, background: dark ? 'var(--ink-900)' : 'var(--surface-card)', color: dark ? '#fff' : 'var(--text-body)', border: '1px solid ' + (dark ? 'var(--ink-900)' : 'var(--border-hairline)') }}>
              <Rating value={5} showValue={false} />
              <blockquote style={{ margin: 0, fontSize: 17, lineHeight: 1.55, color: dark ? 'rgba(255,255,255,.9)' : 'var(--text-strong)' }}>“{q}”</blockquote>
              <figcaption style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: 12 }}>
                <Avatar name={n} size={44} />
                <span style={{ display: 'flex', flexDirection: 'column', flex: 1 }}><b style={{ fontSize: 15 }}>{n}</b><span style={{ fontSize: 13, color: dark ? 'rgba(255,255,255,.6)' : 'var(--text-muted)' }}>{time} ichida</span></span>
                <Badge tone={dark ? 'gold' : 'goldSoft'}>{path}</Badge>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function HomeFaq() {
  const faqs = [
    ['Nemis tilini noldan boshlasam bo‘ladimi?', 'Ha. A1 kursi alifbodan boshlanadi, har bir mavzu o‘zbek tilida tushuntiriladi. Avval bepul talaffuz mini-kursini ko‘rishingiz mumkin.'],
    ['To‘lovdan keyin kurs qachon ochiladi?', 'Darhol. Click, Payme yoki Uzum orqali to‘lov tasdiqlangach, kurs “Mening kurslarim” bo‘limida paydo bo‘ladi va umrbod sizniki.'],
    ['To‘lovda qo‘shimcha komissiya bormi?', 'Yo‘q. Ko‘rsatilgan narx — to‘laydigan narxingiz. Uzum orqali 3–12 oyga bo‘lib to‘lash ham mumkin.'],
    ['Pulni qaytarib olsam bo‘ladimi?', 'Ha, xariddan keyin 30 kun ichida sababsiz qaytarib beramiz.'],
    ['Sertifikat Goethe imtihoniga teng keladimi?', 'Yo‘q — kurs oxirida lehrer.uz sertifikati beriladi. Goethe-Zertifikat alohida topshiriladi, kurslarimiz esa shu format uchun tayyorlaydi.'],
  ];
  const [open, setOpen] = React.useState(0);
  return (
    <section style={{ maxWidth: 880, margin: '0 auto', padding: '96px 24px 0' }}>
      <Reveal style={{ marginBottom: 28, textAlign: 'center' }}><h2 style={{ fontSize: 36 }}>Ko‘p so‘raladigan savollar</h2></Reveal>
      <Reveal>
        <div style={{ borderRadius: 20, background: 'var(--surface-card)', border: '1px solid var(--border-hairline)', overflow: 'hidden' }}>
          {faqs.map(([q, a], i) => (
            <div key={q} style={{ borderTop: i ? '1px solid var(--border-hairline)' : 0 }}>
              <button type="button" onClick={() => setOpen(open === i ? -1 : i)} style={{ width: '100%', display: 'flex', alignItems: 'center', gap: 16, padding: '20px 24px', border: 0, background: 'transparent', cursor: 'pointer', textAlign: 'left', fontFamily: 'var(--font-ui)', fontSize: 17, fontWeight: 600, color: 'var(--text-strong)' }}>
                <span style={{ flex: 1 }}>{q}</span>
                <span style={{ width: 32, height: 32, borderRadius: '50%', background: open === i ? 'var(--gold-500)' : 'var(--paper-100)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', transform: open === i ? 'rotate(45deg)' : 'none', transition: 'transform .3s var(--ease-out), background .2s' }}><Icon name="plus" size={18} /></span>
              </button>
              <div className={'lz-faq' + (open === i ? ' on' : '')}><div><p style={{ padding: '0 24px 22px', color: 'var(--text-muted)', fontSize: 16, maxWidth: 680 }}>{a}</p></div></div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

function HomeCta({ openCourse }) {
  return (
    <section style={{ maxWidth: 1240, margin: '0 auto', padding: '96px 24px 0' }}>
      <Reveal>
        <div style={{ position: 'relative', overflow: 'hidden', borderRadius: 28, background: 'var(--ink-900)', color: '#fff', padding: '56px 64px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 32 }}>
          <span aria-hidden="true" style={{ position: 'absolute', right: 180, bottom: -110, fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 380, lineHeight: 1, letterSpacing: '-0.06em', color: 'rgba(255,198,41,.08)', animation: 'lz-float 7s ease-in-out infinite' }}>Ja!</span>
          <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 12 }}>
            <h2 style={{ color: '#fff', fontSize: 44 }}>Birinchi darsni <span style={{ color: 'var(--gold-500)' }}>bugun</span> boshlang.</h2>
            <p style={{ color: 'rgba(255,255,255,.72)', fontSize: 18 }}>Talaffuz mini-kursi — bepul. Ro‘yxatdan o‘tish 30 soniya.</p>
          </div>
          <Button variant="accent" size="lg" iconRight="arrow-right" onClick={() => openCourse('aussprache')} style={{ position: 'relative' }}>Bepul boshlash</Button>
        </div>
      </Reveal>
    </section>
  );
}

Object.assign(window, { HomePractice, HomeWhy, HomeHow, HomeStories, HomeFaq, HomeCta });
