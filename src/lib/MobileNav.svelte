<script lang="ts">
  export let base;
  export let current;
  export let links = [];
  
  let isClicked = false;
  let toggle = () => {
    isClicked = !isClicked;
  }
</script>

<nav>
  <ul>
    <li>
      <strong on:click={toggle}>&#9776;</strong>
    </li>
  </ul>
  
  <ul>
    <li><strong>Kiov</strong></li>
  </ul>
  
  <ul>
    <li><strong>KV</strong></li>
  </ul>
</nav>

<aside class:hidden={!isClicked}>
  <ul>
    {#each links as link}
    <li>
      <a href={base + link}
         sveltekit:prefetch
         class:contrast={current == link}
         class:secondary={current != link}
      >
        {link == "/" ? "Home" : link.slice(1).toUpperCase()}
      </a>
    </li>
    {/each}
  </ul>
</aside>