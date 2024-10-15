import Image from 'next/image';
import React from 'react';

const Advertisement = ({ image, w = 350, h = 450 }) => {
    return (
        <a className='mx-auto' href="">
            <Image className='mx-auto' src={image} alt='advertisement gif' width={w} height={h} />
        </a>
    );
};

export default Advertisement;