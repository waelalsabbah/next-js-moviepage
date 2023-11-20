'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function CreateNoteForm({ userId }: { userId: number }) {
  const [textContent, setTextContent] = useState('');

  const router = useRouter();

  async function handleCreateNote() {
    await fetch('/api/notes', {
      method: 'POST',
      body: JSON.stringify({
        textContent,
        userId,
      }),
    });
    router.refresh();
    setTextContent('');
  }

  return (
    <form
      onSubmit={async (event) => {
        event.preventDefault();
        await handleCreateNote();
      }}
      className="max-w-md mx-auto mt-8"
    >
      <label className="block text-gray-700 text-sm font-bold mb-2">
        Add Reviews:
        <textarea
          value={textContent}
          onChange={(event) => setTextContent(event.currentTarget.value)}
          className="resize-none border rounded w-full py-2 px-3 mt-2 leading-tight focus:outline-none focus:shadow-outline"
          rows="4"
        />
      </label>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Send
      </button>
    </form>
  );
}
