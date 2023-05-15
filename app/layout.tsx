import "./globals.css";
import { Inter } from "next/font/google";
import { metadataInfo } from "../data/metadata";
import Navbar from "./components/navbar";
import Footer from "@/app/components/footer";

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
      <body
        className={`bg-[#141516] h-screen flex flex-col justify-between text-gray-300 {inter.className}`}
      >
        <Navbar />

        <div className="flex mx-auto w-2/3 justify-around items-center ">
          {children}
        </div>

        <div className="sticky bottom-0">
          <Footer />
        </div>
      </body>
    </html>
  );
}
