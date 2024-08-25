<script>
  export let data;

  const { products } = data;
</script>

<h1>Shop</h1>

{#await products}
  ..wait '-'
{:then products}
  {#each products as product}
    <h1>{product.title}</h1>
    <p>Description: {product.description}</p>
    <p>Price: {product.price}</p>
  {/each}
{:catch error}
  <p style="color: red">Something is wrong '-'</p>
{/await}
