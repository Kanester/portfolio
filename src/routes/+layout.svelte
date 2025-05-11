<script lang="ts">
  import "../styles/global.scss";
  import {page} from "$app/stores";
  
  const links = ["home", "about", "projects", "contact"];
  $: current = $page.url.pathname;
</script>

<header class="container-fluid">
  <nav>
    <ul>
      <li><strong>Kiov</strong></li>
    </ul>
    <ul>
      {#each links in link}
      <li class="{current == `/${link}` ? 'contrast' : 'secondary'}">
      <a href="/{link}">{link.toUpperCase()}</a>
      {/each}
    </ul>
  </nav>
</header>

<main class="container-fluid">
  <slot></slot>
</main>

<footer class="container-fluid">&copy; KanesterP</footer>