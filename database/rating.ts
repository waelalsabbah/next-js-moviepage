import { cache } from 'react';
import { Note } from '../migrations/00004-createTableNotes';
import { sql } from './connect';

// Add rating
export const createRating = cache(async (userId: number, rating: string) => {
  const [rate] = await sql<
    { id: number; userId: number | null; rating: string }[]
  >`
 INSERT INTO notes
 (user_id,rating)
 VALUES
 (${userId},${rating})
 RETURNING *
 `;

  return rate;
});
