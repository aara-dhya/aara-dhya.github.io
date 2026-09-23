<script lang="ts">
  import { currentView } from '../store';
  import Button from '../components/Button.svelte';

  const menuItems = [
    { id: 'about', label: 'about me', type: 'view' },
    { id: 'projects', label: 'projects', type: 'view' },
    { id: 'github', label: 'github', type: 'link', url: 'https://github.com/aara-dhya' },
    { id: 'linkedin', label: 'linkedin', type: 'link', url: 'https://linkedin.com/in/#' },
    { id: 'resume', label: 'resume', type: 'link', url: '/resume.pdf' }
  ];

  let activeIndex = 0;

  function handleSelect(item: typeof menuItems[0]) {
    if (item.type === 'view') {
      currentView.set(item.id as any);
    } else if (item.type === 'link') {
      window.open(item.url, '_blank');
    }
  }
</script>

<div class="flex flex-col items-start space-y-4">
  {#each menuItems as item, i}
    <div class="flex items-center">
      {#if activeIndex === i}
        <span class="mr-2 text-red-600 dark:text-green-500 font-bold">&gt;</span>
      {:else}
        <span class="mr-2 opacity-0">&gt;</span>
      {/if}
      <Button 
        label={item.label} 
        active={activeIndex === i}
        on:click={() => {
          activeIndex = i;
          handleSelect(item);
        }}
        on:mouseenter={() => activeIndex = i}
      />
    </div>
  {/each}
</div>
