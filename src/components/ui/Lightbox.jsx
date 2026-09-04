import { useCallback, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

import './Lightbox.css';
import Photo from './Photo.jsx';
import { useBodyLock } from '@/hooks/useBodyLock.js';

export default function Lightbox({ items, index, onClose, onChange }) {
  const isOpen = index !== null && index >= 0 && index < items.length;
  const dialogRef = useRef(null);
  const swipeStart = useRef(null);

  useBodyLock(isOpen);

  const step = useCallback(
    (delta) => onChange((index + delta + items.length) % items.length),
    [index, items.length, onChange],
  );

  const onTouchStart = (event) => {
    const touch = event.changedTouches[0];
    swipeStart.current = { x: touch.clientX, y: touch.clientY };
  };

  const onTouchEnd = (event) => {
    const from = swipeStart.current;
    if (!from) return;
    swipeStart.current = null;

    const touch = event.changedTouches[0];
    const dx = touch.clientX - from.x;
    const dy = touch.clientY - from.y;

    if (Math.abs(dx) < 48 || Math.abs(dx) < Math.abs(dy) * 1.4) return;
    step(dx < 0 ? 1 : -1);
  };

  useEffect(() => {
    if (!isOpen) return undefined;

    const opener = document.activeElement;
    dialogRef.current?.focus();

    return () => opener?.focus?.();
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return undefined;

    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowLeft') step(-1);
      if (event.key === 'ArrowRight') step(1);
    };

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [isOpen, onClose, step]);

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
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <button className="lightbox__close" type="button" onClick={onClose} aria-label="Закрыть">
        ✕
      </button>

      <button
        className="lightbox__nav lightbox__nav--prev"
        type="button"
        onClick={() => step(-1)}
        aria-label="Предыдущий кадр"
      >
        ←
      </button>

      <figure className="lightbox__figure">
        <Photo
          {...item}
          alt={item.alt || item.title}
          priority
          sizes="100vw"
          className="lightbox__photo"
        />
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
        onClick={() => step(1)}
        aria-label="Следующий кадр"
      >
        →
      </button>
    </div>,
    document.body,
  );
}
