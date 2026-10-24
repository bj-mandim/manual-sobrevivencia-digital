/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Paleta inspirada em Kizelu Sec (https://kizelu.com.br):
        // Preto profundo e tons escuros substituindo o antigo azul marinho
        navy: {
          DEFAULT: '#0a0a0a',   // Preto suave Kizelu (substitui #0F2547)
          light: '#171717',     // Preto suave de superfície / hover
          dark: '#000000',      // Preto absoluto
          surface: '#111111',   // Painéis escuros
        },
        // O Azul Elétrico / Ciano característico do Kizelu
        kizelu: {
          cyan: '#00e5ff',        // Cyan elétrico principal Kizelu
          'cyan-hover': '#00b8cc', // Cyan para hover
          'cyan-deep': '#008b99',
          black: '#000000',       // Preto puro
          dark: '#0a0a0a',        // Preto suave
          surface: '#111111',     // Painel escuro
          border: 'rgba(255, 255, 255, 0.1)',
          'border-cyan': 'rgba(0, 229, 255, 0.3)',
        },
        // Escala completa de Ciano alinhada ao Kizelu
        cyan: {
          50: '#ecfeff',
          100: '#cffafe',
          200: '#a5f3fc',
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#00e5ff',        // Ciano elétrico Kizelu
          600: '#00b8cc',        // Ciano hover Kizelu
          700: '#0e7490',
          800: '#155e75',
          900: '#164e63',
          950: '#083344',
        },
        // Cores terciárias mantidas (emergência, alertas, sucesso)
        brand: {
          red: '#E63946',
          green: '#2A9D8F',
          amber: '#F4A261',
          cyan: '#00e5ff',
          'cyan-hover': '#00b8cc',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Sora', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
