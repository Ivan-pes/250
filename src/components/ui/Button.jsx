import { cx } from '@/lib/cx.js';

/**
 * Кнопка или ссылка с одинаковым видом.
 * @param {{href?: string, variant?: 'primary'|'ghost', type?: string}} props
 */
export default function Button({
  href,
  variant = 'ghost',
  className,
  children,
  ...rest
}) {
  const classes = cx('btn', `btn--${variant}`, className);

  if (href) {
    return (
      <a className={classes} href={href} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} type="button" {...rest}>
      {children}
    </button>
  );
}
