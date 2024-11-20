"use client";

import React, { useState } from "react";

interface SearchBarProps {
  onSubmit: (term: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }) => {
  const [term, setTerm] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (term.trim() === "") {
      alert("Please enter a search term.");
      return;
    }
    onSubmit(term); // Pass the term to the parent
  };

  return (
    <div>
      <h1 className="font-bold text-6xl flex justify-center mt-6">Image Search App</h1>
      <form onSubmit={handleSubmit} className="mt-8 flex justify-center">
        {/* <label className="text-3xl mx-3">Enter Search Term:</label> */}
        <input
          id="search-input"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          type="text"
          className="rounded-lg bg-slate-200  mx-2 px-2 py-1 "
        />
        <button 
        className="bg-gray-200 rounded-lg mx-2 px-4 py-1"
        type="submit"
        >Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
