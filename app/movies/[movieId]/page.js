import Image from 'next/image';
import React from 'react';
import { getMovieById } from '../../../database/movies';

export default function MoviePage(props) {
  const singleMovie = getMovieById(props.params.movieId);
  return (
    <div>
      My Movie
      <h1>{singleMovie.title}</h1>
      <Image
        src={`/images/${singleMovie.title}.jpg`}
        alt={singleMovie.title}
        width={300}
        height={200}
      />
      {singleMovie.type}
      <br />
      Genre:{singleMovie.genre}
    </div>
  );
}
