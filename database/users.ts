import { cache } from 'react';
import { sql } from '../database/connect';
import { User } from '../migrations/00001-createTableusers';

export const createUser = cache(
  async (username: string, passwordHash: string) => {
    const [user] = await sql<User[]>`
 INSERT INTO users
 (username,password_hash)
 VALUES
 (${username},${passwordHash})
 RETURNING
 id,
 username`;
    return user;
  },
);
