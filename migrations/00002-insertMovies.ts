import { Sql } from 'postgres';

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

export async function up(sql: Sql) {
  for (const movie of movies) {
    await sql`INSERT INTO movies(title,type,genre)
  VALUES(${movie.title},${movie.type},${movie.genre})`;
  }
}

export async function down(sql: Sql) {
  for (const movie of movies) {
    await sql`DELETE FROM movies WHERE id = ${movie.id}`;
  }
}
