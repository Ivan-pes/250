import { useCallback, useState } from 'react';

import { placeholder, RATIO } from '@/lib/placeholder.js';
import { photos } from '@/data/photos.js';
import { cx } from '@/lib/cx.js';

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
