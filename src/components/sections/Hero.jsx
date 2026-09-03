import './Hero.css';
import Button from '@/components/ui/Button.jsx';
import Photo from '@/components/ui/Photo.jsx';
import Reveal from '@/components/ui/Reveal.jsx';
import { hero } from '@/data/content.js';

/** Первый экран */
export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__inner container">
        <div className="hero__type">
          <Reveal as="p" className="kicker">{hero.kicker}</Reveal>

          <Reveal as="h1" className="display hero__title" delay={60}>{hero.title}</Reveal>

          <Reveal as="p" className="lead hero__lead" delay={120}>{hero.lead}</Reveal>

          <Reveal className="hero__actions" delay={180}>
            {hero.actions.map((action) => (
              <Button
                key={action.href}
                href={action.href}
                variant={action.primary ? 'primary' : 'ghost'}
              >
                {action.label}
              </Button>
            ))}
          </Reveal>

          <Reveal as="dl" className="hero__facts" delay={240}>
            {hero.facts.map((fact) => (
              <div className="hero__fact" key={fact.label}>
                <dt>{fact.value}</dt>
                <dd>{fact.label}</dd>
              </div>
            ))}
          </Reveal>
        </div>

        <Reveal as="figure" className="hero__media" delay={120}>
          <div className="photo-frame">
            <Photo {...hero.photo} priority />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
