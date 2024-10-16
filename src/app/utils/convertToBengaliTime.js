// Function to convert English numerals to Bengali numerals
const convertToBengaliNumerals = (num) => {
    const bengaliDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
    return num.toString().split('').map(digit => bengaliDigits[digit]).join('');
};

// Function to convert Unix timestamp to Bengali time format
const convertToBengaliTime = (timestamp) => {
    // Convert the Unix timestamp to a Date object
    const date = new Date(timestamp * 1000); // Multiply by 1000 because Unix timestamps are in seconds

    // Extract hours, minutes, and AM/PM
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const period = hours >= 12 ? 'পিএম' : 'এএম';

    // Convert to 12-hour format
    hours = hours % 12 || 12;

    // Convert hours and minutes to Bengali numerals
    const bengaliHours = convertToBengaliNumerals(hours);
    const bengaliMinutes = convertToBengaliNumerals(minutes.toString().padStart(2, '0'));

    // Return the formatted Bengali time
    return `${bengaliHours}:${bengaliMinutes} ${period}`;
};

export default convertToBengaliTime;
