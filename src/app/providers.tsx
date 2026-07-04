import React from 'react';
import { ThemeProvider } from '@/contexts/ThemeContext';

interface ProvidersProps {
  children: React.ReactNode;
}

/**
 * App-wide contexts provider wrapper.
 * Scalable location to add future contexts (e.g. Auth, Notifications, etc.)
 */
export const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  );
};
