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
      red: '#FF0000',
      black: '#444444',
      success: '#28753C',
      info: '#2E5AAC',
      warning: '#B98000',
      error: '#DA1414',
    },
    fontSize: {
      xs: '12px',
      sm: '14px',
      md: '16px',
      lg: '18px',
      xl: '24px',
    },
    extend: {
      zIndex: {
        overlay: '20',
        header: '30',
        'header-button': '40',
        'modal-overlay': '50',
        modal: '60',
        alert: '70',
      },
      backgroundImage: {
        'book-shelf': "url('/book-shelf.jpg')",
      },
    },
  },
  plugins: [],
}
