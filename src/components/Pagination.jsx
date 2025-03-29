import React from "react";
import "../styles/pagination.css";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  if (totalPages <= 1) return null; // Hide pagination if there's only one page

  return (
    <div className="pagination">
      <button disabled={currentPage === 1} onClick={() => onPageChange(currentPage - 1)}>
        Prev
      </button>

      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index}
          className={currentPage === index + 1 ? "active" : ""}
          onClick={() => onPageChange(index + 1)}
        >
          {index + 1}
        </button>
      ))}

      <button disabled={currentPage === totalPages} onClick={() => onPageChange(currentPage + 1)}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
