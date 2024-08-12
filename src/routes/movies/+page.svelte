<script>
  export let data;

  const { movies } = data;
</script>

<h1>Movies :$</h1>

{#await movies}
  ..wait '-'
{:then movies}
  {#each movies as movie}
    <h1>{movie.title}</h1>
    <p>Description: {movie.overview}</p>
    <p>Vote average: {movie.vote_average}</p>
  {/each}
{:catch error}
  <p style="color: red">Something is wrong '-'</p>
{/await}
