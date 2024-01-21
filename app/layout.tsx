import React from 'react';
import '../app/ui/scss/global-styles.scss';
import { ttNormsPro } from './ui/fonts/fonts';
import Header from './ui/base/header';

interface Props {
  children: React.ReactNode
}

const RootLayout: React.FC<Props> = ({children}: Props) => {
  return (
    <html lang='ru'>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="test tvoe" />
        <title>test tvoe</title>
      </head>
      <body className={`${ttNormsPro.className}`}>
        <div id='root'>
          <h1 className='main-title'>Кино-сайт Твое</h1>
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}

export default RootLayout;
