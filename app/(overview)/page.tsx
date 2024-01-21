import React from 'react';
import { promoMovie, catalogMain, topList } from '../../data';
import MovieCard from '../ui/main/movie_card';
import Catalog from '../ui/main/catalog';
import TopList from '../ui/main/top_list';

const Page: React.FC = () => {
  return (
    <main>
      <MovieCard movie={promoMovie} />
      <Catalog movies={catalogMain} />
      <TopList movies={topList} />
    </main>
  );
}

export default Page;
