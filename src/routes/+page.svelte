<script>
  import { page } from "$app/stores";
</script>

{#if $page.data.user}
  <p>Hello {$page.data.user}</p>
{/if}
