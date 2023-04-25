/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        "blurH": "32rem"
      },
      width: {
        "blurW": "70rem"
      },
      animation: {
        animateBlur: "blur 10s infinite"
      },
      keyframes: {
        blur: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)"
          },
          "33%": {
            transform: "translate(30px, -30px) scale(1.05)"
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(1.1)"
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)"
          },
        }
      }
    },
  },
  plugins: [],
}

