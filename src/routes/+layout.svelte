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
    <a href="/portfolio">Home</a>
    <a href="blog">Blogs</a>
    <a href="projects">Projects</a>
    <a href="#contact">Contact</a>
  </nav>
  <p>Built with svelte + termux</p>
  <p>No bugs were harmed during development—only me :)</p>
</footer>