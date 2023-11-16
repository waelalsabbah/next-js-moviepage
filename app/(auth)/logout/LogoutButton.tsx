import React from 'react';
import { Logout } from './actions';

export default function LogoutButton() {
  return (
    <form>
      <button
        type="submit"
        formAction={Logout}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Logout
      </button>
    </form>
  );
}
