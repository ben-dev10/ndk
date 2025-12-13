import type { Metadata } from "next";
import { ThemeProvider } from "@ndk/ui/contexts/theme-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "ndk",
  description: "nard development kit - a frontend toolkit for developers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-Axiforma`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
