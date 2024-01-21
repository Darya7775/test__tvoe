import localFont from 'next/font/local';

export const ttNormsPro = localFont({
  src: [
    {
      path: './tt-norms-pro-regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './tt-norms-pro-medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './tt-norms-pro-bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: './tt-norms-pro-black-italic.woff2',
      weight: '900',
      style: 'italic',
    }
  ],
  display: 'swap',
});
