import { useEffect, useRef, useState } from 'react';

const prefersReducedMotion = () =>
  typeof window !== 'undefined'
  && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/**
 * Сообщает, попал ли элемент в кадр. Срабатывает один раз.
 * Если у человека выключены анимации — сразу возвращает true.
 *
 * @returns {[import('react').RefObject<HTMLElement>, boolean]}
 */
export function useInView({ rootMargin = '0px 0px -12% 0px', threshold = 0.05 } = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(() => prefersReducedMotion());

  useEffect(() => {
    const node = ref.current;
    if (!node || inView || !('IntersectionObserver' in window)) {
      if (!('IntersectionObserver' in window)) setInView(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setInView(true);
        observer.disconnect();
      },
      { rootMargin, threshold },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [inView, rootMargin, threshold]);

  return [ref, inView];
}
