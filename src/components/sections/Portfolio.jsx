import { useMemo, useState } from 'react';

import './Portfolio.css';
import Button from '@/components/ui/Button.jsx';
import Lightbox from '@/components/ui/Lightbox.jsx';
import Photo from '@/components/ui/Photo.jsx';
import Reveal from '@/components/ui/Reveal.jsx';
import Section from '@/components/ui/Section.jsx';
import SectionHead from '@/components/ui/SectionHead.jsx';
import { portfolio } from '@/data/content.js';
import { cx } from '@/lib/cx.js';

export default function Portfolio() {
  const [category, setCategory] = useState('all');
  const [visible, setVisible] = useState(portfolio.visible);
  const [openIndex, setOpenIndex] = useState(null);

  const items = useMemo(
    () => (category === 'all'
      ? portfolio.items
      : portfolio.items.filter((item) => item.cat === category)),
    [category],
  );

  const shown = items.slice(0, visible);
  const rest = items.length - shown.length;

  const selectCategory = (id) => {
    setCategory(id);
    setVisible(portfolio.visible);
  };

  return (
    <Section id="portfolio" className="portfolio">
      <SectionHead title={portfolio.title} lead={portfolio.lead} />

      <div className="portfolio__filters" role="tablist" aria-label="Разделы галереи">
        {portfolio.categories.map((item) => (
          <button
            key={item.id}
            className={cx('chip', category === item.id && 'is-on')}
            type="button"
            role="tab"
            aria-selected={category === item.id}
            onClick={() => selectCategory(item.id)}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="gallery">
        {shown.map((item, i) => (
          <Reveal
            key={`${item.title}-${item.place}`}
            className="gallery__cell"
            delay={Math.min(i % portfolio.visible, 5) * 60}
          >
            <button
              className="card"
              type="button"
              onClick={() => setOpenIndex(i)}
              aria-label={`Открыть кадр «${item.title}»`}
            >
              <span className="card__frame">
                <Photo
                  {...item}
                  alt={item.title}
                  tone={i}

                  priority={i < 3}
                  sizes="(min-width: 1200px) 380px, (min-width: 1000px) 32vw, (min-width: 620px) 48vw, 100vw"
                />
              </span>
              <span className="card__caption">
                <span className="card__title">{item.title}</span>
                <span className="card__place">{item.place}</span>
              </span>
            </button>
          </Reveal>
        ))}
      </div>

      {rest > 0 && (
        <div className="portfolio__more">
          <Button onClick={() => setVisible((value) => value + portfolio.visible)}>
            {portfolio.moreLabel} · {rest}
          </Button>
        </div>
      )}

      <Lightbox
        items={items}
        index={openIndex}
        onClose={() => setOpenIndex(null)}
        onChange={setOpenIndex}
      />
    </Section>
  );
}
