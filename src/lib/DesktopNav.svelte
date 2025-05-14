<script lang="ts">
  import Links from "./Links.svelte"
  export let style:string;
</script>

<nav class={style}>
  <ul>
    <li><strong style="font-family: 'Sarina', cursive;">Kiov</strong></li>
  </ul>
  
  <Links />
</nav>