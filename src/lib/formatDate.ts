export const formatDateToYYYYMMDD = (date: Date): string => {
    // Get the year, month, and day from the date
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based
    const day = String(date.getDate()).padStart(2, '0');

    // Combine them into the desired format
    return `${year}-${month}-${day}`;
}
