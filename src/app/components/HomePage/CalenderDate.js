import { faCalendarDays, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const CalenderDate = () => {
    return (
        <div className='container mx-auto mt-6 hidden lg:block mb-3'>
            <span><FontAwesomeIcon style={{height: '1.2rem'}} icon={faLocationDot} /></span> ঢাকা <span className='pl-4'><FontAwesomeIcon style={{height: '1.2rem'}} icon={faCalendarDays} /></span>  শনিবার, ১২ অক্টোবর ২০২৪, ২৭ আশ্বিন ১৪৩১, ৭ রবিউস সানী ১৪৪৬
        </div>
    );
};

export default CalenderDate;