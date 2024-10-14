"use client"


import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedinIn, faPinterestP, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faShareNodes } from '@fortawesome/free-solid-svg-icons';

export default function SocialShare({ title }) {
    const [url, setUrl] = useState('');

    useEffect(() => {
        // Get the current URL from the window object when the component mounts
        if (typeof window !== 'undefined') {
            setUrl(window.location.href);
        }
    }, []);

    const shareOnSocial = (platform) => {
        let shareUrl = '';
        const encodedUrl = encodeURIComponent(url);
        const encodedTitle = encodeURIComponent(title);

        switch (platform) {
            case 'facebook':
                shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
                break;
            case 'x':
                shareUrl = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`;
                break;
            case 'pinterest':
                shareUrl = `https://pinterest.com/pin/create/button/?url=${encodedUrl}&description=${encodedTitle}`;
                break;
            case 'linkedin':
                shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
                break;
            default:
                shareUrl = url;
        }

        window.open(shareUrl, '_blank', 'noopener,noreferrer');
    };

    return (
        <div className="flex space-x-2">
            <button
                onClick={() => shareOnSocial('facebook')}
                className="h-fit text-white bg-blue-600 p-3 rounded-md grid place-content-center hover:bg-blue-700"
            >
                <FontAwesomeIcon icon={faFacebookF} />
            </button>
            <button
                onClick={() => shareOnSocial('x')}
                className="h-fit text-white bg-black p-3 rounded-md grid place-content-center hover:bg-gray-800"
            >
                <FontAwesomeIcon icon={faXTwitter} />
            </button>
            <button
                onClick={() => shareOnSocial('pinterest')}
                className="h-fit text-white bg-red-600 p-3 rounded-md grid place-content-center hover:bg-red-700"
            >
                <FontAwesomeIcon icon={faPinterestP} />
            </button>
            <button
                onClick={() => shareOnSocial('linkedin')}
                className="h-fit text-white bg-blue-700 p-3 rounded-md grid place-content-center hover:bg-blue-800"
            >
                <FontAwesomeIcon icon={faLinkedinIn} />
            </button>
            <button
                onClick={() => navigator.share({ title, url })}
                className="h-fit text-white bg-green-500 p-3 rounded-md grid place-content-center hover:bg-green-600"
            >
                <FontAwesomeIcon icon={faShareNodes} />
            </button>
        </div>
    );
}
