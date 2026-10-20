// Design-system components are destructured once in index.html.

const lzMM = s => String(Math.floor(s / 60)).padStart(2, '0') + ':' + String(s % 60).padStart(2, '0');
const lzSpeak = (text, onEnd) => {
  if (!('speechSynthesis' in window)) return false;
  const u = new SpeechSynthesisUtterance(text); u.lang = 'de-DE'; u.rate = 0.85; u.onend = onEnd;
  speechSynthesis.cancel(); speechSynthesis.speak(u); return true;
};

function Choice({ label, state, selected, onClick, letter, disabled }) {
  const [hover, setHover] = React.useState(false);
  const border = state === 'ok' ? 'var(--green-500)' : state === 'bad' ? 'var(--red-500)' : selected ? 'var(--ink-900)' : hover ? 'var(--ink-400)' : 'var(--border-default)';
  return (
    <button type="button" disabled={disabled} onClick={onClick} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ display: 'flex', alignItems: 'center', gap: 12, minHeight: 48, padding: '8px 14px', borderRadius: 12, textAlign: 'left', cursor: disabled ? 'default' : 'pointer', fontFamily: 'var(--font-ui)', fontSize: 15, color: 'var(--text-strong)',
        border: '1px solid ' + border, background: state === 'ok' ? 'var(--green-50)' : state === 'bad' ? 'var(--red-50)' : selected ? 'var(--gold-100)' : 'var(--surface-card)', boxShadow: selected ? 'inset 0 0 0 1px var(--ink-900)' : 'none', transition: 'all var(--dur-fast) var(--ease-out)' }}>
      <span style={{ width: 26, height: 26, borderRadius: '50%', flex: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 700, background: selected ? 'var(--ink-900)' : 'var(--paper-100)', color: selected ? 'var(--gold-500)' : 'var(--text-muted)' }}>{letter}</span>{label}
    </button>
  );
}

function Question({ q, n, value, onPick, review }) {
  const opts = q.type === 'tf' ? ['Richtig', 'Falsch'] : q.o;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      <div style={{ display: 'flex', gap: 10, fontSize: 16, fontWeight: 600, color: 'var(--text-strong)' }}><span className="lz-mono" style={{ color: 'var(--text-muted)' }}>{n}.</span>{q.text}</div>
      <div style={{ display: 'grid', gridTemplateColumns: q.type === 'tf' ? '1fr 1fr' : '1fr', gap: 8 }}>
        {opts.map((o, i) => <Choice key={i} letter={q.type === 'tf' ? (i ? '✗' : '✓') : 'abc'[i]} label={o} selected={value === i} onClick={() => onPick(i)} disabled={review}
          state={review ? (i === q.a ? 'ok' : value === i ? 'bad' : null) : null} />)}
      </div>
    </div>
  );
}

function AudioPlayer({ say, plays, setPlays }) {
  const [on, setOn] = React.useState(false);
  const [fallback, setFallback] = React.useState(false);
  const play = () => {
    if (plays >= 2 || on) return;
    setPlays(plays + 1); setOn(true);
    const ok = lzSpeak(say, () => setOn(false));
    if (!ok) { setFallback(true); setTimeout(() => setOn(false), 4000); }
    else setTimeout(() => setOn(false), say.length * 75 + 800);
  };
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 16, padding: 16, borderRadius: 16, background: 'var(--ink-900)', color: '#fff' }}>
      <button type="button" onClick={play} disabled={plays >= 2} aria-label="Eshitish" style={{ width: 56, height: 56, borderRadius: '50%', border: 0, flex: 'none', cursor: plays >= 2 ? 'not-allowed' : 'pointer', background: plays >= 2 ? 'rgba(255,255,255,.2)' : 'var(--gold-500)', color: 'var(--ink-900)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Icon name={on ? 'volume-2' : 'play'} size={24} fill={on ? 'none' : 'currentColor'} /></button>
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: 3, height: 40 }}>
        {Array.from({ length: 42 }).map((_, i) => <i key={i} style={{ flex: 1, minWidth: 2, borderRadius: 2, background: on ? 'var(--gold-500)' : 'rgba(255,255,255,.3)', height: 8 + ((i * 37) % 26), transformOrigin: 'center', animation: on ? `lz-float ${0.5 + (i % 5) * 0.12}s ${(i % 7) * 0.05}s ease-in-out infinite` : 'none' }} />)}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', fontSize: 13, color: 'rgba(255,255,255,.7)' }}>
        <b style={{ color: '#fff' }}>{2 - plays} / 2</b>marta eshitish
        {fallback && <span style={{ color: 'var(--gold-500)' }}>Brauzer ovozni qo‘llamaydi</span>}
      </div>
    </div>
  );
}

function RecordCard({ part, done, onDone }) {
  const [rec, setRec] = React.useState(false);
  const [sec, setSec] = React.useState(0);
  React.useEffect(() => { if (!rec) return; const id = setInterval(() => setSec(s => s + 1), 1000); return () => clearInterval(id); }, [rec]);
  const toggle = () => { if (rec) { setRec(false); onDone(true); } else { setSec(0); setRec(true); } };
  return (
    <div style={{ padding: 20, borderRadius: 16, background: 'var(--surface-card)', border: '1px solid ' + (rec ? 'var(--red-500)' : 'var(--border-hairline)'), display: 'flex', alignItems: 'center', gap: 18 }}>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 6 }}>
        <span className="lz-overline">{part.title}</span>
        <p style={{ fontSize: 16, color: 'var(--text-strong)' }}>{part.task}</p>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, width: 110 }}>
        <button type="button" onClick={toggle} aria-label={rec ? 'To‘xtatish' : 'Yozib olish'} style={{ width: 56, height: 56, borderRadius: '50%', border: 0, cursor: 'pointer', background: rec ? 'var(--red-500)' : done ? 'var(--green-500)' : 'var(--ink-900)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: rec ? '0 0 0 6px var(--red-100)' : 'none', transition: 'box-shadow .3s' }}><Icon name={rec ? 'pause' : done ? 'check' : 'mic'} size={24} /></button>
        <span className="lz-mono" style={{ fontSize: 13, color: rec ? 'var(--red-600)' : 'var(--text-muted)' }}>{rec ? lzMM(sec) : done ? 'Saqlandi' : 'Yozish'}</span>
      </div>
    </div>
  );
}

function ExamIntro({ lvl, setLvl, onStart, go }) {
  const E = window.LZ_EXAMS[lvl];
  const total = E.modules.reduce((a, m) => a + m.min, 0);
  return (
    <main style={{ maxWidth: 1240, margin: '0 auto', padding: '40px 24px 0' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) 360px', gap: 48, alignItems: 'start' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <span className="lz-overline">Mock imtihon · onlayn</span>
            <h1 style={{ fontSize: 48, lineHeight: 1.05 }}>Goethe imtihonini <span className="lz-mark">oldindan</span> sinab ko‘ring</h1>
            <p style={{ fontSize: 18, maxWidth: 640 }}>To‘rt modul — Lesen, Hören, Schreiben, Sprechen — rasmiy format va vaqt bilan. Natija darhol, xatolar tahlili bilan.</p>
          </div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {['A1', 'A2', 'B1', 'B2', 'C1'].map(l => <Tag key={l} selected={lvl === l} onClick={() => window.LZ_EXAMS[l] && setLvl(l)} style={{ opacity: window.LZ_EXAMS[l] ? 1 : 0.45, cursor: window.LZ_EXAMS[l] ? 'pointer' : 'not-allowed' }}>{l}{window.LZ_EXAMS[l] ? '' : ' · tez orada'}</Tag>)}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14 }}>
            {E.modules.map((m, i) => (
              <div key={m.id} className="lz-lift" style={{ padding: 20, borderRadius: 16, background: 'var(--surface-card)', border: '1px solid var(--border-hairline)', display: 'flex', flexDirection: 'column', gap: 14 }}>
                <span style={{ width: 44, height: 44, borderRadius: 12, background: i === 0 ? 'var(--gold-500)' : 'var(--gold-100)', color: 'var(--ink-900)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}><Icon name={m.icon} size={22} /></span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}><b style={{ fontFamily: 'var(--font-display)', fontSize: 22, letterSpacing: '-0.02em' }}>{m.name}</b><span style={{ fontSize: 13, color: 'var(--text-muted)' }}>{m.uz}</span></div>
                <span className="lz-mono" style={{ fontSize: 13, color: 'var(--text-body)' }}>{m.min} daqiqa</span>
              </div>
            ))}
          </div>
          <div style={{ padding: 24, borderRadius: 16, background: 'var(--paper-100)', display: 'flex', flexDirection: 'column', gap: 12 }}>
            <b style={{ fontSize: 16 }}>Qoidalar</b>
            {[['clock', `Har modulning o‘z taymeri bor (jami ≈ ${total} daqiqa). Vaqt tugasa, keyingi modulga o‘tiladi.`], ['headphones', 'Hören: har bir audio faqat 2 marta eshittiriladi. Quloqchin tavsiya etiladi.'], ['mic', 'Sprechen: brauzer mikrofoni ruxsati kerak; yozuv o‘qituvchiga yuboriladi.'], ['percent', 'O‘tish chegarasi har modul bo‘yicha 60%. Bu mashq imtihoni — rasmiy sertifikat emas.']].map(([i, t]) => <div key={t} style={{ display: 'flex', gap: 12, fontSize: 15 }}><Icon name={i} size={18} color="var(--gold-700)" style={{ marginTop: 2 }} />{t}</div>)}
          </div>
        </div>
        <aside style={{ position: 'sticky', top: 92, padding: 28, borderRadius: 20, background: 'var(--ink-900)', color: '#fff', display: 'flex', flexDirection: 'column', gap: 16 }}>
          <span className="lz-overline" style={{ color: 'var(--gold-500)' }}>{E.note}</span>
          <h2 style={{ color: '#fff', fontSize: 32 }}>{E.title}</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, fontSize: 15, color: 'rgba(255,255,255,.8)' }}>
            {[['circle-check', 'Lesen va Hören avtomatik tekshiriladi'], ['notebook-pen', 'Schreiben — so‘z hisoblagich bilan'], ['users', 'Sprechen — o‘qituvchi 48 soatda baholaydi'], ['rotate-ccw', 'Istagancha qayta topshirish']].map(([i, t]) => <span key={t} style={{ display: 'flex', gap: 10, alignItems: 'center' }}><Icon name={i} size={17} color="var(--gold-500)" />{t}</span>)}
          </div>
          <Button variant="accent" size="lg" fullWidth iconRight="arrow-right" onClick={onStart}>Imtihonni boshlash</Button>
          <Button variant="ghost" fullWidth onClick={() => go('market')} style={{ color: '#fff' }}>Avval tayyorlanish: kurslar</Button>
        </aside>
      </div>
    </main>
  );
}

function ExamRun({ lvl, onFinish, onExit }) {
  const E = window.LZ_EXAMS[lvl];
  const [mi, setMi] = React.useState(0);
  const [rem, setRem] = React.useState(() => Object.fromEntries(E.modules.map(m => [m.id, m.min * 60])));
  const [ans, setAns] = React.useState({});
  const [text, setText] = React.useState('');
  const [rec, setRec] = React.useState({});
  const [plays, setPlays] = React.useState({});
  const mod = E.modules[mi];
  React.useEffect(() => {
    const id = setInterval(() => setRem(r => ({ ...r, [mod.id]: Math.max(0, r[mod.id] - 1) })), 1000);
    return () => clearInterval(id);
  }, [mi]);
  React.useEffect(() => { if (rem[mod.id] === 0) next(); }, [rem[mod.id]]);
  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  const next = () => { speechSynthesis && speechSynthesis.cancel && speechSynthesis.cancel(); if (mi < E.modules.length - 1) { setMi(mi + 1); window.scrollTo(0, 0); } else finish(); };
  const finish = () => onFinish({ ans, words, rec });
  const answered = id => ans[id] !== undefined;
  const groups = mod.id === 'lesen' ? E.lesen : mod.id === 'horen' ? E.horen : null;
  let n = 0;
  const low = rem[mod.id] < 60;
  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-page)' }}>
      <div style={{ position: 'sticky', top: 0, zIndex: 30, background: 'var(--ink-950)', color: '#fff' }}>
        <div style={{ maxWidth: 1240, margin: '0 auto', padding: '0 24px', height: 64, display: 'flex', alignItems: 'center', gap: 20 }}>
          <Wordmark inverse size={20} />
          <span style={{ width: 1, height: 24, background: 'rgba(255,255,255,.15)' }} />
          <b style={{ fontSize: 15 }}>{E.title}</b>
          <div style={{ display: 'flex', gap: 6, marginLeft: 16 }}>
            {E.modules.map((m, i) => (
              <span key={m.id} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, height: 34, padding: '0 14px', borderRadius: 999, fontSize: 14, fontWeight: 600, background: i === mi ? 'var(--gold-500)' : 'rgba(255,255,255,.08)', color: i === mi ? 'var(--ink-900)' : i < mi ? '#fff' : 'rgba(255,255,255,.5)' }}>
                {i < mi ? <Icon name="check" size={14} strokeWidth={3} /> : <Icon name={m.icon} size={14} />}{m.name}
              </span>
            ))}
          </div>
          <span style={{ flex: 1 }} />
          <span className="lz-mono" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 20, fontWeight: 600, color: low ? '#ff8f91' : '#fff', animation: low ? 'lz-float 1s ease-in-out infinite' : 'none' }}><Icon name="clock" size={20} />{lzMM(rem[mod.id])}</span>
          <Button variant="ghost" size="sm" onClick={onExit} style={{ color: 'rgba(255,255,255,.75)' }}>Chiqish</Button>
        </div>
      </div>
      <main style={{ maxWidth: 840, margin: '0 auto', padding: '36px 24px 120px', display: 'flex', flexDirection: 'column', gap: 28 }} key={mod.id}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          <span className="lz-overline">{mod.name} · {mod.uz}</span>
          <h2 style={{ fontSize: 32 }}>{mod.id === 'schreiben' ? E.schreiben.title : mod.id === 'sprechen' ? 'Mikrofon orqali javob bering' : mod.name}</h2>
        </div>
        {groups && groups.map(g => (
          <section key={g.title} style={{ display: 'flex', flexDirection: 'column', gap: 18, animation: 'lz-rise .5s var(--ease-out) both' }}>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 20, letterSpacing: '-0.01em' }}>{g.title}</span>
            {g.passage && <div style={{ padding: 22, borderRadius: 16, background: 'var(--surface-card)', border: '1px solid var(--border-hairline)', fontSize: 17, lineHeight: 1.65, whiteSpace: 'pre-line', color: 'var(--text-strong)', fontFamily: 'var(--font-display)', fontWeight: 500 }}>{g.passage}</div>}
            {g.say && <AudioPlayer say={g.say} plays={plays[g.title] || 0} setPlays={v => setPlays({ ...plays, [g.title]: v })} />}
            {g.prompt && <span style={{ fontSize: 14, color: 'var(--text-muted)' }}>{g.prompt}</span>}
            {g.qs.map(q => { n++; return <Question key={q.id} q={q} n={n} value={ans[q.id]} onPick={i => setAns({ ...ans, [q.id]: i })} />; })}
          </section>
        ))}
        {mod.id === 'schreiben' && (
          <section style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <div style={{ padding: 20, borderRadius: 16, background: 'var(--gold-100)', fontSize: 16, color: 'var(--ink-900)' }}>{E.schreiben.task}</div>
            <textarea value={text} onChange={e => setText(e.target.value)} placeholder="Liebe Frau …," rows={10} style={{ width: '100%', padding: 18, borderRadius: 14, border: '1px solid var(--border-default)', background: 'var(--surface-card)', fontFamily: 'var(--font-ui)', fontSize: 16, lineHeight: 1.6, resize: 'vertical', outline: 0, boxShadow: 'var(--shadow-xs)' }} onFocus={e => e.target.style.boxShadow = 'var(--focus-ring)'} onBlur={e => e.target.style.boxShadow = 'var(--shadow-xs)'} />
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <ProgressBar value={Math.min(100, (words / E.schreiben.min) * 100)} tone={words >= E.schreiben.min ? 'success' : 'gold'} style={{ flex: 1 }} />
              <span className="lz-mono" style={{ fontSize: 13, color: words >= E.schreiben.min ? 'var(--green-700)' : 'var(--text-muted)' }}>{words} / {E.schreiben.min}+ so‘z</span>
            </div>
          </section>
        )}
        {mod.id === 'sprechen' && <section style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>{E.sprechen.map((p, i) => <RecordCard key={i} part={p} done={!!rec[i]} onDone={() => setRec({ ...rec, [i]: true })} />)}</section>}
      </main>
      <div style={{ position: 'fixed', left: 0, right: 0, bottom: 0, background: 'rgba(255,255,255,.96)', borderTop: '1px solid var(--border-hairline)', zIndex: 30 }}>
        <div style={{ maxWidth: 840, margin: '0 auto', padding: '14px 24px', display: 'flex', alignItems: 'center', gap: 16 }}>
          <span style={{ fontSize: 14, color: 'var(--text-muted)' }}>{mod.id === 'lesen' || mod.id === 'horen' ? `${(groups || []).flatMap(g => g.qs).filter(q => answered(q.id)).length} / ${(groups || []).flatMap(g => g.qs).length} javob berildi` : mod.id === 'schreiben' ? `${words} so‘z` : `${Object.keys(rec).length} / ${E.sprechen.length} yozildi`}</span>
          <span style={{ flex: 1 }} />
          <Button variant={mi === E.modules.length - 1 ? 'accent' : 'primary'} iconRight={mi === E.modules.length - 1 ? 'circle-check' : 'arrow-right'} onClick={next}>{mi === E.modules.length - 1 ? 'Imtihonni topshirish' : `Keyingi: ${E.modules[mi + 1].name}`}</Button>
        </div>
      </div>
    </div>
  );
}

function ExamResult({ lvl, run, onRetry, go }) {
  const E = window.LZ_EXAMS[lvl];
  const score = (list) => { const qs = list.flatMap(g => g.qs); const ok = qs.filter(q => run.ans[q.id] === q.a).length; return { pct: Math.round((ok / qs.length) * 100), ok, total: qs.length, qs }; };
  const L = score(E.lesen), H = score(E.horen);
  const S = Math.min(100, Math.round((run.words / E.schreiben.min) * 70));
  const P = Math.round((Object.keys(run.rec).length / E.sprechen.length) * 75);
  const rows = [['lesen', L.pct, `${L.ok}/${L.total} to‘g‘ri`, true], ['horen', H.pct, `${H.ok}/${H.total} to‘g‘ri`, true], ['schreiben', S, `${run.words} so‘z yozildi`, false], ['sprechen', P, `${Object.keys(run.rec).length}/${E.sprechen.length} qism yozildi`, false]];
  const passed = rows.every(r => r[1] >= 60);
  const wrong = [...L.qs, ...H.qs].filter(q => run.ans[q.id] !== q.a);
  const [ref, on] = useInView(0);
  const avg = Math.round(rows.reduce((a, r) => a + r[1], 0) / rows.length);
  return (
    <main style={{ maxWidth: 1000, margin: '0 auto', padding: '48px 24px 0', display: 'flex', flexDirection: 'column', gap: 32 }}>
      <div ref={ref} style={{ borderRadius: 24, background: 'var(--ink-900)', color: '#fff', padding: '40px 44px', display: 'flex', alignItems: 'center', gap: 36, animation: 'lz-rise .6s var(--ease-out) both' }}>
        <div style={{ position: 'relative', width: 148, height: 148, flex: 'none' }}>
          <svg viewBox="0 0 120 120" width="148" height="148" style={{ transform: 'rotate(-90deg)' }}><circle cx="60" cy="60" r="52" fill="none" stroke="rgba(255,255,255,.14)" strokeWidth="10" /><circle cx="60" cy="60" r="52" fill="none" stroke={passed ? 'var(--gold-500)' : 'var(--red-500)'} strokeWidth="10" strokeLinecap="round" strokeDasharray={2 * Math.PI * 52} strokeDashoffset={on ? 2 * Math.PI * 52 * (1 - avg / 100) : 2 * Math.PI * 52} style={{ transition: 'stroke-dashoffset 1.4s var(--ease-out)' }} /></svg>
          <span style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 44, letterSpacing: '-0.03em' }}><CountUp to={avg} on={on} suffix="%" /></span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <Badge tone={passed ? 'gold' : 'danger'} icon={passed ? 'award' : 'info'}>{passed ? 'Bestanden — o‘tdingiz' : 'Hali tayyor emas'}</Badge>
          <h1 style={{ color: '#fff', fontSize: 40 }}>{passed ? 'Sehr gut! Imtihonga tayyorsiz.' : 'Yaxshi urinish — yana mashq qiling.'}</h1>
          <p style={{ color: 'rgba(255,255,255,.7)', fontSize: 16, maxWidth: 520 }}>{E.title} · mashq natijasi. Schreiben va Sprechen ballari taxminiy — o‘qituvchi 48 soat ichida yakuniy bahoni yuboradi.</p>
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }}>
        {rows.map(([id, pct, sub, auto], i) => {
          const m = E.modules.find(x => x.id === id), pass = pct >= 60;
          return (
            <div key={id} style={{ padding: 22, borderRadius: 16, background: 'var(--surface-card)', border: '1px solid var(--border-hairline)', display: 'flex', flexDirection: 'column', gap: 12 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <span style={{ width: 40, height: 40, borderRadius: 12, background: 'var(--gold-100)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}><Icon name={m.icon} size={20} /></span>
                <div style={{ flex: 1 }}><b style={{ fontFamily: 'var(--font-display)', fontSize: 20 }}>{m.name}</b><div style={{ fontSize: 13, color: 'var(--text-muted)' }}>{sub}{auto ? '' : ' · taxminiy'}</div></div>
                <b style={{ fontFamily: 'var(--font-display)', fontSize: 34, letterSpacing: '-0.03em', color: pass ? 'var(--green-700)' : 'var(--red-600)' }}><CountUp to={pct} on={on} /></b>
              </div>
              <div style={{ position: 'relative', height: 8, borderRadius: 8, background: 'var(--paper-200)' }}>
                <div style={{ width: on ? pct + '%' : '0%', height: '100%', borderRadius: 8, background: pass ? 'var(--green-500)' : 'var(--red-500)', transition: `width 1.2s ${0.2 + i * 0.15}s var(--ease-out)` }} />
                <i style={{ position: 'absolute', left: '60%', top: -4, bottom: -4, width: 2, background: 'var(--ink-900)', borderRadius: 2 }} />
              </div>
              <span style={{ fontSize: 12, color: 'var(--text-muted)' }}>O‘tish chegarasi — 60%</span>
            </div>
          );
        })}
      </div>
      {wrong.length > 0 && (
        <section style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <h3>Xatolar tahlili</h3>
          {wrong.map(q => (
            <div key={q.id} style={{ padding: 20, borderRadius: 16, background: 'var(--surface-card)', border: '1px solid var(--border-hairline)' }}>
              <Question q={q} n={q.id.toUpperCase()} value={run.ans[q.id]} review onPick={() => {}} />
            </div>
          ))}
        </section>
      )}
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        <Button size="lg" iconLeft="rotate-ccw" onClick={onRetry}>Qayta topshirish</Button>
        <Button variant="accent" size="lg" iconRight="arrow-right" onClick={() => go('course', { id: lvl === 'A1' ? 'a1' : 'b1' })}>{lvl} kursiga tayyorlanish</Button>
      </div>
    </main>
  );
}

function ExamScreen({ go, setChromeless }) {
  const [stage, setStage] = React.useState('intro');
  const [lvl, setLvl] = React.useState('A1');
  const [run, setRun] = React.useState(null);
  React.useEffect(() => { setChromeless(stage === 'run'); return () => setChromeless(false); }, [stage]);
  if (stage === 'run') return <ExamRun key={lvl + run} lvl={lvl} onExit={() => setStage('intro')} onFinish={r => { setRun(r); setStage('result'); window.scrollTo(0, 0); }} />;
  if (stage === 'result') return <ExamResult lvl={lvl} run={run} go={go} onRetry={() => { setRun(null); setStage('run'); }} />;
  return <ExamIntro lvl={lvl} setLvl={setLvl} go={go} onStart={() => { setRun(Date.now()); setStage('run'); window.scrollTo(0, 0); }} />;
}

Object.assign(window, { ExamScreen });
