/** @type {import('tailwindcss').Config} */
export default {
  content: ['index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      main: '#2270B8',
      accent: '#DD8F47',
      base: '#FFFCF3',
      white: '#FFFFFF',
      gray: '#CCCCCC',
    },
    fontSize: {
      xs: '12px',
      sm: '14px',
      md: '16px',
      lg: '18px',
    },
    extend: {},
  },
  plugins: [],
}
