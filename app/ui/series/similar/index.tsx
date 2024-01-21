'use client'

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Title from '../../components/title';
import Slider, { StaticImport } from '../../components/slider';
import { Serial } from '../../types';
import './styles.scss';

const Similar: React.FC<Serial> = (serial: Serial) => {
  return(
    <section className='similar'>
      <Title text='Похожее' />
      <Slider items={serial.recommendations} classWrapper='similar__wrapper-slider'
        template={movie => (
          <Link href='#' className='similar__link'>
            <span className='similar__item-rating'>{movie.rating.toString().length === 1 ? Number(movie.rating).toFixed(1) : Number(movie.rating)}</span>
            <div className='similar__wrapper-img'>
              <Image
                src={movie.poster as StaticImport | string}
                fill
                sizes="(min-width: 100em) 255px,(max-width: 100em) calc((100vw - 252px) / 5),(max-width: 85.3em) calc((100vw - 252px) / 3), (max-width: 47.97em) calc((100vw - 48px) / 2),255px"
                alt={`${movie.id} серия`}
              />
            </div>
          </Link>
        )}
        breakpoints={
          { 1600: {
              slidesPerView: 'auto',
              spaceBetween: 15
            },
            1366: {
              slidesPerView: 5,
              spaceBetween: 0
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 0
            },
            425: {
              slidesPerView: 2,
              spaceBetween: 0
            }
          }
        } />
    </section>
  );
};

export default Similar;
