<script lang="ts">
  export let label: string = '';
  export let active: boolean = false;
</script>

<button
  class="group relative inline-block whitespace-pre focus:outline-none cursor-pointer"
  on:click
>
  <!-- Light Mode (Default) -->
  <span class="dark:hidden px-1 {active ? 'bg-red-600 text-white' : 'text-slate-800 group-hover:bg-red-600 group-hover:text-white group-focus:bg-red-600 group-focus:text-white'}">
    &lt;{label}&gt;
  </span>

  <!-- Dark Mode -->
  <span class="hidden dark:inline-block px-1 {active ? 'bg-green-500 text-black' : 'text-green-500 bg-black group-hover:bg-green-500 group-hover:text-black group-focus:bg-green-500 group-focus:text-black'}">
    [ {label} ]
  </span>
</button>
