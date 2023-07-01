import { metadataInfo } from "../../data/metadata";
import { Outfit } from "next/font/google";
import { Inter } from "next/font/google";
import { Wrapper } from "./wrapper";

import "./globals.css";

export const metadata = {
  title: `${metadataInfo.title}`,
  description: `${metadataInfo.description}`,
};

const inter = Inter({
  subsets: ["latin"],
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${outfit.className} dark:bg-[#141516] bg-[#f7f3f3] h-screen flex flex-col justify-between text-black dark:text-gray-300`}
      >
        <Wrapper>{children}</Wrapper>
      </body>
    </html>
  );
}
