<script lang="ts">
  import { projects } from '$lib/data';
</script>

<svelte:head>
  <title>Projects — Justin Leong</title>
  <meta name="description" content="Justin Leong's software and hardware engineering projects" />
</svelte:head>

<div class="max-w-5xl mx-auto px-4 md:px-8 py-16">
  <!-- Page header -->
  <div class="mb-12">
    <p class="text-sm font-mono mb-2" style="color: var(--color-accent);">// what I've built</p>
    <h1 class="text-4xl font-bold mb-4" style="color: var(--color-text);">Projects</h1>
    <div class="w-16 h-1 rounded-full" style="background-color: var(--color-accent);"></div>
  </div>

  <!-- Project cards grid -->
  <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
    {#each projects as project}
      <article class="flex flex-col rounded-xl overflow-hidden transition-all hover:-translate-y-1 hover:shadow-xl" style="background-color: var(--color-surface); border: 1px solid var(--color-border);">
        <!-- Card header -->
        <div class="p-5 border-b" style="border-color: var(--color-border);">
          <div class="flex items-start justify-between gap-3 mb-3">
            <div class="p-2 rounded-lg" style="background-color: var(--color-accent-dim);">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: var(--color-accent);"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
            </div>
            {#if project.githubUrl}
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="View source on GitHub" class="no-underline transition-colors hover:opacity-70" style="color: var(--color-muted);">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
              </a>
            {/if}
          </div>
          <h2 class="text-lg font-bold mb-1" style="color: var(--color-text);">{project.name}</h2>
          <p class="text-xs" style="color: var(--color-muted);">{project.startDate} – {project.endDate}</p>
        </div>

        <!-- Card body -->
        <div class="p-5 flex-1 flex flex-col gap-4">
          <p class="text-sm leading-relaxed" style="color: var(--color-muted);">{project.description}</p>

          <!-- Bullets -->
          <ul class="space-y-2 flex-1">
            {#each project.bullets as bullet}
              <li class="flex gap-2 text-xs leading-relaxed" style="color: var(--color-muted);">
                <span class="flex-shrink-0 font-bold mt-0.5" style="color: var(--color-accent);">›</span>
                <span>{bullet}</span>
              </li>
            {/each}
          </ul>

          <!-- Tech stack badges -->
          <div class="flex flex-wrap gap-1.5 pt-2" style="border-top: 1px solid var(--color-border);">
            {#each project.techStack as tech}
              <span class="px-2 py-0.5 rounded-full text-xs font-mono font-medium" style="background-color: var(--color-accent-dim); color: var(--color-accent);">
                {tech}
              </span>
            {/each}
          </div>
        </div>
      </article>
    {/each}
  </div>
</div>
