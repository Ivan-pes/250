import './Process.css';
import Reveal from '@/components/ui/Reveal.jsx';
import Section from '@/components/ui/Section.jsx';
import SectionHead from '@/components/ui/SectionHead.jsx';
import { process } from '@/data/content.js';

/**
 * Как проходит съёмка: пронумерованные шаги со сроками.
 * Главный «понятный» блок сайта — снимает половину вопросов до первого письма.
 */
export default function Process() {
  return (
    <Section id="process" tinted className="process">
      <SectionHead kicker={process.kicker} title={process.title} lead={process.lead} />

      <ol className="process__list">
        {process.steps.map((step, i) => (
          <Reveal as="li" className="process__step" key={step.title} delay={Math.min(i, 5) * 70}>
            <span className="process__num">{String(i + 1).padStart(2, '0')}</span>

            <div className="process__body">
              <h3 className="process__title">{step.title}</h3>
              <p className="process__text">{step.text}</p>
            </div>

            <span className="process__time">{step.time}</span>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
