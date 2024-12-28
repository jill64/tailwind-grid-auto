<script lang="ts">
  import { Radio } from '@jill64/svelte-input'
  import BoxPreview from './BoxPreview.svelte'
  import { table } from './table'

  let count = $state('3')
  let type = $state<'cols' | 'rows'>('cols')

  let num = $derived(parseInt(count))
</script>

<div class="gap-8 flex items-center justify-center">
  <fieldset class="flex flex-col gap-4 border-none">
    <Radio bind:value={type} list={['cols', 'rows']}>
      {#snippet children(item)}
        <span class="ml-2">{item}</span>
      {/snippet}
    </Radio>
  </fieldset>
  <fieldset class="flex flex-col gap-4 border-none">
    <Radio bind:value={count} list={['2', '3', '4', '6']}>
      {#snippet children(item)}
        <span class="ml-2">{item}</span>
      {/snippet}
    </Radio>
  </fieldset>
</div>

<main class="flex flex-wrap gap-10 p-4 justify-around">
  <BoxPreview {type} {num} Class={table.grid[type][num - 1]} />
  <BoxPreview {type} {num} Class={table.auto[type][num - 1]} />
</main>
