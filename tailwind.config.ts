import type { Config } from 'tailwindcss'

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      fontSize: {
        'section-heading': '80px',
        'portfolio-heading': '42px',
      },
      spacing: {
        'mobile-nav-width': '72px',
        'desktop-nav-width': '200px',
      },
    },
  },
  plugins: [],
} satisfies Config
