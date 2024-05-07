import { useState } from "react";

interface PaginationProps {
  count: number;
  itemsPerPage: number;
  onChangePage: (page: number) => void;
}

export const Pagination = (props: PaginationProps) => {
  const { count, itemsPerPage, onChangePage } = props;

  const [currentPage, setCurrentPage] = useState(1);

  const handleChange = (value: number) => {
    setCurrentPage(value);
    onChangePage(value);
  };

  const totalPages = Math.ceil(count / itemsPerPage);

  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  return (
    <div className="flex items-center justify-center mt-5">
      {pageNumbers.map((pageNumber) => (
        <button
          key={pageNumber}
          onClick={() => handleChange(pageNumber)}
          className={`${
            currentPage === pageNumber ? "bg-blue-500 text-white " : ""
          } p-2 border-2 `}
        >
          {pageNumber}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
