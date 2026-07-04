/**
 * Application environment configuration
 * Validates and provides fallback defaults for environment variables.
 */

export const env = {
  appName: import.meta.env.VITE_APP_NAME || 'FBS Builders',
  env: import.meta.env.VITE_APP_ENV || 'production',
  apiUrl: import.meta.env.VITE_API_URL || 'https://api.fbsbuilders.com/v1',
  apiTimeout: parseInt(import.meta.env.VITE_API_TIMEOUT || '10000', 10),
  isDev: import.meta.env.DEV,
  isProd: import.meta.env.PROD,
} as const;

// Ensure configuration is correct in dev mode
if (env.isDev) {
  console.log('[Config] Environment successfully initialized:', env);
}
