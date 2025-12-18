import type { Metadata } from "next";
import { ThemeProvider } from "@_ndk/ui/contexts/theme-provider";
import "./globals.css";
import { RootProvider } from "fumadocs-ui/provider/next";
import { Banner } from "fumadocs-ui/components/banner";

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
      <body className={`font-Lexend`}>
        <ThemeProvider>
          <RootProvider>
            <Banner variant="rainbow">Site is a work in progress.</Banner>
            {children}
          </RootProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
