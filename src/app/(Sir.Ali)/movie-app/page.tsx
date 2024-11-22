"use client";

import React, { useState, useEffect } from "react";
import MovieList from "@/app/components/movie-app/MovieSection";
import Header from "@/app/components/movie-app/header";
import Banner from "@/app/components/movie-app/Banner";
<<<<<<< HEAD
import Footer from "@/app/components/movie-app/Footer";
=======
import { FaAdversal } from "react-icons/fa";
>>>>>>> 12406d1d6ef5f932c6bb473927cda36d45c506c1

const MoviePage = () => {
  const [movies, setMovies] = useState([]);
  const [popular, setPopular] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [nowPlaying, setNowPlaying] = useState([]);
  const [netflix, setNetflix] = useState([]);

  const handleSearch = async (term: string) => {
    try {
      const response = await fetch(`/api/movie?query=${term}`);
      if (!response.ok) throw new Error("Failed to fetch movies");
      const data = await response.json();
      setMovies(Array.isArray(data.results) ? data.results : []);
    } catch (error) {
      console.error("Error fetching movies:", error);
      setMovies([]);
    }
  };

  const API_BASE = "https://api.themoviedb.org/3";
  const routes = {
    popular: `${API_BASE}/movie/popular?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`,
    upcoming: `${API_BASE}/movie/upcoming?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`,
    topRated: `${API_BASE}/movie/top_rated?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`,
    nowPlaying: `${API_BASE}/movie/now_playing?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`,
    netflix: `${API_BASE}/discover/movie?with_networks=213&api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`,
  };

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const [popularRes, upcomingRes, topRatedRes, nowPlayingRes, netflixRes] = await Promise.all([
          fetch(routes.popular),
          fetch(routes.upcoming),
          fetch(routes.topRated),
          fetch(routes.nowPlaying),
          fetch(routes.netflix),
        ]);

        setPopular((await popularRes.json()).results || []);
        setUpcoming((await upcomingRes.json()).results || []);
        setTopRated((await topRatedRes.json()).results || []);
        setNowPlaying((await nowPlayingRes.json()).results || []);
        setNetflix((await netflixRes.json()).results || []);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []); // Empty dependency array to fetch on mount

  return (
    <div>
      <Header />
      <Banner />
      <div className="flex justify-between m-4">
    <h1 className="text-xl font-bold">Search Movies</h1>
        <input
          type="text"
          className="rounded-lg p-2 w-full border-2 border-black"
          placeholder="Enter a movie name"
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSearch((e.target as HTMLInputElement).value);
          }}
        />
       
      </div>

      <div className="m-4">
        {movies.length > 0 &&  <MovieList movies={movies} title="Searched Movies" />}
        <MovieList movies={popular} title="Popular Movies" />
        <MovieList movies={upcoming} title="Upcoming Movies" />
        <MovieList movies={topRated} title="Top Rated Movies" />
        <MovieList movies={nowPlaying} title="Now Playing Movies" />
        <MovieList movies={netflix} title="Netflix Movies" />
      </div>
      <Footer />
    </div>
  );
};

export default MoviePage;
