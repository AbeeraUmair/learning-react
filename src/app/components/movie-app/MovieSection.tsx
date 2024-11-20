import React from "react";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
}

const MovieList: React.FC<{ movies: Movie[] }> = ({ movies }) => {
  if (!movies || movies.length === 0) {
    return <p>No movies found.</p>;
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {movies.map((movie) => (
        <div key={movie.id} className="border p-2">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="w-full"
          />
          <h3 className="text-lg font-semibold mt-2">{movie.title}</h3>
          <p className="text-sm text-gray-600">{movie.overview}</p>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
