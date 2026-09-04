import { useInView } from '@/hooks/useInView.js';
import { cx } from '@/lib/cx.js';

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
