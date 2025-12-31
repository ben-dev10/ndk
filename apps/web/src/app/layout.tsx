import type { Metadata } from "next";
import { ThemeProvider } from "@_ndk/ui/contexts/theme-provider";
import "./globals.css";
import { RootProvider } from "fumadocs-ui/provider/next";
import Banner from "./_components/banner";
import { metadata as baseMetadata, metadataKeywords } from "./metadata";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  ...baseMetadata,
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: metadataKeywords,
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
            <Banner />
            {children}
          </RootProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
