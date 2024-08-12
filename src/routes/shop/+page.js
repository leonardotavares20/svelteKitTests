import { error } from "@sveltejs/kit";

export async function load({ fetch }) {
  async function fetchProducts() {
    try {
      const dummyFetchProducts = await fetch(
        "https://dummyjson.com/products?limit=10"
      );

      const dymmyProducts = await dummyFetchProducts.json();

      const products = dymmyProducts.products;

      console.log(products)
      return products;
    } catch (e) {
      throw new Error("Fail on fetch products");
    }
  }

  // Fazer o retorno dessa forma permite que se for preciso que a pagina faça mais de uma requisição, elas elas não entrem em cascata.
  return {
    products: fetchProducts(),
    //movies: fetchMovies(), exemplo de como deve ser caso seja mais de um fetch
  };
}
