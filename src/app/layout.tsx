import { metadataInfo } from "../../data/metadata";
import { Outfit } from "next/font/google";
import { Wrapper } from "./wrapper";

import "./globals.css";

export const metadata = {
  title: `${metadataInfo.title}`,
  description: `${metadataInfo.description}`,
};

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
        className={`${outfit.className} bg-[#141516] h-screen flex flex-col justify-between text-gray-300`}
      >
        <Wrapper>{children}</Wrapper>
      </body>
    </html>
  );
}
