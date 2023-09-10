import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import { Footer, Header, IconFixed } from "./components";
import "./globals.scss";
import { twMerge } from "tailwind-merge";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const montserrat = Montserrat({
  subsets: ['latin'],
})  

export const metadata: Metadata = {
  title: "Gameloft",
  description: "Test build landing page",
  authors: [{ name: "NgocYen" }],
  icons: {
    icon: "assets/images/gameloft_logo.png",
    shortcut: "assets/images/gameloft_logo.png",
    apple: [
      {
        url: "assets/images/apple-touch-icon.png",
        type: "image/png",
      },
    ],
    other: [{ url: "assets/images/gameloft_logo.png", type: "image/png" }],
    origin: "assets/images/gameloft_logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Header />
        {children}
        <Footer />
        <IconFixed />
      </body>
    </html>
  );
}
