'use client';

import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [timer, setTimer] = useState(null); // Timer state to track the timeout

    // Show button when page is scrolled down
    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
            resetTimer(); // Reset the timer when the button becomes visible
        } else {
            setIsVisible(false);
            clearTimeout(timer); // Clear the timeout if user scrolls back up
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // Smooth scrolling
        });
    };

    const resetTimer = () => {
        // Clear any previous timer
        if (timer) {
            clearTimeout(timer);
        }

        // Set a new timer to hide the button after 3 seconds
        const newTimer = setTimeout(() => {
            setIsVisible(false);
        }, 3000);

        setTimer(newTimer);
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
            clearTimeout(timer); // Cleanup the timeout when component unmounts
        };
    }, [timer]); // Dependency on timer to reset it on change

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-4 right-4 z-50 p-2 rounded-md bg-[#2196f3] text-white transition-opacity duration-300 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            style={{ pointerEvents: isVisible ? 'auto' : 'none' }}
        >
            <FontAwesomeIcon icon={faAngleUp} className="h-8 w-8" />
        </button>
    );
};

export default ScrollToTopButton;
