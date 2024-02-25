"use client";

import Link from "next/link";
import React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import useSound from "use-sound";

// icons
import {
  FiMail,
  FiGithub,
  FiTwitter,
  FiLinkedin,
  FiMoon,
  FiSun,
} from "react-icons/fi";

import { useTheme } from "next-themes";

//data
import { contactLinks } from "@/../data/contact";
import { usePathname } from "next/navigation";

const tabs = [
  // { id: "", label: "Home", path: "/" },
  { id: "about", label: "About", path: "/about" },
  { id: "work", label: "Project", path: "/work" },
  { id: "blog", label: "Blog", path: "/blog" },
  { id: "books", label: "Books", path: "/books" },
  { id: "guestbook", label: "Sign", path: "/guestbook" },
];

const social = [
  {
    id: "email",
    logo: <FiMail className="text-base md:text-lg" />,
    href: contactLinks.email,
  },
  {
    id: "github",
    logo: <FiGithub className="text-base md:text-lg" />,
    href: contactLinks.github,
  },
  {
    id: "twitter",
    logo: <FiTwitter className="text-base md:text-lg" />,
    href: contactLinks.twitter,
  },
  {
    id: "linkedin",
    logo: <FiLinkedin className="text-base md:text-lg" />,
    href: contactLinks.linkedin,
  },
];

// console.log(contactLinks.linkedin);

function Navbar() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const { systemTheme, theme, setTheme } = useTheme();
  const [toggleSound] = useSound("/sounds/toggle.mp3", {
    volume: 0.1,
  });
  const [mounted, setMounted] = useState(false);
  const path=usePathname()

  useEffect(() => {
    setMounted(true);
  }, []);

  function changeThemeLight() {
    toggleSound();
    setTheme("light");
  }

  function changeThemeDark() {
    toggleSound();
    setTheme("dark");
  }

  const renderThemeChanger = () => {
    if (!mounted) return null;
    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <FiSun
          role="button"
          onClick={changeThemeLight}
          className="text-base md:text-lg"
        />
      );
    } else {
      return (
        <FiMoon
          role="button"
          onClick={changeThemeDark}
          className="text-base md:text-lg text-gray-900 "
        />
      );
    }
  };

  return (
    <div className="mt-6 md:mt-2 sticky h-10 md:z-10 md:top-6 flex justify-around space-x-10 items-center">
      {/* logo  */}
      <Link href="/">
        <div className="flex justify-center text-xl items-center">
          {/* <span className="text-[18px] font-semibold text-myColor mr-1">@</span> */}
          <p className="text-[20px]">prajna</p>
          <span className="text-3xl text-myColor mb-1">.</span>
        </div>
      </Link>

      {/* navigation */}
      <div className="hidden  md:flex lg:flex justify-center space-x-1 sticky bottom-0 w-96 rounded-full py-1.5 px-2 dark:border-2  bg-[#ece8e8]  dark:bg-[#141516]  dark:border-zinc-800 dark:drop-shadow-md backdrop-filter backdrop-blur-xl  dark:bg-opacity-30">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`${
              path.includes(tab.id)? "text-myColor" : "hover:text-myColor"
            } relative rounded-full px-4 py-1 text-sm font-lighter text-zinc-350  transition focus-visible:outline-2`}
            style={{
              WebkitTapHighlightColor: "transparent",
            }}
          >
            {path.includes(tab.id) && (
              <motion.span
                layoutId="bubble"
                className="absolute inset-0 -z-20 bg-white dark:bg-[#262626] py-2"
                style={{ borderRadius: 9999 }}
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <Link href={tab.path}>{tab.label}</Link>
          </button>
        ))}
      </div>

      {/* contact  */}
      <div className="flex items-center text-lg space-x-3 md:space-x-4 ">
        {renderThemeChanger()}
        {social.map((item, id) => (
          <a
            href={item.href}
            target="_blank"
            key={id}
            className="hover:text-myColor delay-75 hover:font-bold hover:scale-105 transition-transform duration-150 ease-out"
          >
            {item.logo}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
