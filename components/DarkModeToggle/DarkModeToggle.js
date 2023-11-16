/* // DarkModeToggle.js
'use client';
// YourComponent.js
import { useEffect, useState } from 'react';

export default function YourComponent() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const prefersDarkMode = window.matchMedia(
      '(prefers-color-scheme: dark)',
    ).matches;
    setDarkMode(prefersDarkMode);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
    document.body.classList.toggle('dark-mode');
  };

  return (

    <button
      className={`bg-gray-800 text-white py-2 px-4 rounded ${
        darkMode ? 'bg-gray-300 text-gray-800' : ''
      }`}
      onClick={toggleDarkMode}
    >
      {darkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
} */
