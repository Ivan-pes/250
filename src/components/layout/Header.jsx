import { useEffect, useState } from 'react';

import './Header.css';
import { brand, nav, socials } from '@/data/content.js';
import { useScrolled } from '@/hooks/useScrolled.js';
import { useScrollSpy } from '@/hooks/useScrollSpy.js';
import { useBodyLock } from '@/hooks/useBodyLock.js';
import { cx } from '@/lib/cx.js';

const NAV_IDS = nav.map((item) => item.id);
const telHref = `tel:${brand.phone.replace(/[^\d+]/g, '')}`;

/**
 * Шапка: логотип, меню с подсветкой текущей секции, кнопка «Связаться».
 *
 * Выдвижное меню лежит РЯДОМ с шапкой, а не внутри неё. Это важно:
 * у шапки есть `backdrop-filter`, а он делает элемент точкой отсчёта для
 * `position: fixed` внутри — меню схлопывалось до высоты шапки и не открывалось.
 */
export default function Header() {
  const [open, setOpen] = useState(false);
  const scrolled = useScrolled(24);
  const active = useScrollSpy(NAV_IDS);

  useBodyLock(open);

  useEffect(() => {
    if (!open) return undefined;

    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false);
    };

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [open]);

  return (
    <>
      <header className={cx('header', scrolled && 'is-solid', open && 'is-open')}>
        <div className="header__bar container">
          <a className="header__brand" href="#top" onClick={() => setOpen(false)}>
            {brand.name}
          </a>

          <nav className="header__nav" aria-label="Разделы сайта">
            {nav.map((item) => (
              <a
                key={item.id}
                className={cx('header__link', active === item.id && 'is-current')}
                href={`#${item.id}`}
                aria-current={active === item.id ? 'true' : undefined}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="header__side">
            <a className="header__phone" href={telHref}>{brand.phone}</a>
            <a className="btn btn--primary header__cta" href="#contact">Contactus</a>

            <button
              className="burger"
              type="button"
              aria-label="Открыть меню"
              aria-expanded={open}
              aria-controls="drawer"
              onClick={() => setOpen(true)}
            >
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <div
        className={cx('drawer', open && 'is-open')}
        id="drawer"
        inert={open ? undefined : true}
      >
        <div className="drawer__inner container">
          <div className="drawer__top">
            <span className="drawer__brand">{brand.name}</span>

            <button
              className="drawer__close"
              type="button"
              aria-label="Закрыть меню"
              onClick={() => setOpen(false)}
            >
              <span />
              <span />
            </button>
          </div>

          <nav className="drawer__nav" aria-label="Разделы сайта">
            {nav.map((item, i) => (
              <a
                key={item.id}
                className="drawer__link"
                style={{ '--drawer-delay': `${60 + i * 45}ms` }}
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
              >
                <span className="drawer__num">{String(i + 1).padStart(2, '0')}</span>
                {item.label}
              </a>
            ))}
          </nav>

          <div
            className="drawer__foot"
            style={{ '--drawer-delay': `${60 + nav.length * 45}ms` }}
          >
            <a className="btn btn--primary drawer__cta" href="#contact" onClick={() => setOpen(false)}>
              Contactus
            </a>

            <dl className="drawer__contacts">
              <div>
                <dt>Telephonum</dt>
                <dd><a href={telHref}>{brand.phone}</a></dd>
              </div>
              <div>
                <dt>Email</dt>
                <dd><a href={`mailto:${brand.email}`}>{brand.email}</a></dd>
              </div>
            </dl>

            <ul className="drawer__socials">
              {socials.map((item) => (
                <li key={item.label}>
                  <a href={item.href} target="_blank" rel="noreferrer noopener">{item.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
