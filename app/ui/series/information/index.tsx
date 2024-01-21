import React from 'react';
import Title from '../../components/title';
import { Serial } from '../../types';
import './styles.scss';

const Information: React.FC<Serial> = (serial: Serial) => {
  return(
    <section className='information'>
      <Title text='Информация' class='information__title' />
      {serial.releaseDate !== ''
        &&  <div className='information__wrapper'>
              <h3>Премьера в мире</h3>
              {serial.releaseDate}
            </div>}
      {serial.country !== ''
        &&  <div className='information__wrapper'>
              <h3>Страна</h3>
              {serial.country}
            </div>}
      {serial.spokenLanguages.length
        ? <div className='information__wrapper'>
            <h3>Язык аудиодорожки</h3>
            {serial.spokenLanguages.map(item => `${item} `)}
          </div>
        : null}
      {serial.originalTitle !== ''
        &&  <div className='information__wrapper'>
              <h3>Оригинальное название</h3>
              {serial.originalTitle}
            </div>}
      {serial.genres.length >= 1
        ? <div className='information__wrapper information__wrapper--genres'>
            <h3>Жанры</h3>
            {serial.genres.map((item, i) => {
                if(i ===0) {
                  return('');
                }
                return(`${item} `);
              })
            }
          </div>
        : null}
      {serial.quality !== ''
        &&  <div className='information__wrapper'>
              <h3>Качество</h3>
              {serial.quality}
            </div>}
    </section>
  );
};

export default Information;
