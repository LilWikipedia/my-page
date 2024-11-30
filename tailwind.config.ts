import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cyber: {
          green: "#00ff00",
          blue: "#00f2fe",
          dark: "#0A0A0A",
          gray: "#e0e0e0",
        },
        glass: "rgba(16, 255, 133, 0.1)",
      },
      animation: {
        'text-glow': 'glow 2s ease-in-out infinite alternate',
        'border-glow': 'borderGlow 2s ease-in-out infinite alternate',
        'typing': 'typing 3.5s steps(40, end), blink .75s step-end infinite',
      },
      keyframes: {
        glow: {
          'from': { textShadow: '0 0 10px #00ff00, 0 0 20px #00ff00, 0 0 30px #00ff00' },
          'to': { textShadow: '0 0 20px #00ff00, 0 0 30px #00ff00, 0 0 40px #00ff00' },
        },
        borderGlow: {
          'from': { boxShadow: '0 0 10px #00ff00' },
          'to': { boxShadow: '0 0 20px #00ff00' },
        },
        typing: {
          'from': { width: '0' },
          'to': { width: '100%' },
        },
        blink: {
          'from, to': { borderColor: 'transparent' },
          '50%': { borderColor: '#00ff00' },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;