/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#1E3A8A",
          orange: "#F97316",
          ink: "#0F172A",
          slate: "#475569",
          mist: "#F8FAFC"
        }
      },
      fontFamily: {
        heading: ["Sora", "sans-serif"],
        body: ["IBM Plex Sans", "sans-serif"]
      },
      boxShadow: {
        glow: "0 20px 60px rgba(30, 58, 138, 0.2)"
      },
      backgroundImage: {
        "hero-grid": "radial-gradient(rgba(30,58,138,0.15) 1px, transparent 1px)",
        "hero-radial": "radial-gradient(circle at top right, rgba(249,115,22,0.25), transparent 45%)"
      }
    }
  },
  plugins: []
};
