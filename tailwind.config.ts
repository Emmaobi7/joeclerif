import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // STILL WATERS Palette
        umber: {
          950: "#130C06",
          900: "#1E1309",
          850: "#2B1B0E",
          800: "#382414",
          700: "#4A3520", // Deep umber
          600: "#5D442B",
          500: "#735538",
        },
        shadow: {
          darkest: "#0D0804",
          dark: "#170F07",
          main: "#22160B", // Dark shadow
          light: "#2F2012",
        },
        champagne: {
          50: "#FAF7EE",
          100: "#F5EFE0",
          200: "#EFE0B9", // Pale champagne
          300: "#E3CE9C",
          400: "#D4B97C",
          500: "#C29F59",
        },
        amber: {
          glow: "#F5B841", // Glowing amber
          soft: "#F8C96A",
          deep: "#D99A27",
          burnished: "#B87F1C",
        },
        ivory: {
          warm: "#F7F1E6", // Warm ivory
          50: "#FDFBF7",
          100: "#F7F1E6",
          200: "#EDE4D3",
          300: "#DED2BD",
          400: "#C5B69E",
        },
        bronze: {
          muted: "#80613A", // Muted bronze
          rich: "#997446",
          dark: "#634A2B",
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "-apple-system", "sans-serif"],
      },
      boxShadow: {
        luxury: "0 25px 60px -15px rgba(13, 8, 4, 0.8)",
        glow: "0 0 50px -10px rgba(245, 184, 65, 0.25)",
        subtle: "0 10px 30px -5px rgba(13, 8, 4, 0.5)",
        hairline: "0 0 0 1px rgba(239, 224, 185, 0.12)",
      },
    },
  },
  plugins: [],
};
export default config;
