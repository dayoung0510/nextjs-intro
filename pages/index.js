import React, { useState, useEffect } from "react";
import Seo from "../components/Seo";

const API_KEY = "a2428d69c5d6a06cf62f1c5b228a91aa";

export default function Home() {
  const [movies, setMovies] = useState();

  useEffect(() => {
    async () => {
      const { results } = await (
        await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
        )
      ).json();
      setMovies(results);
    };
  }, []);

  console.log(movies);
  return (
    <div>
      <Seo title="Home" />
      {!movies && <h4>loading...</h4>}
      {movies?.map((movie) => (
        <div key={movie.id}>
          <h1>{movie.original_title}</h1>
        </div>
      ))}
    </div>
  );
}
