const useCreateDate = () => {
    const dateObj = new Date();
    const day = dateObj.getDate();
    const month = dateObj.getMonth();
    let monthName;

    switch (month) {
        case 0: monthName = "Jan"; break;
        case 1: monthName = "Feb"; break;
        case 2: monthName = "Mar"; break;
        case 3: monthName = "Apr"; break;
        case 4: monthName = "May"; break;
        case 5: monthName = "Jun"; break;
        case 6: monthName = "Jul"; break;
        case 7: monthName = "Aug"; break;
        case 8: monthName = "Sep"; break;
        case 9: monthName = "Oct"; break;
        case 10: monthName = "Nov"; break;
        case 11: monthName = "Dec"; break;
    }

    const daySuffix = (() => {
        if (day >= 11 && day <= 13) {
            return 'th';
        }
        switch (day % 10) {
            case 1: return 'st';
            case 2: return 'nd';
            case 3: return 'rd';
            default: return 'th';
        }
    })();

    const hours = dateObj.getHours();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12; // Convert 24-hour to 12-hour format

    const formattedMinutes = dateObj.getMinutes().toString().padStart(2, '0');
    const formattedDate = `${day}${daySuffix} ${monthName}, ${dateObj.getFullYear()} at [${formattedHours}:${formattedMinutes} ${ampm}]`;

    return formattedDate;

    // const formattedDate = `${day}${daySuffix} ${monthName}, ${dateObj.getFullYear()} at [${formattedHours}:${dateObj.getMinutes()} ${ampm}]`;


    // const date = `${dateObj.getDate()} ${monthName}, ${dateObj.getFullYear()} at [${dateObj.getHours()}:${dateObj.getMinutes()}]`;

    // return date;
}

export default useCreateDate;