/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#070A0F",
          900: "#0A0E15",
          850: "#0D121A",
          800: "#111826",
          700: "#182233",
          600: "#243044",
          500: "#334158",
        },
        line: {
          DEFAULT: "#1C2836",
          soft: "#141C28",
        },
        cyan: {
          400: "#6FE7DC",
          500: "#45D8C9",
          600: "#2BBCAE",
        },
        amber: {
          400: "#F5B94D",
          500: "#F0A62E",
        },
        paper: {
          100: "#EAF1F5",
          300: "#B9C6D2",
          500: "#7C8CA0",
        },
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'IBM Plex Mono'", "monospace"],
      },
      backgroundImage: {
        blueprint:
          "linear-gradient(rgba(69,216,201,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(69,216,201,0.06) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "40px 40px",
        "grid-lg": "80px 80px",
      },
    },
  },
  plugins: [],
};
