import { NextResponse } from 'next/server';

type NextExampleApiResponse = { movies: string };

export function GET(): NextResponse<NextExampleApiResponse> {
  return NextResponse.json({
    movies: '/api/movies',
  });
}
