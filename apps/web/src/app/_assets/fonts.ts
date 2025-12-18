import localFont from "next/font/local";

/* USAGE: An alternative approach to hosting files locally (next.js specific)
 *
 * import { geistSansVar, geistMonoVar } from "./fonts"
 * <body className={`${geistSansVar.className} ${geistMonoVar.className}`}></body>
 */

export const geistSans = localFont({
  src: [
    {
      path: "../../../public/fonts/Geist[wght].ttf",
      weight: "100 900",
      style: "normal",
    },
  ],
  variable: "--font-geist-var-sans",
  display: "swap",
});

export const geistMono = localFont({
  src: [
    {
      path: "../../../public/fonts/GeistMono[wght].ttf",
      weight: "100 900",
      style: "normal",
    },
  ],
  variable: "--font-geist-var-mono",
  display: "swap",
});
