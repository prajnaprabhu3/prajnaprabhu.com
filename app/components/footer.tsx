// import React from "react";

// function Footer() {
//   return (
//     // <div className="sticky bottom-0 flex justify-center border-t border-zinc-800 w-full pt-2.5">
//     //   <p>© Prajna Prabhu 2023. No cookies here 🍪 </p>
//     // </div>
//     <div className="flex justify-center text-sm py-4 font-normal text-zinc-400 border-t border-zinc-800">
//       <p>© Prajna Prabhu 2023. No cookies here 🍪 </p>
//     </div>
//   );
// }

// export default Footer;

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

function Footer() {
  let [activeTab, setActiveTab] = useState(tabs[0].id);
  return (
    <>
      <div className="md:hidden lg:hidden sticky z-10 mb-4 flex justify-around space-x-10 items-center">
        {/* navigation */}
        <div className="sticky bottom-0 flex space-x-1.5 w-96 rounded-full py-1.5 px-2 border-2 border-zinc-800 drop-shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-30">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`${
                activeTab === tab.id ? "text-rose-300" : "hover:text-[#FE9FA1]"
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
      </div>

      <div className="hidden md:flex lg:flex z-10 bg-[#141516] justify-center text-sm py-4 font-normal text-zinc-600 border-t border-zinc-800">
        <p>© Prajna Prabhu 2023. No cookies here 🍪 </p>
      </div>
    </>
  );
}

export default Footer;
