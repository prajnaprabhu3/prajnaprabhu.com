import "./globals.css";
import { metadataInfo } from "../data/metadata";
import Navbar from "./components/navbar";
import Footer from "@/app/components/footer";

export const metadata = {
  title: `${metadataInfo.title}`,
  description: `${metadataInfo.description}`,
  // icons: {
  //   icon: { url: "/favicon.png", type: "image/png" },
  //   shortcut: { url: "/favicon.png", type: "image/png" },
  // },
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

        <div className="flex mx-auto justify-around items-center ">
          {children}
        </div>

        <div className="sticky bottom-0">
          <Footer />
        </div>
      </body>
    </html>
  );
}