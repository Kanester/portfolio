<script lang="ts">
  import Links from "./Links.svelte"
  
  let isClicked = false;
  let toggle = () => {
    isClicked = !isClicked;
  }
</script>

<div class="container-fluid mobile-nav">
  <nav>
    <ul>
      <li>
        <strong 
          on:click={toggle}
          aria-label="Toggle navigation">&#9776;</strong>
      </li>
    </ul>
    
    <ul>
      <li><strong style='font-family: "Georgia", "Times New Roman", serif;'>Kiov</strong></li>
    </ul>
    
    <ul>
      <li><strong style="font-family: 'Sarina', cursive">KV</strong></li>
    </ul>
  </nav>
  
  {#if isClicked}
  <aside>
    <Links />
  </aside>
  {/if}
</div>