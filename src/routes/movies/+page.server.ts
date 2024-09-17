import { env } from "$env/dynamic/private";
import type { PageServerLoad } from "./$types";

type Movie = {
  title: string;
  overview: string;
  vote_average: number;
};

export const load: PageServerLoad = async () => {
  async function fetchMoviesDatabase(): Promise<Movie[]> {
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
};
