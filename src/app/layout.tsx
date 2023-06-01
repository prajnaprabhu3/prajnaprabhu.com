import "./globals.css";
import { metadataInfo } from "../../data/metadata";
import Navbar from "./components/navbar";
import Footer from "@/app/components/footer";
// import { local } from "../../public/fonts/";
// import { Inter} from "next/font/google";
import { Outfit } from "next/font/google";

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
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
