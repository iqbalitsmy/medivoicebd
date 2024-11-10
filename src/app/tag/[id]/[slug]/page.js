import LoadTagsNews from '@/app/components/TagsNews/LoadTagsNews';
import React from 'react';

const TagPage = async ({ params }) => {
    const { id } = params;

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
            <LoadTagsNews tagId={id} />
        </div>
    );
};

export default TagPage;