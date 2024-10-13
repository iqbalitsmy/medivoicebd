'use client';

import React, { useState, useEffect } from 'react';

const BanglaCalendar = () => {
  // State for selected month and year
  const [selectedMonth, setSelectedMonth] = useState(3); // Default to April (index 3)
  const [selectedYear, setSelectedYear] = useState(2024);

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
      calendar.push(
        <div key={i} className="h-10 bg-gray-100 flex items-center justify-center border">
          {i}
        </div>
      );
    }

    return calendar;
  };

  return (
    <div className="max-w-lg mx-auto mt-6">
      {/* Dropdown for month and year */}
      <div className="flex justify-between mb-4">
        <select
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(parseInt(e.target.value))}
          className="p-2 border rounded"
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
          className="p-2 border rounded"
        >
          {/* Generate year options dynamically */}
          {[...Array(5)].map((_, i) => {
            const year = 2020 + i;
            return (
              <option key={year} value={year}>
                {year}
              </option>
            );
          })}
        </select>
      </div>

      {/* Render calendar days */}
      <div className="grid grid-cols-7 gap-1 text-center">
        {/* Render week days */}
        {banglaDays.map((day, index) => (
          <div key={index} className="h-10 bg-gray-200 flex items-center justify-center font-bold">
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
