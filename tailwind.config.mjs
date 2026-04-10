/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#fefdf8',
          100: '#fdf8ed',
          200: '#f9edd4',
        },
        karaage: {
          gold: '#c8860a',
          amber: '#e6a020',
          light: '#f5c842',
          dark: '#7a4f08',
        },
        brown: {
          900: '#2c1a06',
          800: '#3d2509',
          700: '#5a3810',
          600: '#7a5020',
        },
      },
      fontFamily: {
        sans: ['Noto Sans JP', 'system-ui', 'sans-serif'],
        serif: ['Noto Serif JP', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
};
