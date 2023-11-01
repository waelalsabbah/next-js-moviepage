import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { getValidSessionByToken } from '../../../database/sessions';
import LoginForm from './LoginForm';

type Props = { searchParams: { returnTo?: string | string[] } };
export default async function Login({ searchParams }: Props) {
  const sessionTokenCookie = cookies().get('sessionToken');
  const session =
    sessionTokenCookie &&
    (await getValidSessionByToken(sessionTokenCookie.value));
  if (session) redirect('/');
  return (
    <div>
      <LoginForm returnTo={searchParams.returnTo} />
    </div>
  );
}
