import { useCallback, useEffect, useRef, useState } from 'react';

import './Reviews.css';
import Reveal from '@/components/ui/Reveal.jsx';
import Section from '@/components/ui/Section.jsx';
import SectionHead from '@/components/ui/SectionHead.jsx';
import { reviews } from '@/data/content.js';

/**
 * Отзывы — лента, которую листают стрелками или пальцем.
 *
 * Позиция считается по самой прокрутке, а не по счётчику в памяти: тогда
 * свайп и кнопки не расходятся между собой, а стрелки гаснут на краях.
 */
export default function Reviews() {
  const trackRef = useRef(null);
  const [edge, setEdge] = useState({ start: true, end: false });

  const check = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    const max = track.scrollWidth - track.clientWidth;
    setEdge({
      start: track.scrollLeft <= 4,
      end: track.scrollLeft >= max - 4,
    });
  }, []);

  useEffect(() => {
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, [check]);

  const scrollBy = (direction) => {
    const track = trackRef.current;
    if (!track) return;

    // шаг — ширина одной карточки вместе с зазором
    const card = track.firstElementChild;
    const step = card ? card.getBoundingClientRect().width + 16 : track.clientWidth;
    track.scrollBy({ left: step * direction, behavior: 'smooth' });
  };

  return (
    <Section id="reviews" className="reviews">
      <div className="reviews__head">
        <SectionHead title={reviews.title} />

        <div className="reviews__nav">
          <button
            className="reviews__arrow"
            type="button"
            onClick={() => scrollBy(-1)}
            disabled={edge.start}
            aria-label="Предыдущий отзыв"
          >
            ←
          </button>
          <button
            className="reviews__arrow"
            type="button"
            onClick={() => scrollBy(1)}
            disabled={edge.end}
            aria-label="Следующий отзыв"
          >
            →
          </button>
        </div>
      </div>

      <div className="reviews__track" ref={trackRef} onScroll={check}>
        {reviews.items.map((item, i) => (
          <Reveal as="figure" className="review" key={item.author} delay={Math.min(i, 3) * 80}>
            <blockquote className="review__text">{item.text}</blockquote>
            <figcaption className="review__author">
              {item.author}
              <span>{item.meta}</span>
            </figcaption>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
