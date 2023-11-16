/* import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import {
  creatMovie,
  getMoviesWithLimitAndOffset,
} from '../../../database/movies';
import { Movie } from '../../../migrations/00000-createTableMovie';

export type error = {
  error: string;
};

type MoviesResponseBodyGet =
  | {
      movies: Movie[];
    }
  | Error;

type MoviesResponseBodyPost =
  | {
      movies: Movie;
    }
  | Error;

const movieSchema = z.object({
  title: z.string(),
  type: z.string(),
  genere: z.string().optional(),
});
export async function GET(
  request: NextRequest,
): Promise<NextResponse<MoviesResponseBodyGet>> {
  const { searchParams } = new URL(request.url);
  const limit = Number(searchParams.get('limit'));
  const offset = Number(searchParams.get('offset'));
  if (!limit || !offset) {
    return NextResponse.json(
      {
        error: 'Limit and offset need to be passed as params',
      },
      { status: 400 },
    );
  }
}
const movies = await getMoviesWithLimitAndOffset(limit, offset);
return NextResponse.json({
  movies: movies,
});

export async function POST(
  request: NextRequest,
): Promise<NextResponse<MoviesResponseBodyPost>> {
  const body = await request.json();

  const result = movieSchema.safeParse(body);

  if (!result.success) {
    return NextResponse.json(
      {
        error: 'the data is incomplete',
      },
      { status: 400 },
    );
  }

  const movie = await creatMovie(
    result.data.title,
    result.data.type,
    result.data.genere,
  );
  if (!movie) {
    return NextResponse.json(
      {
        error: 'Error creating new movie',
      },
      { status: 500 },
    );
  }
  return NextResponse.json({
    movie: movie,
  });
}
 */
// pages/api/fetchMovies.js
