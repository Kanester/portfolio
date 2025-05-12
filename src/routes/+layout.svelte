<script lang="ts">
  import "../styles/global.scss";
  import {page} from "$app/stores";
  import {base} from "$app/paths"
  
  const links = ["/", "/about", "/projects", "/contact"];
  $: current = $page.url.pathname.replace(/^\/portfolio/, "").replace(/\/$/, "") || "/";
  
  let isClicked = false;
  let clicked = () => {
    isClicked = !isClicked;
  };
</script>

<header class="container-fluid">
  <nav class="desktop">
    <ul>
      <li><strong>Kiov</strong></li>
    </ul>
    <ul>
      {#each links as link}
      <li>
        <a href={base + link} sveltekit:prefetch class:contrast={current == link} class:secondary={current != link}>{link == "/" ? "Home" : link.slice(1).toUpperCase()}</a>
      </li>
      {/each}
    </ul>
  </nav>

  <nav class="phone">
    <ul>
      <li><a role="button" on:click={clicked} aria-label="Toggle menu">&#9776;</a></li>
    </ul>
    
    <aside style:hidden={!isClicked}>
    <ul>
      {#each links as link}
      <li>
        <a class:contrast={current == link} class:secondary={current != link} href={base + link} sveltekit:prefetch>{link == "/" ? "Home" : link.slice(1).toUpperCase()}</a>
      </li>
      {/each}
    </ul>
    </aside>
    
    <ul>
      <li><strong>Kiov</strong></li>
    </ul>
    
    <ul>
      <li><strong>KV</strong></li>
    </ul>
  </nav>
</header>

<main class="container-fluid">
  <slot></slot>
</main>

<footer class="container-fluid">&copy; KanesterP</footer>

<style lang="scss">
  .desktop {
    display: none;
  }
  
  .hidden {
    display: none;
  }
</style>