import { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import { XTWITTER_LINK } from "./_assets/constants";

export const metadataKeywords = [
  "Frontend Library",
  "Shadcn UI Components",
  "React",
  "Next.js",
  "ndk",
  "ndk-ui",
];

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  keywords: metadataKeywords,
  authors: [
    {
      name: "ndk-ui",
      url: XTWITTER_LINK,
    },
  ],
  creator: "@nard",
  openGraph: {
    type: "website",
    locale: "en_GH",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: "/og.webp",
        width: 1200,
        height: 630,
        alt: "ndk-ui open-graph image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    creator: "@nard",
    images: [
      {
        url: "/og.webp",
        width: 1200,
        height: 630,
        alt: "ndk-ui open-graph image",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: { canonical: "/" },
};
