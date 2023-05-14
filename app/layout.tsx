import "./globals.css";
import { Inter } from "next/font/google";
import { metadataInfo } from "../data/metadata";
import Navbar from "./components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: `${metadataInfo.title}`,
  description: `${metadataInfo.description}`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`bg-[#141516] text-gray-300 {inter.className}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
