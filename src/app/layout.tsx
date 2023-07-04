import { metadataInfo } from "../../data/metadata";
import { Outfit } from "next/font/google";
import { Inter } from "next/font/google";
import { Cabin } from "next/font/google";
import { Manrope } from "next/font/google";
import { Wrapper } from "./wrapper";

import "./globals.css";

export const metadata = {
  title: `${metadataInfo.title}`,
  description: `${metadataInfo.description}`,
};

const inter = Inter({
  subsets: ["latin"],
  weight: ["400"],
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400"],
});

const cabin = Cabin({
  subsets: ["vietnamese"],
  weight: ["400"],
});

const manrope = Manrope({
  subsets: ["vietnamese"],
  // weight: ["400"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} dark:bg-[#141516] bg-[#f7f3f3] h-screen flex flex-col justify-between text-black dark:text-gray-300`}
      >
        <Wrapper>{children}</Wrapper>
      </body>
    </html>
  );
}
