function Reveal({ children, delay = 0, style }) {
  const ref = React.useRef(null);
  const [on, setOn] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setOn(true); io.disconnect(); } }, { threshold: 0.12 });
    io.observe(el); return () => io.disconnect();
  }, []);
  return <div ref={ref} className={'lz-rv' + (on ? ' in' : '')} style={{ transitionDelay: delay + 'ms', ...style }}>{children}</div>;
}

function useInView(threshold = 0.3) {
  const ref = React.useRef(null);
  const [on, setOn] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setOn(true); io.disconnect(); } }, { threshold });
    io.observe(el); return () => io.disconnect();
  }, []);
  return [ref, on];
}

function useCount(to, on, ms = 1500) {
  const [v, setV] = React.useState(0);
  React.useEffect(() => {
    if (!on) return;
    let raf, t0;
    const step = t => { t0 = t0 || t; const p = Math.min(1, (t - t0) / ms); setV(Math.round(to * (1 - Math.pow(1 - p, 3)))); if (p < 1) raf = requestAnimationFrame(step); };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [on, to]);
  return v;
}

function CountUp({ to, decimals = 0, suffix = '', on = true }) {
  const v = useCount(decimals ? Math.round(to * 10) : to, on);
  const shown = decimals ? (v / 10).toFixed(1).replace('.', ',') : v.toLocaleString('ru-RU');
  return <span className="lz-mono-num" style={{ fontVariantNumeric: 'tabular-nums' }}>{shown}{suffix}</span>;
}

Object.assign(window, { Reveal, useInView, useCount, CountUp });
