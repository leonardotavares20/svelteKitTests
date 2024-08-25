import { env } from "$env/dynamic/private";

export async function load() {
  async function fetchMoviesDatabase() {
    const url =
      "https://api.themoviedb.org/3/trending/movie/day?language=en-US";
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${env.ACESS_TOKEN}`,
      },
    };

    const fetchMovies = await fetch(url, options);

    const moviesParsed = await fetchMovies.json();

    const movies = moviesParsed.results;

    return movies;
  }

  return {
    movies: fetchMoviesDatabase(),
  };
}
