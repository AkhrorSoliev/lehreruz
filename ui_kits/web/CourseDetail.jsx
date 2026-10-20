// Design-system components are destructured once in index.html.

function CourseDetailScreen({ data, courseId, owned, inCart, onBuy, onAddCart, openPlayer, go }) {
  const c = data.courses.find(x => x.id === courseId) || data.courses[0];
  const t = data.instructors[c.instructor];
  const [tab, setTab] = React.useState('about');
  const [open, setOpen] = React.useState([0]);
  const isOwned = owned.includes(c.id);
  const total = data.curriculum.reduce((a, s) => a + s.lessons.length, 0);
  const wrap = { maxWidth: 1240, margin: '0 auto', padding: '0 24px' };
  return (
    <main>
      <section style={{ background: 'var(--ink-900)', color: '#fff' }}>
        <div style={{ ...wrap, display: 'grid', gridTemplateColumns: 'minmax(0,1fr) 380px', gap: 48, padding: '40px 24px 48px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 720 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, color: 'rgba(255,255,255,.6)' }}>
              <button type="button" onClick={() => go('market')} style={{ border: 0, background: 'none', color: 'var(--gold-500)', cursor: 'pointer', padding: 0, fontWeight: 600, fontSize: 13 }}>Kurslar</button>
              <Icon name="chevron-right" size={14} /><span>{c.level}</span><Icon name="chevron-right" size={14} /><span>{c.topic}</span>
            </div>
            <h1 style={{ color: '#fff', fontSize: 44, lineHeight: 1.08 }}>{c.title}</h1>
            <p style={{ fontSize: 18, color: 'rgba(255,255,255,.78)' }}>{c.subtitle}</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap', fontSize: 14, color: 'rgba(255,255,255,.75)' }}>
              {c.badge && <Badge tone="gold">{c.badge}</Badge>}
              <span style={{ color: 'var(--gold-500)' }}><Rating value={c.rating} count={c.reviews} size="sm" style={{ color: 'var(--gold-500)' }} /></span>
              <span>{c.students.toLocaleString('ru-RU')} o‘quvchi</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14, color: 'rgba(255,255,255,.75)' }}>
              <Avatar name={t.name} size={28} />Muallif: <b style={{ color: '#fff' }}>{t.name}</b>
            </div>
            <div style={{ display: 'flex', gap: 20, fontSize: 13, color: 'rgba(255,255,255,.6)' }}>
              <span style={{ display: 'inline-flex', gap: 6, alignItems: 'center' }}><Icon name="calendar" size={15} />Yangilangan: {c.updated}</span>
              <span style={{ display: 'inline-flex', gap: 6, alignItems: 'center' }}><Icon name="languages" size={15} />O‘zbek · Deutsch</span>
              <span style={{ display: 'inline-flex', gap: 6, alignItems: 'center' }}><Icon name="captions" size={15} />Subtitrlar</span>
            </div>
          </div>
        </div>
      </section>

      <div style={{ ...wrap, display: 'grid', gridTemplateColumns: 'minmax(0,1fr) 380px', gap: 48, alignItems: 'start' }}>
        <div style={{ paddingTop: 24 }}>
          <Tabs value={tab} onChange={setTab} items={[{ id: 'about', label: 'Kurs haqida' }, { id: 'program', label: 'Dastur', count: c.lessons }, { id: 'teacher', label: 'O‘qituvchi' }, { id: 'reviews', label: 'Sharhlar', count: c.reviews.toLocaleString('ru-RU') }]} />
          <div style={{ paddingTop: 28 }}>
            {tab === 'about' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
                <div style={{ padding: 24, borderRadius: 16, border: '1px solid var(--border-hairline)', background: 'var(--surface-card)' }}>
                  <h3 style={{ marginBottom: 16 }}>Nimalarni o‘rganasiz</h3>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px 24px' }}>
                    {data.outcomes.map(o => <div key={o} style={{ display: 'flex', gap: 10, fontSize: 15 }}><Icon name="check" size={18} color="var(--green-500)" strokeWidth={2.5} style={{ marginTop: 2 }} />{o}</div>)}
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  <h3>Kurs kimlar uchun</h3>
                  <p style={{ fontSize: 16 }}>Nemis tilini noldan boshlayotganlar, Germaniyada o‘qish yoki ishlashni rejalashtirayotganlar va Goethe A1 imtihoniga tayyorlanayotganlar uchun. Har bir mavzu o‘zbek tilida tushuntiriladi, misollar esa ona tili sohiblari ovozida.</p>
                </div>
              </div>
            )}
            {tab === 'program' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <span style={{ fontSize: 14, color: 'var(--text-muted)' }}>{data.curriculum.length} bo‘lim · {c.lessons} dars · {String(c.hours).replace('.', ',')} soat (namuna: {total} dars ko‘rsatilgan)</span>
                {data.curriculum.map((s, i) => (
                  <div key={s.title} style={{ borderRadius: 14, border: '1px solid var(--border-hairline)', background: 'var(--surface-card)', overflow: 'hidden' }}>
                    <button type="button" onClick={() => setOpen(open.includes(i) ? open.filter(x => x !== i) : [...open, i])}
                      style={{ width: '100%', display: 'flex', alignItems: 'center', gap: 12, padding: '16px 18px', border: 0, background: 'var(--paper-50)', cursor: 'pointer', textAlign: 'left', fontFamily: 'var(--font-ui)' }}>
                      <Icon name={open.includes(i) ? 'chevron-up' : 'chevron-down'} size={18} />
                      <b style={{ flex: 1, fontSize: 15, color: 'var(--text-strong)' }}>{s.title}</b>
                      <span style={{ fontSize: 13, color: 'var(--text-muted)' }}>{s.lessons.length} dars</span>
                    </button>
                    {open.includes(i) && <div style={{ padding: 6 }}>{s.lessons.map(l => <LessonItem key={l.id} index={l.id} title={l.title} duration={l.duration} type={l.type} preview={l.preview && !isOwned} state={isOwned || l.preview ? 'open' : 'locked'} onClick={() => (isOwned || l.preview) && openPlayer(c.id, l.id)} />)}</div>}
                  </div>
                ))}
              </div>
            )}
            {tab === 'teacher' && (
              <div style={{ display: 'flex', gap: 20 }}>
                <Avatar name={t.name} size={88} ring />
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <h3>{t.name}</h3>
                  <span style={{ color: 'var(--text-muted)' }}>{t.role}</span>
                  <div style={{ display: 'flex', gap: 20, fontSize: 14 }}><span>★ {String(t.rating).replace('.', ',')} reyting</span><span>{t.students.toLocaleString('ru-RU')} o‘quvchi</span><span>{t.courses} kurs</span></div>
                  <p style={{ maxWidth: 560 }}>{t.bio}</p>
                </div>
              </div>
            )}
            {tab === 'reviews' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                  <b style={{ fontFamily: 'var(--font-display)', fontSize: 56, fontWeight: 800, letterSpacing: '-0.04em', color: 'var(--gold-700)' }}>{String(c.rating).replace('.', ',')}</b>
                  <div><Rating value={c.rating} showValue={false} size="lg" /><div style={{ fontSize: 14, color: 'var(--text-muted)' }}>{c.reviews.toLocaleString('ru-RU')} ta sharh</div></div>
                </div>
                {data.reviews.map(r => (
                  <div key={r.author} style={{ display: 'flex', gap: 14, paddingTop: 20, borderTop: '1px solid var(--border-hairline)' }}>
                    <Avatar name={r.author} size={40} />
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                      <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}><b>{r.author}</b><Rating value={r.rating} showValue={false} size="sm" /><span style={{ fontSize: 13, color: 'var(--text-subtle)' }}>{r.time}</span></div>
                      <p>{r.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <aside style={{ marginTop: -260, position: 'sticky', top: 92, background: 'var(--surface-card)', borderRadius: 20, boxShadow: 'var(--shadow-md)', border: '1px solid var(--border-hairline)', overflow: 'hidden' }}>
          <div style={{ position: 'relative' }}>
            <CourseCover level={c.level} tone={c.cover.tone} word={c.cover.word} radius={0} />
            <button type="button" onClick={() => openPlayer(c.id, 2)} style={{ position: 'absolute', inset: 0, border: 0, background: 'rgba(14,16,20,.18)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ width: 64, height: 64, borderRadius: '50%', background: '#fff', color: 'var(--ink-900)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--shadow-md)' }}><Icon name="play" size={26} fill="currentColor" /></span>
            </button>
          </div>
          <div style={{ padding: 24, display: 'flex', flexDirection: 'column', gap: 14 }}>
            {isOwned ? (
              <>
                <Badge tone="success" icon="circle-check" style={{ alignSelf: 'flex-start' }}>Kurs sizda bor</Badge>
                <Button size="lg" fullWidth iconLeft="play" onClick={() => openPlayer(c.id)}>Darsni davom ettirish</Button>
              </>
            ) : (
              <>
                <PriceTag price={c.price} oldPrice={c.oldPrice} free={c.free} size="lg" />
                {c.oldPrice && <span style={{ fontSize: 13, color: 'var(--red-600)', fontWeight: 600, display: 'inline-flex', gap: 6, alignItems: 'center' }}><Icon name="clock" size={15} />Chegirma yana 2 kun</span>}
                <Button variant="accent" size="lg" fullWidth onClick={() => onBuy(c.id)}>{c.free ? 'Bepul yozilish' : 'Sotib olish'}</Button>
                {!c.free && <Button variant="secondary" size="lg" fullWidth iconLeft={inCart ? 'check' : 'shopping-cart'} onClick={() => inCart ? go('cart') : onAddCart(c.id)}>{inCart ? 'Savatga o‘tish' : 'Savatga qo‘shish'}</Button>}
                <span style={{ fontSize: 13, color: 'var(--text-muted)', textAlign: 'center' }}>30 kun ichida pulni qaytarish kafolati</span>
              </>
            )}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, paddingTop: 14, borderTop: '1px solid var(--border-hairline)', fontSize: 14 }}>
              <b>Kursga kiradi:</b>
              {[['monitor-play', `${String(c.hours).replace('.', ',')} soat video`], ['file-text', '24 ta PDF mashq varaqasi'], ['headphones', 'Audio dialoglar'], ['infinity', 'Umrbod kirish'], ['award', 'Tugatganlik sertifikati']].map(([i, l]) => <span key={l} style={{ display: 'flex', gap: 10, alignItems: 'center', color: 'var(--text-body)' }}><Icon name={i} size={17} />{l}</span>)}
            </div>
            {!isOwned && !c.free && <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 18, paddingTop: 14, borderTop: '1px solid var(--border-hairline)' }}>
              <span style={{ fontWeight: 700, fontSize: 15 }}>Click</span>
              <img src="../../assets/payments/payme.png" alt="Payme" style={{ height: 18 }} />
              <img src="../../assets/payments/uzum.png" alt="Uzum" style={{ height: 18 }} />
            </div>}
          </div>
        </aside>
      </div>
    </main>
  );
}

Object.assign(window, { CourseDetailScreen });
