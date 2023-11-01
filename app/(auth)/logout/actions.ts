'use server';
import { cookies } from 'next/headers';
import { deleteSessionByToken } from '../../../database/sessions';

export async function Logout() {
  const cookieStore = cookies();

  const token = cookieStore.get('sessionToken');

  if (token) await deleteSessionByToken(token.value);

  cookieStore.set('sessionToken', '', { maxAge: -1 });
}
