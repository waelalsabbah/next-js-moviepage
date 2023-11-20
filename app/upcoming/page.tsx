import 'tailwindcss/tailwind.css';
import Head from 'next/head';
import Link from 'next/link';

export const metadata = {
  title: { default: ' Movies| Welcome Home', Template: '%s |  Welcome Home' },
  description: 'Generated by create next app',
};

export default async function UpComing() {
  let movies = [];

  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.API_KEY}`,
        },
      },
    );

    if (response.ok) {
      const data = await response.json();

      movies = data.results;
    } else {
      throw new Error(
        `Error fetching trending movies: ${response.status} - ${response.statusText}`,
      );
    }
  } catch (error) {
    console.error(error);
    throw error;
  }

  return (
    <div className="p-4">
      <Head>
        <title>{metadata.title.default}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <h1 className="text-3xl font-bold mb-6">Upcoming Movies</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {movies.map((movie) => (
          <Link
            href={`/movies/${movie.id}`}
            className="border rounded overflow-hidden shadow-md hover:shadow-lg transition duration-300"
            key={`movie-div-${movie.id}`}
          >
            <div className="aspect-w-3 aspect-h-4">
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-4">
              <h2 className="text-lg font-bold mb-2">{movie.title}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
