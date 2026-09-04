import './Field.css';
import { cx } from '@/lib/cx.js';

export default function Field({
  name,
  label,
  type = 'text',
  required = false,
  placeholder,
  rows = 4,
  inputMode,
  autoComplete,
  value,
  error,
  onChange,
}) {
  const id = `field-${name}`;
  const errorId = `${id}-error`;

  const shared = {
    id,
    name,
    value,
    onChange,
    placeholder,
    required,
    inputMode,
    autoComplete,
    className: 'field__control',
    'aria-invalid': error ? 'true' : undefined,
    'aria-describedby': error ? errorId : undefined,
  };

  return (
    <div className={cx('field', error && 'is-invalid')}>
      <label className="field__label" htmlFor={id}>
        {label}
        {required && <span aria-hidden="true"> *</span>}
      </label>

      {type === 'textarea'
        ? <textarea {...shared} rows={rows} />
        : <input {...shared} type={type} />}

      {error && <span className="field__error" id={errorId}>{error}</span>}
    </div>
  );
}
