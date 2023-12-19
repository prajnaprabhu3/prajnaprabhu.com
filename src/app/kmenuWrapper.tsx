"use client";

import { ReactNode } from "react";
import { useTheme } from "next-themes";
import { MenuProvider, MenuConfig } from "kmenu";
import Palette from "../components/palette";

import "kmenu/dist/index.css";

export const KmenuWrapper = ({ children }: { children?: ReactNode }) => {
  const { theme } = useTheme();

  const configDark: MenuConfig = {
    backdropColor: "#14151630",
    backdropBlur: 4,
    backgroundColor: "#18181b",
    breadcrumbColor: "#252528",
    borderWidth: 1,
    borderColor: "#2F2F33",
    inputBorder: "#2F2F33",
    inputColor: "#828282",
    commandActive: "#ffff",
    boxShadow: "0px 0px 0px 0px #00000020",
  };

  const configLight: MenuConfig = {
    backdropColor: " #14151630",
    backdropBlur: 4,
    backgroundColor: "#f7f3f3",
    breadcrumbColor: "#ece8e8",
    borderWidth: 1,
    // borderColor: "#3F3F3F",
    inputBorder: "#d7d8da",
    inputColor: "#00000",
    commandActive: "#3F3F3F",
    boxShadow: "0px 0px 0px 0px #00000020",
  };

  return (
    <>
      {theme === "dark" ? (
        <MenuProvider config={configDark}>
          <Palette />
          {children}
        </MenuProvider>
      ) : (
        <MenuProvider config={configLight}>
          <Palette />
          {children}
        </MenuProvider>
      )}
    </>
  );
};
