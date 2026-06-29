import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: '#0F172A',
        ink: '#020617',
        bg: '#F8FAFC',
        primary: '#2563EB',
        accent: '#06B6D4',
        muted: '#64748B',
        border: '#E2E8F0',
        success: '#10B981'
      },
      boxShadow: {
        soft: '0 24px 80px rgba(15, 23, 42, 0.08)'
      }
    }
  },
  plugins: []
};
export default config;
