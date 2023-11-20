import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { createNote } from '../../../database/notes';
import { getValidSessionByToken } from '../../../database/sessions';

const noteSchema = z.object({
  userId: z.number(),
  textContent: z.string().min(3),
});

export type CreateNoteResponseBodyPost =
  | {
      note: { textContent: string };
    }
  | {
      errors: { message: string }[];
    };

export async function POST(
  request: NextRequest,
): Promise<NextResponse<CreateNoteResponseBodyPost>> {
  const body = await request.json();
  const result = noteSchema.safeParse(body);

  if (!result.success) {
    return NextResponse.json(
      {
        errors: result.error.issues,
      },

      {
        status: 400,
      },
    );
  }

  const sessionTokenCookie = cookies().get('sessionToken');

  const session =
    sessionTokenCookie &&
    (await getValidSessionByToken(sessionTokenCookie.value));
  if (!session) {
    return NextResponse.json(
      {
        errors: [{ message: 'Authentication token is invalid' }],
      },
      { status: 401 },
    );
  }

  const newNote = await createNote(result.data.userId, result.data.textContent);

  if (!newNote) {
    return NextResponse.json(
      {
        errors: [{ message: 'Note creation failed' }],
      },
      { status: 500 },
    );
  }
  console.log(newNote);
  return NextResponse.json({ note: { textContent: newNote.textContent } });
}
