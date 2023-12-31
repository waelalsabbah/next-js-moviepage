import '../../globals.css';
import 'tailwindcss/tailwind.css';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import {
  getUserBySessionToken,
  getUserNoteBySessionToken,
} from '../../../database/users';
import CreateNoteForm from '../../notes/CreateNotesForm';

type Genre = {
  name: string;
  id: number;
};

type Props = { params: { movieId: number } };
export default async function MoviePage(props: Props) {
  let movie;
  const movieId = Number(props.params.movieId);

  // Fetch movie data from the API
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.API_KEY}`,
        },
      },
    );

    if (response.ok) {
      movie = await response.json();
    } else {
      throw new Error(
        `Error fetching movie data: ${response.status} - ${response.statusText}`,
      );
    }
  } catch (error) {
    console.error(error);
    throw error;
  }

  // Get user and user notes
  const sessionTokenCookie = cookies().get('sessionToken');
  const user =
    sessionTokenCookie &&
    (await getUserBySessionToken(sessionTokenCookie.value));

  // Redirect to login if the user is not authenticated
  if (!user) redirect('/login?returnTo=/notes');

  const userNote = await getUserNoteBySessionToken(sessionTokenCookie.value);

  return (
    <div
      className="p-4 bg-cover bg-center"
      style={{
        backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie.backdrop_path}')`,
      }}
    >
      <div className="bg-white bg-opacity-80 p-8 rounded-md">
        <h1 className="text-3xl font-bold mb-6">{movie.title}</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
          <div className="mb-4">
            <img
              src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
              alt={movie.title}
              className="w-full h-auto"
            />
          </div>

          <div className="mb-4"></div>
        </div>

        <h2 className="text-lg font-bold mb-2">Status: {movie.status}</h2>
        <h2 className="text-lg font-bold mb-2">
          Release Date: {movie.release_date}
        </h2>
        <h2 className="text-lg font-bold mb-2">
          Vote Average: {movie.vote_average}
        </h2>

        <h3 className="text-lg font-bold mb-2">Genres:</h3>
        <ul className="list-disc pl-6 mb-4">
          {movie.genres ? (
            movie.genres.map((genre: Genre) => (
              <li className="text-base mb-1" key={`genre-${genre.id}`}>
                {genre.name}
              </li>
            ))
          ) : (
            <li className="text-base mb-1">No genres available</li>
          )}
        </ul>

        <div className="border border-gray-300 p-4 rounded-md">
          <p className="text-base font-bold mb-4">Overview: {movie.overview}</p>
        </div>
        <br />

        <h4 className="text-lg font-bold mb-2">
          Where to watch and Trailer:
          <br />
          <br />
          <a
            className="text-blue-500 inline-block px-4 py-2 rounded-md border border-blue-500 hover:bg-blue-500 hover:text-white transition duration-300"
            href={movie.homepage}
            target="_blank"
            rel="noopener noreferrer"
          >
            Play Me
          </a>
        </h4>
        {user && <CreateNoteForm userId={user.id} />}

        <div className="mt-4">
          {userNote.length > 0 ? (
            <>
              <h2 className="text-lg font-bold mb-2">
                {user.username}'s Review
              </h2>
              <ul className="list-disc pl-6 mb-4">
                {userNote.map((note) => (
                  <li
                    className="text-base mb-1"
                    key={`movie-div-${note.noteId}`}
                  >
                    {note.textContent}
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <h2 className="text-lg font-bold mb-2">No Reviews yet</h2>
          )}
        </div>
      </div>
    </div>
  );
}
