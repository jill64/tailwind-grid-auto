<script lang="ts">
  import { FlipButton, ThemeManager } from '@jill64/svelte-dark-theme'
  import { Radio } from '@jill64/svelte-input'
  import '../app.postcss'
  import BoxPreview from './BoxPreview.svelte'
  import GitHubLogo from './GitHubLogo.svelte'
  import { table } from './table'

  let count = '3'
  let type: 'cols' | 'rows' = 'cols'

  $: num = parseInt(count)
</script>

<ThemeManager />

<header class="flex items-center justify-between px-4 gap-4">
  <hgroup class="mr-auto">
    <h1 class="font-bold">@jill64/tailwind-grid-auto</h1>
    <p class="my-2 leading-6">
      🌀 A Tailwind CSS plugin for auto adjusting grid
    </p>
  </hgroup>
  <FlipButton />
  <a href="https://github.com/jill64/tailwind-grid-auto">
    <GitHubLogo />
  </a>
</header>

<div class="gap-8 flex items-center justify-center">
  <fieldset class="flex flex-col gap-4 border-none">
    <Radio bind:value={type} list={['cols', 'rows']} let:item>
      <span class="ml-2">{item}</span>
    </Radio>
  </fieldset>
  <fieldset class="flex flex-col gap-4 border-none">
    <Radio bind:value={count} list={['2', '3', '4', '6']} let:item>
      <span class="ml-2">{item}</span>
    </Radio>
  </fieldset>
</div>

<main class="flex flex-wrap gap-10 p-4 justify-around">
  <BoxPreview {type} {num} Class={table.grid[type][num - 1]} />
  <BoxPreview {type} {num} Class={table.auto[type][num - 1]} />
</main>
