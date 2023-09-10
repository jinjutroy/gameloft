import { colors } from '@mui/material'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      ...colors,
      'primary': '#2699FB',
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      'white': 'white',
      'black': 'black',
      'outline': '#72BAF8',
      'subcolor': {
        '001': '#EBF6FF',
        '002': '#D8EDFF',
        '003': '#D5ECFF',
        '004':'#DDEEF9',
        'outline': '#6FBBFC'
      },
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-card':" linear-gradient(180deg, rgba(0,0,0,0 ) 0.00%, #000000 100.00%)",
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'triangular-white':'url(/assets/images/triangular_white.png)'
      },
    },
  },
  plugins: [],
}
export default config
