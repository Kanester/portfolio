<script lang="ts">
  import "../styles/global.scss";
  import DesktopNav from "$lib/DesktopNav.svelte";
  import MobileNav from "$lib/MobileNav.svelte";
  import Links from "$lib/Links.svelte";
</script>

<header data-theme="dark">
  <DesktopNav/>
  <MobileNav/>
</header>

<main>
  <slot></slot>
</main>

<footer class="container-fluid" data-theme="dark">
  <p>&copy; 2025 Made by Kanester(KnxTr). All rights reserved.</p>
  <p>Links</p>
  <Links />
  <p>Built with svelte + termux</p>
  <p>No bugs were harmed during development—only me &#x25C9;&#x2060;&#x203F;&#x2060;&#x25C9;</p>
</footer>