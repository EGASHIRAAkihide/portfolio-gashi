/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    theme: {
      screens: {
        'tablet': '640px',
        'laptop': '1024px',
        'desktop': '1280px',
      },
    },
    extend: {
      keyframes: {
        fadeIn: {
          '0%': {
            opacity: 0,
            top: '-300px'
          },
          '100%': {
            opacity: 1,
            top: '80px'
          }
        },
        fadeOut: {
          '0%': {
            opacity: 1,
            top: '80px'
          },
          '100%': {
            opacity: 0,
            top: '-300px'
          }
        }
      },
      animation: {
        navFadeIn: 'fadeIn 0.5s ease-out',
        navFadeOut: 'fadeOut 0.5s ease-in'
      },
    },
  },
  plugins: [],
}
