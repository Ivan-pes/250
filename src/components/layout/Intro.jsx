import { useCallback, useEffect, useState } from 'react';

import './Intro.css';
import { brand, hero } from '@/data/content.js';
import { useBodyLock } from '@/hooks/useBodyLock.js';
import { cx } from '@/lib/cx.js';

/**
 * Заставка перед сайтом: во весь экран видео (или кадр), имя и одна кнопка.
 * По нажатию заставка растворяется и открывается страница.
 *
 * ВИДЕО. Положите файл в public/video/intro.mp4 — и он появится здесь сам.
 * Пока файла нет, фоном стоит фотография с медленным наездом: заставка
 * работает и выглядит законченной ещё до того, как видео снято.
 * Требования к файлу: mp4 (H.264), без звука, 8–15 секунд, до ~8 МБ —
 * иначе первый экран будет долго думать на мобильном интернете.
 *
 * Показывается один раз за визит: вернулись на страницу — заставки нет.
 */

const VIDEO = '/video/intro.mp4';
const SEEN_KEY = 'intro-seen';

const wasSeen = () => {
  try {
    return sessionStorage.getItem(SEEN_KEY) === '1';
  } catch {
    return false;
  }
};

export default function Intro() {
  const [open, setOpen] = useState(() => typeof window !== 'undefined' && !wasSeen());
  const [leaving, setLeaving] = useState(false);
  const [hasVideo, setHasVideo] = useState(false);

  useBodyLock(open);

  const close = useCallback(() => {
    setLeaving((already) => {
      if (already) return already;
      try {
        sessionStorage.setItem(SEEN_KEY, '1');
      } catch { /* приватный режим — просто покажем заставку ещё раз */ }
      setTimeout(() => setOpen(false), 700);
      return true;
    });
  }, []);

  // Esc закрывает так же, как кнопка
  useEffect(() => {
    if (!open) return undefined;

    const onKeyDown = (event) => {
      if (event.key === 'Escape') close();
    };

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [open, close]);

  if (!open) return null;

  return (
    <div className={cx('intro', leaving && 'is-leaving')}>
      <div className="intro__media">
        {hero.photo.src && (
          <img className="intro__poster" src={hero.photo.src} alt="" aria-hidden="true" />
        )}

        <video
          className={cx('intro__video', hasVideo && 'is-ready')}
          src={VIDEO}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
          onCanPlay={() => setHasVideo(true)}
        />
      </div>

      <div className="intro__body">
        <p className="intro__name">{brand.name}</p>
        <p className="intro__role">{brand.role} · {brand.city}</p>

        <button className="btn btn--primary intro__enter" type="button" onClick={close}>
          Войти
        </button>
      </div>
    </div>
  );
}
