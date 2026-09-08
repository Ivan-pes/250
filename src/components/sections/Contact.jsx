import './Contact.css';
import Reveal from '@/components/ui/Reveal.jsx';
import Section from '@/components/ui/Section.jsx';
import SectionHead from '@/components/ui/SectionHead.jsx';
import { brand, contact } from '@/data/content.js';

export default function Contact() {
  return (
    <Section id="contact" tinted className="contact">
      <SectionHead title={contact.title} centered />

      <div className="contact__links">
        {contact.links.map((item, i) => (
          <Reveal key={item.label} delay={i * 90}>
            <a
              className="contact__link"
              href={item.href}
              target="_blank"
              rel="noreferrer noopener"
            >
              <span className="contact__where">{item.label}</span>
              <span className="contact__handle">{item.handle}</span>
            </a>
          </Reveal>
        ))}
      </div>

      <Reveal as="p" className="contact__hours" delay={180}>{brand.hours}</Reveal>
    </Section>
  );
}
