module.exports = {
  purge: [
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './layouts/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'open-sans': 'Georgia, Helvetica, Arial, sans-serif',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
