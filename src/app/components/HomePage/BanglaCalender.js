'use client';

import React, { useState } from 'react';

// Helper function to convert numbers to Bengali
const convertToBanglaNumber = (num) => {
  const banglaNumbers = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
  return num.toString().split('').map(digit => banglaNumbers[parseInt(digit)]).join('');
};

// Get current date for comparison
const currentDate = new Date();
const isFutureDate = (year, month, day) => {
  const date = new Date(year, month, day);
  return date > currentDate;
};

const BanglaCalendar = () => {
// Get current year and month
const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth();

  // State for selected month and year
  const [selectedMonth, setSelectedMonth] = useState(currentMonth); // Default to April (index 3)
  const [selectedYear, setSelectedYear] = useState(currentYear);

  // Bengali days and months
  const banglaDays = ['রবি', 'সোম', 'মঙ্গল', 'বুধ', 'বৃহ', 'শুক্র', 'শনি'];
  const banglaMonths = ['জানুয়ারি', 'ফেব্রুয়ারি', 'মার্চ', 'এপ্রিল', 'মে', 'জুন', 'জুলাই', 'আগস্ট', 'সেপ্টেম্বর', 'অক্টোবর', 'নভেম্বর', 'ডিসেম্বর'];

  // Get number of days in the selected month and the first day of the month
  const getDaysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
  const getFirstDayOfMonth = (year, month) => new Date(year, month, 1).getDay();

  const daysInMonth = getDaysInMonth(selectedYear, selectedMonth);
  const firstDay = getFirstDayOfMonth(selectedYear, selectedMonth);

  // Generate the calendar days
  const generateCalendar = () => {
    const calendar = [];
    let day = 1;

    // Start calendar with empty days for alignment
    for (let i = 0; i < firstDay; i++) {
      calendar.push(<div key={`empty-${i}`} className="h-10 bg-gray-300"></div>);
    }

    // Fill in the actual days
    for (let i = 1; i <= daysInMonth; i++) {
      const isFuture = isFutureDate(selectedYear, selectedMonth, i);

      calendar.push(
        <a
          key={i}
          href=""
          className={isFuture ? "pointer-events-none" : ""}
        >
          <div className={`h-10 hover:bg-gray-50 flex items-center justify-center border ${isFuture ? "bg-gray-200" : "bg-gray-100"}`}>
            {convertToBanglaNumber(i)}
          </div>
        </a>
      );
    }

    return calendar;
  };

  return (
    <div className="max-w-lg mx-auto mt-6">
      {/* Dropdown for month and year */}
      <div className="flex justify-between mb-4 gap-4">
        <select
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(parseInt(e.target.value))}
          className="p-2 border rounded w-full"
        >
          {banglaMonths.map((month, index) => (
            <option key={index} value={index}>
              {month}
            </option>
          ))}
        </select>
        <select
          value={selectedYear}
          onChange={(e) => setSelectedYear(parseInt(e.target.value))}
          className="p-2 border rounded w-full"
        >
          {/* Generate year options dynamically */}
          {[...Array(5)].map((_, i) => {
            const year = 2020 + i;
            return (
              <option key={year} value={year}>
                {convertToBanglaNumber(year)}
              </option>
            );
          })}
        </select>
      </div>

      {/* Render calendar days */}
      <div className="grid grid-cols-7 gap-1 text-center">
        {/* Render week days */}
        {banglaDays.map((day, index) => (
          <div key={index} className="h-10 bg-gray-200 flex items-center justify-center">
            {day}
          </div>
        ))}

        {/* Render calendar days */}
        {generateCalendar()}
      </div>
    </div>
  );
};

export default BanglaCalendar;
