import Reveal from './Reveal.jsx';
import { cx } from '@/lib/cx.js';

/**
 * Шапка секции: заголовок и необязательный лид.
 * По умолчанию лид встаёт справа от заголовка, с `centered` — под ним по центру.
 *
 * @param {{title: string, lead?: string, centered?: boolean}} props
 */
export default function SectionHead({ title, lead, centered = false }) {
  return (
    <header
      className={cx(
        'section-head',
        centered ? 'section-head--center' : lead && 'section-head--split',
      )}
    >
      <Reveal as="h2" className="display">{title}</Reveal>

      {lead && <Reveal as="p" className="lead" delay={80}>{lead}</Reveal>}
    </header>
  );
}
