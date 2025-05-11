<script lang="ts">
  import "../styles/global.scss"
</script>

<header class="container-fluid">
  <nav>
    <ul>
      <li><strong>Kiov</strong></li>
    </ul>
    <ul>
      <li><a href="/" class="contrast">Home</a></li>
      <li><a href="/about" class="outline">About</a></li>
      <li><a href="/projects" class="secondary">Projects</a></li>
      <li><a href="/contact">Contact</a></li>
    </ul>
  </nav>
</header>

<main class="container-fluid">
  <slot></slot>
</main>

<footer class="container-fluid">&copy; KanesterP</footer>