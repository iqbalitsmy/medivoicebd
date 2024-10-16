function convertToBengaliDate(englishDate) {
    // Mapping for Bengali digits
    const bengaliDigits = {
        '0': '০', '1': '১', '2': '২', '3': '৩', '4': '৪',
        '5': '৫', '6': '৬', '7': '৭', '8': '৮', '9': '৯'
    };

    // Mapping for Bengali months
    const bengaliMonths = [
        'জানুয়ারি', 'ফেব্রুয়ারি', 'মার্চ', 'এপ্রিল', 'মে', 'জুন',
        'জুলাই', 'আগস্ট', 'সেপ্টেম্বর', 'অক্টোবর', 'নভেম্বর', 'ডিসেম্বর'
    ];

    // Parse the English date
    const [year, month, day] = englishDate.split('-');

    // Convert day and year to Bengali digits
    const convertToBengaliDigits = (number) => number.split('').map(digit => bengaliDigits[digit]).join('');

    const bengaliDay = convertToBengaliDigits(day);
    const bengaliYear = convertToBengaliDigits(year);

    // Convert month number to Bengali month name
    const bengaliMonth = bengaliMonths[parseInt(month) - 1];

    // Return the formatted Bengali date
    return `${bengaliDay} ${bengaliMonth}, ${bengaliYear}`;
}

export default convertToBengaliDate;
