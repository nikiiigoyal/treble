/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "treble-cyan": "#00D9FF",
        "treble-blue": "#0066FF",
        "treble-dark": "#0A0B1E",
      },
    },
  },
  plugins: [],
};
