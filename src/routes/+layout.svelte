<script lang="ts">
  import "../styles/global.scss";
  import DesktopNav from "$lib/DesktopNav.svelte";
  import MobileNav from "$lib/MobileNav.svelte";
</script>

<header class="container-fluid" data-theme="dark">
  <div class="desktop-nav">
    <DesktopNav/>
  </div>
  <div class="mobile-nav">
    <MobileNav/>
  </div>
</header>

<main>
  <slot></slot>
</main>

<footer class="container-fluid" data-theme="dark">
  <p>&copy; 2025 Made by Kiö. All rights reserved.</p>
  
  <p>Links</p>
  <a class="contrast" href="/portfolio">Home</a>
  <a class="contrast" href="blog">Blog</a>
  <a class="contrast" href="projects">Projects</a>
  <a class="contrast" href="/portfolio/#about">About Me</a>
  <a class="contrast" href="/portfolio/#contact">Contact</a>
  <hgroup>
    <p>Built with svelte + termux</p>
    <p>No bugs were harmed during development—only me &#x25C9;&#x2060;&#x203F;&#x2060;&#x25C9;</p>
  </hgroup>
</footer>