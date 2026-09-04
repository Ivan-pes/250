import { useCallback, useState } from 'react';

import { placeholder, RATIO } from '@/lib/placeholder.js';
import { photos } from '@/data/photos.js';
import { cx } from '@/lib/cx.js';

/**
 * Кадр.
 *
 * Пока в данных нет `src` — на месте фотографии стоит серая заглушка той же
 * пропорции, поэтому вёрстка не прыгает при замене на реальные снимки.
 *
 * Для снимков из набора сайта (список в src/data/photos.js) телефон скачивает
 * облегчённую копию, а до её появления держит размытое превью — кадр
 * проявляется, а не выпрыгивает белым прямоугольником.
 */
export default function Photo({
  src = null,
  alt = '',
  ratio = RATIO.portrait,
  tone = 0,
  label = '',
  priority = false,
  sizes = '100vw',
  className,
}) {
  const meta = src ? photos[src] : null;
  const [loaded, setLoaded] = useState(!meta);

  // картинка из кэша успевает загрузиться до подписки на onLoad — проверяем сами
  const watch = useCallback((node) => {
    if (node?.complete) setLoaded(true);
  }, []);

  const isReal = Boolean(src);

  return (
    <img
      ref={watch}
      className={cx('photo', !isReal && 'photo--empty', meta && !loaded && 'is-loading', className)}
      style={{
        aspectRatio: ratio,
        backgroundImage: meta && !loaded ? `url("${meta.blur}")` : undefined,
      }}
      src={isReal ? src : placeholder({ ratio, tone, label })}
      srcSet={meta ? `${meta.sm} 760w, ${src} 1500w` : undefined}
      sizes={meta ? sizes : undefined}
      alt={alt}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : 'auto'}
      decoding="async"
      draggable="false"
      onLoad={() => setLoaded(true)}
    />
  );
}
