'use client'

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Slider, { StaticImport } from '../../components/slider';
import './styles.scss';

interface Props {
  movies: {
    id: number;
    title: string;
    poster: string;
  }[]
}

const TopList: React.FC<Props> = (props: Props) => {
  return(
    <section className='top-list'>
      <div className='top-list__wrapper'>
        <h2 className='top-list__title'>ТОП-10</h2>
        <span className='top-list__text'>просмотров за неделю</span>
      </div>
      <Slider items={props.movies} slidesPerView={'auto'} classWrapper='top-list__wrapper-slider'
        template={movie =>
          <Link href='/series' className='top-list__item' >
            <div className='top-list__number' data-number={movie.id}></div>
            <div className='top-list__wrapper-img'>
              <Image
                src={movie.poster as StaticImport | string}
                fill
                sizes="(min-width: 1300px) calc((100vw - 710px) / 3),(min-width: 425px) calc(100vw - 32px),(min-width: 960px) calc(25vw - 31px),(min-width: 650px) calc(100vw / 3 - 16px),calc(50vw - 20px)"
                alt={String(movie.title)}
              />
            </div>
          </Link>}
        breakpoints={
          { 1600: {
              spaceBetween: 94
            },
            1300: {
              spaceBetween: 40
            },
            960: {
              spaceBetween: 30
            }
          }
        }
      />
    </section>
  );
};
 export default TopList;
