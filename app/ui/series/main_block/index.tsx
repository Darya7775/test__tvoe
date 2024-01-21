import React from 'react';
import Image from 'next/image';
import { Serial } from '../../types';
import Button from '../../components/button';
import './styles.scss';

const MainBlock: React.FC<Serial> = (serial: Serial) => {
  return(
    <section className='main-block'>
      <h2 className='main-block__title'>{serial.originalTitle}</h2>
      <div className='main-block__wrapper-img'>
        <Image
          src={serial.posterPath}
          fill
          sizes='(min-width: 90em) 1400px, (max-width: 90em) calc(100vw - 216px), (max-width: 60em) calc(100vw + 32px),100vw'
          alt={serial.originalTitle}
          priority={true}
        />
      </div>
      <div className='main-block__wrapper-title-img'>
        <Image
          src={serial.titleImg}
          fill
          sizes="(min-width: 90em) 20vw,(max-width: 90em) 31vw,(max-width: 47.97em) 60vw,20vw"
          alt={serial.originalTitle}
          priority={true}
        />
      </div>
      <div className='main-block__wrapper'>
        {serial.rating && <span className='main-block__rating'>{serial.rating}</span>}
        <span>{serial.durationInYears}</span>
        {serial.seasons && <span>1 сезон</span>}
        {serial.country !== '' && <span>{serial.country}</span>}
        {serial.genres.length ? <span>{serial.genres[0]}</span> : null}
        {serial.adult && <span>{serial.adult}</span>}
      </div>
      <p className='main-block__text'>{serial.overview}</p>
      <div className='main-block__wrapper-buttons'>
        <Button href='#' class='main-block__button main-block__button--watch' text='Смотреть' color={true} />
        <Button href='#' class='main-block__button main-block__button--trailer' text='Трейлер' />
        <Button class='main-block__button main-block__button--bookmark' a11y='добавить в закладки' />
        <Button class='main-block__button main-block__button--heart' a11y='добавить в избранное' />
      </div>
    </section>
  );
};

export default MainBlock;
