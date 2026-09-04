import { RATIO } from '@/lib/placeholder.js';

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

export const hero = {
  title: 'Ваш день, как он был',
  lead:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod '
    + 'tempor incididunt ut labore et dolore magna aliqua.',
  actions: [
    { label: 'Портфолио', href: '#portfolio', primary: true },
  ],
  facts: [
    { value: '6 лет', label: 'снимаю свадьбы' },
    { value: '3–5 недель', label: 'до готовой галереи' },
  ],
  photo: {
    src: '/images/hero.jpg',
    ratio: RATIO.portrait,
    alt: 'Жених и невеста идут по траве в закатном свете',
  },
};

export const about = {
  title: 'Обо мне',
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
  signature: 'Хуй',
  photo: {
    src: '/images/about.jpg',
    ratio: RATIO.portrait,
    alt: 'Портрет фотографа с камерой',
  },
};

export const packages = {
  title: 'Что входит',
  lead:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor '
    + 'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
  items: [
    {
      icon: 'camera',
      title: 'Полный день',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor '
        + 'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud.',
    },
    {
      icon: 'church',
      title: 'Церемония',
      text: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed '
        + 'quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
    },
    {
      icon: 'glasses',
      title: 'Вечер',
      text: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, '
        + 'adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore.',
    },
  ],
};

export const portfolio = {
  title: 'Избранные кадры',
  lead: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor '
    + 'incididunt ut labore et dolore magna aliqua.',
  categories: [
    { id: 'all', label: 'Все' },
    { id: 'morning', label: 'Сборы' },
    { id: 'ceremony', label: 'Церемония' },
    { id: 'walk', label: 'Прогулка' },
    { id: 'party', label: 'Вечер' },
    { id: 'love', label: 'Love story' },
  ],

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
    { title: 'Сумерки', place: 'Ла-Лагуна, 2023', cat: 'love', src: '/images/14-dusk.jpg', ratio: RATIO.portrait },
  ],
  moreLabel: 'Показать ещё',
  visible: 6,
};

export const reviews = {
  title: 'Что говорят пары',
  items: [
    {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor '
        + 'incididunt ut labore et dolore magna aliqua veniam.',
      author: 'Катя и Дима',
      meta: 'Июнь 2025, Коста-Адехе',
    },
    {
      text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut '
        + 'aliquip ex ea commodo consequat duis aute irure.',
      author: 'Марина и Сергей',
      meta: 'Сентябрь 2024, Гарачико',
    },
    {
      text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu '
        + 'fugiat nulla pariatur excepteur sint occaecat.',
      author: 'Аня и Паша',
      meta: 'Август 2024, Ла-Оротава',
    },
    {
      text: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia '
        + 'deserunt mollit anim id est laborum sed perspiciatis.',
      author: 'Лена и Артём',
      meta: 'Март 2024, Пуэрто-де-ла-Крус',
    },
    {
      text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium '
        + 'doloremque laudantium totam rem aperiam eaque.',
      author: 'Оля и Никита',
      meta: 'Октябрь 2023, Ла-Лагуна',
    },
    {
      text: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed '
        + 'quia consequuntur magni dolores eos.',
      author: 'Вера и Максим',
      meta: 'Июль 2023, Ла-Гомера',
    },
  ],
};

export const faq = {
  title: 'Вопросы',
  items: [
    {
      q: 'Сколько это стоит?',
      a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor '
        + 'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud '
        + 'exercitation ullamco laboris.',
    },
    {
      q: 'За сколько бронировать дату?',
      a: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu '
        + 'fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa '
        + 'qui officia deserunt.',
    },
    {
      q: 'Мы не умеем позировать?',
      a: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium '
        + 'doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.',
    },
    {
      q: 'Когда будут фотографии?',
      a: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia '
        + 'consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
    },
    {
      q: 'Отдаёте ли исходники?',
      a: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, '
        + 'adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore.',
    },
    {
      q: 'А если дождь или ветер?',
      a: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium '
        + 'voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi.',
    },
    {
      q: 'Снимаете на других островах?',
      a: 'Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe '
        + 'eveniet ut et voluptates repudiandae sint et molestiae non recusandae.',
    },
  ],
};

export const contact = {
  title: 'Связаться',
  lead: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor '
    + 'incididunt ut labore.',
  fields: [
    { name: 'name', label: 'Как вас зовут', type: 'text', required: true, placeholder: 'Dolor sit amet', autoComplete: 'name' },
    { name: 'contact', label: 'Телефон или почта', type: 'text', required: true, placeholder: '+7 900 000-00-00', inputMode: 'tel', autoComplete: 'tel' },
    { name: 'message', label: 'Пара слов о дне', type: 'textarea', required: false, placeholder: 'Incididunt ut labore et dolore magna aliqua', rows: 3 },
  ],
  submit: 'Отправить',
  sending: 'Отправляю…',
  success: {
    title: 'Заявка ушла',
    text: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad '
      + 'minim veniam.',
  },
};

export const footer = {
  line: 'Свадебная фотография на Тенерифе',
  legal: 'Политика конфиденциальности',
};
