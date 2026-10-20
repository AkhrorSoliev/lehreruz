// Design-system components are destructured once in index.html.

const LZ_SLIDES = {
  7: [['der', 'Tisch', 'var(--blue-500)'], ['die', 'Lampe', 'var(--red-500)'], ['das', 'Buch', 'var(--green-500)']],
  3: [['', 'Hallo!', 'var(--gold-500)'], ['', 'Guten Tag!', 'var(--gold-500)'], ['', 'Tschüss!', 'var(--gold-500)']],
};
const lzSecs = d => { const m = /^(\d+):(\d+)$/.exec(d || ''); return m ? +m[1] * 60 + +m[2] : 0; };
const lzClock = s => String(Math.floor(s / 60)).padStart(2, '0') + ':' + String(Math.floor(s % 60)).padStart(2, '0');

function QuizStage() {
  const [pick, setPick] = React.useState(null);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 24 }}>
      <span className="lz-overline" style={{ color: 'rgba(255,255,255,.55)' }}>Savol 3 / 10 · Artiklni tanlang</span>
      <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 64, letterSpacing: '-0.03em', color: '#fff' }}><span style={{ color: 'var(--gold-500)' }}>___</span> Mädchen</div>
      <div style={{ display: 'flex', gap: 12 }}>
        {['der', 'die', 'das'].map(a => {
          const state = pick && (a === 'das' ? 'ok' : a === pick ? 'bad' : null);
          return <button key={a} type="button" onClick={() => setPick(a)} style={{ width: 120, height: 56, borderRadius: 12, cursor: 'pointer', fontFamily: 'var(--font-ui)', fontSize: 20, fontWeight: 700,
            border: '1.5px solid ' + (state === 'ok' ? 'var(--green-500)' : state === 'bad' ? 'var(--red-500)' : 'rgba(255,255,255,.25)'),
            background: state === 'ok' ? 'var(--green-500)' : state === 'bad' ? 'var(--red-500)' : 'transparent', color: '#fff' }}>{a}</button>;
        })}
      </div>
      <span style={{ minHeight: 22, color: 'rgba(255,255,255,.75)', fontSize: 15 }}>{pick && (pick === 'das' ? 'To‘g‘ri! -chen qo‘shimchali so‘zlar doim “das”.' : 'Deyarli! -chen bilan tugagan so‘zlar — das.')}</span>
    </div>
  );
}

function VideoStage({ lesson, course, playing, setPlaying, t, setT }) {
  const dur = lzSecs(lesson.duration);
  const slide = LZ_SLIDES[lesson.id];
  const [hoverBar, setHoverBar] = React.useState(false);
  if (lesson.type === 'quiz') {
    return <div style={{ aspectRatio: '16 / 9', background: 'var(--surface-player)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><QuizStage key={lesson.id} /></div>;
  }
  return (
    <div style={{ position: 'relative', aspectRatio: '16 / 9', background: 'var(--surface-player)', overflow: 'hidden', containerType: 'inline-size' }}>
      <div onClick={() => setPlaying(!playing)} style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 8cqw', gap: '2.4cqw', cursor: 'pointer' }}>
        <span className="lz-overline" style={{ color: 'rgba(255,255,255,.5)', fontSize: 'max(11px,1.3cqw)' }}>Lektion {lesson.id} · {course.level}</span>
        {slide ? slide.map(([art, w, col], i) => (
          <div key={w} style={{ display: 'flex', alignItems: 'center', gap: '2cqw', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '6.4cqw', letterSpacing: '-0.03em', lineHeight: 1, color: '#fff', opacity: t > i * 2 || !playing ? 1 : 0.15, transition: 'opacity var(--dur-slow) var(--ease-out)' }}>
            <i style={{ width: '1.6cqw', height: '1.6cqw', borderRadius: '50%', background: col, flex: 'none' }} />
            {art && <span style={{ color: col }}>{art}</span>}{w}
          </div>
        )) : <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '5.6cqw', letterSpacing: '-0.03em', lineHeight: 1.05, color: '#fff', maxWidth: '70cqw' }}>{lesson.title}</div>}
      </div>
      {!playing && (
        <button type="button" onClick={() => setPlaying(true)} aria-label="Ijro etish" style={{ position: 'absolute', right: '6cqw', top: '50%', transform: 'translateY(-50%)', width: 80, height: 80, borderRadius: '50%', border: 0, background: 'var(--gold-500)', color: 'var(--ink-900)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--shadow-lg)' }}><Icon name="play" size={32} fill="currentColor" /></button>
      )}
      <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, padding: '28px 16px 10px', background: 'linear-gradient(transparent, rgba(14,16,20,.85))', display: 'flex', flexDirection: 'column', gap: 6 }}>
        <div onMouseEnter={() => setHoverBar(true)} onMouseLeave={() => setHoverBar(false)} onClick={e => { const r = e.currentTarget.getBoundingClientRect(); setT(((e.clientX - r.left) / r.width) * dur); }} style={{ height: 14, display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
          <div style={{ position: 'relative', flex: 1, height: hoverBar ? 6 : 4, borderRadius: 999, background: 'rgba(255,255,255,.22)', transition: 'height var(--dur-fast)' }}>
            <div style={{ width: (dur ? (t / dur) * 100 : 0) + '%', height: '100%', borderRadius: 999, background: 'var(--gold-500)' }} />
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          <IconButton variant="player" icon={playing ? 'pause' : 'play'} label={playing ? 'Pauza' : 'Ijro'} onClick={() => setPlaying(!playing)} />
          <IconButton variant="player" icon="rotate-ccw" label="10 soniya orqaga" onClick={() => setT(Math.max(0, t - 10))} />
          <IconButton variant="player" icon="volume-2" label="Ovoz" />
          <span className="lz-mono" style={{ color: '#fff', fontSize: 13, marginLeft: 8 }}>{lzClock(t)} / {lesson.duration}</span>
          <span style={{ flex: 1 }} />
          <button type="button" style={{ height: 28, padding: '0 10px', borderRadius: 8, border: '1px solid rgba(255,255,255,.3)', background: 'transparent', color: '#fff', fontWeight: 600, fontSize: 13, cursor: 'pointer' }}>1×</button>
          <IconButton variant="player" icon="captions" label="Subtitr" />
          <IconButton variant="player" icon="settings" label="Sozlamalar" />
          <IconButton variant="player" icon="maximize" label="To‘liq ekran" />
        </div>
      </div>
    </div>
  );
}

function PlayerScreen({ data, courseId, lessonId, done, setDone, go, notify }) {
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
  React.useEffect(() => { setT(0); setPlaying(false); }, [cur]);
  React.useEffect(() => {
    if (!playing || !dur) return;
    const iv = setInterval(() => setT(x => { if (x + 1 >= dur) { setPlaying(false); return dur; } return x + 1; }), 1000);
    return () => clearInterval(iv);
  }, [playing, dur]);
  const idx = all.findIndex(l => l.id === cur);
  const next = () => { setDone({ ...done, [cur]: true }); if (all[idx + 1]) setCur(all[idx + 1].id); };
  const pct = Math.round((Object.keys(done).length / all.length) * 100);
  const send = () => { if (!draft.trim()) return; setComments([{ id: Date.now(), author: 'Aziza Rahimova', time: 'hozir', timestamp: lzClock(t), text: draft, likes: 0, replies: [] }, ...comments]); setDraft(''); notify('Izoh qo‘shildi'); };
  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-page)' }}>
      <div style={{ height: 60, background: 'var(--ink-950)', color: '#fff', display: 'flex', alignItems: 'center', gap: 16, padding: '0 16px' }}>
        <IconButton variant="player" icon="arrow-left" label="Orqaga" onClick={() => go('course', { id: course.id })} />
        <Wordmark inverse size={20} />
        <span style={{ width: 1, height: 24, background: 'rgba(255,255,255,.15)' }} />
        <b style={{ fontSize: 15, flex: 1, minWidth: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{course.title}</b>
        <ProgressBar value={pct} tone="inverse" style={{ width: 160 }} />
        <span style={{ fontSize: 13, color: 'rgba(255,255,255,.7)' }}>{Object.keys(done).length}/{all.length} dars</span>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) 360px', alignItems: 'start' }}>
        <div>
          <VideoStage lesson={lesson} course={course} playing={playing} setPlaying={setPlaying} t={t} setT={setT} />
          <div style={{ maxWidth: 920, padding: '24px 32px 64px', display: 'flex', flexDirection: 'column', gap: 20 }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 4 }}>
                <span style={{ fontSize: 13, color: 'var(--text-muted)' }}>{data.curriculum.find(s => s.lessons.includes(lesson)).title}</span>
                <h2 style={{ fontSize: 28 }}>{lesson.id}. {lesson.title}</h2>
              </div>
              <Button variant="secondary" iconLeft="bookmark" onClick={() => notify('Eslatma saqlandi · ' + lzClock(t))}>Eslatma</Button>
              <Button iconRight="skip-forward" onClick={next}>Keyingi dars</Button>
            </div>
            <Tabs value={tab} onChange={setTab} items={[{ id: 'overview', label: 'Umumiy' }, { id: 'files', label: 'Fayllar', count: data.files.length }, { id: 'comments', label: 'Izohlar', count: comments.length }]} />
            {tab === 'overview' && <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <p>Bu darsda nemis tilidagi uch jins — erkak (der), ayol (die) va o‘rta (das) — va ularni qanday eslab qolishni o‘rganamiz. Rangli belgilar butun kurs davomida bir xil: ko‘k — der, qizil — die, yashil — das.</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}><Avatar name={data.instructors[course.instructor].name} ring size={40} /><div><b>{data.instructors[course.instructor].name}</b><div style={{ fontSize: 13, color: 'var(--text-muted)' }}>{data.instructors[course.instructor].role}</div></div></div>
            </div>}
            {tab === 'files' && <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>{data.files.map(f => <FileItem key={f.name} {...f} onDownload={() => notify('Yuklab olinmoqda: ' + f.name)} />)}</div>}
            {tab === 'comments' && <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <Avatar name="Aziza Rahimova" size={36} />
                <Input placeholder={'Savol yoki izoh yozing… (' + lzClock(t) + ' vaqt belgisi bilan)'} value={draft} onChange={e => setDraft(e.target.value)} style={{ flex: 1 }} />
                <Button iconLeft="send" onClick={send} disabled={!draft.trim()}>Yuborish</Button>
              </div>
              {comments.map(c => (
                <Comment key={c.id} {...c} liked={!!liked[c.id]} likes={c.likes + (liked[c.id] ? 1 : 0)} onLike={() => setLiked({ ...liked, [c.id]: !liked[c.id] })} onReply={() => setDraft('@' + c.author.split(' ')[0] + ' ')}>
                  {c.replies.length ? c.replies.map(r => <Comment key={r.id} {...r} liked={!!liked[r.id]} likes={r.likes + (liked[r.id] ? 1 : 0)} onLike={() => setLiked({ ...liked, [r.id]: !liked[r.id] })} />) : null}
                </Comment>
              ))}
            </div>}
          </div>
        </div>
        <aside style={{ position: 'sticky', top: 0, height: 'calc(100vh - 60px)', overflow: 'auto', background: 'var(--surface-card)', borderLeft: '1px solid var(--border-hairline)' }}>
          <div style={{ padding: '18px 16px 10px', display: 'flex', flexDirection: 'column', gap: 4 }}>
            <b style={{ fontSize: 16 }}>Kurs dasturi</b>
            <span style={{ fontSize: 13, color: 'var(--text-muted)' }}>{pct}% tugallandi</span>
          </div>
          {data.curriculum.map(s => (
            <div key={s.title} style={{ padding: '6px 8px 10px' }}>
              <div className="lz-overline" style={{ padding: '8px 8px 6px' }}>{s.title}</div>
              {s.lessons.map(l => <LessonItem key={l.id} index={l.id} title={l.title} duration={l.duration} type={l.type} state={l.id === cur ? 'current' : done[l.id] ? 'done' : 'open'} onClick={() => setCur(l.id)} />)}
            </div>
          ))}
        </aside>
      </div>
    </div>
  );
}

Object.assign(window, { PlayerScreen });
