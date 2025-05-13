<script lang="ts">
  import Links from "./Links.svelte"
  
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
  <Links />
</aside>
{/if}