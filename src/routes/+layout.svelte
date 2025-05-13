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
  <nav>
    <ul>
      <li><a href="/portfolio" class="contrast">Home</a></li>
      <li><a href="blog" class="contrast">Blog</a></li>
      <li><a href="projects" class="contrast">Projects</a></li>
      <li><a href="#contact" class="contrast">Contact</a></li>
    </ul>
  </nav>
  <hgroup>
    <p>Built with svelte + termux</p>
    <p>No bugs were harmed during development—only me &#x25C9;&#x2060;&#x203F;&#x2060;&#x25C9;</p>
  </hgroup>
</footer>