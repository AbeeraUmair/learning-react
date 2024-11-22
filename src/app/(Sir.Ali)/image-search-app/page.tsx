"use client"
import React, { useState } from "react";
import SearchBar from "@/app/components/image-search/SearchBar";
import ImageList from "@/app/components/image-search/ImageList";
import Footer from "@/app/components/movie-app/Footer";
import Header from "@/app/components/movie-app/header";

const ImageSearch = () => {
  const [images, setImages] = useState<[]>([]);

  const handleSearch = async (term: string) => {
    try {
      const response = await fetch(`/api/image?query=${term}`); // Call Next.js API route

      if (!response.ok) {
        throw new Error("Failed to fetch images");
      }
      const data = await response.json();
      setImages(data.results); // Assuming `results` contains image data

    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  return (
    <div>
      <Header/>
      <SearchBar onSubmit={handleSearch} />
      <ImageList images={images} /> {/* Pass images as props */}
   <Footer/>
    </div>
  );
};

export default ImageSearch;
