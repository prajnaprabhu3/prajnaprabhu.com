"use client";

import Link from "next/link";
import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";

// icons
import { FiMail, FiGithub, FiTwitter, FiLinkedin } from "react-icons/fi";

//data
import { contactLinks } from "@/data/contact";

const tabs = [
  { id: "home", label: "Home", path: "/" },
  { id: "about", label: "About", path: "/about" },
  { id: "work", label: "Work", path: "/work" },
  { id: "blog", label: "Blog", path: "/blog" },
  { id: "books", label: "Books", path: "/books" },
];

const social = [
  {
    id: "email",
    logo: <FiMail />,
    href: contactLinks.email,
  },
  {
    id: "github",
    logo: <FiGithub />,
    href: contactLinks.github,
  },
  {
    id: "twitter",
    logo: <FiTwitter />,
    href: contactLinks.twitter,
  },
  {
    id: "linkedin",
    logo: <FiLinkedin />,
    href: contactLinks.linkedin,
  },
];

// console.log(contactLinks.linkedin);

function Navbar() {
  let [activeTab, setActiveTab] = useState(tabs[0].id);
  return (
    <div className="top-8 sticky z-10 md:top-10 flex justify-around space-x-10 items-center">
      {/* logo  */}
      <Link href="/">
        <div className="flex justify-center text-xl items-center">
          <p>prajna</p>
          <span className="text-3xl text-[#FE9FA1]">.</span>
        </div>
      </Link>

      {/* navigation */}
      <div className="hidden md:flex lg:flex sticky bottom-0 space-x-1.5 w-96 rounded-full py-1.5 px-2 border-2 border-zinc-800 drop-shadow-lg backdrop-filter backdrop-blur-sm  bg-opacity-30">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`${
              activeTab === tab.id ? "text-red-300" : "hover:text-[#FE9FA1]"
            } relative rounded-full px-4 py-1 text-sm font-lighter text-white  transition focus-visible:outline-2`}
            style={{
              WebkitTapHighlightColor: "transparent",
            }}
          >
            {activeTab === tab.id && (
              <motion.span
                layoutId="bubble"
                className="absolute inset-0 -z-20 bg-[#262626] "
                style={{ borderRadius: 9999 }}
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <Link href={tab.path}>{tab.label}</Link>
          </button>
        ))}
      </div>

      {/* contact  */}
      <div className="flex text-lg space-x-4 ">
        {social.map((item, id) => (
          <a
            href={item.href}
            target="_blank"
            key={id}
            className="hover:text-[#FE9FA1] delay-75 hover:font-bold hover:scale-125 transition-transform duration-100 ease-out"
          >
            {item.logo}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
