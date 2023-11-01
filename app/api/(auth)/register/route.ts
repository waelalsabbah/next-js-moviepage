import crypto from 'node:crypto';
import bcrypt from 'bcrypt';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { createSession } from '../../../../database/sessions';
import { createUser, getUserByUsername } from '../../../../database/users';
import { User } from '../../../../migrations/00001-createTableUsers';
import { secureCookieOptions } from '../../../../util/cookie';

const registerSchema = z.object({
  username: z.string().min(3),
  password: z.string().min(3),
});

export type RegisterResponseBodyPost =
  | { user: User }
  | {
      errors: {
        message: string;
      }[];
    };

export async function POST(
  request: NextRequest,
): Promise<NextResponse<RegisterResponseBodyPost>> {
  const body = await request.json();

  const result = registerSchema.safeParse(body);

  if (!result.success) {
    return NextResponse.json({ errors: result.error.issues }, { status: 400 });
  }

  const user = await getUserByUsername(result.data.username);

  if (user) {
    return NextResponse.json(
      {
        errors: [{ message: 'username is already taken' }],
      },
      { status: 403 },
    );
  }

  const passwordHash = await bcrypt.hash(result.data.password, 12);

  const newUser = await createUser(result.data.username, passwordHash);
  console.log('Result: ', newUser);
  if (!newUser) {
    return NextResponse.json(
      { errors: [{ message: 'Error creating the new user' }] },
      { status: 406 },
    );
  }
  const token = crypto.randomBytes(100).toString('base64');

  const session = await createSession(newUser.id, token);

  if (!session) {
    return NextResponse.json(
      {
        errors: [{ message: 'Error creating the new session' }],
      },
      { status: 401 },
    );
  }

  /*  cookies().set({
    name: 'sessionToken',
    value: session.token,
    httpOnly: true,
    path: '/',
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 60 * 24,
    sameSite: 'lax', //this prevents CSRF attacks
  });
 */

  cookies().set({
    name: 'sessionToken',
    value: session.token,
    ...secureCookieOptions,
  });

  return NextResponse.json({
    user: newUser,
  });
}
