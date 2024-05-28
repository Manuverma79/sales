/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        NameFont: ["Playfair Display"],
        PrimaryFont: ["Roboto Slab"],
        SecondaryFont: ["Dosis"],
      },
    },
  },
  daisyui: {
    themes: ["halloween"],
  },
  plugins: [require("daisyui")],
};
