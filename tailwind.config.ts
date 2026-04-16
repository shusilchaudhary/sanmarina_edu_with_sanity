import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        nunito: ['Nunito', 'sans-serif'],
      },
      colors: {
        primary: '#001F3F',
        secondary: '#0056b3',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#374151',
            h1: { color: '#001F3F', fontWeight: '800' },
            h2: { color: '#001F3F', fontWeight: '700', marginTop: '2rem', marginBottom: '1rem' },
            h3: { color: '#001F3F', fontWeight: '600' },
            strong: { color: '#001F3F' },
            a: { color: '#2563eb', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } },
            table: { width: '100%', fontSize: '0.95rem' },
            'th': { backgroundColor: '#001F3F', color: '#ffffff', padding: '0.75rem 1rem' },
            'td': { padding: '0.65rem 1rem', borderBottom: '1px solid #e5e7eb' },
            'tr:nth-child(even)': { backgroundColor: '#f9fafb' },
            blockquote: { borderLeftColor: '#2563eb', backgroundColor: '#eff6ff', borderRadius: '0 0.5rem 0.5rem 0', padding: '0.5rem 1rem' },
            code: { backgroundColor: '#f3f4f6', padding: '0.2rem 0.4rem', borderRadius: '0.25rem', fontSize: '0.875rem' },
          },
        },
      },
    },
  },
  plugins: [typography],
};

export default config;
