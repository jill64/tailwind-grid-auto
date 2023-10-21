<script lang="ts">
  export let group: string
  export let value: string
</script>

<label class="flex gap-4 items-center cursor-pointer">
  <input type="radio" class="scale-150 cursor-auto" bind:group {value} />
  {value}
</label>
