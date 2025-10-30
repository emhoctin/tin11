/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: '#4F46E5',    // Indigo 600
        secondary: '#14B8A6',  // Teal 500
        accent: '#F97316',     // Orange 500
        light: '#F8FAFC',     // Slate 50
        dark: '#1E293B',       // Slate 800
        success: '#22C55E',    // Green 500
        danger: '#EF4444',      // Red 500
      },
    },
  },
  plugins: [],
}