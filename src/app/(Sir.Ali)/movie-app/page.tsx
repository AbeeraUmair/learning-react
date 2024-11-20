"use client";

import React, { useState } from "react";
import MovieList from "@/app/components/movie-app/MovieSection";

const MoviePage = () => {
  const [movies, setMovies] = useState([]);

  const handleSearch = async (term: string) => {
    try {
      const response = await fetch(`/api/movie?query=${term}`);
      if (!response.ok) {
        throw new Error("Failed to fetch movies");
      }
      const data = await response.json();

      // Check and update movies if response is valid
      setMovies(Array.isArray(data.results) ? data.results : []);
    } catch (error) {
      console.error("Error fetching movies:", error);
      setMovies([]); // Fallback to an empty array
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold">Search Movies</h1>
      <input
        type="text"
        className="border p-2 w-full"
        placeholder="Enter a movie name"
        onKeyDown={(e) => {
          if (e.key === "Enter") handleSearch((e.target as HTMLInputElement).value);
        }}
      />
      <MovieList movies={movies} />
    </div>
  );
};

export default MoviePage;
