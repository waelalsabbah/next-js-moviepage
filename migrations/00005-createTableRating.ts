import { Sql } from 'postgres';

export type Rating = {
  id: number;

  userId: number;
  rating: number;
};
// Add rating in 09/11/2023 and alter the table on sql postgres
export async function up(sql: Sql) {
  await sql`
  CREATE TABLE rating (
    id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,

    user_id integer REFERENCES users(id) ON DELETE CASCADE,
rating integer NOT NULL
);
`;
}

export async function down(sql: Sql) {
  await sql` DROP TABLE rating
  `;
}
