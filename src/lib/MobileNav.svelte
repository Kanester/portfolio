<script lang="ts">
  import {page} from "$app/stores";
  import {base} from "$app/paths";

  const links = ["/", "/blog","/projects", "#about","#contact"];
  $: current = $page.url.pathname.replace(/^\/portfolio/, "").replace(/\/$/, "") || "/";
  
  let isClicked = false;
  let toggle = () => {
    isClicked = !isClicked;
  }
</script>

<nav>
  <ul>
    <li>
      <strong 
        on:click={toggle}
        aria-label="Toggle navigation">&#9776;</strong>
    </li>
  </ul>
  
  <ul>
    <li><strong>Kiov</strong></li>
  </ul>
  
  <ul>
    <li><strong>KV</strong></li>
  </ul>
</nav>

{#if isClicked}
<aside>
  <ul>
  {#each links as link}
    <li>
      <a
      href={base + link}
      sveltekit:prefetch
      class:contrast={current === link}
      class:secondary={current !== link}
      aria-current={current === link ? "page" : undefined}>{link === "/" ? "Home" : link.slice(1).toUpperCase()}</a>
    </li>
    {/each}
  </ul>
</aside>
{/if}