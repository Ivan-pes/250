import { useState } from 'react';

import './Faq.css';
import Reveal from '@/components/ui/Reveal.jsx';
import Section from '@/components/ui/Section.jsx';
import SectionHead from '@/components/ui/SectionHead.jsx';
import { faq } from '@/data/content.js';
import { cx } from '@/lib/cx.js';

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <Section id="faq" className="faq">
      <SectionHead title={faq.title} />

      <div className="faq__list">
        {faq.items.map((item, i) => {
          const isOpen = openIndex === i;

          return (
            <Reveal
              key={item.q}
              className={cx('faq__item', isOpen && 'is-open')}
              delay={Math.min(i, 4) * 50}
            >
              <h3 className="faq__q">
                <button
                  className="faq__trigger"
                  type="button"
                  id={`faq-trigger-${i}`}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                >
                  <span>{item.q}</span>
                  <span className="faq__sign" aria-hidden="true" />
                </button>
              </h3>

              <div
                className="faq__panel"
                id={`faq-panel-${i}`}
                role="region"
                aria-labelledby={`faq-trigger-${i}`}
                inert={isOpen ? undefined : true}
              >
                <p className="faq__answer">{item.a}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
