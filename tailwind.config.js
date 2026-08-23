/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          burgundy: '#8A4C46', // Cor principal (fundo e textos de destaque)
          cream: '#F4EFE6',    // Fundo claro
          dark: '#2E2E2E',     // Textos e fundos escuros
          blue: '#7FB1FF',     // Detalhes (setas, estrelas)
          gold: '#E8A317',     // Estrelas de pacotes
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Recomendo uma fonte limpa e moderna
      }
    },
  },
  plugins: [],
}