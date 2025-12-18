# Web Fonts

There are 2 major ways of consuming fonts in a web application; you can use them over a CDN or you can host them locally in your application.

The CDN approach is carried out in very similar ways in almost any framework so we will be focusing on the self hosting option.

## For Next.js applications

### The traditional approach

In this package, [fonts.css](./fonts.css) file has a number of fonts configured with their paths, type and most importantly font-family, and that's everything you need. Here's an example to demonstrate usage:

```css
/* simply reference the exact font-family name */
.card {
  width: 100%;
  /* Geist is the exact name defined in the fonts.css file */
  font-family: Geist;
}
```

> ⚠️Disclaimer: Some of the fonts provided are meant for personal use only.

You can also assign that to a Tailwind variable. All tokens (twcss variables) are in the @theme layer at the top of the file.

### Using `next/font/local`

Next.js provides a package for this exact purpose of hosting fonts locally.

We will first declare some variables to store each font with the help of the `localfont()` function.

> ℹ️NOTE: `next/font/local` is a next.js specific module.

```tsx
// ./src/fonts/fonts.ts
import localFont from "next/font/local";

export const geistSans = localFont({
  src: [
    {
      path: "./fonts/var/geist/Geist[wght].ttf",
      weight: "100 900",
      style: "normal",
    },
    {
      path: "./fonts/var/geist/Geist-Italic[wght].ttf",
      weight: "100 900",
      style: "italic",
    },
  ],
  variable: "--font-geist",
  display: "swap",
});

export const geistMono = localFont({
  src: [
    {
      path: "./fonts/var/geist/GeistMono[wght].ttf",
      weight: "100 900",
      style: "normal",
    },
    {
      path: "./fonts/var/geist/GeistMono-Italic[wght].ttf",
      weight: "100 900",
      style: "italic",
    },
  ],
  variable: "--font-geistMono",
  display: "swap",
});
```

Next, pass the `className` property of `geistMono` or `geistSans` to any element you wish to apply the font to.

```tsx
<body className={`${geistSans.className} ${geistMono.className}`}>
  {children}
</body>
```

The font object also provides a variable property that can come in handy for use with tailwind classes. First add the variable to your root wrapper.

```tsx
<body className={`${geistSans.variable} ${geistMono.variable}`}>
  {children}
</body>
```

```css
/* You can assign it to a tailwindCSS variable */
@theme {
  --font-Geist: var(--font-geist);
  --font-GeistMono: var(--font-geistMono);
}
```
