import { tailwindConfig } from '@jill64/svelte-tailwind'
import gridAuto from '../dist/index'

/** @type {import('@jill64/svelte-tailwind').TailwindConfig} */
export default tailwindConfig({
  content: ['./src/**/*.{html,js,svelte,ts}'],
  plugins: [gridAuto]
})
