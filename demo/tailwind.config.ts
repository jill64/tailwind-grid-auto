import { Config } from 'tailwindcss'
import gridAuto from '../dist/index.js'

const config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  plugins: [gridAuto]
} satisfies Config

export default config
