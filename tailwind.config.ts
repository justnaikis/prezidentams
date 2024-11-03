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
        background: "var(--background)",
        foreground: "var(--foreground)",
        tekstoGray: "#333333",
        auksoPav: "#FFD700",
        lightBlu: "#d8e3f3",
        darkBlu: "#9cb9e0",
        cream:"#FDFBD4",
        bottom: "#2f4de5",
        coral: "#ffb89e",
        mainText: "#fdfbd4",
        lightGreen: "#00f774",
        veryGreen: "#95ffc7",
      },
      backgroundImage: {
        bannerImg: "url('/hero.jpg')",
        phoneBannerImg: "url('/heroPhone.jpg')",
      },
    },
  },
  plugins: [],
};
export default config;
