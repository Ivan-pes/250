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
  camera: (
    <>
      <rect x="5" y="16" width="38" height="23" rx="4" />
      <path d="M17.5 16l2.6-4h7.8l2.6 4" />
      <circle cx="24" cy="27.5" r="7.6" />
      <circle cx="24" cy="27.5" r="3.6" className="package__faint" />
      <circle cx="37.5" cy="21" r="1.1" />
    </>
  ),

  church: (
    <>
      <path d="M24 2.5v6M21.4 5h5.2" />
      <path d="M24 8.5 31 22H17z" />
      <path d="M17 22v18M31 22v18" />
      <path d="M17 29H9.5v11M31 29h7.5v11" />
      <path d="M21 40v-5.5a3 3 0 0 1 6 0V40" />
      <path d="M22.6 30.5a1.4 1.4 0 0 1 2.8 0v2.4h-2.8z" className="package__faint" />
      <path
        d="M12.2 36.5a1.3 1.3 0 0 1 2.6 0v2.2h-2.6zM33.2 36.5a1.3 1.3 0 0 1 2.6 0v2.2h-2.6z"
        className="package__faint"
      />
      <path d="M6 40h36" />
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

export default function Packages() {
  return (
    <Section id="packages" tinted className="packages">
      <SectionHead
        title={packages.title}
        lead={packages.lead}
        centered
      />

      <ul className="packages__grid">
        {packages.items.map((item, i) => (
          <Reveal as="li" className="package" key={item.title} delay={i * 90}>
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
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
