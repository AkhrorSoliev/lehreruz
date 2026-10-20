// Design-system components are destructured once in index.html.
function SiteHeader({ go, route, user, cartCount, onSearch }) {
  const [q, setQ] = React.useState('');
  const link = (name, label) => (
    <button type="button" onClick={() => go(name)} style={{ border: 0, background: 'transparent', cursor: 'pointer', padding: '8px 4px', fontFamily: 'var(--font-ui)', fontSize: 15, fontWeight: 600,
      color: route === name ? 'var(--text-strong)' : 'var(--text-muted)', borderBottom: '2px solid ' + (route === name ? 'var(--gold-500)' : 'transparent') }}>{label}</button>
  );
  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 40, background: 'rgba(250,248,243,0.94)', borderBottom: '1px solid var(--border-hairline)' }}>
      <div style={{ maxWidth: 1240, margin: '0 auto', padding: '0 24px', height: 68, display: 'flex', alignItems: 'center', gap: 28 }}>
        <button type="button" onClick={() => go('home')} style={{ border: 0, background: 'transparent', padding: 0, cursor: 'pointer' }}><Wordmark size={26} /></button>
        <nav style={{ display: 'flex', gap: 20 }}>
          {link('market', 'Kurslar')}
          {link('exam', 'Mock imtihon')}
          {user && link('my', 'Mening kurslarim')}
        </nav>
        <form onSubmit={e => { e.preventDefault(); onSearch(q); }} style={{ flex: 1, maxWidth: 440 }}>
          <Input size="sm" iconLeft="search" placeholder="Kurs, mavzu yoki o‘qituvchi…" value={q} onChange={e => setQ(e.target.value)} />
        </form>
        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 10 }}>
          <Tooltip label="Savat" placement="bottom"><IconButton icon="shopping-cart" label="Savat" badge={cartCount || undefined} onClick={() => go('cart')} /></Tooltip>
          {user ? (
            <button type="button" onClick={() => go('my')} style={{ display: 'flex', alignItems: 'center', gap: 10, border: 0, background: 'transparent', cursor: 'pointer', padding: 0, fontFamily: 'var(--font-ui)', fontSize: 14, fontWeight: 600, color: 'var(--text-strong)' }}>
              <Avatar name={user.name} size={36} />{user.name.split(' ')[0]}
            </button>
          ) : (
            <>
              <Button variant="ghost" size="sm" onClick={() => go('login')}>Kirish</Button>
              <Button size="sm" onClick={() => go('login')}>Ro‘yxatdan o‘tish</Button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

function SiteFooter({ go }) {
  const col = (title, items) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      <span className="lz-overline" style={{ color: 'rgba(255,255,255,.5)' }}>{title}</span>
      {items.map(i => <span key={i} style={{ fontSize: 14, color: 'rgba(255,255,255,.82)' }}>{i}</span>)}
    </div>
  );
  return (
    <footer style={{ background: 'var(--ink-900)', color: '#fff', marginTop: 96 }}>
      <div style={{ maxWidth: 1240, margin: '0 auto', padding: '56px 24px 32px', display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr', gap: 32 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <Wordmark inverse size={28} />
          <p style={{ fontSize: 14, color: 'rgba(255,255,255,.65)', maxWidth: 280 }}>Nemis tilini o‘zbek tilida — A1 dan C1 gacha video darslar, mashqlar va sertifikat.</p>
          <span className="lz-overline" style={{ color: 'rgba(255,255,255,.5)', marginTop: 8 }}>Mobil ilova</span>
          <StoreBadges apple={38} google={54} gap={8} />
        </div>
        {col('Darajalar', ['A1 · Boshlang‘ich', 'A2 · Elementar', 'B1 · O‘rta', 'B2 · O‘rtadan yuqori'])}
        {col('lehrer.uz', ['Biz haqimizda', 'Mock imtihon', 'O‘qituvchi bo‘lish', 'Biznes uchun'])}
        {col('Yordam', ['+998 71 200 45 45', 'support@lehrer.uz', 'Ommaviy oferta', 'Maxfiylik siyosati'])}
      </div>
      <div style={{ maxWidth: 1240, margin: '0 auto', padding: '20px 24px 28px', borderTop: '1px solid rgba(255,255,255,.1)', display: 'flex', justifyContent: 'space-between', fontSize: 13, color: 'rgba(255,255,255,.5)' }}>
        <span>© 2026 lehrer.uz</span><span>To‘lovlar: Click · Payme · Uzum</span>
      </div>
    </footer>
  );
}

Object.assign(window, { SiteHeader, SiteFooter });
