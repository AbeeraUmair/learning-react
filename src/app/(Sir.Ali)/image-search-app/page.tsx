"use client"
import React, { useState } from "react";
import SearchBar from "@/app/components/image-search/SearchBar";
import ImageList from "@/app/components/image-search/ImageList";

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
      <SearchBar onSubmit={handleSearch} />
      <ImageList images={images} /> {/* Pass images as props */}
    </div>
  );
};

export default ImageSearch;
