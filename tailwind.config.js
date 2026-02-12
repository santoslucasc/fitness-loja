/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta Dark Mode "High Performance"
        background: '#0F172A', // Slate 900
        surface: '#1E293B',    // Slate 800
        surfaceHighlight: '#334155', // Slate 700
        
        brand: {
          neon: '#22C55E',    // Verde Neon
          accent: '#F59E0B',  // Laranja
        },
        
        text: {
          primary: '#F8FAFC',   // Branco
          secondary: '#94A3B8', // Cinza
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}