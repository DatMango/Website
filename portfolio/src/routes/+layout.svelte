<script lang="ts">
  import '../app.css';
  import { base } from '$app/paths';
  import { page } from '$app/stores';
  import { profile } from '$lib/data';

  let { children } = $props();

  let theme = $state('dark');
  let menuOpen = $state(false);

  function toggleTheme() {
    theme = theme === 'dark' ? 'light' : 'dark';
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('data-theme', theme);
    }
  }

  function toggleMenu() {
    menuOpen = !menuOpen;
  }

  const navLinks = [
    { href: `${base}/about`, label: 'About' },
    { href: `${base}/experience`, label: 'Experience' },
    { href: `${base}/projects`, label: 'Projects' },
    { href: `${base}/contact`, label: 'Contact' },
  ];

  function isActive(href: string) {
    return $page.url.pathname === href || $page.url.pathname === href + '/';
  }
</script>

<svelte:head>
  <meta name="description" content="Justin Leong — Software Engineer & ML Developer" />
  <meta property="og:title" content="Justin Leong" />
  <meta property="og:description" content="Software Developer | Machine Learning | UC Irvine" />
  <meta property="og:image" content="{base}/images/profile.jpg" />
</svelte:head>

<!-- Navigation -->
<header class="sticky top-0 z-50" style="background-color: var(--color-surface); border-bottom: 1px solid var(--color-border); backdrop-filter: blur(8px);">
  <nav class="max-w-5xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
    <!-- Logo -->
    <a href="{base}/" class="font-bold text-lg no-underline" style="color: var(--color-text);">
      <span style="color: var(--color-accent);">&lt;</span>Justin Leong<span style="color: var(--color-accent);">/&gt;</span>
    </a>

    <!-- Desktop nav -->
    <div class="hidden md:flex items-center gap-8">
      {#each navLinks as link}
        <a
          href={link.href}
          class="text-sm font-medium transition-colors no-underline pb-0.5"
          style="color: {isActive(link.href) ? 'var(--color-accent)' : 'var(--color-muted)'}; border-bottom: {isActive(link.href) ? '2px solid var(--color-accent)' : '2px solid transparent'};"
        >
          {link.label}
        </a>
      {/each}
      <button
        onclick={toggleTheme}
        aria-label="Toggle theme"
        class="p-2 rounded-md transition-colors cursor-pointer border-0"
        style="background: transparent; color: var(--color-muted);"
      >
        {#if theme === 'dark'}
          <!-- Sun icon -->
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
        {:else}
          <!-- Moon icon -->
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
        {/if}
      </button>
    </div>

    <!-- Mobile hamburger -->
    <button
      class="md:hidden p-2 rounded-md cursor-pointer border-0"
      style="background: transparent; color: var(--color-muted);"
      onclick={toggleMenu}
      aria-label="Toggle menu"
    >
      {#if menuOpen}
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      {:else}
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
      {/if}
    </button>
  </nav>

  <!-- Mobile menu -->
  {#if menuOpen}
    <div class="md:hidden px-4 pb-4 flex flex-col gap-4" style="background-color: var(--color-surface); border-bottom: 1px solid var(--color-border);">
      {#each navLinks as link}
        <a
          href={link.href}
          onclick={() => (menuOpen = false)}
          class="text-sm font-medium py-2 no-underline"
          style="color: {isActive(link.href) ? 'var(--color-accent)' : 'var(--color-text)'};"
        >
          {link.label}
        </a>
      {/each}
      <button
        onclick={toggleTheme}
        class="text-sm font-medium py-2 text-left cursor-pointer border-0"
        style="background: transparent; color: var(--color-muted);"
      >
        {theme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode'}
      </button>
    </div>
  {/if}
</header>

<main>
  {@render children()}
</main>

<!-- Footer -->
<footer class="mt-16 py-8" style="background-color: var(--color-surface); border-top: 1px solid var(--color-border);">
  <div class="max-w-5xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
    <p class="text-sm" style="color: var(--color-muted);">
      © {new Date().getFullYear()} Justin Leong. Built with SvelteKit.
    </p>
    <div class="flex items-center gap-6">
      <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" class="text-sm no-underline transition-colors" style="color: var(--color-muted);" aria-label="LinkedIn">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
      </a>
      <a href={profile.github} target="_blank" rel="noopener noreferrer" class="text-sm no-underline transition-colors" style="color: var(--color-muted);" aria-label="GitHub">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
      </a>
      <a href="mailto:{profile.email}" class="text-sm no-underline transition-colors" style="color: var(--color-muted);" aria-label="Email">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
      </a>
    </div>
  </div>
</footer>
