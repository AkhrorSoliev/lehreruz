// Design-system components are destructured once in index.html.

function MarketScreen({ data, openCourse, initial = {} }) {
  const { courses, instructors, levels } = data;
  const [level, setLevel] = React.useState(initial.level || 'all');
  const [topics, setTopics] = React.useState([]);
  const [price, setPrice] = React.useState('all');
  const [minRating, setMinRating] = React.useState(0);
  const [sort, setSort] = React.useState('popular');
  const q = (initial.q || '').toLowerCase();
  const allTopics = [...new Set(courses.map(c => c.topic))];
  let list = courses.filter(c =>
    (level === 'all' || c.level === level) &&
    (!topics.length || topics.includes(c.topic)) &&
    (price === 'all' || (price === 'free' ? c.free : !c.free)) &&
    c.rating >= minRating &&
    (!q || (c.title + ' ' + instructors[c.instructor].name + ' ' + c.topic).toLowerCase().includes(q)));
  list = [...list].sort((a, b) => sort === 'cheap' ? a.price - b.price : sort === 'rating' ? b.rating - a.rating : b.students - a.students);
  const groupTitle = t => <span className="lz-overline" style={{ marginBottom: 4 }}>{t}</span>;
  return (
    <main style={{ maxWidth: 1240, margin: '0 auto', padding: '40px 24px 0' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 24 }}>
        <h1 style={{ fontSize: 40 }}>{q ? <>“{initial.q}” bo‘yicha natijalar</> : <>Nemis tili <span className="lz-mark">kurslari</span></>}</h1>
        <p style={{ color: 'var(--text-muted)' }}>{list.length} ta kurs · barcha darslar o‘zbek tilida izohlangan</p>
      </div>
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 28 }}>
        <Tag selected={level === 'all'} onClick={() => setLevel('all')}>Barcha darajalar</Tag>
        {levels.map(l => <Tag key={l.id} selected={level === l.id} onClick={() => setLevel(l.id)} count={courses.filter(c => c.level === l.id).length}>{l.id} · {l.name}</Tag>)}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '232px 1fr', gap: 40, alignItems: 'start' }}>
        <aside style={{ display: 'flex', flexDirection: 'column', gap: 28, position: 'sticky', top: 92 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {groupTitle('Mavzu')}
            {allTopics.map(t => <Checkbox key={t} label={t} checked={topics.includes(t)} onChange={v => setTopics(v ? [...topics, t] : topics.filter(x => x !== t))} />)}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {groupTitle('Narx')}
            {[['all', 'Barchasi'], ['paid', 'Pullik'], ['free', 'Bepul']].map(([v, l]) => <Radio key={v} name="price" value={v} label={l} checked={price === v} onChange={setPrice} />)}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {groupTitle('Reyting')}
            {[[0, 'Barchasi'], [4.5, '4,5 va yuqori'], [4.8, '4,8 va yuqori']].map(([v, l]) => <Radio key={v} name="rating" value={v} label={l} checked={minRating === v} onChange={setMinRating} />)}
          </div>
        </aside>
        <section>
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 20 }}>
            <Select size="sm" value={sort} onChange={setSort} style={{ width: 200 }} options={[{ value: 'popular', label: 'Eng mashhur' }, { value: 'rating', label: 'Eng yuqori baho' }, { value: 'cheap', label: 'Arzonroq' }]} />
          </div>
          {list.length ? (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: '32px 24px' }}>
              {list.map(c => <CourseCard key={c.id} course={{ ...c, instructor: instructors[c.instructor].name }} onClick={() => openCourse(c.id)} />)}
            </div>
          ) : (
            <div style={{ padding: '64px 24px', textAlign: 'center', borderRadius: 16, background: 'var(--paper-100)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
              <h3>Hech narsa topilmadi</h3>
              <p style={{ color: 'var(--text-muted)' }}>Filtrlarni o‘zgartirib ko‘ring.</p>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}

function MyCoursesScreen({ data, owned, progress, openCourse, openPlayer }) {
  const [tab, setTab] = React.useState('all');
  const list = data.courses.filter(c => owned.includes(c.id)).filter(c => tab === 'all' || (tab === 'done' ? (progress[c.id] || 0) >= 100 : (progress[c.id] || 0) < 100));
  return (
    <main style={{ maxWidth: 1240, margin: '0 auto', padding: '40px 24px 0' }}>
      <h1 style={{ fontSize: 40, marginBottom: 20 }}>Mening kurslarim</h1>
      <Tabs variant="pill" value={tab} onChange={setTab} items={[{ id: 'all', label: 'Barchasi' }, { id: 'progress', label: 'Davom etayotgan' }, { id: 'done', label: 'Tugallangan' }]} style={{ marginBottom: 28 }} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', gap: 24 }}>
        {list.map(c => <CourseCard key={c.id} course={{ ...c, instructor: data.instructors[c.instructor].name }} progress={progress[c.id] || 0} onClick={() => openPlayer(c.id)} />)}
      </div>
      {!list.length && <p style={{ color: 'var(--text-muted)' }}>Bu bo‘limda hozircha kurs yo‘q.</p>}
    </main>
  );
}

Object.assign(window, { MarketScreen, MyCoursesScreen });
