/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./styles/**/*.scss",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    'mt-0',
    'mb-0',
    'my-0',
    'bg-'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#24143D',
        secondary: '#3B2E4F',
        cream : '#FAF5ED'
      },
      container: {
        padding: '1rem',
        center: true,
          screens: {
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
          },
      },
    },
  },
  plugins: [],
}