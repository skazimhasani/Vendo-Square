"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { Toaster } from "react-hot-toast";
export default function Providers({ children }) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="dark">
      <Toaster position="top-center" reverseOrder={false} />
      {children}
    </NextThemesProvider>
  );
}
