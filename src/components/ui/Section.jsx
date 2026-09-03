import { cx } from '@/lib/cx.js';

/**
 * Общая обёртка секции: вертикальные отступы, контейнер, якорь для меню.
 * @param {{id: string, tinted?: boolean, className?: string, children: any}} props
 */
export default function Section({ id, tinted = false, className, children, ...rest }) {
  return (
    <section
      id={id}
      className={cx('section', tinted && 'section--tinted', className)}
      {...rest}
    >
      <div className="container">{children}</div>
    </section>
  );
}
