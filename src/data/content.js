/**
 * ЕДИНСТВЕННОЕ МЕСТО, ГДЕ ЖИВЁТ ТЕКСТ САЙТА.
 *
 * Меняете здесь — меняется на странице. Компоненты трогать не нужно.
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
  hours: 'Всегда отвечу',
};

/** Пункты меню. `id` — это id секции на странице. */
export const nav = [
  { id: 'about', label: 'Обо мне' },
  { id: 'packages', label: 'Что входит' },
  { id: 'portfolio', label: 'Портфолио' },
  { id: 'reviews', label: 'Отзывы' },
  { id: 'faq', label: 'Вопросы' },
];

export const socials = [
  { label: 'Instagram', href: 'https://instagram.com/gorbaty.photo' },
];

/* ─────────────────────────  ПЕРВЫЙ ЭКРАН  ───────────────────────── */

export const hero = {
  title: 'Ваш день таким, каким он был был незабываемым',
  lead:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  actions: [
    { label: 'Портфолио', href: '#portfolio', primary: true },
  ],
  facts: [
    { value: '6 лет', label: 'работаю проф фотографом' },
    { value: '1 неделя', label: 'до отредактированной работы' },
  ],
  photo: {
    src: '/images/hero.jpg',
    ratio: RATIO.portrait,
    alt: 'Жених и невеста идут по траве в закатном свете',
  },
};

/* ─────────────────────────  ОБО МНЕ  ───────────────────────── */

export const about = {
  title: 'Восемь лет снимаю свадьбы, шесть из них — на Тенерифе. И до сих пор помню каждую.',
  text: [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
  ],
  signature: 'Хуй',
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
  title: 'Съёмка, собранная под ваш день',
  lead:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
  items: [
    {
      icon: 'camera',
      title: 'Полный день: от сборов до финала',
      text: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore.',
    },
    {
      icon: 'church',
      title: 'Церемония: главное и без спешки',
      text: 'Три-четыре часа вокруг регистрации: сбор гостей, клятвы, поздравления и короткая '
        + 'прогулка рядом с площадкой. Подходит, если празднуете узким кругом.',
    },
    {
      icon: 'glasses',
      title: 'Вечер: когда все уже свои',
      text: 'Съёмка второй половины дня — ужин, тосты, первый танец и бенгальские огни. '
        + 'Самые живые кадры обычно случаются именно здесь, ближе к ночи.',
    },
  ],
};

/* ─────────────────────────  ПОРТФОЛИО  ───────────────────────── */

export const portfolio = {
  title: 'Избранные кадры',
  lead: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  categories: [
    { id: 'all', label: 'Все' },
    { id: 'morning', label: 'Сборы' },
    { id: 'ceremony', label: 'Церемония' },
    { id: 'walk', label: 'Прогулка' },
    { id: 'party', label: 'Вечер' },
    { id: 'love', label: 'Love story' },
  ],
  /** Первые 6 показываются сразу, остальные — по кнопке. */
  items: [
    { title: 'Утро в Ла-Оротаве', place: 'Ла-Оротава, 2025', cat: 'morning', src: '/images/01-morning.jpg', ratio: RATIO.portrait },
    { title: 'Кольца и тишина', place: 'Гарачико, 2025', cat: 'ceremony', src: '/images/02-rings.jpg', ratio: RATIO.landscape },
    { title: 'Церемония у воды', place: 'Лос-Гигантес, 2025', cat: 'ceremony', src: '/images/03-shore.jpg', ratio: RATIO.portrait },
    { title: 'Первый танец', place: 'Коста-Адехе, 2025', cat: 'party', src: '/images/04-dance.jpg', ratio: RATIO.portrait },
    { title: 'Закат за Тейде', place: 'Тейде, 2024', cat: 'walk', src: '/images/05-sunset.jpg', ratio: RATIO.landscape },
    { title: 'Платье у окна', place: 'Ла-Лагуна, 2024', cat: 'morning', src: '/images/06-dress.jpg', ratio: RATIO.portrait },
    { title: 'Клятвы', place: 'Пуэрто-де-ла-Крус, 2024', cat: 'ceremony', src: '/images/07-vows.jpg', ratio: RATIO.portrait },
    { title: 'Смех между кадрами', place: 'Санта-Крус, 2024', cat: 'love', src: '/images/08-laugh.jpg', ratio: RATIO.landscape },
    { title: 'Бенгальские огни', place: 'Санта-Крус, 2024', cat: 'party', src: '/images/09-sparks.jpg', ratio: RATIO.landscape },
    { title: 'Перед выходом', place: 'Эль-Медано, 2024', cat: 'morning', src: '/images/10-mirror.jpg', ratio: RATIO.portrait },
    { title: 'Он и она, Анага', place: 'Анага, 2023', cat: 'walk', src: '/images/11-anaga.jpg', ratio: RATIO.landscape },
    { title: 'Последний танец', place: 'Ла-Гомера, 2023', cat: 'party', src: '/images/12-lastdance.jpg', ratio: RATIO.landscape },
    { title: 'Под аркой', place: 'Ла-Лагуна, 2023', cat: 'love', src: '/images/13-arch.jpg', ratio: RATIO.portrait },
    { title: 'Сумерки в старом городе', place: 'Ла-Лагуна, 2023', cat: 'love', src: '/images/14-dusk.jpg', ratio: RATIO.portrait },
  ],
  moreLabel: 'Показать ещё',
  visible: 6,
};

/* ─────────────────────────  ОТЗЫВЫ  ───────────────────────── */

export const reviews = {
  title: 'Что говорят пары',
  items: [
    {
      text: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos.',
      author: 'Катя и Дима',
      meta: 'Июнь 2025, Коста-Адехе',
    },
    {
      text: 'Приехал раньше всех и уехал последним. Отдельное спасибо за то, что успел снять бабушку — ' +
        'она посидела с нами полчаса и ушла отдыхать, а кадры остались.',
      author: 'Марина и Сергей',
      meta: 'Сентябрь 2024, Гарачико',
    },
    {
      text: 'Галерея пришла на неделю раньше срока, 560 кадров, все разобраны по времени дня. ' +
        'Родителям скинули ссылку — они смотрят до сих пор.',
      author: 'Аня и Паша',
      meta: 'Август 2024, Ла-Оротава',
    },
    {
      text: 'Половину дня шёл дождь, и мы уже мысленно попрощались с прогулкой. ' +
        'В итоге именно эти кадры под зонтом мы и распечатали.',
      author: 'Лена и Артём',
      meta: 'Март 2024, Пуэрто-де-ла-Крус',
    },
    {
      text: 'Гости весь вечер спрашивали, где мы нашли фотографа, который никому не мешает. ' +
        'Никто так и не понял, в какой момент он всё это снял.',
      author: 'Оля и Никита',
      meta: 'Октябрь 2023, Ла-Лагуна',
    },
    {
      text: 'Отдельно про переписку: отвечал в тот же день, всё по делу, без «давайте обсудим на созвоне». ' +
        'Для нас это оказалось важнее портфолио.',
      author: 'Вера и Максим',
      meta: 'Июль 2023, Ла-Гомера',
    },
  ],
};

/* ─────────────────────────  ВОПРОСЫ  ───────────────────────── */

export const faq = {
  title: 'То, что спрашивают до брони',
  items: [
    {
      q: 'Сколько это стоит?',
      a: 'Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.',
    },
    {
      q: 'За сколько нужно бронировать дату?',
      a: 'Пик сезона на острове — с мая по октябрь, эти даты разбирают за 8–12 месяцев. Зимой хватает и двух-трёх. Если до вашей даты меньше месяца, всё равно напишите: иногда окна освобождаются.',
    },
    {
      q: 'Мы не умеем позировать. Это проблема?',
      a: 'Нет, и уметь не нужно. 90% съёмки — репортаж, вы просто живёте свой день. На прогулке я даю простые подсказки вроде «идите и разговаривайте» — этого хватает.',
    },
    {
      q: 'Когда будут готовы фотографии?',
      a: '20 превью — на третий день после свадьбы. Полная галерея — за 3–5 недель в зависимости от пакета и сезона. Если срок сдвигается, я предупреждаю заранее, а не молчу.',
    },
    {
      q: 'Отдаёте ли исходники (RAW)?',
      a: 'Нет. Обработка — часть моей работы и авторского почерка, отдавать полуфабрикат было бы нечестно по отношению к результату. Но отбор я не сокращаю: в галерею попадают все удачные кадры.',
    },
    {
      q: 'А если облака или ветер?',
      a: 'Снимаем дальше. Облако над Тейде и ветер на побережье дают лучший свет и самые живые кадры, а запасные локации на другой стороне острова мы обсуждаем заранее, на этапе тайминга: погода здесь меняется через каждые двадцать километров.',
    },
    {
      q: 'Снимаете на других островах и на материке?',
      a: 'Да: Ла-Гомера, Гран-Канария, Лансароте, при желании — Испания целиком. Паром или перелёт и жильё считаются отдельно и фиксируются в договоре до предоплаты — сюрпризов в счёте не будет.',
    },
  ],
};

/* ─────────────────────────  КОНТАКТЫ  ───────────────────────── */

export const contact = {
  title: 'Связаться',
  lead: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
  fields: [
    { name: 'name', label: 'Как вас зовут', type: 'text', required: true, placeholder: 'Аня и Паша', autoComplete: 'name' },
    { name: 'contact', label: 'Телефон или почта', type: 'text', required: true, placeholder: '+7 900 000-00-00', inputMode: 'tel', autoComplete: 'tel' },
    { name: 'message', label: 'Пара слов о дне', type: 'textarea', required: false, placeholder: 'Дата, площадка, примерное число гостей', rows: 3 },
  ],
  submit: 'Отправить',
  sending: 'Отправляю…',
  success: {
    title: 'Заявка ушла',
    text: 'Я отвечу в течение суток. Если нужно быстрее — позвоните или напишите в Instagram.',
  },
};

/* ─────────────────────────  ФУТЕР  ───────────────────────── */

export const footer = {
  line: 'Свадебная фотография на Тенерифе и Канарских островах',
  legal: 'Политика конфиденциальности',
};
