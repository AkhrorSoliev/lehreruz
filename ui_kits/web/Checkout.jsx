// Design-system components are destructured once in index.html.

const LZ_PROVIDERS = [
  { id: 'click', subtitle: 'Click ilovasi orqali tasdiqlash' },
  { id: 'payme', logo: '../../assets/payments/payme.png', subtitle: 'Uzcard · Humo · Payme hamyoni' },
  { id: 'uzum', logo: '../../assets/payments/uzum.png', subtitle: 'Uzum Bank · 3–12 oyga bo‘lib to‘lash' },
  { id: 'card', subtitle: 'Visa, Mastercard, Uzcard, Humo' },
];

function CheckoutDialog({ open, items, data, onClose, onPaid }) {
  const [provider, setProvider] = React.useState('click');
  const [promo, setPromo] = React.useState('');
  const [promoOk, setPromoOk] = React.useState(false);
  const [agree, setAgree] = React.useState(true);
  const [stage, setStage] = React.useState('form');
  React.useEffect(() => { if (open) { setStage('form'); } }, [open]);
  const courses = items.map(id => data.courses.find(c => c.id === id)).filter(Boolean);
  const subtotal = courses.reduce((a, c) => a + c.price, 0);
  const discount = promoOk ? Math.round(subtotal * 0.1) : 0;
  const total = subtotal - discount;
  const pay = () => { setStage('processing'); setTimeout(() => setStage('done'), 1400); };
  if (stage === 'done') {
    return (
      <Dialog open={open} onClose={() => onPaid(items)} width={440}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 14, padding: '8px 0' }}>
          <span style={{ width: 72, height: 72, borderRadius: '50%', background: 'var(--green-100)', color: 'var(--green-600)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Icon name="circle-check" size={36} /></span>
          <h2 style={{ fontSize: 28 }}>To‘lov muvaffaqiyatli!</h2>
          <p style={{ color: 'var(--text-muted)' }}>{data.fmt(total)} so‘m qabul qilindi. Kurs “Mening kurslarim” bo‘limida — umrbod.</p>
          <Button size="lg" fullWidth iconLeft="play" onClick={() => onPaid(items, true)}>Darsni boshlash</Button>
        </div>
      </Dialog>
    );
  }
  return (
    <Dialog open={open} onClose={onClose} title="To‘lovni rasmiylashtirish" subtitle="Xavfsiz to‘lov · ma’lumotlaringiz shifrlangan" width={560}
      footer={<>
        <div style={{ marginRight: 'auto', display: 'flex', flexDirection: 'column' }}>
          <span style={{ fontSize: 13, color: 'var(--text-muted)' }}>Jami</span>
          <b style={{ fontFamily: 'var(--font-display)', fontSize: 24, letterSpacing: '-0.02em' }}>{data.fmt(total)} so‘m</b>
        </div>
        <Button variant="accent" size="lg" disabled={!agree || stage === 'processing'} iconLeft={stage === 'processing' ? 'rotate-ccw' : 'lock'} onClick={pay}>{stage === 'processing' ? 'Kutilmoqda…' : 'To‘lash'}</Button>
      </>}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {courses.map(c => (
            <div key={c.id} style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <CourseCover level={c.level} tone={c.cover.tone} word={c.cover.word} radius={8} style={{ width: 96, flex: 'none' }} />
              <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 2 }}>
                <b style={{ fontSize: 15, lineHeight: 1.3 }}>{c.title}</b>
                <span style={{ fontSize: 13, color: 'var(--text-muted)' }}>{data.instructors[c.instructor].name}</span>
              </div>
              <PriceTag price={c.price} oldPrice={c.oldPrice} size="sm" showDiscount={false} style={{ flexDirection: 'column', alignItems: 'flex-end', gap: 0 }} />
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }} role="radiogroup">
          <span className="lz-overline">To‘lov usuli</span>
          {LZ_PROVIDERS.map(p => <PaymentMethod key={p.id} provider={p.id} logoSrc={p.logo} subtitle={p.subtitle} selected={provider === p.id} onSelect={setProvider} />)}
        </div>
        {provider === 'card' && (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 120px', gap: 12 }}>
            <Input label="Karta raqami" iconLeft="credit-card" placeholder="8600 0000 0000 0000" />
            <Input label="Muddati" placeholder="MM/YY" />
          </div>
        )}
        <div style={{ display: 'flex', gap: 10, alignItems: 'flex-end' }}>
          <Input label="Promokod" placeholder="Masalan, LEHRER10" value={promo} onChange={e => { setPromo(e.target.value); setPromoOk(false); }} hint={promoOk ? '−10% chegirma qo‘llandi' : undefined} style={{ flex: 1 }} iconLeft="tag" />
          <Button variant="secondary" onClick={() => setPromoOk(promo.trim().length > 0)} style={{ marginBottom: promoOk ? 25 : 0 }}>Qo‘llash</Button>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6, fontSize: 14, padding: 16, borderRadius: 12, background: 'var(--paper-50)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>Kurslar ({courses.length})</span><span>{data.fmt(subtotal)} so‘m</span></div>
          {discount > 0 && <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--green-700)' }}><span>Promokod</span><span>−{data.fmt(discount)} so‘m</span></div>}
          <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-muted)' }}><span>Komissiya</span><span>0 so‘m</span></div>
        </div>
        <Checkbox checked={agree} onChange={setAgree} label="Ommaviy oferta shartlariga roziman" />
      </div>
    </Dialog>
  );
}

function CartScreen({ data, cart, onRemove, onCheckout, go }) {
  const courses = cart.map(id => data.courses.find(c => c.id === id)).filter(Boolean);
  const total = courses.reduce((a, c) => a + c.price, 0);
  const old = courses.reduce((a, c) => a + (c.oldPrice || c.price), 0);
  return (
    <main style={{ maxWidth: 1240, margin: '0 auto', padding: '40px 24px 0' }}>
      <h1 style={{ fontSize: 40, marginBottom: 8 }}>Savat</h1>
      <p style={{ color: 'var(--text-muted)', marginBottom: 28 }}>{courses.length} ta kurs</p>
      {courses.length ? (
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) 340px', gap: 40, alignItems: 'start' }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {courses.map(c => (
              <div key={c.id} style={{ display: 'flex', gap: 20, padding: '20px 0', borderTop: '1px solid var(--border-hairline)', alignItems: 'flex-start' }}>
                <CourseCover level={c.level} tone={c.cover.tone} word={c.cover.word} style={{ width: 180, flex: 'none' }} />
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 6 }}>
                  <b style={{ fontSize: 17 }}>{c.title}</b>
                  <span style={{ fontSize: 14, color: 'var(--text-muted)' }}>{data.instructors[c.instructor].name} · {c.lessons} dars</span>
                  <Rating value={c.rating} count={c.reviews} size="sm" />
                  <Button variant="ghost" size="sm" iconLeft="trash-2" onClick={() => onRemove(c.id)} style={{ alignSelf: 'flex-start', marginLeft: -10 }}>Olib tashlash</Button>
                </div>
                <PriceTag price={c.price} oldPrice={c.oldPrice} style={{ flexDirection: 'column', alignItems: 'flex-end', gap: 2 }} />
              </div>
            ))}
          </div>
          <aside style={{ padding: 24, borderRadius: 20, background: 'var(--surface-card)', border: '1px solid var(--border-hairline)', display: 'flex', flexDirection: 'column', gap: 14 }}>
            <span style={{ fontSize: 14, color: 'var(--text-muted)' }}>Jami:</span>
            <PriceTag price={total} oldPrice={old} size="lg" />
            <Button variant="accent" size="lg" fullWidth onClick={onCheckout}>Rasmiylashtirish</Button>
            <span style={{ fontSize: 13, color: 'var(--text-muted)', textAlign: 'center' }}>Click · Payme · Uzum · bank kartasi</span>
          </aside>
        </div>
      ) : (
        <div style={{ padding: '72px 24px', textAlign: 'center', borderRadius: 20, background: 'var(--paper-100)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
          <Icon name="shopping-cart" size={36} color="var(--ink-400)" />
          <h3>Savat bo‘sh</h3>
          <Button onClick={() => go('market')}>Kurslarni ko‘rish</Button>
        </div>
      )}
    </main>
  );
}

Object.assign(window, { CheckoutDialog, CartScreen });
