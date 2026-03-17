<script lang="ts">
  import { base } from '$app/paths';
  import { profile, education, skills } from '$lib/data';
</script>

<svelte:head>
  <title>About — Justin Leong</title>
  <meta name="description" content="About Justin Leong — Software Engineer, ML Developer, UC Irvine Master's Student" />
</svelte:head>

<div class="max-w-5xl mx-auto px-4 md:px-8 py-16">
  <!-- Page header -->
  <div class="mb-12">
    <p class="text-sm font-mono mb-2" style="color: var(--color-accent);">// about me</p>
    <h1 class="text-4xl font-bold mb-4" style="color: var(--color-text);">About</h1>
    <div class="w-16 h-1 rounded-full" style="background-color: var(--color-accent);"></div>
  </div>

  <div class="grid md:grid-cols-3 gap-12">
    <!-- Left: photo & contact -->
    <div class="md:col-span-1 flex flex-col items-center md:items-start gap-6">
      <div class="w-48 h-48 rounded-2xl overflow-hidden" style="border: 2px solid var(--color-border);">
        <img src="{base}/images/profile.jpg" alt="Justin Leong" width="192" height="192" class="w-full h-full object-cover" />
      </div>

      <!-- Open to work -->
      {#if profile.openToWork}
        <div class="w-full p-4 rounded-lg" style="background-color: var(--color-accent-dim); border: 1px solid var(--color-accent);">
          <div class="flex items-center gap-2 mb-2">
            <span class="w-2 h-2 rounded-full bg-green-400 animate-pulse inline-block"></span>
            <span class="font-semibold text-sm" style="color: var(--color-accent);">Open to Work</span>
          </div>
          <p class="text-xs" style="color: var(--color-muted);">Seeking roles in:</p>
          <ul class="mt-1 space-y-1">
            {#each profile.openToWorkRoles as role}
              <li class="text-xs" style="color: var(--color-text);">• {role}</li>
            {/each}
          </ul>
        </div>
      {/if}

      <!-- Contact info -->
      <div class="w-full space-y-3">
        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" class="flex items-center gap-3 no-underline group" style="color: var(--color-muted);">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
          <span class="text-sm group-hover:underline" style="color: var(--color-accent);">LinkedIn</span>
        </a>
        <a href={profile.github} target="_blank" rel="noopener noreferrer" class="flex items-center gap-3 no-underline group" style="color: var(--color-muted);">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
          <span class="text-sm group-hover:underline" style="color: var(--color-accent);">GitHub / DatMango</span>
        </a>
        <a href="mailto:{profile.email}" class="flex items-center gap-3 no-underline group" style="color: var(--color-muted);">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
          <span class="text-sm group-hover:underline truncate" style="color: var(--color-accent);">{profile.email}</span>
        </a>
      </div>
    </div>

    <!-- Right: bio + education -->
    <div class="md:col-span-2 space-y-10">
      <!-- Bio -->
      <div>
        <h2 class="text-2xl font-bold mb-4" style="color: var(--color-text);">Bio</h2>
        <p class="text-base leading-relaxed" style="color: var(--color-muted);">
          {profile.summary}
        </p>
        <p class="text-base leading-relaxed mt-4" style="color: var(--color-muted);">
          I'm currently pursuing a Master of Engineering in EECS at UC Irvine with a specialization in Machine Learning, 
          while simultaneously leading a capstone project sponsored by Advantest that applies data pipeline engineering 
          and AI to semiconductor manufacturing analytics.
        </p>
        <p class="text-base leading-relaxed mt-4" style="color: var(--color-muted);">
          Previously at UIUC, I earned my B.S. in Computer Engineering with honors and contributed to Illini EV Concept, 
          where I built full-stack tooling for an electric vehicle team. I'm passionate about problems where low-level 
          hardware understanding meets high-level ML and data systems.
        </p>
      </div>

      <!-- Education -->
      <div>
        <h2 class="text-2xl font-bold mb-6" style="color: var(--color-text);">Education</h2>
        <div class="space-y-6">
          {#each education as edu}
            <div class="p-5 rounded-xl" style="background-color: var(--color-surface); border: 1px solid var(--color-border);">
              <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                <div>
                  <h3 class="font-semibold text-lg" style="color: var(--color-text);">{edu.institution}</h3>
                  <p class="text-sm font-medium" style="color: var(--color-accent);">{edu.degree} in {edu.field}</p>
                </div>
                <span class="text-xs font-mono px-2 py-1 rounded whitespace-nowrap" style="background-color: var(--color-accent-dim); color: var(--color-accent);">
                  {edu.startYear} – {edu.endYear}
                </span>
              </div>
              {#if edu.coursework && edu.coursework.length > 0}
                <div class="mt-3">
                  <p class="text-xs font-mono mb-2" style="color: var(--color-muted);">Relevant Coursework:</p>
                  <div class="flex flex-wrap gap-2">
                    {#each edu.coursework as course}
                      <span class="text-xs px-2 py-0.5 rounded-full" style="background-color: var(--color-border); color: var(--color-text);">{course}</span>
                    {/each}
                  </div>
                </div>
              {/if}
            </div>
          {/each}
        </div>
      </div>

      <!-- Skills -->
      <div>
        <h2 class="text-2xl font-bold mb-6" style="color: var(--color-text);">Technical Skills</h2>
        <div class="space-y-5">
          {#each Object.entries(skills) as [category, items]}
            <div>
              <h3 class="text-xs font-mono font-semibold mb-3 uppercase tracking-wider" style="color: var(--color-muted);">
                {category === 'ml' ? 'ML / AI Libraries' : category.charAt(0).toUpperCase() + category.slice(1)}
              </h3>
              <div class="flex flex-wrap gap-2">
                {#each items as skill}
                  <span class="px-3 py-1 rounded-full text-xs font-medium" style="background-color: var(--color-accent-dim); color: var(--color-accent);">
                    {skill}
                  </span>
                {/each}
              </div>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </div>
</div>
