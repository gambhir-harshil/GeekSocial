/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        primary: 'var(--color-bg-primary)',
        secondary: 'var(--color-bg-secondary)',
        placeholder: 'var(--color-placeholder)'
      },
      textColor: {
        primary: 'var(--color-text-primary)',
        secondary: 'var(--color-text-secondary)'
      },
      borderColor: {
        primary: 'var(--color-border)'
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
};
