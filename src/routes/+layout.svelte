<script lang="ts">
  import "../styles/global.scss";
  import {page} from "$app/stores";
  
  const links = ["/", "/about", "/projects", "/contact"];
  $: current = $page.url.pathname.replace(/^\/portfolio/, "") || "/";
</script>

<header class="container-fluid">
  <nav>
    <li class="secondary">hhello</li>
    <li class="contrast">hehehe</li>
    <li class="underline">Under</li>
    <ul>
      <li><strong>Kiov</strong></li>
    </ul>
    <ul>
      {#each links as link}
      <li class="{current == link ? 'contrast' : 'secondary'}">
        <a href="{link}">{link == "/" ? "Home" : link.slice(1).toUpperCase()}</a>
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