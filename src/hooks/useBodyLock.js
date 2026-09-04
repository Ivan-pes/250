import { useEffect } from 'react';

export function useBodyLock(locked) {
  useEffect(() => {
    if (!locked) return undefined;

    const { body } = document;
    const offset = window.scrollY;

    body.classList.add('is-locked');
    body.style.top = `-${offset}px`;

    return () => {
      body.classList.remove('is-locked');
      body.style.top = '';

      window.scrollTo({ top: offset, behavior: 'instant' });
    };
  }, [locked]);
}
