/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#FF6B35',
          secondary: '#FFD166',
          accent: '#4CC9F0',
          soft: '#FFF3E6',
          deep: '#2B2D42',
          warm: '#FFF8F0',
          success: '#10B981',
          error: '#EF4444',
          warning: '#F59E0B',
          neutral: '#6B7280',
        },
      },
      fontFamily: {
        display: ['var(--font-fredoka)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body: ['var(--font-inter)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'xl': '16px',
        '2xl': '20px',
        '3xl': '28px',
      },
    },
  },
  plugins: [],
}
