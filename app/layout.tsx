import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";

export const mediaSans = localFont({
  src: "../public/fonts/mediasanssemicondensed.otf",
});

export const sfProDisplay = localFont({
  src: [
    {
      path: "../public/fonts/sfprodisplayregular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/sfprodisplaylight.ttf",
      weight: "300",
      style: "normal",
    },
  ],
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
      <body className={sfProDisplay.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
