<script lang="ts">
  import { experience } from '$lib/data';
</script>

<svelte:head>
  <title>Experience — Justin Leong</title>
  <meta name="description" content="Justin Leong's professional experience in software engineering and ML research" />
</svelte:head>

<div class="max-w-5xl mx-auto px-4 md:px-8 py-16">
  <!-- Page header -->
  <div class="mb-12">
    <p class="text-sm font-mono mb-2" style="color: var(--color-accent);">// work history</p>
    <h1 class="text-4xl font-bold mb-4" style="color: var(--color-text);">Experience</h1>
    <div class="w-16 h-1 rounded-full" style="background-color: var(--color-accent);"></div>
  </div>

  <!-- Timeline -->
  <div class="relative">
    <!-- Vertical line -->
    <div class="absolute left-0 md:left-8 top-0 bottom-0 w-px" style="background-color: var(--color-border);"></div>

    <div class="space-y-10 ml-6 md:ml-20">
      {#each experience as exp, i}
        <div class="relative">
          <!-- Dot -->
          <div class="absolute -left-9 md:-left-14 top-5 w-4 h-4 rounded-full border-2 flex items-center justify-center" style="background-color: var(--color-bg); border-color: var(--color-accent);">
            <div class="w-2 h-2 rounded-full" style="background-color: var(--color-accent);"></div>
          </div>

          <!-- Card -->
          <div class="p-6 rounded-xl transition-shadow hover:shadow-lg" style="background-color: var(--color-surface); border: 1px solid var(--color-border); border-left: 3px solid var(--color-accent);">
            <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
              <div>
                <h2 class="text-xl font-bold" style="color: var(--color-text);">{exp.title}</h2>
                <p class="text-sm font-medium mt-0.5" style="color: var(--color-accent);">{exp.company}</p>
                <div class="flex items-center gap-3 mt-1.5 flex-wrap">
                  <span class="text-xs flex items-center gap-1" style="color: var(--color-muted);">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                    {exp.location}
                  </span>
                  {#if exp.type}
                    <span class="text-xs px-2 py-0.5 rounded-full" style="background-color: var(--color-border); color: var(--color-muted);">{exp.type}</span>
                  {/if}
                </div>
              </div>
              <span class="text-xs font-mono px-3 py-1.5 rounded-lg whitespace-nowrap" style="background-color: var(--color-accent-dim); color: var(--color-accent);">
                {exp.startDate} – {exp.endDate}
              </span>
            </div>

            <!-- Bullets -->
            <ul class="space-y-2">
              {#each exp.bullets as bullet}
                <li class="flex gap-3 text-sm leading-relaxed" style="color: var(--color-muted);">
                  <span class="mt-0.5 flex-shrink-0 font-bold" style="color: var(--color-accent);">›</span>
                  <span>{bullet}</span>
                </li>
              {/each}
            </ul>
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>
