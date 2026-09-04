import './Hero.css';
import Button from '@/components/ui/Button.jsx';
import Photo from '@/components/ui/Photo.jsx';
import Reveal from '@/components/ui/Reveal.jsx';
import { hero } from '@/data/content.js';

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__card container">
        <figure className="hero__media">
          <Photo {...hero.photo} priority sizes="100vw" />
        </figure>

        <div className="hero__type">
          <Reveal as="h1" className="display hero__title">{hero.title}</Reveal>

          <div className="hero__bottom">
            <Reveal as="p" className="lead hero__lead" delay={100}>{hero.lead}</Reveal>

            <Reveal className="hero__actions" delay={160}>
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
          </div>
        </div>
      </div>

      <dl className="hero__facts container">
        {hero.facts.map((fact) => (
          <div className="hero__fact" key={fact.label}>
            <dt>{fact.value}</dt>
            <dd>{fact.label}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
