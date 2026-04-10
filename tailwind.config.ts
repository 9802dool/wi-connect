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
        wi: {
          navy: "#0a1628",
          blue: "#1e3a5f",
          accent: "#00a3e0",
          gold: "#c9a227",
          surface: "#f4f6f9",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-dm)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
