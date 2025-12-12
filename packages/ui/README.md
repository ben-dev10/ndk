# @ndk/ui

This package contains all the building blocks needed build a fully functional UI component.

## Scripts

Main scripts

```bash
# cd ./packages/ui
turbo build  # builds all styles for the @ndk/ui package
turbo dev # starts @ndk/ui dev server
turbo dev:ui # also starts @ndk/ui dev server
```

## Getting Started

You

```css
@import "tailwindcss";

/* core: main stylesheet for components exported by the package */
@import "@ndk/ui/styles";

/* modular components: default theme is neutral.css */
@import "@ndk/ui/fonts.css";
@import "@ndk/ui/themes/twitter.css";
```
