import { useCallback, useEffect, useState } from 'react';

import './Intro.css';
import { brand, hero } from '@/data/content.js';
import { useBodyLock } from '@/hooks/useBodyLock.js';
import { cx } from '@/lib/cx.js';

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
      } catch {  }
      setTimeout(() => setOpen(false), 700);
      return true;
    });
  }, []);

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
        <button className="intro__enter" type="button" onClick={close}>
          Продолжить
        </button>

        <p className="intro__role">{brand.role} · {brand.city}</p>
      </div>
    </div>
  );
}
