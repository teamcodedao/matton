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
        primary: 'rgb(var(--color-primary) / <alpha-value>)',
        secondary: '#76BFE6',
        tertiary: '#FBFBF1',
      },
    },
  },
  plugins: [require('tailwindcss-multi')],
};
export default config;
