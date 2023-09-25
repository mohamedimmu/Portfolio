import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";

export const mediaSans = localFont({
  src: "../public/fonts/mediasanssemicondensed.otf",
  variable: '--font-media-sans-semicondensed'
});

export const sfProDisplay = localFont({
  src: [
    {
      path: "../public/fonts/sfprodisplaylight.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/sfprodisplayregular.OTF",
      weight: "400",
      style: "normal",
    }
  ],
  variable: '--font-sp-pro-display'
});

export const metadata: Metadata = {
  title: "Mohamed Imran - Remote Developer & Designer",
  description: "Freelance Developer & Designer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${mediaSans.variable} ${sfProDisplay.variable} font-sans`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
