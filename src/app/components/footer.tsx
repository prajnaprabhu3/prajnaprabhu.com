"use client";

import Link from "next/link";
import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";

const tabs = [
  { id: "home", label: "Home", path: "/" },
  { id: "about", label: "About", path: "/about" },
  { id: "work", label: "Work", path: "/work" },
  { id: "blog", label: "Blog", path: "/blog" },
  { id: "books", label: "Books", path: "/books" },
];

function Footer() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  return (
    <>
      <div className="spcae-z-2 pt-10 z-100 sticky bottom-4 md:hidden lg:hidden  mb-4 flex justify-around md:space-x-10 items-center">
        {/* navigation */}
        <div className=" sticky bottom-0  z-100 flex space-x-1 w-78 rounded-full py-1.5 px-1 border-2 border-zinc-800 drop-shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-30">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`${
                activeTab === tab.id ? "text-rose-300" : "hover:text-[#FE9FA1]"
              } text-xs relative rounded-full px-4 py-1  font-lighter text-white  transition focus-visible:outline-2`}
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
      </div>

      <div className="hidden md:flex lg:flex z-10 bg-[#141516] justify-center text-sm py-4 font-normal text-zinc-600 border-t md:border-zinc-800">
        <p>© Prajna Prabhu 2023. No cookies here 🍪 </p>
      </div>
    </>
  );
}

export default Footer;