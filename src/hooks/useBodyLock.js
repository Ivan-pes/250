import { useEffect } from 'react';

/**
 * Пока открыто меню, заставка или кадр во весь экран — страница под ними
 * не прокручивается.
 *
 * Одного `overflow: hidden` для этого мало: на айфоне и во встроенных
 * браузерах (Telegram, Instagram) страница всё равно уезжает под пальцем,
 * и из-под накладки видно сайт. Поэтому body фиксируется целиком, а место,
 * до которого его долистали, запоминается и возвращается при закрытии.
 */
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
      // без 'instant' сработает плавная прокрутка из base.css — страница поедет
      window.scrollTo({ top: offset, behavior: 'instant' });
    };
  }, [locked]);
}
