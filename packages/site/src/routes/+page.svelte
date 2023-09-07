<script lang="ts">
  import shuffle from 'lodash/shuffle.js'
  let boxes = [...new Array(20)].map((_, i) => i + 1)

  $: onClick = () => {
    boxes = shuffle(boxes)
  }
</script>

<h1 class="text-4xl font-bold m-4">tailwind-grid-auto</h1>
<div class="my-4">
  <button
    class="px-4 py-2 rounded-full border border-zinc-500"
    on:click={onClick}
  >
    Shuffle
  </button>
</div>
<div class="inline-grid cols-auto-[10] gap-4">
  {#each boxes as box, index}
    {@const size = (box / 4) * 20 + 20}
    <div
      style:width="{size}px"
      class="bg-teal-600 w-10 transition-all flex items-center justify-center text-white font-bold"
    >
      {index}
    </div>
  {/each}
</div>
