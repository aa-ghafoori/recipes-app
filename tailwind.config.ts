import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: { primary: "#086734", "primary-light": "#4c9d77" },
    },
  },
  plugins: [],
} satisfies Config;
