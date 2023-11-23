import { Sql } from 'postgres';

export type Movie = {
  id: number;
  title: string;
  type: string;
  genre: string;
};
export async function up(sql: Sql) {
  await sql`CREATE TABLE movies (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    title VARCHAR(30) NOT NULL,
    type VARCHAR(30) NOT NULL,
    genre VARCHAR(30)
    );
    `;
}
export async function down(sql: Sql) {
  await sql` DROP TABLE movies
  `;
}
