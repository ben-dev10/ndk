/* This is the next.js version of the @ndk/ui fonts library.
 * It is intended for use with next/fonts/local
 */

export const nextFontsVar = {
  geistSans: {
    name: "Geist Sans",
    src: "./var/GeistVF.woff",
    weight: "100 900",
    variable: "--geist-sans",
  },
  geistMono: {
    name: "Geist Mono",
    src: "./var/GeistMonoVF.woff",
    weight: "100 900",
    variable: "--geist-mono",
  },
} as const;

export const nextFontsNonVar = {
  AbeeZee: {
    name: "AbeeZee",
    src: "./non-var/ABeeZee.woff2",
    variable: "--abeezee",
  },
  Axiforma: {
    name: "Axiforma",
    src: "./non-var/axiforma.woff2",
    variable: "--axiforma",
  },
} as const;

// CSS variable names for use in Tailwind
export const nextFontVariables = {
  sans: "var(--geist-sans)",
  mono: "var(--geist-mono)",
  abeezee: "var(--abeezee)",
  axiforma: "var(--axiforma)",
} as const;

export type nextFontsVar = typeof nextFontsVar;
export type nextFontsNonVar = typeof nextFontsNonVar;
