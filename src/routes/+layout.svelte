<script lang="ts">
  import "../styles/global.scss";
  import {page} from "$app/stores";
  import {base} from "$app/paths"
  import DesktopNav from "$lib/DesktopNav.svelte";
  import MobileNav from "$lib/MobileNav.svelte";
  
  const links = ["/", "/projects"];
  $: current = $page.url.pathname.replace(/^\/portfolio/, "").replace(/\/$/, "") || "/";
</script>

<header class="container-fluid pico-background-slate-850" data-theme="dark">
  <div class="desktop-nav">
    <DesktopNav {base} {current} {links}/>
  </div>
  <div class="mobile-nav">
    <MobileNav {base} {current} {links}/>
  </div>
</header>

<main>
  <slot></slot>
</main>

<hr/>

<footer class="container-fluid pico-background-slate-850" data-theme="dark">&copy; KanesterP</footer>