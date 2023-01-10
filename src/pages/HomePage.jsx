import React from "react";
import { useLoaderData } from "react-router-dom";
import { Card } from "../components";
import { discoverMovies } from "../services/Api";

function HomePage() {
  const discoverMoviesData = useLoaderData();
  return (
    <div>
      {discoverMoviesData.results.map((elem) => (
      <Card elem={elem} />
      ))}
    </div>
  );
}

export default HomePage;

export function discoverMoviesLoader() {
  return discoverMovies();
}
