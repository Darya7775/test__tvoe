import React from 'react';
import Image from 'next/image';
import Button from '../../components/button';
import './styles.scss';

interface Props {
  movie: {
    title: string;
    titleImg: string;
    poster: string;
    description: string;
  }
}

const MovieCard: React.FC<Props> = (props: Props) => {
  return(
    <section className='movie-card'>
      <h2 className='movie-card__title'>{props.movie.title}</h2>
      <div className='movie-card__wrapper-img'>
        <Image
          src={props.movie.poster}
          fill
          sizes='(min-width: 85.3em) 1250px,(max-width: 85.3em) calc(100vw - 212px), (max-width: 60em) calc(100vw + 32px),100vw'
          alt={props.movie.title}
          priority={true}
        />
      </div>
      <div className='movie-card__wrapper-title-img'>
        <Image
          src={props.movie.titleImg}
          fill
          sizes="(max-width: 90em) 250px,576px"
          alt={props.movie.title}
          priority={true}
        />
      </div>
      <p className='movie-card__text'>{props.movie.description}</p>
      <Button href='/series' class='movie-card__link movie-card__link--left' text='Смотреть' color={true} />
      <Button href='/series' class='movie-card__link movie-card__link--right' text='О фильме' />
    </section>
  );
};

export default MovieCard;
