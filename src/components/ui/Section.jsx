import { cx } from '@/lib/cx.js';

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
