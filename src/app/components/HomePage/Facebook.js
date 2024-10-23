import React from 'react';

const Facebook = () => {
    return (
        <div className='mb-6'>
            {/* facebook page */}
            <iframe
                className='w-full'
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedivoicebd&tabs=page&width=340&height=130&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId"
                width="250"
                height="130"
                style={{ border: 'none', overflow: 'hidden' }} 
                scrolling="no"
                frameBorder="0"
                allowFullScreen={true} // Boolean values in JSX
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            ></iframe>
        </div>
    );
};

export default Facebook;