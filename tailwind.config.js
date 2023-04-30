/** @type {import('tailwindcss').Config}*/
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'space': ['Consolas'],
      },
      height: {
        "blurH": "32rem",
        "blurH2": "45rem",
        "nodeGraphH": "24rem"
      },
      width: {
        "blurW": "45rem",
        "nodeGraphW": "24rem"
      },
      animation: {
        animateBlur: "blur 5s ease-in-out infinite, pulse 5s cubic-bezier(0.45, 0.05, 0.55, 0.95) infinite",
        animateNode: "node 5s ease-in-out infinite",
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
          // "0%": {
          //   transform: "translate(0px, 0px) scale(1)"
          // },
          // "25%": {
          //   transform: "scaleX(1.1) skewX(-10deg) skewY(10deg)"
          // },
          // "50%": {
          //   transform: "scaleX(1.2)"
          // },
          // "75%": {
          //   transform: "scaleX(1.1) skewX(-10deg) skewY(10deg)"
          // },
          // "100%": {
          //   transform: "translate(0px, 0px) scale(1)"
          // }
          "0%": {
            transform: "translate(0px, 0px) scale(1)"
          },
          "50%": {
            transform: "scale(1.02)"
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)"
          }
        },
        node: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)"
          },
          "50%": {
            transform: "scale(1.02) skew(-5deg)"
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)"
          }
        },
      }
    },
  },
  plugins: [],
};
