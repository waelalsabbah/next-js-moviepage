import { Sql } from 'postgres';

export type Movie = {
  id: number;
  title: string;
  type: string;
  genre: string;
};
export async function up(sql: Sql) {
  await sql`CREATE TABLE movies (
    id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    title varchar(30) NOT NULL,
    type varchar(30) NOT NULL,
    genre varchar(30)
    );
    `;
}
export async function down(sql: Sql) {
  await sql` DROP TABLE movies
  `;
}
