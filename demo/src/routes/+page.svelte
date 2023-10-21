<script lang="ts">
  import '../app.postcss'
  import BoxPreview from './BoxPreview.svelte'
  import RadioItem from './RadioItem.svelte'
  import { table } from './table'

  let count = '3'
  let type: 'cols' | 'rows' = 'cols'

  $: num = parseInt(count)
</script>

<header class="flex items-center justify-between m-4">
  <h1 class="text-4xl font-bold">tailwind-grid-auto</h1>
  <a
    class="hover:underline"
    href="https://github.com/jill64/tailwind-grid-auto"
  >
    GitHub
  </a>
</header>
<div class="px-8 gap-8 flex items-center justify-center">
  <div class="flex flex-col gap-2">
    <RadioItem bind:group={type} value="cols" />
    <RadioItem bind:group={type} value="rows" />
  </div>
  <div class="flex flex-col gap-2">
    <RadioItem bind:group={count} value="2" />
    <RadioItem bind:group={count} value="3" />
    <RadioItem bind:group={count} value="4" />
    <RadioItem bind:group={count} value="6" />
  </div>
</div>
<main class="flex flex-wrap gap-10 p-4 justify-around">
  <BoxPreview {type} {num} Class={table.grid[type][num - 1]} />
  <BoxPreview {type} {num} Class={table.auto[type][num - 1]} />
</main>
