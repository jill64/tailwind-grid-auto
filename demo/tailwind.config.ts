import { Config } from 'tailwindcss'
import * as gridAuto from '../dist/index.js'

const config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  plugins: [gridAuto],
  darkMode: 'class'
} satisfies Config

export default config
