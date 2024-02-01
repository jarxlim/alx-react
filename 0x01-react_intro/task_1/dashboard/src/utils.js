export default function getFullYear() {
    const currentYear = new Date().getFullYear;
    return currentYear;
};

export default function getFooterCopy(isIndex) {
    if (isIndex === true) {
        return 'Holberton School';
    }
    else {
        return 'Holberton School main dashboard';
    }
};