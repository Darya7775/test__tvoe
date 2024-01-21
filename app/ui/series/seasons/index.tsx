'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Serial } from '../../types';
import Title from '../../components/title';
import Slider, { StaticImport } from '../../components/slider';
import './styles.scss';

const Seasons: React.FC<Serial> = (serial: Serial) => {
  const [ current, setCurrent ] = useState(1);
  return(
    <section className='seasons'>
      <div className='seasons__wrapper'>
        <Title text='Сезоны' />
        <div className='seasons__tabs'>
          {serial.seasons.map(season => {
            if(current === season.id) {
              return (
              <button className='seasons__button seasons__button--active' type='button' key={season.id}>
                {season.id}
              </button>
              );
            }
            return (
              <button className='seasons__button' type='button'
                key={season.id}
                onClick={() => setCurrent(season.id)}>{season.id}</button>
            );
          })}
        </div>
      </div>
      <Slider items={serial.seasons[current - 1].series} slidesPerView={'auto'} classWrapper='seasons__wrapper-slider'
        template={series =>
          <Link href='#' className='seasons__link' >
            <div className='seasons__wrapper-img'>
              <Image
                src={series.poster as StaticImport | string}
                fill
                sizes="(max-width: 100em) 34.332vw,(max-width: 60em) 76.878vw,28.3vw"
                alt={`${series.id} серия`}
              />
            </div>
            <span className='seasons__number'>{`${series.id} серия`}</span>
            <span className='seasons__runtime'>{String(series.runtime)}</span>
          </Link>}
        breakpoints={
          { 1600: {
              spaceBetween: 4
            }
          }
        }
      />
    </section>
  );
};

export default Seasons;


