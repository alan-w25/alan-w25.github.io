import type { Config } from "tailwindcss";


const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#000000", 
        secondary: "#245076", 
      },
      listStyleType: {
        none: 'none',
        square: 'square',
        roman: 'upper-roman',
        disc: 'disc',
      },
    },
  },
  plugins: [],
};
export default config;
