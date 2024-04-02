import localFont from "next/font/local";

export const myFontMedium = localFont({
  src: "./SVNGilroyMedium.ttf",
  weight: "500",
  variable: "--font-medium",
});

export const myFontBold = localFont({
  src: "./SVNGilroyBold.woff",
  weight: "700",
  variable: "--font-bold",
});
