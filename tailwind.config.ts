import type {Config} from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        '3xl': '1921px',
      },
      colors: {
        primary: '#0085FF',
        secondary: '#76BFE6',
        tertiary: '#FCFAC2',
      },
    },
  },
  plugins: [require('tailwindcss-multi')],
};
export default config;
