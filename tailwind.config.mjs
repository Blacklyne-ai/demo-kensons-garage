/** @type {import('tailwindcss').Config} */
// Kensons Garage — "This is Art". Black/red/gold automotive palette.
// Token names `navy`/`orange` are RETAINED from the base scaffold for
// zero-churn reuse; their VALUES are now Kensons carbon + brand red:
//   navy*   → carbon near-blacks (#1A1A1A … #080808)
//   orange* → brand red (#C8102E)
//   gold    → champagne #C9A961 ("This is Art" accent moments)
// Colours are exposed as RGB triplets so Tailwind opacity modifiers work
// (e.g. bg-navy/80). Single source of truth lives in src/styles/global.css :root.
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: 'rgb(var(--rgb-navy) / <alpha-value>)',
          rich: 'rgb(var(--rgb-navy-rich) / <alpha-value>)',
          deep: 'rgb(var(--rgb-navy-deep) / <alpha-value>)',
          ink: 'rgb(var(--rgb-navy-ink) / <alpha-value>)',
          600: 'rgb(var(--rgb-navy-600) / <alpha-value>)',
          500: 'rgb(var(--rgb-navy-500) / <alpha-value>)',
        },
        orange: {
          DEFAULT: 'rgb(var(--rgb-orange) / <alpha-value>)',
          bright: 'rgb(var(--rgb-orange-bright) / <alpha-value>)',
          deep: 'rgb(var(--rgb-orange-deep) / <alpha-value>)',
          dark: 'rgb(var(--rgb-orange-dark) / <alpha-value>)',
        },
        gold: {
          DEFAULT: 'rgb(var(--rgb-gold) / <alpha-value>)',
          soft: 'rgb(var(--rgb-gold-soft) / <alpha-value>)',
        },
        snow: 'rgb(var(--rgb-snow) / <alpha-value>)',
        stone: 'rgb(var(--rgb-stone) / <alpha-value>)',
        ink: 'rgb(var(--rgb-navy) / <alpha-value>)',
        muted: 'rgb(var(--rgb-muted) / <alpha-value>)',
        'muted-light': 'rgb(var(--rgb-muted-light) / <alpha-value>)',
        line: 'rgb(var(--rgb-border) / <alpha-value>)',
        green: 'rgb(var(--rgb-green) / <alpha-value>)',
        amber: 'rgb(var(--rgb-amber) / <alpha-value>)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['Archivo', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', '"SF Mono"', 'monospace'],
      },
      borderRadius: {
        pill: '999px',
      },
      maxWidth: {
        '8xl': '88rem',
      },
    },
  },
  plugins: [],
};
