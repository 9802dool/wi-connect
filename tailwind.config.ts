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
          /** Deep wave blue (logo banner / palm shadows) */
          navy: "#082f49",
          /** Ocean & sky blues */
          ocean: "#0e7490",
          blue: "#0284c7",
          /** Tropical teal (logo “i” & wave) */
          teal: "#14b8a6",
          /** Sunset orange — primary CTAs (logo sun & “W”) */
          accent: "#ea580c",
          "accent-hover": "#f97316",
          /** Sunny highlight */
          sun: "#fbbf24",
          /** Top-rated badge */
          gold: "#eab308",
          /** App backgrounds */
          surface: "#f0f9ff",
          muted: "#e0f2fe",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-dm)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        "wi-sm": "0 1px 2px 0 rgb(8 47 73 / 0.06), 0 1px 3px 0 rgb(8 47 73 / 0.08)",
        "wi-md": "0 4px 6px -1px rgb(8 47 73 / 0.08), 0 2px 4px -2px rgb(8 47 73 / 0.06)",
        "wi-lg": "0 10px 25px -5px rgb(8 47 73 / 0.12), 0 8px 10px -6px rgb(8 47 73 / 0.08)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};

export default config;
