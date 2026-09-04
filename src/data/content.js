/**
 * ЕДИНСТВЕННОЕ МЕСТО, ГДЕ ЖИВЁТ ТЕКСТ САЙТА.
 *
 * Меняете здесь — меняется на странице. Компоненты трогать не нужно.
 *
 * СЕЙЧАС ВЕСЬ ТЕКСТ — РЫБА (Lorem ipsum). Настоящими остались только имя,
 * подпись под ним и контакты: почта, телефон, Instagram.
 *
 * У фотографий поле `src`. Сейчас там временные снимки из /public/images —
 * поставьте вместо них свои: положите файл в ту же папку и впишите
 * '/images/имя-файла.jpg'. Если поставить null, на месте кадра будет серая
 * заглушка нужной пропорции — вёрстка не поедет.
 */

import { RATIO } from '@/lib/placeholder.js';

/* ─────────────────────────  ОБЩЕЕ  ───────────────────────── */

export const brand = {
  name: 'Хуй Горбатый',
  short: 'ХГ',
  role: 'Гей фотограф',
  city: 'Тенерифе',
  email: 'Валя@gorbaty.photo',
  phone: '+34 612 345 678',
  instagram: '@gorbaty.photo',
  instagramUrl: 'https://instagram.com/gorbaty.photo',
  hours: 'Lorem ipsum dolor sit amet.',
};

/** Пункты меню. `id` — это id секции на странице. */
export const nav = [
  { id: 'about', label: 'Lorem' },
  { id: 'packages', label: 'Ipsum' },
  { id: 'portfolio', label: 'Dolor' },
  { id: 'reviews', label: 'Amet' },
  { id: 'faq', label: 'Elit' },
];

export const socials = [
  { label: 'Instagram', href: 'https://instagram.com/gorbaty.photo' },
];

/* ─────────────────────────  ПЕРВЫЙ ЭКРАН  ───────────────────────── */

export const hero = {
  title: 'Lorem ipsum dolor sit amet consectetur',
  lead:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod '
    + 'tempor incididunt ut labore et dolore magna aliqua.',
  actions: [
    { label: 'Dolor sit', href: '#portfolio', primary: true },
  ],
  facts: [
    { value: 'VI', label: 'lorem ipsum dolor sit' },
    { value: 'I–II', label: 'consectetur adipiscing elit' },
  ],
  photo: {
    src: '/images/hero.jpg',
    ratio: RATIO.portrait,
    alt: 'Жених и невеста идут по траве в закатном свете',
  },
};

/* ─────────────────────────  ОБО МНЕ  ───────────────────────── */

export const about = {
  title: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem.',
  text: [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor '
      + 'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud '
      + 'exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat '
      + 'nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui '
      + 'officia deserunt mollit anim id est laborum.',
    'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque '
      + 'laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi '
      + 'architecto beatae vitae dicta sunt explicabo.',
  ],
  signature: 'Lorem',
  photo: {
    src: '/images/about.jpg',
    ratio: RATIO.portrait,
    alt: 'Портрет фотографа с камерой',
  },
};

/* ─────────────────────────  ЧТО ВХОДИТ  ─────────────────────────
   Три формата съёмки. Поле `icon` выбирает рисунок из набора
   src/components/sections/Packages.jsx: 'camera', 'church' или 'glasses'.
   ──────────────────────────────────────────────────────────────── */

export const packages = {
  title: 'Neque porro quisquam est qui dolorem',
  lead:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor '
    + 'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
  items: [
    {
      icon: 'camera',
      title: 'Lorem ipsum: dolor sit amet',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor '
        + 'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud.',
    },
    {
      icon: 'church',
      title: 'Consectetur: adipiscing elit',
      text: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed '
        + 'quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
    },
    {
      icon: 'glasses',
      title: 'Tempor: incididunt ut labore',
      text: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, '
        + 'adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore.',
    },
  ],
};

/* ─────────────────────────  ПОРТФОЛИО  ───────────────────────── */

export const portfolio = {
  title: 'Ut enim ad minim veniam',
  lead: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor '
    + 'incididunt ut labore et dolore magna aliqua.',
  categories: [
    { id: 'all', label: 'Omnia' },
    { id: 'morning', label: 'Lorem' },
    { id: 'ceremony', label: 'Ipsum' },
    { id: 'walk', label: 'Dolor' },
    { id: 'party', label: 'Amet' },
    { id: 'love', label: 'Elit' },
  ],
  /** Первые 6 показываются сразу, остальные — по кнопке. */
  items: [
    { title: 'Lorem ipsum', place: 'Dolor, 2025', cat: 'morning', src: '/images/01-morning.jpg', ratio: RATIO.portrait },
    { title: 'Dolor sit amet', place: 'Amet, 2025', cat: 'ceremony', src: '/images/02-rings.jpg', ratio: RATIO.landscape },
    { title: 'Consectetur elit', place: 'Elit, 2025', cat: 'ceremony', src: '/images/03-shore.jpg', ratio: RATIO.portrait },
    { title: 'Tempor incididunt', place: 'Labore, 2025', cat: 'party', src: '/images/04-dance.jpg', ratio: RATIO.portrait },
    { title: 'Magna aliqua', place: 'Veniam, 2024', cat: 'walk', src: '/images/05-sunset.jpg', ratio: RATIO.landscape },
    { title: 'Nostrud exercitation', place: 'Ullamco, 2024', cat: 'morning', src: '/images/06-dress.jpg', ratio: RATIO.portrait },
    { title: 'Laboris nisi', place: 'Aliquip, 2024', cat: 'ceremony', src: '/images/07-vows.jpg', ratio: RATIO.portrait },
    { title: 'Commodo consequat', place: 'Irure, 2024', cat: 'love', src: '/images/08-laugh.jpg', ratio: RATIO.landscape },
    { title: 'Voluptate velit', place: 'Cillum, 2024', cat: 'party', src: '/images/09-sparks.jpg', ratio: RATIO.landscape },
    { title: 'Fugiat nulla', place: 'Pariatur, 2024', cat: 'morning', src: '/images/10-mirror.jpg', ratio: RATIO.portrait },
    { title: 'Excepteur sint', place: 'Occaecat, 2023', cat: 'walk', src: '/images/11-anaga.jpg', ratio: RATIO.landscape },
    { title: 'Cupidatat proident', place: 'Culpa, 2023', cat: 'party', src: '/images/12-lastdance.jpg', ratio: RATIO.landscape },
    { title: 'Officia deserunt', place: 'Mollit, 2023', cat: 'love', src: '/images/13-arch.jpg', ratio: RATIO.portrait },
    { title: 'Anim id est', place: 'Laborum, 2023', cat: 'love', src: '/images/14-dusk.jpg', ratio: RATIO.portrait },
  ],
  moreLabel: 'Lorem amplius',
  visible: 6,
};

/* ─────────────────────────  ОТЗЫВЫ  ───────────────────────── */

export const reviews = {
  title: 'Quis autem vel eum iure',
  items: [
    {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor '
        + 'incididunt ut labore et dolore magna aliqua veniam.',
      author: 'Lorem et Ipsum',
      meta: 'Iunius 2025, Dolor',
    },
    {
      text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut '
        + 'aliquip ex ea commodo consequat duis aute irure.',
      author: 'Dolor et Amet',
      meta: 'September 2024, Elit',
    },
    {
      text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu '
        + 'fugiat nulla pariatur excepteur sint occaecat.',
      author: 'Consectetur et Elit',
      meta: 'Augustus 2024, Labore',
    },
    {
      text: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia '
        + 'deserunt mollit anim id est laborum sed perspiciatis.',
      author: 'Tempor et Labore',
      meta: 'Martius 2024, Veniam',
    },
    {
      text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium '
        + 'doloremque laudantium totam rem aperiam eaque.',
      author: 'Magna et Aliqua',
      meta: 'October 2023, Ullamco',
    },
    {
      text: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed '
        + 'quia consequuntur magni dolores eos.',
      author: 'Nostrud et Laboris',
      meta: 'Iulius 2023, Aliquip',
    },
  ],
};

/* ─────────────────────────  ВОПРОСЫ  ───────────────────────── */

export const faq = {
  title: 'Quis nostrud exercitation ullamco',
  items: [
    {
      q: 'Lorem ipsum dolor sit amet?',
      a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor '
        + 'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud '
        + 'exercitation ullamco laboris.',
    },
    {
      q: 'Consectetur adipiscing elit?',
      a: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu '
        + 'fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa '
        + 'qui officia deserunt.',
    },
    {
      q: 'Sed do eiusmod tempor incididunt?',
      a: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium '
        + 'doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.',
    },
    {
      q: 'Ut labore et dolore magna aliqua?',
      a: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia '
        + 'consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
    },
    {
      q: 'Ut enim ad minim veniam?',
      a: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, '
        + 'adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore.',
    },
    {
      q: 'Quis nostrud exercitation ullamco?',
      a: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium '
        + 'voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi.',
    },
    {
      q: 'Nisi ut aliquip ex ea commodo?',
      a: 'Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe '
        + 'eveniet ut et voluptates repudiandae sint et molestiae non recusandae.',
    },
  ],
};

/* ─────────────────────────  КОНТАКТЫ  ───────────────────────── */

export const contact = {
  title: 'Lorem ipsum',
  lead: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor '
    + 'incididunt ut labore.',
  fields: [
    { name: 'name', label: 'Lorem ipsum', type: 'text', required: true, placeholder: 'Dolor sit amet', autoComplete: 'name' },
    { name: 'contact', label: 'Consectetur adipiscing', type: 'text', required: true, placeholder: '+7 900 000-00-00', inputMode: 'tel', autoComplete: 'tel' },
    { name: 'message', label: 'Sed do eiusmod tempor', type: 'textarea', required: false, placeholder: 'Incididunt ut labore et dolore magna aliqua', rows: 3 },
  ],
  submit: 'Mittere',
  sending: 'Lorem…',
  success: {
    title: 'Lorem ipsum dolor',
    text: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad '
      + 'minim veniam.',
  },
};

/* ─────────────────────────  ФУТЕР  ───────────────────────── */

export const footer = {
  line: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  legal: 'Lorem ipsum',
};
