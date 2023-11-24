/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      extend: {
        fontFamily: {
          sans: ['Open Sans', 'Helvetica', 'Arial', 'sans-serif'],
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
