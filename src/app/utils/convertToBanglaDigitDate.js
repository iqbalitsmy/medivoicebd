const englishToBanglaDigits = {
  '0': '০',
  '1': '১',
  '2': '২',
  '3': '৩',
  '4': '৪',
  '5': '৫',
  '6': '৬',
  '7': '৭',
  '8': '৮',
  '9': '৯'
};

const convertToBanglaDigitDate = (englishDate) => {
  // Split the date into parts
  const [year, month, day] = englishDate.split('-');
  
  // Convert each digit to Bangla
  const banglaDate = `${day}.${month}.${year}`
    .split('')
    .map(digit => englishToBanglaDigits[digit] || digit)
    .join('');
    
  return banglaDate;
};

export default convertToBanglaDigitDate;
