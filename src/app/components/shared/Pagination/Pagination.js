'use client';

const Pagination = ({ currentPage, totalPages, route="" }) => {
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
            <a
                href={route + 1}
                disabled={isFirstPage}
                className={`px-3 py-2 rounded ${isFirstPage ? 'bg-gray-200 text-gray-400' : 'bg-gray-300 text-gray-800 hover:bg-gray-400'}`}
            >
                First
            </a>
            <a
                href={route + (currentPage - 1)}
                disabled={isFirstPage}
                className={`px-3 py-2 rounded ${isFirstPage ? 'bg-gray-200 text-gray-400' : 'bg-gray-300 text-gray-800 hover:bg-gray-400'}`}
            >
                &laquo;
            </a>

            {pageNumbers.map((page) => (
                <a
                    key={page}
                    href={route + (page)}
                    className={`px-3 py-2 rounded ${currentPage === page ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
                >
                    {page}
                </a>
            ))}

            <a
                href={route + (currentPage + 1)}
                disabled={isLastPage}
                className={`px-3 py-2 rounded ${isLastPage ? 'bg-gray-200 text-gray-400' : 'bg-gray-300 text-gray-800 hover:bg-gray-400'}`}
            >
                &raquo;
            </a>
            <a
                href={route + (totalPages)}
                disabled={isLastPage}
                className={`px-3 py-2 rounded ${isLastPage ? 'bg-gray-200 text-gray-400' : 'bg-gray-300 text-gray-800 hover:bg-gray-400'}`}
            >
                Last
            </a>
        </div>
    );
};

export default Pagination;
