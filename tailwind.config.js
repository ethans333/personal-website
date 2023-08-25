/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      marginTop: {
        '112': '28rem',
      },
      animationDelay: {
        2200: "2200ms",
      },
      colors: {
        'gotham': '#1e2124',
        'normal-red': '#ff2222',
        'dirt': '#9b9b9b',
      },
      fontFamily: {
        primary: "Alliance2",
        secondary: "Alliance1"
      },
      borderWidth: {
        '16': '16px',
      },
      animation: {
        'come-down': 'come-down 1.8s ease-in-out',
        typing: "typing 1s steps(18), blink .5s infinite",
        'divider-reveal': "divider-reveal .8s"
      },
      keyframes: {
        'come-down': {
          '0%': { transform: 'translateY(-15%)' },
        },
        typing: {
          from: { width: "0" },
          to: { width: "17ch" }
        },
        blink: {
          from: { "border-right-color": "transparent" },
          to: { "border-right-color": "white" },
        },
        'divider-reveal': {
          from: { width: "0%" },
          to: { width: "100%" },
        },
      },
    },
  },
  plugins: [
    require("tailwindcss-animation-delay"),
  ],
}
