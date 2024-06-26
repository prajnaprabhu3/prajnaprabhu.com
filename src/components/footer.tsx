"use client";

import Link from "next/link";
import React,{useState } from "react";
import { motion } from "framer-motion";
import { useUserLocation } from "@/hooks/useUserLocation";


const tabs = [
  { id: "home", label: "Home", path: "/" },
  { id: "about", label: "About", path: "/about" },
  { id: "work", label: "Work", path: "/work" },
  { id: "blog", label: "Blog", path: "/blog" },
  { id: "books", label: "Books", path: "/books" },
];

function Footer() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const userLocation=useUserLocation();

  return (
    <>
      <div className="space-x-2 pt-8 z-100 sticky bottom-4 md:hidden lg:hidden flex justify-around md:space-x-10 items-center">
        {/* navigation */}
        <div className="sticky bottom-0  z-100 flex space-x-0.5 w-74 rounded-full py-1.5 px-1 bg-[#ece8e8] dark:bg-[#141516] dark:border-2 dark:border-zinc-800 drop-shadow-md backdrop-filter backdrop-blur-xl dark:bg-opacity-30">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`${
                activeTab === tab.id ? "text-myColor" : "hover:text-myColor"
              } text-xs relative rounded-full px-4 py-1.5  font-lighter text-zinc-350  transition focus-visible:outline-2`}
              style={{
                WebkitTapHighlightColor: "transparent",
              }}
            >
              {activeTab === tab.id && (
                <motion.span
                  layoutId="bubble"
                  className="absolute inset-0 -z-20 bg-white px-4 dark:bg-[#262626] "
                  style={{ borderRadius: 9999 }}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <Link href={tab.path}>{tab.label}</Link>
            </button>
          ))}
        </div>
      </div>

      <div className="hidden h-12 md:flex lg:flex z-10  dark:bg-[#141516] justify-between px-36 text-[13px] py-3 font-normal text-zinc-600 border-t md:dark:border-zinc-800">
        <p>© Prajna Prabhu 2023. No cookies here 🍪 </p>
        <p className=""> Last visitor from {userLocation.location} </p>
      </div>
    </>
  );
}

export default Footer;


