module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      keyframes: {
        twinkle: {
          '0%':{ borderColor: '#EB5295' },
          '10%':{ borderColor: '#F527C5' },
          '30%':{ borderColor: '#D000DB' },
          '50%':{ borderColor: '#D051F5' },
          '70%':{ borderColor: '#8257e6' },
          '90%':{ borderColor: '#9517EB' },
        },
        twinkleIcon: {
          '0%':{ fill: '#EB5295' },
          '10%':{ fill: '#F527C5' },
          '30%':{ fill: '#D000DB' },
          '50%':{ fill: '#D051F5' },
          '70%':{ fill: '#8257e6' },
          '90%':{ fill: '#9517EB' },
        }
      },
      animation: {
        twinkle: 'twinkle 2s infinite linear',
        twinkleIcon: 'twinkleIcon 2s infinite linear'
      },
      colors: {
        brand: {
          50: '#996dff',
          100: '#EB5295',
          200: '#F527C5',
          300: '#D000DB',
          400: '#D051F5',
          500: '#8257e6',
          600: '#9517EB',
        }
      },
      borderRadius: {
        md: '4px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar'),
  ],
}
