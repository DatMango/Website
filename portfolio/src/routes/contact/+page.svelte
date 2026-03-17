<script lang="ts">
  import { profile } from '$lib/data';

  let formData = $state({
    name: '',
    email: '',
    message: '',
  });
  let submitting = $state(false);
  let submitted = $state(false);

  async function handleSubmit(e: SubmitEvent) {
    e.preventDefault();
    submitting = true;
    // Formspree endpoint — replace with actual Formspree form ID
    const form = e.target as HTMLFormElement;
    const data = new FormData(form);
    try {
      const res = await fetch('https://formspree.io/f/xpwqojny', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        submitted = true;
        formData = { name: '', email: '', message: '' };
      }
    } catch {
      // fallback: mailto
    } finally {
      submitting = false;
    }
  }
</script>

<svelte:head>
  <title>Contact — Justin Leong</title>
  <meta name="description" content="Get in touch with Justin Leong" />
</svelte:head>

<div class="max-w-5xl mx-auto px-4 md:px-8 py-16">
  <!-- Page header -->
  <div class="mb-12">
    <p class="text-sm font-mono mb-2" style="color: var(--color-accent);">// let's connect</p>
    <h1 class="text-4xl font-bold mb-4" style="color: var(--color-text);">Contact</h1>
    <div class="w-16 h-1 rounded-full" style="background-color: var(--color-accent);"></div>
  </div>

  <div class="grid md:grid-cols-2 gap-12">
    <!-- Left: contact info -->
    <div class="space-y-8">
      <div>
        <h2 class="text-xl font-bold mb-3" style="color: var(--color-text);">Get in Touch</h2>
        <p class="text-base leading-relaxed" style="color: var(--color-muted);">
          I'm actively looking for new opportunities in software engineering, ML, and AI. Whether you have a question, a project idea, or just want to say hi — my inbox is always open!
        </p>
      </div>

      <div class="space-y-4">
        <a
          href="mailto:{profile.email}"
          class="flex items-center gap-4 p-4 rounded-xl no-underline transition-all hover:-translate-y-0.5"
          style="background-color: var(--color-surface); border: 1px solid var(--color-border);"
        >
          <div class="p-3 rounded-lg" style="background-color: var(--color-accent-dim);">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: var(--color-accent);"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
          </div>
          <div>
            <p class="text-xs font-mono mb-0.5" style="color: var(--color-muted);">Email</p>
            <p class="text-sm font-medium" style="color: var(--color-accent);">{profile.email}</p>
          </div>
        </a>

        <a
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-4 p-4 rounded-xl no-underline transition-all hover:-translate-y-0.5"
          style="background-color: var(--color-surface); border: 1px solid var(--color-border);"
        >
          <div class="p-3 rounded-lg" style="background-color: var(--color-accent-dim);">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style="color: var(--color-accent);"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
          </div>
          <div>
            <p class="text-xs font-mono mb-0.5" style="color: var(--color-muted);">LinkedIn</p>
            <p class="text-sm font-medium" style="color: var(--color-accent);">justin-leong-datmango</p>
          </div>
        </a>

        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-4 p-4 rounded-xl no-underline transition-all hover:-translate-y-0.5"
          style="background-color: var(--color-surface); border: 1px solid var(--color-border);"
        >
          <div class="p-3 rounded-lg" style="background-color: var(--color-accent-dim);">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style="color: var(--color-accent);"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
          </div>
          <div>
            <p class="text-xs font-mono mb-0.5" style="color: var(--color-muted);">GitHub</p>
            <p class="text-sm font-medium" style="color: var(--color-accent);">DatMango</p>
          </div>
        </a>
      </div>
    </div>

    <!-- Right: contact form -->
    <div class="p-6 rounded-xl" style="background-color: var(--color-surface); border: 1px solid var(--color-border);">
      {#if submitted}
        <div class="flex flex-col items-center justify-center h-full gap-4 py-12 text-center">
          <div class="w-16 h-16 rounded-full flex items-center justify-center" style="background-color: var(--color-accent-dim);">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: var(--color-accent);"><polyline points="20 6 9 17 4 12"/></svg>
          </div>
          <h3 class="text-xl font-bold" style="color: var(--color-text);">Message Sent!</h3>
          <p style="color: var(--color-muted);">Thanks for reaching out. I'll get back to you soon.</p>
          <button onclick={() => (submitted = false)} class="text-sm underline cursor-pointer border-0 bg-transparent" style="color: var(--color-accent);">Send another</button>
        </div>
      {:else}
        <h2 class="text-lg font-bold mb-6" style="color: var(--color-text);">Send a Message</h2>
        <form onsubmit={handleSubmit} class="space-y-4">
          <div>
            <label for="name" class="block text-sm font-medium mb-1.5" style="color: var(--color-text);">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              required
              bind:value={formData.name}
              placeholder="Your name"
              class="w-full px-4 py-2.5 rounded-lg text-sm outline-none transition-colors"
              style="background-color: var(--color-bg); border: 1px solid var(--color-border); color: var(--color-text);"
            />
          </div>
          <div>
            <label for="email" class="block text-sm font-medium mb-1.5" style="color: var(--color-text);">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              bind:value={formData.email}
              placeholder="your@email.com"
              class="w-full px-4 py-2.5 rounded-lg text-sm outline-none transition-colors"
              style="background-color: var(--color-bg); border: 1px solid var(--color-border); color: var(--color-text);"
            />
          </div>
          <div>
            <label for="message" class="block text-sm font-medium mb-1.5" style="color: var(--color-text);">Message</label>
            <textarea
              id="message"
              name="message"
              required
              rows="5"
              bind:value={formData.message}
              placeholder="What's on your mind?"
              class="w-full px-4 py-2.5 rounded-lg text-sm outline-none transition-colors resize-none"
              style="background-color: var(--color-bg); border: 1px solid var(--color-border); color: var(--color-text);"
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={submitting}
            class="w-full py-3 rounded-lg font-semibold text-sm transition-all cursor-pointer border-0 hover:opacity-90 disabled:opacity-60"
            style="background-color: var(--color-accent); color: white;"
          >
            {submitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      {/if}
    </div>
  </div>
</div>
