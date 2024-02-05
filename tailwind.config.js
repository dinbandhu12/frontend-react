/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "Italiana": ["Italiana", "serif"],
        "Playfair_Display": ["Playfair Display", "serif"],
        "Inter": ["Inter", "sans-serif"],
      },
      colors: {
        "primary": "#FFFFFF",
        "secondary_one": "#EFEFEF",
        "secondary_two": "#E1E1E1",
        "footer_color": "#1A1A1A",
        "text_color": "#565353",
        "btn_color": "#BAB5B5",
        "btn_hover": "#8E8686",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          '2xl': '6rem',
        },
      }
    },
  },
  plugins: [],
}

