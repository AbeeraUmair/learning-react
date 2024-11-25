import Image from "next/image";
import React, { useState } from "react";
import { MdOutlineArrowLeft, MdOutlineArrowRight } from "react-icons/md";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
}

interface MovieSectionProps {
  title: string;
  movies: Movie[];
}

const MovieSection: React.FC<MovieSectionProps> = ({ title, movies }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const ITEMS_PER_PAGE = 5; // Show 5 movies at a time

  // Determine visible movies
  const visibleMovies = movies.slice(
    currentIndex,
    currentIndex + ITEMS_PER_PAGE
  );

  // Handlers for navigation
  const handleNext = () => {
    if (currentIndex + ITEMS_PER_PAGE < movies.length) {
      setCurrentIndex((prev) => prev + ITEMS_PER_PAGE);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - ITEMS_PER_PAGE);
    }
  };

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className="relative">
        {/* Movie carousel */}
        <div className="flex overflow-hidden">
          {visibleMovies.map((movie) => (
            <div
              key={movie.id}
              className="w-1/5 p-2 flex-shrink-0" // 1/5 for 5 items per page
            >
              <Image
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                width={200}
                height={300}
                className="rounded-lg"
              />
              <h3 className="text-center text-lg mt-2">{movie.title}</h3>
            </div>
          ))}
        </div>

        {/* Navigation buttons */}
        <button
          className="absolute top-1/2 left-0 transform -translate-y-1/2 py-6 px-2 bg-gray-800 text-white  rounded-full"
          onClick={handlePrev}
          disabled={currentIndex === 0}
        >
        <MdOutlineArrowLeft />
        </button>
        <button
          className="absolute top-1/2 right-0 transform -translate-y-1/2 py-6 px-2 bg-gray-800 text-white  rounded-full"
          onClick={handleNext}
          disabled={currentIndex + ITEMS_PER_PAGE >= movies.length}
        >
          <MdOutlineArrowRight />
        </button>
      </div>
    </div>
  );
};

export default MovieSection;
