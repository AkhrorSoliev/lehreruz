import React, { useState } from 'react';
import { CourseCover } from './CourseCover.jsx';
import { PriceTag } from './PriceTag.jsx';
import { Rating } from '../display/Rating.jsx';
import { Badge } from '../display/Badge.jsx';
import { ProgressBar } from '../display/ProgressBar.jsx';
import { Icon } from '../core/Icon.jsx';

export function CourseCard({ course = {}, progress, layout = 'vertical', onClick, style }) {
  const [hover, setHover] = useState(false);
  const c = { title: 'Nemis tili A1: noldan boshlab', instructor: 'Dilnoza Karimova', rating: 4.8, reviews: 1240, price: 349000, oldPrice: 590000, level: 'A1', cover: {}, lessons: 42, hours: 9.5, ...course };
  const horizontal = layout === 'horizontal';
  return (
    <article onClick={onClick} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ display: 'flex', flexDirection: horizontal ? 'row' : 'column', gap: horizontal ? 20 : 12, cursor: onClick ? 'pointer' : 'default', fontFamily: 'var(--font-ui)', minWidth: 0, ...style }}>
      <div style={{ position: 'relative', flex: horizontal ? '0 0 260px' : 'none', transform: hover ? 'translateY(-2px)' : 'none', boxShadow: hover ? 'var(--shadow-md)' : 'none', borderRadius: 12, transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)' }}>
        <CourseCover level={c.level} tone={c.cover.tone} word={c.cover.word} label={c.cover.label} src={c.cover.src} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6, minWidth: 0, flex: 1 }}>
        <h4 style={{ margin: 0, fontFamily: 'var(--font-ui)', fontSize: 16, fontWeight: 700, lineHeight: 1.3, letterSpacing: '-0.01em', color: 'var(--text-strong)', textDecoration: hover ? 'underline' : 'none', textDecorationColor: 'var(--gold-500)', textDecorationThickness: 2, textUnderlineOffset: 3 }}>{c.title}</h4>
        <span style={{ fontSize: 13, color: 'var(--text-muted)' }}>{c.instructor}</span>
        {progress == null ? (
          <>
            <Rating value={c.rating} count={c.reviews} size="sm" />
            <span style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 12, color: 'var(--text-muted)' }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}><Icon name="circle-play" size={14} />{c.lessons} dars</span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}><Icon name="clock" size={14} />{String(c.hours).replace('.', ',')} soat</span>
            </span>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap', marginTop: 2 }}>
              <PriceTag price={c.price} oldPrice={c.oldPrice} size="sm" showDiscount={false} />
              {c.badge && <Badge tone={c.badge === 'Bestseller' ? 'gold' : c.badge === 'Yangi' ? 'info' : 'goldSoft'} size="sm">{c.badge}</Badge>}
            </div>
          </>
        ) : (
          <ProgressBar value={progress} label={progress >= 100 ? 'Tugallandi' : 'Davom etmoqda'} showValue tone={progress >= 100 ? 'success' : 'gold'} style={{ marginTop: 6 }} />
        )}
      </div>
    </article>
  );
}
