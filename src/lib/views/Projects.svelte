<script lang="ts">
  import { currentView, activeProject } from '../store';
  import Button from '../components/Button.svelte';

  const projectsList = [
    { id: 'project-alpha', name: 'PROJECT_ALPHA' },
    { id: 'project-beta', name: 'PROJECT_BETA' },
    { id: 'project-gamma', name: 'PROJECT_GAMMA' }
  ];

  let activeIndex = 0;

  function selectProject(projectId: string) {
    activeProject.set(projectId);
    currentView.set('project_detail');
  }

</script>

<div class="flex flex-col h-full justify-between">
  <div>
    <h2 class="mb-4 font-bold underline">SELECT_PROJECT</h2>
    <div class="flex flex-col items-start space-y-4">
      {#each projectsList as project, i}
        <div class="flex items-center">
          {#if activeIndex === i}
            <span class="mr-2 text-red-600 dark:text-green-500 font-bold">&gt;</span>
          {:else}
            <span class="mr-2 opacity-0">&gt;</span>
          {/if}
          <Button 
            label={project.name} 
            active={activeIndex === i}
            on:click={() => {
              activeIndex = i;
              selectProject(project.id);
            }}
            on:mouseenter={() => activeIndex = i}
          />
        </div>
      {/each}
    </div>
  </div>
</div>
