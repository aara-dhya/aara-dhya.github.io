<script lang="ts">
  import { activeProject } from '../store';

  const projectData: Record<string, { name: string, desc: string, github: string }> = {
    'project-alpha': {
      name: 'Nexus',
      desc: 'An enterprise security enclave that replaces traditional passwords with cryptographic Web3 authentication, automated wallet provisioning, and strict role-based access control.',
      github: 'nexusvix.vercel.app'
    },
    'project-beta': {
      name: 'QuantShell',
      desc: 'A high-frequency trading simulation engine featuring a custom terminal-style UI, live market data streaming, and predictive machine learning pipelines.',
      github: 'quantshell.vercel.app'
    },
    'project-gamma': {
      name: 'Enterprise RAG Pipeline',
      desc: 'A privacy-first, fully localized AI chatbot platform powered by a distributed Go microservice architecture and a real-time SvelteKit frontend.',
      github: 'github.com/aara-dhya/enterprise-rag-pipeline'
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
