'use client';

import { faFacebookF, faPinterestP, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faShareNodes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import React from 'react';

const PersonDetailsCard = ({ person = {}, publishDate }) => {
    // console.log(person.name)
    const handleShare = (platform) => {
        const url = window.location.href; // Current page URL
        const title = document.title; // Page title

        switch (platform) {
            case 'facebook':
                window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
                break;
            case 'twitter':
                window.open(`https://twitter.com/intent/tweet?url=${url}&text=${title}`, '_blank');
                break;
            case 'pinterest':
                window.open(`https://pinterest.com/pin/create/button/?url=${url}&description=${title}`, '_blank');
                break;
            case 'share':
                if (navigator.share) {
                    navigator.share({
                        title: title,
                        url: url
                    });
                } else {
                    alert('Your browser does not support the Web Share API');
                }
                break;
            default:
                break;
        }
    };

    return (
        <div className="border rounded-md p-2 text-left">
            {/* Conditionally Render Person Info */}
            {person.name && (
                <>
                    <Image
                        className="rounded-full mx-auto mb-4 object-contain"
                        src={person.image}
                        alt={person.name}
                        width={100}
                        height={150}
                    />
                    <h3 className="text-lg font-bold">
                        <a href="/writer/1019/ডা-মোহাম্মদ-জাহিদ-হাসান">{person.name}</a>
                    </h3>
                    <div
                        className='text-[13px]'
                        dangerouslySetInnerHTML={{ __html: person.details }}
                    >

                    </div>
                </>
            )
            }

            {/* Static Date */}
            <p className="text-sm mb-2">{publishDate || '31 August, 2024 10:16 AM'}</p>
            <div className="border-t border-gray-200 my-2"></div>

            {/* Social Media Buttons */}
            <div className="flex flex-wrap justify-center items-center gap-1">
                <button
                    className="p-2 px-[10px] rounded-full bg-blue-600 text-white hover:bg-blue-700 grid place-content-center"
                    onClick={() => handleShare('facebook')}
                >
                    <FontAwesomeIcon icon={faFacebookF} />
                </button>
                <button
                    className="p-2 rounded-full bg-black text-white hover:bg-gray-800 grid place-content-center"
                    onClick={() => handleShare('twitter')}
                >
                    <FontAwesomeIcon icon={faTwitter} />
                </button>
                <button
                    className="p-2 px-[10px] rounded-full bg-red-600 text-white hover:bg-red-700 grid place-content-center"
                    onClick={() => handleShare('pinterest')}
                >
                    <FontAwesomeIcon icon={faPinterestP} />
                </button>
                <button
                    className="p-2 rounded-full bg-green-500 text-white hover:bg-green-600 grid place-content-center"
                    onClick={() => handleShare('share')}
                >
                    <FontAwesomeIcon icon={faShareNodes} />
                </button>
            </div>
        </div>
    );
};

export default PersonDetailsCard;
