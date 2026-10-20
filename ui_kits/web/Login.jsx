// Design-system components are destructured once in index.html.

function LoginScreen({ onLogin, onGuest, go }) {
  const [mode, setMode] = React.useState('login');
  const [name, setName] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [pass, setPass] = React.useState('');
  const submit = e => { e.preventDefault(); onLogin({ name: name.trim() || 'Aziza Rahimova', phone }); };
  return (
    <main style={{ minHeight: '100vh', display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
      <div style={{ display: 'flex', flexDirection: 'column', padding: '32px 48px' }}>
        <button type="button" onClick={onGuest} style={{ alignSelf: 'flex-start', border: 0, background: 'none', padding: 0, cursor: 'pointer' }}><Wordmark size={26} /></button>
        <form onSubmit={submit} style={{ margin: 'auto 0', width: '100%', maxWidth: 400, alignSelf: 'center', display: 'flex', flexDirection: 'column', gap: 18 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            <h1 style={{ fontSize: 40 }}>{mode === 'login' ? 'Xush kelibsiz!' : 'Hisob yaratish'}</h1>
            <p style={{ color: 'var(--text-muted)' }}>{mode === 'login' ? 'Darslaringizni davom ettirish uchun kiring.' : '30 soniya — va birinchi bepul dars sizniki.'}</p>
          </div>
          <Tabs variant="pill" value={mode} onChange={setMode} items={[{ id: 'login', label: 'Kirish' }, { id: 'signup', label: 'Ro‘yxatdan o‘tish' }]} style={{ alignSelf: 'flex-start' }} />
          {mode === 'signup' && <Input label="Ism va familiya" placeholder="Aziza Rahimova" value={name} onChange={e => setName(e.target.value)} />}
          <Input label="Telefon yoki email" iconLeft="phone" placeholder="+998 90 123 45 67" value={phone} onChange={e => setPhone(e.target.value)} autoFocus />
          <Input label="Parol" type="password" iconLeft="lock" placeholder="••••••••" value={pass} onChange={e => setPass(e.target.value)} hint={mode === 'login' ? 'Demo: istalgan ma’lumot bilan kirish mumkin' : undefined} />
          <Button type="submit" size="lg" fullWidth>{mode === 'login' ? 'Kirish' : 'Hisob yaratish'}</Button>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 13, color: 'var(--text-subtle)' }}><span style={{ flex: 1, height: 1, background: 'var(--border-hairline)' }} />yoki<span style={{ flex: 1, height: 1, background: 'var(--border-hairline)' }} /></div>
          <Button variant="secondary" size="lg" fullWidth iconLeft="send" onClick={() => onLogin({ name: 'Aziza Rahimova' })}>Telegram orqali kirish</Button>
          <Button variant="ghost" fullWidth iconRight="arrow-right" onClick={onGuest}>Mehmon sifatida kurslarni ko‘rish</Button>
          <p style={{ fontSize: 13, color: 'var(--text-muted)', textAlign: 'center' }}>Davom etish orqali <a href="#">ommaviy oferta</a> shartlariga rozilik bildirasiz.</p>
        </form>
      </div>
      <div style={{ background: 'var(--ink-900)', color: '#fff', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: 48, position: 'relative', overflow: 'hidden' }}>
        <span aria-hidden="true" style={{ position: 'absolute', right: -40, bottom: -120, fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 520, lineHeight: 1, letterSpacing: '-0.06em', color: 'rgba(255,198,41,.08)' }}>A1</span>
        <span className="lz-overline" style={{ color: 'var(--gold-500)' }}>Bugungi ibora</span>
        <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 72, letterSpacing: '-0.04em', lineHeight: 1 }}>Übung macht<br />den <span style={{ color: 'var(--gold-500)' }}>Meister.</span></div>
          <p style={{ fontSize: 18, color: 'rgba(255,255,255,.7)' }}>“Mashq — mahorat kaliti.” Har kuni 15 daqiqa yetarli.</p>
        </div>
        <div style={{ position: 'relative', display: 'flex', gap: 32, fontSize: 14, color: 'rgba(255,255,255,.7)' }}>
          <span><b style={{ color: '#fff', fontSize: 20, display: 'block' }}>31 200+</b>o‘quvchi</span>
          <span><b style={{ color: '#fff', fontSize: 20, display: 'block' }}>4,8 ★</b>o‘rtacha baho</span>
        </div>
      </div>
    </main>
  );
}

Object.assign(window, { LoginScreen });
