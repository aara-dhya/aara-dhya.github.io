<script lang="ts">
  import { onMount } from 'svelte';
  import { theme, currentView } from './lib/store';
  import ThemeToggle from './lib/components/ThemeToggle.svelte';
  import DialogueBox from './lib/components/DialogueBox.svelte';
  import Home from './lib/views/Home.svelte';
  import About from './lib/views/About.svelte';
  import Projects from './lib/views/Projects.svelte';
  import ProjectDetail from './lib/views/ProjectDetail.svelte';

  onMount(() => {
    // Initialize theme based on store
    if ($theme === 'dark') {
      document.documentElement.classList.add('dark');
    }
  });

  const viewTitles: Record<string, string> = {
    home: 'MAIN_MENU',
    about: 'ABOUT_ME',
    projects: 'PROJECTS',
    project_detail: 'PROJECT_DETAIL'
  };
</script>

<main class="w-screen h-screen overflow-hidden bg-blue-500 dark:bg-black transition-colors duration-0 flex items-center justify-center p-4">
  <div class="fixed top-4 left-4 z-50 font-vt323 text-xl text-white dark:text-green-500">
    aaradhya's website
  </div>
  <ThemeToggle />
  
  <DialogueBox 
    title={viewTitles[$currentView]} 
    showPrev={$currentView !== 'home'}
    on:prev={() => {
      if ($currentView === 'project_detail') {
        currentView.set('projects');
      } else {
        currentView.set('home');
      }
    }}
  >
    {#if $currentView === 'home'}
      <Home />
    {:else if $currentView === 'about'}
      <About />
    {:else if $currentView === 'projects'}
      <Projects />
    {:else if $currentView === 'project_detail'}
      <ProjectDetail />
    {/if}
  </DialogueBox>
</main>
