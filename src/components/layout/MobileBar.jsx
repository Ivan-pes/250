import './MobileBar.css';
import { brand } from '@/data/content.js';
import { useScrolled } from '@/hooks/useScrolled.js';
import { useScrollSpy } from '@/hooks/useScrollSpy.js';
import { cx } from '@/lib/cx.js';

const telHref = `tel:${brand.phone.replace(/[^\d+]/g, '')}`;

/** Пока читают форму, панель не нужна — она бы дублировала кнопку. */
const WATCH = ['contact'];

/**
 * Панель действий внизу экрана — только на телефоне.
 *
 * Появляется, когда первый экран уехал вверх, и прячется над формой брони.
 * Смысл простой: до кнопки «написать» должно быть один палец, а не двадцать
 * секунд прокрутки обратно к шапке.
 */
export default function MobileBar() {
  const scrolled = useScrolled(360);
  const atForm = useScrollSpy(WATCH) === 'contact';

  const show = scrolled && !atForm;

  return (
    <div className={cx('mobile-bar', show && 'is-shown')} inert={show ? undefined : true}>
      <a className="mobile-bar__ghost" href={telHref}>Позвонить</a>

      <a className="mobile-bar__cta" href="#contact">Связаться</a>
    </div>
  );
}
