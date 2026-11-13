/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#07080a',
        surface: {
          50: '#1c1e24',
          100: '#15161b',
          200: '#111216',
          300: '#0d0e12',
          400: '#090a0d',
        },
        border: {
          subtle: 'rgba(255, 255, 255, 0.07)',
          DEFAULT: 'rgba(255, 255, 255, 0.12)',
          hover: 'rgba(255, 255, 255, 0.22)',
        },
        silver: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
        },
        accent: {
          tamil: '#f59e0b', // subtle warm amber highlight if needed for key badges
          silver: '#e2e8f0',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Noto Sans Tamil', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        tamil: ['Noto Sans Tamil', 'Mukta Malar', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
