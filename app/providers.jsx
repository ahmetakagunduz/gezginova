"use client";

import { ThemeProvider } from '../src/components/Theme/ThemeContext';
import { AuthProvider } from '../src/components/Auth/AuthContext';
import { SessionProvider } from 'next-auth/react';

export function Providers({ children }) {
  return (
    <SessionProvider>
      <AuthProvider>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </AuthProvider>
    </SessionProvider>
  );
}
