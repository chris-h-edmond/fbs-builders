/**
 * Formats a number into a currency string (defaults to USD currency).
 */
export function formatCurrency(
  value: number,
  currency = 'USD',
  locale = 'en-US'
): string {
  try {
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  } catch (error) {
    console.error('[FormatCurrency] Error formatting currency:', error);
    return `${currency} ${value}`;
  }
}

/**
 * Compact formatting for large budgets (e.g., $1.2M, $450K)
 */
export function formatCompactCurrency(value: number, locale = 'en-US'): string {
  try {
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: 'USD',
      notation: 'compact',
      compactDisplay: 'short',
      minimumFractionDigits: 0,
      maximumFractionDigits: 1,
    }).format(value);
  } catch (error) {
    console.error('[FormatCompactCurrency] Error formatting compact currency:', error);
    return `$ ${value}`;
  }
}
