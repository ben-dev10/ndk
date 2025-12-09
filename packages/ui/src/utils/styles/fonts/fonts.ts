import localFont from "next/font/local";

/* USAGE:
 * import `geistSans` and attach the className with `geistSans.className` property.
 */

// variable fonts
export const GeistSans = localFont({
  src: "./var/GeistVF.woff",
  variable: "--font-geist-sans",
});

export const GeistMono = localFont({
  src: "./var/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

export const Inter = localFont({
  src: "./var/InterVariable.woff2",
  variable: "--font-inter",
});

export const FunnelDisplay = localFont({
  src: "./var/FunnelDisplay-VariableFont_wght.ttf",
  variable: "--font-inter",
});

export const JetBrainsMono = localFont({
  src: "./var/jetbrains-mono.woff2",
  variable: "--font-inter",
});

// non-variable fonts
