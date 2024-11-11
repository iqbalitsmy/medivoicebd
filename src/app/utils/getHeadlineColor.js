const getHeadlineColor = (colorCode) => {
    switch (parseInt(colorCode)) {
        case 1:
            return 'text-red-600';
        case 2:
            return 'text-green-600';
        case 3:
            return 'text-blue-600';
        default:
            return 'text-black';
    }
};

export default getHeadlineColor;