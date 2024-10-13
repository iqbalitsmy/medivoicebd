'use client';

import { useRouter } from 'next/navigation';

const Pagination = ({ currentPage, totalPages }) => {
    const router = useRouter();

    const goToPage = (page) => {
        router.push(`?page=${page}`);
    };

    const isFirstPage = currentPage === 1;
    const isLastPage = currentPage === totalPages;

    // Determine the range of pages to display around the current page
    const pageNumbers = [];
    const startPage = Math.max(1, currentPage - 2);
    const endPage = Math.min(totalPages, currentPage + 2);

    for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
    }

    return (
        <div className="flex items-center justify-center space-x-2 mt-4">
            <button
                onClick={() => goToPage(1)}
                disabled={isFirstPage}
                className={`px-3 py-2 rounded ${isFirstPage ? 'bg-gray-200 text-gray-400' : 'bg-gray-300 text-gray-800 hover:bg-gray-400'}`}
            >
                First
            </button>
            <button
                onClick={() => goToPage(currentPage - 1)}
                disabled={isFirstPage}
                className={`px-3 py-2 rounded ${isFirstPage ? 'bg-gray-200 text-gray-400' : 'bg-gray-300 text-gray-800 hover:bg-gray-400'}`}
            >
                &laquo;
            </button>

            {pageNumbers.map((page) => (
                <button
                    key={page}
                    onClick={() => goToPage(page)}
                    className={`px-3 py-2 rounded ${currentPage === page ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
                >
                    {page}
                </button>
            ))}

            <button
                onClick={() => goToPage(currentPage + 1)}
                disabled={isLastPage}
                className={`px-3 py-2 rounded ${isLastPage ? 'bg-gray-200 text-gray-400' : 'bg-gray-300 text-gray-800 hover:bg-gray-400'}`}
            >
                &raquo;
            </button>
            <button
                onClick={() => goToPage(totalPages)}
                disabled={isLastPage}
                className={`px-3 py-2 rounded ${isLastPage ? 'bg-gray-200 text-gray-400' : 'bg-gray-300 text-gray-800 hover:bg-gray-400'}`}
            >
                Last
            </button>
        </div>
    );
};

export default Pagination;
