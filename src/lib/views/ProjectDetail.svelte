<script lang="ts">
  import { activeProject } from '../store';

  const projectData: Record<string, { name: string, desc: string, github: string }> = {
    'project-alpha': {
      name: 'PROJECT_ALPHA',
      desc: 'A TUI-BASED SYSTEM MONITOR WRITTEN IN RUST. MONITORS CPU, MEMORY, AND NETWORK TRAFFIC WITH ZERO OVERHEAD.',
      github: 'https://github.com/#'
    },
    'project-beta': {
      name: 'PROJECT_BETA',
      desc: 'RETRO WEB COMPONENTS LIBRARY. BRINGS THE GLORY OF 90S COMPUTING TO MODERN WEB APPLICATIONS.',
      github: 'https://github.com/#'
    },
    'project-gamma': {
      name: 'PROJECT_GAMMA',
      desc: 'DECENTRALIZED CHAT PROTOCOL INSPIRED BY IRC. FULLY ENCRYPTED AND RUNS IN THE TERMINAL.',
      github: 'https://github.com/#'
    }
  };

  $: project = $activeProject ? projectData[$activeProject] : null;

</script>

{#if project}
  <div class="flex flex-col h-full justify-between">
    <div>
      <h2 class="mb-6 text-xl">
        <a 
          href={project.github} 
          target="_blank" 
          rel="noopener noreferrer"
          class="underline font-bold hover:bg-red-600 hover:text-white dark:hover:bg-green-500 dark:hover:text-black px-1"
        >
          {project.name}
        </a>
      </h2>
      <p class="whitespace-pre-line leading-relaxed">
        {project.desc}<span class="cursor-blink"></span>
      </p>
    </div>
    
  </div>
{:else}
  <div>
    <p>ERROR: NO PROJECT SELECTED.</p>
  </div>
{/if}
