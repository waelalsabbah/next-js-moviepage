import { cache } from 'react';
import { $schema } from '../.eslintrc.cjs';
import { sql } from '../database/connect';
import { Movie } from '../migrations/00000-createTableMovie';

const movies = [
  {
    id: 1,
    title: 'Marriage Story',
    type: 'movie',
    genre: 'Comedy, Drama, Romance',
  },
  {
    id: 2,
    title: 'Little Women',
    type: 'movie',
    genre: 'Drama, Family, Romance',
  },
  {
    id: 3,
    title: 'Parasite',
    type: 'movie',
    genre: 'Comedy, Drama, Thriller',
  },
];

export const getMovies = cache(async () => {
  const movies = await sql<Movie[]>`SELECT * FROM movies`;
  return movies;
});

export const getMovieById = cache(async (id: number) => {
  const [movie] = await sql<Movie[]>`SELECT * FROM movies WHERE id=${id}`;
  return movie;
});
