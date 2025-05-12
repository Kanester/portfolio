<script lang="ts">
  export let base;
  export let current;
  export let links = [];
</script>

<nav>
  <ul>
    <li><strong>Kiov</strong></li>
  </ul>
  
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
</nav>