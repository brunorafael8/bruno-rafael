import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
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
} satisfies Config;
