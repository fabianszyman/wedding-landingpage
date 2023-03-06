/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      variants: {
        animation: ["motion-safe"],
      },
      animation: {
        fadeIn: "fadeIn 2s ease-in forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      colors: {
        weddingYellow: "#F2F1E6",
        darkgreen: "#324448",
      },
      fontFamily: {
        RobotoCondensed_Regular: "RobotoCondensed_Regular",
        Caveat: "Caveat",
        CormorantGaramond_Bold: "CormorantGaramond_Bold",
        CormorantGaramond_Medium: "CormorantGaramond_Medium",
        Quicksand_Regular: "Quicksand_Regular",
        Quicksand_Medium: "Quicksand_Medium",
        RubikIso_Regular: "RubikIso_Regular",
      },
    },
  },
  plugins: [],
};
