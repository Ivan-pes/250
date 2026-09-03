import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

import './Lightbox.css';
import Photo from './Photo.jsx';
import { useBodyLock } from '@/hooks/useBodyLock.js';

/**
 * Просмотр кадра во весь экран.
 * Управление с клавиатуры: Esc — закрыть, ← → — соседние кадры.
 *
 * @param {{items: object[], index: number|null, onClose: () => void, onChange: (i: number) => void}} props
 */
export default function Lightbox({ items, index, onClose, onChange }) {
  const isOpen = index !== null && index >= 0 && index < items.length;
  const dialogRef = useRef(null);

  useBodyLock(isOpen);

  // фокус забираем при открытии и возвращаем на карточку при закрытии
  useEffect(() => {
    if (!isOpen) return undefined;

    const opener = document.activeElement;
    dialogRef.current?.focus();

    return () => opener?.focus?.();
  }, [isOpen]);

  // клавиатура: Esc закрывает, стрелки листают
  useEffect(() => {
    if (!isOpen) return undefined;

    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowLeft') onChange((index - 1 + items.length) % items.length);
      if (event.key === 'ArrowRight') onChange((index + 1) % items.length);
    };

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [isOpen, index, items.length, onClose, onChange]);

  if (!isOpen) return null;

  const item = items[index];

  return createPortal(
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
      tabIndex={-1}
      ref={dialogRef}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <button className="lightbox__close" type="button" onClick={onClose} aria-label="Закрыть">
        ✕
      </button>

      <button
        className="lightbox__nav lightbox__nav--prev"
        type="button"
        onClick={() => onChange((index - 1 + items.length) % items.length)}
        aria-label="Предыдущий кадр"
      >
        ←
      </button>

      <figure className="lightbox__figure">
        <Photo {...item} alt={item.alt || item.title} priority className="lightbox__photo" />
        <figcaption className="lightbox__caption">
          <span className="lightbox__title">{item.title}</span>
          <span className="lightbox__meta">
            {item.place} · {index + 1} из {items.length}
          </span>
        </figcaption>
      </figure>

      <button
        className="lightbox__nav lightbox__nav--next"
        type="button"
        onClick={() => onChange((index + 1) % items.length)}
        aria-label="Следующий кадр"
      >
        →
      </button>
    </div>,
    document.body,
  );
}
