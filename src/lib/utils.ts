const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];


export function timeAgo(timestamp: number) {
    const parsedDate = new Date(timestamp * 1000);
    const currentDate = new Date();
    const diff = currentDate.valueOf() - parsedDate.valueOf();

    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const years = Math.floor(days / 365);

    if (years > 0) {
        return years + ' years ago';
    } else if (days > 0) {
        return days + ' days ago';
    } else if (hours > 0) {
        return hours + ' hours ago';
    } else if (minutes > 0) {
        return minutes + ' minutes ago';
    } else {
        return seconds + ' seconds ago';
    }
}

export function formatDate(timestamp: number) {
    const parsedDate = new Date(timestamp * 1000);

    const day = parsedDate.getDate();
    const monthIndex = parsedDate.getMonth();
    const year = parsedDate.getFullYear();
    const prefix = day === 1 ? 'st' : day === 2 ? 'nd' : day === 3 ? 'rd' : 'th';

    return `${day}${prefix} ${monthNames[monthIndex]}, ${year}`;

}