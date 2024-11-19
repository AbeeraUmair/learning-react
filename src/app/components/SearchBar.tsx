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
      <form onSubmit={handleSubmit}>
        <label htmlFor="search-input">Enter Search Term:</label>
        <input
          id="search-input"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          type="text"
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
