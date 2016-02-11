/**
 * Get instance of Date or null.
 * @param date
 * @returns {*}
 */
export function parseDate(date) {
    const d = new Date(date);
    const ts = d.getTime();
    return isNaN(ts) ? null : d;
}