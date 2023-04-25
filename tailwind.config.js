/** @type {import('tailwindcss').Config}*/
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
        "blurW": "45rem",
        "blurW2": "64rem"
      },
      animation: {
        // animateBlur: "blur 30s linear infinite"
        // animateBlur: "pulse 30s cubic-bezier(0.45, 0.05, 0.55, 0.95) infinite"
      },
      keyframes: {
        pulse: {
          "20%, 70%": {
            opacity: "0.7"
          },
          "20%": {
            opacity: "0.5"
          }
        },
        blur: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)"
          },
          "25%": {
            transform: "scaleX(1.1) skewX(-10deg) skewY(10deg)"
          },
          "50%": {
            transform: "scaleX(1.2)"
          },
          "75%": {
            transform: "scaleX(1.1) skewX(-10deg) skewY(10deg)"
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)"
          }
        }
      }
    },
  },
  plugins: [],
};
