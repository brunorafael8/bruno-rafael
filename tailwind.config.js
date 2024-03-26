/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        roboto: ["Roboto", ...fontFamily.serif],
        lato: ["Lato", ...fontFamily.serif],
        'IBM Plex Mono': ["IBM Plex Mono", ...fontFamily.serif],
      },
    },
  },
  plugins: [],
}

