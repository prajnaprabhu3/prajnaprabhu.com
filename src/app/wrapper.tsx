"use client";

import { type ReactNode } from "react";
import Navbar from "../components/navbar";
import Footer from "@/components/footer";

import "kmenu/dist/index.css";

import { ThemeProvider } from "next-themes";

import { Analytics } from "@vercel/analytics/react";
import { KmenuWrapper } from "./kmenuWrapper";

export const Wrapper = ({ children }: { children: ReactNode }) => {
  return (
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
