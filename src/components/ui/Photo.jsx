import { placeholder, RATIO } from '@/lib/placeholder.js';
import { cx } from '@/lib/cx.js';

/**
 * Кадр. Пока в данных нет `src` — на месте фотографии стоит серая заглушка
 * той же пропорции, поэтому вёрстка не прыгает при замене на реальные снимки.
 */
export default function Photo({
  src = null,
  alt = '',
  ratio = RATIO.portrait,
  tone = 0,
  label = '',
  priority = false,
  className,
}) {
  const isReal = Boolean(src);

  return (
    <img
      className={cx('photo', !isReal && 'photo--empty', className)}
      style={{ aspectRatio: ratio }}
      src={isReal ? src : placeholder({ ratio, tone, label })}
      alt={alt}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : 'auto'}
      decoding="async"
      draggable="false"
    />
  );
}
