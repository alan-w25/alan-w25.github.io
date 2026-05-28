/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        bg: '#F9F7F4',
        text: '#1A1A1A',
        muted: '#888888',
        accent: '#2A5C8A',
        border: '#E8E4DF',
      },
      fontFamily: {
        serif: ['Lora', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '680px',
      },
    },
  },
  plugins: [],
};
