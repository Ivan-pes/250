import './Reviews.css';
import Reveal from '@/components/ui/Reveal.jsx';
import Section from '@/components/ui/Section.jsx';
import SectionHead from '@/components/ui/SectionHead.jsx';
import { reviews } from '@/data/content.js';

/** Отзывы: три коротких цитаты, без каруселей и звёздочек. */
export default function Reviews() {
  return (
    <Section id="reviews" className="reviews">
      <SectionHead kicker={reviews.kicker} title={reviews.title} />

      <div className="reviews__grid">
        {reviews.items.map((item, i) => (
          <Reveal as="figure" className="review" key={item.author} delay={i * 80}>
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
