import Reveal from './Reveal.jsx';
import { cx } from '@/lib/cx.js';

/** Шапка секции: надзаголовок, заголовок и необязательный лид справа. */
export default function SectionHead({ kicker, title, lead }) {
  return (
    <header className={cx('section-head', lead && 'section-head--split')}>
      <div>
        {kicker && <Reveal as="p" className="kicker">{kicker}</Reveal>}
        <Reveal as="h2" className="display" delay={60}>{title}</Reveal>
      </div>

      {lead && <Reveal as="p" className="lead" delay={120}>{lead}</Reveal>}
    </header>
  );
}
