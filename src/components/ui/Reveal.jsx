import { useInView } from '@/hooks/useInView.js';
import { cx } from '@/lib/cx.js';

/**
 * Обёртка «появиться при скролле».
 * Один приём анимации на весь сайт: лёгкий подъём и проявление, один раз.
 *
 * Ступенька между соседними блоками обрезана: длинные задержки читаются
 * как подтормаживание страницы, а не как приём.
 *
 * @param {{as?: any, delay?: number, className?: string, style?: object, children?: any}} props
 */
export default function Reveal({
  as: Tag = 'div',
  delay = 0,
  className,
  style,
  children,
  ...rest
}) {
  const [ref, inView] = useInView();

  return (
    <Tag
      ref={ref}
      className={cx('reveal', inView && 'is-in', className)}
      style={{ '--reveal-delay': `${Math.min(delay, 90)}ms`, ...style }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
