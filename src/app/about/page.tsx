"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Experience from "../components/experience";
import { contactLinks } from "@/../data/contact";

import { motion } from "framer-motion";

import { Section } from "@/layouts/section";

const social = [
  {
    id: "email",
    href: contactLinks.email,
  },
  {
    id: "github",
    href: contactLinks.github,
  },
  {
    id: "twitter",
    href: contactLinks.twitter,
  },
  {
    id: "linkedin",
    href: contactLinks.linkedin,
  },
];

function About() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* <Section className="z-8 gap-y-20 px-4 flex flex-col md:gap-y-28 md:max-w-2xl 2xl:max-w-4xl mx-auto md:px-4 2xl:px-20 mt-10 md:mt-2 md:pt-20 "> */}
      <div className="z-8 gap-y-20 px-4 flex flex-col md:gap-y-28 md:max-w-2xl 2xl:max-w-4xl mx-auto md:px-4 2xl:px-20 mt-10 md:mt-2 md:pt-20 ">
        {/* <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      > */}
        <div className="">
          {/* image  */}
          <div className="w-full gap-x-4 flex md:w-2/3 h-16  items-center">
            <Image
              alt="prajna"
              height="60"
              width="60"
              src="/images/me.png"
              className="rounded-lg p-0.5 border border-gray-300 dark:border-zinc-800"
            />

            <div className="text-base dark:text-gray-200 md:text-lg font-light ">
              <p>Prajna Prabhu</p>
              <p className="text-xs md:text-base  text-zinc-500">
                Fullstack developer based in India
              </p>
            </div>
          </div>
          {/* text  */}
          <div className="text-sm flex flex-col justify-center items-start gap-y-6 mt-8 md:text-base dark:text-zinc-400 font-light">
            <p>
              I&apos;m a fullstack developer who loves building minimal, modern
              and beautiful websites, mobile apps, and user interfaces.
              <span className="text-myColor">
                {""} I personally like to work in the intersection product &
                engineering
              </span>
              . I enjoy working on React and all things
              <span className="text-myColor"> JavaScript & TypeScript</span>.
              Currently nerding out on native{" "}
              <span className="text-myColor"> iOS development </span>.
              {/* In the
            past I&apos;ve also worked with different languages like Python,
            Java,JavaScript,TypeScript and C++, including Node, Django and
            Redux. */}
            </p>

            <p>
              Currently, I&apos;m a third-year student at{" "}
              <u className="text-myColor">
                <a href="https://manipal.edu/mit.html" target="_blank">
                  MIT Manipal,
                </a>
              </u>{" "}
              pursuing a Bachelor&apos;s degree in Data Science.
            </p>

            <p>
              Apart from all the nerdy and geeky things, I enjoy playing the
              basketball, and reading books. My library mainly consists of books
              on topics such as <span className="text-myColor">startups</span>,{" "}
              <span className="text-myColor">entrepreneurship</span> ,{" "}
              <span className="text-myColor">self-help</span> and{" "}
              <span className="text-myColor">investment</span>. You may also
              find a few <span className="text-myColor">fiction</span> books ig.
              If you&apos;re someone in my circle of friends or from the same
              location and would like to read any book from my collection, feel
              free to drop me a text. I also read a lot of articles and blogs
              online. Visit{" "}
              <u className="text-myColor">
                <Link href="/books">here</Link>
              </u>{" "}
              to know more about it. Furthermore, I have a dedicated page for
              the blogs I&apos;ll be writing, which will mostly focus on tech
              and career-related topics.
            </p>
          </div>
          {/* text ends  */}

          {/* <div className="flex items-center gap-4 mt-10">
          <h2 className="text-zinc-400 text-lg">Connect: </h2> */}
          <div className="flex gap-8 mt-10 justify-center md:justify-start">
            {social.map((item) => (
              <p
                key={item.id}
                className="text-sm md:text-base  text-myColor capitalize hover:underline cursor-pointer"
              >
                {item.id}
              </p>
            ))}
          </div>
          {/* </div> */}
        </div>

        {/* work  */}
        <div className="pb-8 md:pb-16">
          <h2 className="text-xl md:text-2xl font-semibold">Work Experience</h2>
          <Experience />
        </div>

        {/* work done  */}
        {/* </motion.div> */}
      </div>
      {/* </Section> */}
    </motion.div>
  );
}

export default About;
