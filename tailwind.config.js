/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        'Black': '#263238',
        'D_Gray': '#4D4D4D',
        'Gray': '#717171',
        'L_Gray': '#89939E',
        'Gray_Blue': '#ABBED1',
        'Silver': '#F5F7FA',
        'Primary': '#28CB8B',
        'Secondary': '#263238',
        'Info': '#2194f3',
        'Shade-1': '#43A046',
        'Shade-2': '#388E3B',
        'Shade-3': '#237D31',
        'Shade-4': '#1B5E1F',
        'Shade-5': '#103E13',
        'Tint-1': '#66BB69',
        'Tint-2': '#81C784',
        'Tint-3': '#A5D6A7',
        'Tint-4': '#C8E6C9',
        'Tint-5': '#E8F5E9',
        'Warning': '#FBC02D',
        'Error': '#E53835',
        'Success': '#2E7D31',
      },
      keyframes: {
        wiggle: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      },
      animation: {
        'spin-slow': 'wiggle 3s linear infinite',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]
}


