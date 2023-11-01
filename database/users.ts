import { cache } from 'react';
import { sql } from '../database/connect';
import { User } from '../migrations/00001-createTableUsers';

export type UserWithPasswordHash = User & { passwordHash: string };
export const createUser = cache(
  async (username: string, passwordHash: string) => {
    const [user] = await sql<User[]>`
 INSERT INTO users
 (username,passwordHash)
 VALUES
 (${username.toLowerCase()},${passwordHash})
 RETURNING
 id,
 username`;
    return user;
  },
);

export const getUserByUsername = cache(async (username: string) => {
  const [user] = await sql<User[]>`SELECT
  id,
  username
  FROM users WHERE username=${username.toLowerCase()}`;
  return user;
});

export const getUserWithPasswordHashByUsername = cache(
  async (username: string) => {
    const [user] = await sql<UserWithPasswordHash[]>`SELECT
  *
  FROM users WHERE username=${username.toLowerCase()}`;
    return user;
  },
);
