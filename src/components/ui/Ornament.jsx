import './Ornament.css';
import Reveal from './Reveal.jsx';
import { cx } from '@/lib/cx.js';

/**
 * Разделитель между разделами: филигранный завиток с узором посередине.
 *
 * Завиток одинаковый на всей странице — он и задаёт ритм. Меняется только
 * маленький мотив в центре: ромб или готическая резьба (четырёхлистник,
 * трилистник). Украшение чисто декоративное, скринридер его не читает.
 *
 * @param {{variant?: keyof typeof CENTERS, tinted?: boolean, className?: string}} props
 */

/* Левая половина завитка. Правая — то же самое зеркально (см. ниже),
   поэтому узор всегда симметричен и его достаточно править в одном месте. */
const SWIRL = (
  <>
    <path d="M126 24c-10 0-14-7-22.5-7-7 0-10.5 5-7.6 8 2.6 2.7 6.9 1 6.3-2.4-.6-3.6-6-5.6-11.6-4.3-6.2 1.5-9.2 6.3-16.3 6.3-5.8 0-9-3.2-14.1-3.2-4.2 0-6.3 2.6-4.8 4.7 1.3 1.8 4.2 1.1 4.2-1.5" />
    <path d="M74 27.5c3.6 1.9 7.4 2 11 .2" />
    <path d="M96 20c3.2-1.6 6.6-1.7 9.8-.2" />
  </>
);

/* Центральные мотивы. Система координат — 88×48, как у резьбы в окне:
   середина на x=44, основание на y=44. Дальше их ужимает transform. */
const CENTERS = {
  /** Ромб — самый тихий, как в классических типографских виньетках. */
  diamond: <path d="M44 12 56 24 44 36 32 24z" fill="currentColor" stroke="none" />,

  /** Четырёхлистник — готическая оконная резьба. */
  quatrefoil: (
    <>
      <circle cx="44" cy="17" r="6.4" />
      <circle cx="44" cy="31" r="6.4" />
      <circle cx="37" cy="24" r="6.4" />
      <circle cx="51" cy="24" r="6.4" />
      <circle cx="44" cy="24" r="1.7" fill="currentColor" stroke="none" />
    </>
  ),

  /** Трилистник на ножке. */
  trefoil: (
    <>
      <circle cx="44" cy="15" r="6.4" />
      <circle cx="36" cy="27" r="6.4" />
      <circle cx="52" cy="27" r="6.4" />
      <path d="M44 33.5v8.5" />
      <path d="M39 42h10" />
    </>
  ),

  /** Стрельчатая арка. */
  arch: (
    <>
      <path d="M32 42V25q0-12 12-17 12 5 12 17v17" />
      <circle cx="44" cy="16" r="2.6" fill="currentColor" stroke="none" />
      <path d="M28 42h32" />
    </>
  ),
};

export default function Ornament({ variant = 'diamond', tinted = false, className }) {
  const center = CENTERS[variant] ?? CENTERS.diamond;

  return (
    <Reveal
      className={cx('ornament', tinted && 'ornament--tinted', className)}
      role="presentation"
      aria-hidden="true"
    >
      <svg
        className="ornament__mark"
        viewBox="0 0 320 48"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="round"
        strokeLinejoin="round"
        focusable="false"
      >
        <g className="ornament__swirl">
          {SWIRL}
          <g transform="translate(320 0) scale(-1 1)">{SWIRL}</g>
        </g>

        {/* мотив ужимается до размера ромба и встаёт ровно в середину;
            толщину штриха поднимаем на ту же долю, чтобы линии совпали */}
        <g
          className="ornament__center"
          transform="translate(133.2 9.4) scale(0.61)"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          {center}
        </g>
      </svg>
    </Reveal>
  );
}
