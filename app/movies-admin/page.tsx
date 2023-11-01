import Image from 'next/image';
import Link from 'next/link';
import { getMovies } from '../../database/movies';
import MoviesForm from './MoviesForm';

export const metadata = {
  title: { default: ' Movie Admin ', Template: '%s | Welcome Home' },
  description: 'Generated by create next app',
};

export default async function Movies() {
  const movies = await getMovies();
  return <MoviesForm movies={movies} />;
}
