<script lang="ts">
  import { theme } from '../store';
  import Button from './Button.svelte';
  
  function toggleTheme() {
    theme.update(current => {
      const newTheme = current === 'dark' ? 'light' : 'dark';
      
      // Update DOM
      if (newTheme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      
      return newTheme;
    });
  }
</script>

<div class="fixed top-4 right-4 z-50 font-vt323 text-xl">
  <Button label={$theme === 'dark' ? 'LIGHT_MODE' : 'DARK_MODE'} on:click={toggleTheme} />
</div>
