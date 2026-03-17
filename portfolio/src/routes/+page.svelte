<script lang="ts">
  import { base } from '$app/paths';
  import { profile, skills } from '$lib/data';
</script>

<svelte:head>
  <title>Justin Leong — Software Engineer & ML Developer</title>
</svelte:head>

<!-- Hero Section -->
<section class="relative min-h-screen flex items-center justify-center overflow-hidden px-4 md:px-8">
  <!-- Animated gradient background -->
  <div class="absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
    <div class="hero-blob"></div>
    <div class="hero-blob hero-blob-2"></div>
  </div>

  <div class="max-w-5xl mx-auto w-full py-24 flex flex-col md:flex-row items-center gap-12">
    <!-- Text Content -->
    <div class="flex-1 text-center md:text-left">
      <!-- Open to work badge -->
      {#if profile.openToWork}
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-6" style="background-color: var(--color-accent-dim); color: var(--color-accent); border: 1px solid var(--color-accent);">
          <span class="w-2 h-2 rounded-full bg-green-400 animate-pulse inline-block"></span>
          Open to Work
        </div>
      {/if}

      <h1 class="text-5xl md:text-6xl font-bold mb-4 leading-tight" style="color: var(--color-text);">
        Hi, I'm <span style="color: var(--color-accent);">Justin</span>
      </h1>

      <p class="text-xl md:text-2xl font-medium mb-3" style="color: var(--color-text);">
        Software Developer & ML Engineer
      </p>

      <p class="text-base mb-8 max-w-lg mx-auto md:mx-0" style="color: var(--color-muted);">
        {profile.summary}
      </p>

      <!-- Skill pills preview -->
      <div class="flex flex-wrap gap-2 mb-8 justify-center md:justify-start">
        {#each ['Python', 'PyTorch', 'C/C++', 'TensorFlow', 'Machine Learning'] as skill}
          <span class="px-3 py-1 rounded-full text-xs font-medium font-mono" style="background-color: var(--color-accent-dim); color: var(--color-accent);">
            {skill}
          </span>
        {/each}
      </div>

      <!-- CTAs -->
      <div class="flex flex-wrap gap-4 justify-center md:justify-start">
        <a
          href="{base}/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm transition-all no-underline hover:opacity-90 hover:-translate-y-0.5"
          style="background-color: var(--color-accent); color: white;"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
          Download Resume
        </a>
        <a
          href="{base}/contact"
          class="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm transition-all no-underline hover:-translate-y-0.5"
          style="border: 2px solid var(--color-accent); color: var(--color-accent); background: transparent;"
        >
          Get in Touch
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
        </a>
      </div>

      <!-- Social links -->
      <div class="flex items-center gap-4 mt-8 justify-center md:justify-start">
        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" class="no-underline transition-colors hover:opacity-80" style="color: var(--color-muted);" aria-label="LinkedIn">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
        </a>
        <a href={profile.github} target="_blank" rel="noopener noreferrer" class="no-underline transition-colors hover:opacity-80" style="color: var(--color-muted);" aria-label="GitHub">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
        </a>
        <a href="mailto:{profile.email}" class="no-underline transition-colors hover:opacity-80" style="color: var(--color-muted);" aria-label="Email">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
        </a>
      </div>
    </div>

    <!-- Profile Photo -->
    <div class="flex-shrink-0 flex flex-col items-center gap-4">
      <div class="relative">
        <div class="w-52 h-52 md:w-64 md:h-64 rounded-full overflow-hidden" style="border: 3px solid var(--color-accent); box-shadow: 0 0 40px color-mix(in srgb, var(--color-accent) 30%, transparent);">
          <img
            src="{base}/images/profile.jpg"
            alt="Justin Leong"
            width="256"
            height="256"
            class="w-full h-full object-cover"
          />
        </div>
      </div>
      <p class="text-sm" style="color: var(--color-muted);">
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="inline-block mr-1"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
        {profile.location}
      </p>
    </div>
  </div>

  <!-- Scroll indicator -->
  <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" aria-hidden="true">
    <span class="text-xs" style="color: var(--color-muted);">Scroll</span>
    <div class="w-px h-8 animate-bounce" style="background: var(--color-muted);"></div>
  </div>
</section>

<!-- Quick Stats Section -->
<section class="py-16 px-4 md:px-8" style="background-color: var(--color-surface); border-top: 1px solid var(--color-border); border-bottom: 1px solid var(--color-border);">
  <div class="max-w-5xl mx-auto">
    <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
      <div>
        <div class="text-4xl font-bold mb-1" style="color: var(--color-accent);">2+</div>
        <div class="text-sm" style="color: var(--color-muted);">Years Experience</div>
      </div>
      <div>
        <div class="text-4xl font-bold mb-1" style="color: var(--color-accent);">3+</div>
        <div class="text-sm" style="color: var(--color-muted);">Projects Built</div>
      </div>
      <div>
        <div class="text-4xl font-bold mb-1" style="color: var(--color-accent);">10+</div>
        <div class="text-sm" style="color: var(--color-muted);">Technologies</div>
      </div>
      <div>
        <div class="text-4xl font-bold mb-1" style="color: var(--color-accent);">M.Eng</div>
        <div class="text-sm" style="color: var(--color-muted);">UC Irvine (in progress)</div>
      </div>
    </div>
  </div>
</section>

<style>
  .hero-blob {
    position: absolute;
    width: 600px;
    height: 600px;
    border-radius: 50%;
    background: radial-gradient(circle, color-mix(in srgb, var(--color-accent) 15%, transparent) 0%, transparent 70%);
    top: -200px;
    right: -200px;
    animation: blob-drift 8s ease-in-out infinite;
  }

  .hero-blob-2 {
    width: 400px;
    height: 400px;
    top: auto;
    bottom: -100px;
    left: -150px;
    animation-delay: -4s;
    animation-duration: 10s;
  }

  @keyframes blob-drift {
    0%, 100% { transform: translate(0, 0) scale(1); }
    50% { transform: translate(30px, -20px) scale(1.05); }
  }

  @media (prefers-reduced-motion: reduce) {
    .hero-blob { animation: none; }
  }
</style>
