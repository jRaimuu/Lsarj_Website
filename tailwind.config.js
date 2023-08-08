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
      backgroundImage: {
        'linear-gradient-bottom': 'linear-gradient(to bottom, rgba(13,13,13,127), rgba(0,0,0,0))',
        'gradient-image-bottom': 'linear-gradient(to bottom, rgba(3, 7, 18, 0.9), rgba(0,0,0,0)), url("https://images.pexels.com/photos/3214110/pexels-photo-3214110.jpeg?cs=srgb&dl=pexels-frank-cone-3214110.jpg&fm=jpg")',
        'gradient-image-top': 'linear-gradient(to bottom, rgba(0,0,0,0), rgba(3, 7, 18, 0.9)), url("https://images.pexels.com/photos/3214110/pexels-photo-3214110.jpeg?cs=srgb&dl=pexels-frank-cone-3214110.jpg&fm=jpg")',
        'gradient-image-both': 'linear-gradient(to bottom, rgba(3, 7, 18, 0.9), rgba(3, 7, 18, 0.9)), url("https://images.pexels.com/photos/3214110/pexels-photo-3214110.jpeg?cs=srgb&dl=pexels-frank-cone-3214110.jpg&fm=jpg")',
      },
      screens: {
        'xs': '524px',
        'laptop': '2000px',
      },
      animation: {
        animateBlur: "blur 5s ease-in-out infinite, pulse 5s cubic-bezier(0.45, 0.05, 0.55, 0.95) infinite",
        animateNode: "node 5s ease-in-out infinite",
        animateComet: "pulse 10s ease-in-out infinite",
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
      }
    },
  },
  plugins: [],
};
