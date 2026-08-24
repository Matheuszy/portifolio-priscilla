/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          burgundy: '#B95C82', // Cor principal (fundo e textos de destaque)
          cream: '#F5EFE6',    // Fundo claro
          dark: '#221E1D',     // Textos e fundos escuros
          blue: '#E8A0BE',     // Detalhes (setas, estrelas) — agora rosa claro
          gold: '#D6688F',     // Estrelas de pacotes
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}