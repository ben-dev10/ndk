import localFont from "next/font/local";
import { nextFontsVar as nextv } from "@_ndk/ui/next-fonts";
import { nextFontsNonVar as nextnv } from "@_ndk/ui/next-fonts";

export const geistSans = localFont({
  src: nextv.geistSans.src,
  variable: nextv.geistSans.variable,
  weight: nextv.geistSans.weight,
});

export const aBeeZee = localFont({
  src: nextnv.AbeeZee.src,
  variable: nextnv.AbeeZee.variable,
});
