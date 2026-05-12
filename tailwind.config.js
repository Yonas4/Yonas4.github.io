/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"DM Sans"', 'sans-serif'],
        serif: ['"DM Serif Display"', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        dark: {
          DEFAULT: '#0b0b0d', // ink
          card: '#0f0f12',
          border: 'rgba(255,255,255,0.07)',
          warmBorder: 'rgba(201,169,110,0.2)'
        },
        gold: {
          DEFAULT: '#c9a96e', // accent
          dim: 'rgba(201, 169, 110, 0.15)',
        },
        paper: '#f5f3ee',
        muted: '#7a776e',
      },
      backgroundImage: {
        'grid-pattern': `
          linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)
        `,
      },
      backgroundSize: {
        'grid-pattern': '80px 80px',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'heroFloat 6s ease-in-out infinite',
        'scrollPulse': 'scrollPulse 2s ease-in-out infinite',
      },
      keyframes: {
        heroFloat: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        scrollPulse: {
          '0%, 100%': { opacity: '0.4', transform: 'scaleY(1)' },
          '50%': { opacity: '1', transform: 'scaleY(1.1)' },
        }
      }
    },
  },
  plugins: [],
}
