<script lang="ts">
  let {
    type,
    Class,
    num
  }: {
    type: 'cols' | 'rows'
    Class: string
    num: number
  } = $props()

  let direction = $derived(type === 'rows' ? 'grid-flow-col' : 'grid-flow-row')
</script>

<section class="flex flex-col gap-4 justify-center items-center self-start">
  <code class="text-zinc-500 text-lg">
    &lt;<span class="text-blue-500">div</span>
    <span class="text-sky-500">class</span>="inline-grid gap-2 {direction}
    <span class="text-amber-600">{Class}</span>"&gt;
  </code>
  <div class="inline-grid gap-2 {Class} {direction}">
    {#each [...new Array(12)].map((_, i) => i) as box, index}
      {@const size = (box % num) * 20 + 20}
      <div
        style:width="{size}px"
        style:height="{size}px"
        class="bg-teal-600 dark:bg-teal-900 w-10 flex items-center justify-center text-white dark:text-zinc-100 font-bold"
      >
        {index + 1}
      </div>
    {/each}
  </div>
</section>
