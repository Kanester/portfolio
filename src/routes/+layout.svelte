<script lang="ts">
  import "../styles/global.scss";
  import {page} from "$app/stores";
  
  const links = ["/", "/about", "/projects", "/contact"];
  $: current = $page.url.pathname.replace(/^\/portfolio/, "").replace(/\/$/, "") || "/";
</script>

<header class="container-fluid">
  <nav>
    <ul>
      <li><strong>Kiov</strong></li>
    </ul>
    <ul>
      {#each links as link}
      <li class="{current == link ? 'contrast' : 'secondary'}">
        <a href="{link}" sveltekit:prefetch>{link == "/" ? "Home" : link.slice(1).toUpperCase()}</a>
        <div>{current == link ? "yes":"no"}</div>
        <div>{current} {link}</div>
      </li>
      {/each}
    </ul>
  </nav>
</header>

<main class="container-fluid">
  <h1>{current}</h1>
  <slot></slot>
</main>

<footer class="container-fluid">&copy; KanesterP</footer>