import React from 'react';
import { Logout } from './actions';

export default function LogoutButton() {
  return (
    <form>
      <button formAction={Logout}>Logout</button>
    </form>
  );
}
