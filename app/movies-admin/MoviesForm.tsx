'use client';
import { Movie } from '../../migrations/00000-createTableMovie';

type Props = { movies: Movie[] };
export default function MovieForm({ movies }: Props) {
  return <>{movies.map((movies) => {})}</>;
}
