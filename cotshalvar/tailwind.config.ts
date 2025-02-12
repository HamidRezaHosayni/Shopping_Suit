import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily:{
      "v-light":["v-light"],
      "v-medium":["v-medium"],
      "v-bold":["v-bold"]
    },
    extend: {
      animation: {
        'menu_select': 'spin 3s linear infinite',
      },
      backgroundImage: {
        'backAllpage': "url('/img/root-page/1.jpg')",
      }
    },
  },
  plugins: [],
};
export default config;
