import React from "react";
import "../styles/categoryFilter.css";

const CategoryFilter = ({ categories, selectedCategory, onSelect }) => {
  return (
    <div className="category-filter">
      {categories.map((category) => (
        <button
          key={category}
          className={selectedCategory === category ? "active" : ""}
          onClick={() => onSelect(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
