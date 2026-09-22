<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import Button from './Button.svelte';

  export let title: string = '';
  export let showPrev: boolean = false;

  const dispatch = createEventDispatcher();
</script>

<div class="relative w-full max-w-2xl mx-auto">
  <!-- 
    Light Mode: bg-[#EFEBD8], dashed border, teal shadow, text-slate-800
    Dark Mode: bg-black, solid green border, no shadow, text-green-500
  -->
  <div class="
    bg-[#EFEBD8] border-2 border-dashed border-black shadow-[8px_8px_0_rgba(15,85,95,1)] text-slate-800
    dark:bg-black dark:border-green-500 dark:border dark:border-solid dark:shadow-none dark:text-green-500
    p-6 min-h-[300px] rounded-none
  ">
    {#if title}
      <!-- 
        Title breaks the top border. 
        Light Mode: text-red-600
        Dark Mode: text-green-500 bg-black
      -->
      <div class="absolute top-0 left-0 w-full flex justify-center -mt-3">
        <span class="
          bg-[#EFEBD8] text-red-600 px-2 font-bold font-vt323 text-2xl
          dark:bg-black dark:text-green-500
        ">
          {title}
        </span>
      </div>
    {/if}
    
    <div class="mt-4">
      <slot />
    </div>

    {#if showPrev}
      <div class="absolute bottom-0 left-0 w-full flex justify-center mb-[-0.75rem]">
        <span class="
          bg-[#EFEBD8] px-2 text-2xl
          dark:bg-black
        ">
          <Button label="prev" on:click={() => dispatch('prev')} />
        </span>
      </div>
    {/if}
  </div>
</div>
