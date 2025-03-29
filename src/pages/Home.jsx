import React, { useState } from "react";
import Banner from "../components/Banner";
import CategoryFilter from "../components/CategoryFilter";
import CoinList from "../components/CoinList";
import Pagination from "../components/Pagination";
import coinsData from "../data/coins";

const categories = ["All", "Indian Princely State", "British India"];

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  // Filter the coins based on category selection
  const filteredCoins =
    selectedCategory === "All"
      ? coinsData
      : coinsData.filter((coin) => coin.category === selectedCategory);

  // Ensure `totalPages` is always a positive number
  const totalPages = Math.max(
    1,
    Math.ceil(filteredCoins.length / itemsPerPage)
  );

  // Get the coins for the current page
  const displayedCoins = filteredCoins.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div>
      <Banner />
      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onSelect={setSelectedCategory}
      />
      <CoinList coins={displayedCoins} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default Home;
