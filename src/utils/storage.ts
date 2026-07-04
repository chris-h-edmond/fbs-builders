/**
 * Safe local storage utility helpers.
 * Handles try-catch error states when cookie policies or private browsing restrict access.
 */
export const storage = {
  /**
   * Retrieves and parses data from localStorage.
   */
  get<T>(key: string, fallback: T): T {
    try {
      const item = window.localStorage.getItem(key);
      if (item === null) return fallback;
      return JSON.parse(item) as T;
    } catch (error) {
      console.warn(`[Storage] Error reading key "${key}" from localStorage:`, error);
      return fallback;
    }
  },

  /**
   * Serializes and writes data to localStorage.
   */
  set<T>(key: string, value: T): void {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.warn(`[Storage] Error writing key "${key}" to localStorage:`, error);
    }
  },

  /**
   * Removes a key from localStorage.
   */
  remove(key: string): void {
    try {
      window.localStorage.removeItem(key);
    } catch (error) {
      console.warn(`[Storage] Error deleting key "${key}" from localStorage:`, error);
    }
  },

  /**
   * Clears all localStorage keys.
   */
  clear(): void {
    try {
      window.localStorage.clear();
    } catch (error) {
      console.warn('[Storage] Error clearing localStorage:', error);
    }
  },
};

export default storage;
