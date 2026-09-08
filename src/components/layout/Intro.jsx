import { useCallback, useEffect, useState } from 'react';

import './Intro.css';
import Ornament from '@/components/ui/Ornament.jsx';
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
        <img className="intro__poster" src={hero.photo.src} alt="" aria-hidden="true" />

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

      <div className="intro__frame">
        <div className="intro__top">
          <p className="intro__logo">
            <span>{brand.name}</span>
            <span>{brand.role}</span>
          </p>

          <p className="intro__city">{brand.city}</p>
        </div>

        <div className="intro__bottom">
          <Ornament variant="quatrefoil" />

          <button className="intro__enter" type="button" onClick={close}>
            Продолжить
          </button>
        </div>
      </div>
    </div>
  );
}
