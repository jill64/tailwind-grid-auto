import { Config } from 'tailwindcss'
import  gridAuto  from '../../dist/index.js'

const config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {}
  },
  plugins: [gridAuto]
} satisfies Config

export default config
