import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import {
  getUserBySessionToken,
  getUserNoteBySessionToken,
} from '../../database/users';
import CreateNoteForm from './CreateNotesForm';

export default async function NotePage() {
  const sessionTokenCookie = cookies().get('sessionToken');
  const user =
    sessionTokenCookie &&
    (await getUserBySessionToken(sessionTokenCookie.value));
  if (!user) redirect('/login?returnTo=/notes');
  const userNote = await getUserNoteBySessionToken(sessionTokenCookie.value);

  return (
    <div>
      <CreateNoteForm userId={user.id} />
      <br />
      <br />

      <div>
        {userNote.length > 0 ? (
          <>
            <h2>Notes For {user.username}</h2>
            <ul>
              {userNote.map((note) => (
                <li key={`movie-div-${note.noteId}`}>{note.textContent}</li>
              ))}
            </ul>
          </>
        ) : (
          <h2> no Notes yet</h2>
        )}
      </div>
    </div>
  );
}

// /pages/notes.tsx
