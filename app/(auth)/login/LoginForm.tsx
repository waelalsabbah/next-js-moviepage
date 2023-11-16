'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { getSafeReturnToPath } from '../../../util/validation';
import { LoginResponseBodyPost } from '../../api/(auth)/login/route';

type Props = { returnTo?: string | string[] };
export default function LoginForm(props: Props) {
  const [username, setUsername] = useState(' ');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ message: string }[]>([]);
  const router = useRouter();
  async function handleRegister(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const response = await fetch('./api/login', {
      method: 'POST',
      body: JSON.stringify({
        username,
        password,
      }),
    });
    const data: LoginResponseBodyPost = await response.json();
    if ('errors' in data) {
      setErrors(data.errors);
      return;
    }
    //this is not the secure way
    /*  if (props.returnTo) {
      console.log(props.returnTo);
      router.push(props.returnTo);
      return;
    } */

    router.push(
      getSafeReturnToPath(props.returnTo) || `/profile/${data.user.username}`,
    );
    router.refresh();
  }
  return (
    <div className="max-w-sm mx-auto mt-8">
      <form
        onSubmit={async (event) => await handleRegister(event)}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            onChange={(event) => setUsername(event.currentTarget.value)}
            placeholder="Enter your username"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            onChange={(event) => setPassword(event.currentTarget.value)}
            placeholder="Enter your password"
          />
        </div>
        <button
          className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Login
        </button>
        {errors.map((error) => (
          <div
            className="text-red-500 text-sm mt-2"
            key={`error-${error.message}`}
          >
            Error: {error.message}
          </div>
        ))}
      </form>
    </div>
  );
}
