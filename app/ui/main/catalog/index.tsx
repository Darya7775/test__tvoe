'use client'

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Slider, { StaticImport } from '../../components/slider';
import Title from '../../components/title';
import './styles.scss';

interface Props {
  movies: {
    id: number;
    title: string;
    poster: string;
    rating: number;
  }[]
}

const Catalog: React.FC<Props> = (props: Props) => {
  return(
    <section className='catalog'>
      <Title text='Новинки' />
      <Slider items={props.movies} classWrapper='catalog__wrapper-slider'
        template={movie =>
          <Link href='/series' className='catalog__item' >
            <span className='catalog__item-rating'>{movie.rating.toString().length === 1 ? Number(movie.rating).toFixed(1) : Number(movie.rating)}</span>
              <div className='catalog__wrapper-img'>
                <Image
                  src={movie.poster as StaticImport | string}
                  fill
                  sizes="(min-width: 1300px) calc(100vw / 4 - 212px),(min-width: 768px) calc(100vw / 3 - 32px),(min-width: 425px) calc(100vw / 2 - 32px),100vw"
                  alt={String(movie.title)}
                  priority={true}
                />
              </div>
            <h3 className='catalog__item-title'>{String(movie.title)}</h3>
          </Link>}
        breakpoints={
          { 1600: {
              slidesPerView: 'auto',
              spaceBetween: 35
            },
            1300: {
              slidesPerView: 4,
              spaceBetween: 15
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 10
            },
            425: {
              slidesPerView: 2,
              spaceBetween: 10
            }
          }
        }
      />
    </section>
  );
};

export default Catalog;
