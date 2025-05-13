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

<hr/>

<main>
  <slot></slot>
</main>

<footer class="container-fluid" data-theme="dark">
  <h5>&copy; KanesterP</h5>
</footer>