/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      grayscale: {
        70: '70%',
      },
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
        'come-down': 'come-down .8s',
        'come-up': 'come-up 1.3s',
        'come-right': 'come-right 1.3s',
        'come-left': 'come-left .8s',
        typing: "typing 1s steps(18), blink .5s infinite",
        'typing-no-blink': 'typing 1s steps(18)',
        'divider-reveal': "divider-reveal .8s",
        'blur-focus': 'blur-focus .8s'
      },
      keyframes: {
        'come-down': {
          '0%': { transform: 'translateY(-25%)' },
        },
        'come-up': {
          '0%': { transform: 'translateY(25%)' },
        },
        'come-right': {
          '0%': { transform: 'translateX(-15%)' },
        },
        'come-left': {
          '0%': { transform: 'translateX(15%)' },
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
        'blur-focus': {
          from: {filter: 'blur(4px)'},
          to: {filter: 'blur(0)'}
        },
      },
    },
  },
  plugins: [
    require("tailwindcss-animation-delay"),
  ],
}
