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
        primary: '#8b5cf6',
        'primary-dark': '#7c3aed',
        text: '#1a1a1a',
        muted: '#666666',
      },
    },
  },
  plugins: [],
};
export default config;
