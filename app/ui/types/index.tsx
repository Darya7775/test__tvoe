export interface Serial {
  id: number;
  adult: string;
  smokeAndAlcohol: boolean;
  genres: string[];
  originalTitle: string;
  overview: string;
  description: string;
  posterPath: string;
  titleImg: string;
  country: string;
  releaseDate: string;
  spokenLanguages: string[];
  durationInYears: string;
  rating: number;
  quality: string;
  seasons: {
    id: number;
    series: {id: number; runtime: string; poster: string;}[];
  } [];
  recommendations: {
    id: number;
    poster: string;
    rating: number;
  } [];
}
