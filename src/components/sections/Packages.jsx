import './Packages.css';
import Reveal from '@/components/ui/Reveal.jsx';
import Section from '@/components/ui/Section.jsx';
import SectionHead from '@/components/ui/SectionHead.jsx';
import { packages } from '@/data/content.js';

const flute = (
  <>
    <path d="M-3.6 0-2.1 11.5Q0 14.6 2.1 11.5L3.6 0Z" />
    <path d="M0 14.6V24" />
    <path d="M-3.8 24h7.6" />
  </>
);

const ICONS = {
  rings: (
    <>
      <circle cx="19" cy="29.5" r="10.5" />
      <circle cx="31" cy="29.5" r="10.5" />
      <path d="M31 11.4 34.2 15 31 19 27.8 15z" />
    </>
  ),

  house: (
    <>
      <path d="M9 25 24 13l15 12" />
      <path d="M13 25v15h22V25" />
      <path d="M20 40v-7.5a4 4 0 0 1 8 0V40" />
      <path d="M31.5 19V11.5h3.5v10.4" className="package__faint" />
      <path d="M6 40h36" />
    </>
  ),

  camera: (
    <>
      <rect x="5" y="16" width="38" height="23" rx="4" />
      <path d="M17.5 16l2.6-4h7.8l2.6 4" />
      <circle cx="24" cy="27.5" r="7.6" />
      <circle cx="24" cy="27.5" r="3.6" className="package__faint" />
      <circle cx="37.5" cy="21" r="1.1" />
    </>
  ),

  glasses: (
    <>
      <g transform="translate(19.8,10) rotate(11)">{flute}</g>
      <g transform="translate(28.2,10) rotate(-11)">{flute}</g>
      <circle cx="24" cy="5.6" r="1.05" className="package__faint" />
      <circle cx="20.2" cy="2.6" r="0.85" className="package__faint" />
      <circle cx="28" cy="3" r="0.85" className="package__faint" />
    </>
  ),
};

export default function Packages({ onPick }) {
  return (
    <Section id="packages" tinted className="packages">
      <SectionHead
        title={packages.title}
        lead={packages.lead}
        centered
      />

      <ul className="packages__grid">
        {packages.items.map((item, i) => (
          <Reveal as="li" className="package" key={item.cat} delay={i * 90}>
            <a
              className="package__link"
              href="#portfolio"
              onClick={() => onPick(item.cat)}
            >
              <svg
                className="package__icon"
                viewBox="0 0 48 48"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                focusable="false"
              >
                {ICONS[item.icon] ?? ICONS.camera}
              </svg>

              <h3 className="package__title">{item.title}</h3>
              <p className="package__text">{item.text}</p>
              <span className="package__more">{packages.linkLabel}</span>
            </a>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
