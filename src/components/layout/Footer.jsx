import './Footer.css';
import { nav } from '@/data/content.js';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <nav className="footer__nav" aria-label="Разделы сайта">
          {nav.map((item) => (
            <a key={item.id} href={`#${item.id}`}>{item.label}</a>
          ))}
        </nav>

        <a className="footer__top" href="#top">Наверх ↑</a>
      </div>
    </footer>
  );
}
