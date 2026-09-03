import { useInView } from '@/hooks/useInView.js';
import { cx } from '@/lib/cx.js';

/**
 * Обёртка «появиться при скролле».
 * Один приём анимации на весь сайт: лёгкий подъём и проявление, один раз.
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
      style={{ '--reveal-delay': `${delay}ms`, ...style }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
