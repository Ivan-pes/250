/**
 * Склеивает классы, выбрасывая пустые значения.
 * cx('card', isActive && 'is-active') → 'card is-active'
 */
export function cx(...values) {
  return values.filter(Boolean).join(' ');
}
