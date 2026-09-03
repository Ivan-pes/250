import './Footer.css';
import { brand, nav, socials, footer } from '@/data/content.js';

const telHref = `tel:${brand.phone.replace(/[^\d+]/g, '')}`;
const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <a className="footer__name" href="#top">{brand.name}</a>
          <p className="footer__line">{footer.line}</p>
        </div>

        <nav className="footer__col" aria-label="Разделы сайта">
          <h2 className="footer__title">Разделы</h2>
          {nav.map((item) => (
            <a key={item.id} href={`#${item.id}`}>{item.label}</a>
          ))}
        </nav>

        <div className="footer__col">
          <h2 className="footer__title">Контакты</h2>
          <a href={`mailto:${brand.email}`}>{brand.email}</a>
          <a href={telHref}>{brand.phone}</a>
          <a href={brand.telegramUrl} target="_blank" rel="noreferrer noopener">
            {brand.telegram}
          </a>
        </div>

        <nav className="footer__col" aria-label="Социальные сети">
          <h2 className="footer__title">Соцсети</h2>
          {socials.map((item) => (
            <a key={item.label} href={item.href} target="_blank" rel="noreferrer noopener">
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="container footer__base">
        <p>© {year} {brand.name}</p>
        <a href="#top">Наверх ↑</a>
      </div>
    </footer>
  );
}
