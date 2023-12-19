"use client";

import { type ReactNode } from "react";
import Navbar from "../components/navbar";
import Footer from "@/components/footer";

import "kmenu/dist/index.css";

import { ThemeProvider } from "next-themes";

import { Analytics } from "@vercel/analytics/react";
import { KmenuWrapper } from "./kmenuWrapper";

export const Wrapper = ({ children }: { children: ReactNode }) => {
  // const config: MenuConfig = {
  //   backdropColor: "#14151630",
  //   backdropBlur: 4,
  //   backgroundColor: "#18181b",
  //   breadcrumbColor: "#252528",
  //   borderWidth: 1,
  //   borderColor: "#2F2F33",
  //   inputBorder: "#2F2F33",
  //   inputColor: "#828282",
  //   commandActive: "#ffff",
  //   boxShadow: "0px 0px 0px 0px #00000020",
  // };

  return (
    // <ThemeProvider enableSystem={true} attribute="class">
    //   <MenuProvider config={config}>
    // <Palette />
    // <Navbar />
    // {children}
    // <Footer />
    //   </MenuProvider>
    //   <Analytics />
    // </ThemeProvider>
    <ThemeProvider enableSystem={true} attribute="class">
      <KmenuWrapper>
        <Navbar />
        {children}
        <Footer />
      </KmenuWrapper>
      <Analytics />
    </ThemeProvider>
  );
};
