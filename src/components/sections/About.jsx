import './About.css';
import Photo from '@/components/ui/Photo.jsx';
import Reveal from '@/components/ui/Reveal.jsx';
import Section from '@/components/ui/Section.jsx';
import { about } from '@/data/content.js';

/** Обо мне: портрет, короткий рассказ и три конкретных обещания. */
export default function About() {
  return (
    <Section id="about" className="about">
      <div className="about__inner">
        <Reveal as="figure" className="about__media">
          <div className="photo-frame">
            <Photo {...about.photo} sizes="(min-width: 900px) 480px, 100vw" />
          </div>
        </Reveal>

        <div className="about__body">
          <Reveal as="h2" className="display about__title">{about.title}</Reveal>

          <Reveal className="about__text" delay={80}>
            {about.text.map((paragraph) => <p key={paragraph.slice(0, 24)}>{paragraph}</p>)}
          </Reveal>

          <Reveal as="p" className="about__sign" delay={160}>{about.signature}</Reveal>
        </div>
      </div>
    </Section>
  );
}
