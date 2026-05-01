/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ink: '#0B0B0B',
        sun: '#FFD60A',
        pearl: '#F7F6F2',
        graphite: '#151515',
        slate: '#9A9A9A',
      },
      boxShadow: {
        glow: '0 0 25px rgba(255, 214, 10, 0.35)',
        soft: '0 24px 55px rgba(11, 11, 11, 0.18)',
      },
      fontFamily: {
        display: ['"Space Grotesk"', '"Clash Display"', '"IBM Plex Sans"', 'sans-serif'],
        body: ['"IBM Plex Sans"', '"Space Grotesk"', 'sans-serif'],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        float: 'float 7s ease-in-out infinite',
        shimmer: 'shimmer 9s ease infinite',
      },
    },
  },
  plugins: [],
}
