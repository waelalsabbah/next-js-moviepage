'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function SearchMoviePage() {
  const [searchText, setSearchText] = useState('');

  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (searchText) {
    }
    router.push(`/movies/search/${searchText}`);
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)} className="flex items-center">
      <input
        type="text"
        placeholder="Search a Movie..."
        onChange={(event) => setSearchText(event.currentTarget.value)}
        className="border rounded-l px-4 py-2 focus:outline-none"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-700 focus:outline-none"
      >
        Search
      </button>
    </form>
  );
}
