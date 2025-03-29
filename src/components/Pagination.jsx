import React from "react";
import "../styles/pagination.css";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const maxPageNumbersToShow = 5; // Set max numbers to display

  const getPaginationNumbers = () => {
    if (totalPages <= maxPageNumbersToShow) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const pageNumbers = [];
    const leftSide = Math.max(1, currentPage - 2);
    const rightSide = Math.min(totalPages, currentPage + 2);

    if (leftSide > 1) pageNumbers.push(1);
    if (leftSide > 2) pageNumbers.push("...");

    for (let i = leftSide; i <= rightSide; i++) {
      pageNumbers.push(i);
    }

    if (rightSide < totalPages - 1) pageNumbers.push("...");
    if (rightSide < totalPages) pageNumbers.push(totalPages);

    return pageNumbers;
  };

  return (
    <div className="pagination">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Prev
      </button>

      {getPaginationNumbers().map((page, index) =>
        typeof page === "number" ? (
          <button
            key={index}
            onClick={() => onPageChange(page)}
            className={currentPage === page ? "active" : ""}
          >
            {page}
          </button>
        ) : (
          <span key={index} className="dots">
            {page}
          </span>
        )
      )}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
