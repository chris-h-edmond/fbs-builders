/**
 * Formats a Date object, ISO string, or timestamp into a human-readable format.
 * Defaults to: 'Month Day, Year' (e.g., 'Oct 12, 2026')
 */
export function formatDate(
  date: Date | string | number,
  options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }
): string {
  try {
    const d = new Date(date);
    if (isNaN(d.getTime())) {
      return 'Invalid Date';
    }
    return new Intl.DateTimeFormat('en-US', options).format(d);
  } catch (error) {
    console.error('[FormatDate] Error parsing date:', error);
    return 'Invalid Date';
  }
}

export default formatDate;
