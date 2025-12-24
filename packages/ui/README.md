# @\_ndk/ui

This package contains all the building blocks needed build a fully functional UI component.

Most ui-components provided by this package are just plain shadcn components bundled up into a neat small package along with other helpful tools and utilities.

## Scripts

Main scripts

```bash
# cd ./packages/ui
turbo build  # builds all styles for the @_ndk/ui package
turbo dev # starts @_ndk/ui dev server
turbo dev:ui # also starts @_ndk/ui dev server
```

## Getting Started

```css
@import "tailwindcss";

/* core: main stylesheet for components exported by the package */
@import "@_ndk/ui/tokens";

/* modular components: default theme is neutral.css */
@import "@_ndk/ui/fonts";
@import "@_ndk/ui/themes/twitter.css";
@import "@_ndk/ui/typography";
```
