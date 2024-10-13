import Pagination from '@/app/components/shared/Pagination/Pagination';
import React from 'react';

const SubCategoryLayout = ({ children }) => {
    const currentPage = parseInt(1, 10) || 1;
    const totalPages = 10;
    
    return (
        <div>
            {children}
            <div>
                <Pagination currentPage={currentPage} totalPages={totalPages} />
            </div>
        </div>
    );
};

export default SubCategoryLayout;