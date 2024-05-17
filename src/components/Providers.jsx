"use client";
import * as React from "react";
import { ThemeProvider } from "next-themes";

export function Providers({ children }) {
  return (
    <ThemeProvider attribute="data-theme" defaultTheme="#26CBB7" enableSystem >
      {children}
    </ThemeProvider>
  );
}
