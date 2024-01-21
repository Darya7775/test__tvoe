import { Serial } from "../app/ui/types";

export const promoMovie = {
  title: 'Индиана Джонс',
  titleImg: '/promo/title_ind.png',
  poster: '/promo/poster_ind.png',
  description: 'Неувядающий авантюрист и пытливый археолог-исследователь по‑прежнему в седле.'
};

export const catalogMain = [
  {
    id: 1,
    title: 'Синий жук',
    poster: '/catalog/blue_beetle.png',
    rating: 10
  },
  {
    id: 2,
    title: 'Домашняя игра',
    poster: '/catalog/home_game.png',
    rating: 6.9
  },
  {
    id: 3,
    title: 'Салют 7',
    poster: '/catalog/salyut_seven.png',
    rating: 5.8
  },
  {
    id: 4,
    title: 'Поймай меня, если сможешь',
    poster: '/catalog/catch_me_if_you_can.png',
    rating: 7.0
  },
  {
    id: 5,
    title: 'Салют 7',
    poster: '/catalog/salyut_seven.png',
    rating: 5.8
  },
  {
    id: 6,
    title: 'Поймай меня, если сможешь',
    poster: '/catalog/catch_me_if_you_can.png',
    rating: 7.0
  }
];

export const topList = [
  {
    id: 1,
    title: 'Мое прекрастное несчастье',
    poster: '/top_list/top_one.png',
  },
  {
    id: 2,
    title: 'Красное уведомление',
    poster: '/top_list/top_two.png',
  },
  {
    id: 3,
    title: 'Ведьмак',
    poster: '/top_list/top_three.png',
  },
  {
    id: 4,
    title: 'Джон Уик 4',
    poster: '/top_list/top_four.png',
  },
  {
    id: 5,
    title: 'Дамбо',
    poster: '/top_list/top_five.png',
  },
  {
    id: 6,
    title: 'Кот в сапогах: последнее желание',
    poster: '/top_list/top_six.png',
  },
  {
    id: 7,
    title: 'Рапунцель: запутанная история',
    poster: '/top_list/top_seven.png',
  },
  {
    id: 8,
    title: 'Мумии',
    poster: '/top_list/top_eight.png',
  },
  {
    id: 9,
    title: 'Уэнздей',
    poster: '/top_list/top_nine.png',
  },
  {
    id: 10,
    title: 'Удача',
    poster: '/top_list/top_ten.png',
  },
];

export const oneSerial: Serial = {
  id: 1,
  adult: '0+',
  smokeAndAlcohol: true,
  genres: [ 'Ужасы', 'Фентези', 'Комедия', 'Криминал', 'Детектив'],
  originalTitle: 'Wednesday',
  overview: 'Уэнсдэй предстоит освоить экстрасенсорные cпособности, чтобы остановить местного серийного убийцу и раскрыть тайну родителей.',
  description: 'Детективная история, наполненная сверхъестественными силами. Главная героиня сериала — Уэнздей Аддамс, одна из членов семейки Аддамс и единственная дочь Гомеса и Мортиши Аддамсов, которая становится студенткой академии «Невермор». Она пытается овладеть своими проявившимися экстрасенсорными способностями, помешать чудовищным убийствам монстра, что терроризирует местный городок Джерико, а также разгадать тайну, в которую были втянуты её родители 32 года назад, — и всё это на фоне её новых и очень запутанных отношений в академии.',
  posterPath: '/series/main/poster.png',
  titleImg: '/series/main/title.png',
  country: 'США',
  releaseDate: '31 октября 2022',
  spokenLanguages: [ 'Rus', 'Eng' ],
  rating: 10,
  quality: 'Full HD',
  durationInYears: '2022 - ...',
  seasons: [
    {
      id: 1,
      series: [
        {id: 1, runtime: '43 минуты', poster: '/series/series/one.png'},
        {id: 2, runtime: '41 минуту', poster: '/series/series/two.png'},
        {id: 3, runtime: '38 минут', poster: '/series/series/three.png'},
        {id: 4, runtime: '43 минуты', poster: '/series/series/four.png'}
      ]
    },
    {
      id: 2,
      series: [
        {id: 1, runtime: '43 минуты', poster: '/series/series/three.png'},
        {id: 2, runtime: '41 минуту', poster: '/series/series/four.png'},
        {id: 3, runtime: '38 минут', poster: '/series/series/one.png'},
        {id: 4, runtime: '43 минуты', poster: '/series/series/two.png'}
      ]
    },
    {
      id: 3,
      series: [
        {id: 1, runtime: '43 минуты', poster: '/series/series/four.png'},
        {id: 2, runtime: '41 минуту', poster: '/series/series/two.png'},
        {id: 3, runtime: '38 минут', poster: '/series/series/three.png'},
        {id: 4, runtime: '43 минуты', poster: '/series/series/one.png'}
      ]
    }
  ],
  recommendations: [
    {
      id: 1,
      poster: '/series/similar_series/one.png',
      rating: 9.1
    },
    {
      id: 2,
      poster: '/series/similar_series/two.png',
      rating: 9.1
    },
    {
      id: 3,
      poster: '/series/similar_series/three.png',
      rating: 9.1
    },
    {
      id: 4,
      poster: '/series/similar_series/four.png',
      rating: 9.1
    },
    {
      id: 5,
      poster: '/series/similar_series/five.png',
      rating: 9.1
    },
    {
      id: 6,
      poster: '/series/similar_series/six.png',
      rating: 9.1
    },
    {
      id: 7,
      poster: '/series/similar_series/seven.png',
      rating: 9.1
    }
  ]
};
