import React from "react";
import Image from "next/image";
import Link from "next/link";
import Experience from "../components/experience";

function About() {
  return (
    <div className="pt-96 mt-36 w-full gap-y-20 px-4 flex flex-col md:gap-y-28 md:w-1/2 mx-auto md:px-4 md:mt-20 md:pt-20 overflow-x-auto">
      <div className="">
        {/* image  */}
        <div className="w-2/3 gap-x-4 flex md:w-1/2 h-16  items-center">
          <Image
            alt="prajna"
            height="60"
            width="60"
            src="/images/me.png"
            className="rounded-lg p-0.5 border-2 border-zinc-800"
          />

          <div className="text-base text-gray-200 md:text-lg font-light ">
            <p>Prajna Prabhu</p>
            <p className="text-md text-zinc-500">
              Fullstack developer based in India
            </p>
          </div>
        </div>
        {/* text  */}
        <div className="text-sm flex flex-col justify-center gap-y-6 mt-8 md:text-base text-zinc-400 font-light">
          <p>
            I&apos;m a fullstack developer who loves building minimal, modern
            and beautiful websites, mobile apps, and user interfaces.
            <span className="text-[#FE9FA1]">
              I personally like to work in the intersection product &
              engineering
            </span>
            . I enjoy working on React and all things
            <span className="text-[#FE9FA1]"> JavaScript & TypeScript</span>.
            Lately I&apos;ve been interested in learning{" "}
            <span className="text-[#FE9FA1]"> ios development </span>.
            {/* In the
            past I&apos;ve also worked with different languages like Python,
            Java,JavaScript,TypeScript and C++, including Node, Django and
            Redux. */}
          </p>

          <p>
            I&apos;m currently a third year student at{" "}
            <u className="text-[#FE9FA1]">
              <a href="https://manipal.edu/mit.html" target="_blank">
                MIT Manipal
              </a>
            </u>
            , pursuing a Bachelor&apos;s in Data Science.
          </p>

          <p>
            Apart from all the nerdy and geeky things, I enjoy playing guitar,
            play basketball and reading books. My library mostly has books
            around topics like{" "}
            <span className="text-[#FE9FA1]">entrepreneurship</span> ,{" "}
            <span className="text-[#FE9FA1]">startup</span> startup,{" "}
            <span className="text-[#FE9FA1]">self-help</span> and{" "}
            <span className="text-[#FE9FA1]">investment</span>. Can find a few{" "}
            <span className="text-[#FE9FA1]">fiction</span> Ig. If you are
            someone in my circle(friends or someone from the same location) and
            want to read any of my collection, drop me a text. I also read a lot
            of articles/blogs online. Visit{" "}
            <u className="text-[#FE9FA1]">
              <Link href="/books">here</Link>
            </u>{" "}
            to know more about it. Also, I have a dedicated page for blogs I’ll
            be writing, will be mostly tech and carrer related.
          </p>
        </div>
        {/* text ends  */}
      </div>

      {/* work  */}
      <div className="pb-20">
        <h2 className="text-xl md:text-2xl font-semibold">Work Experience</h2>
        <Experience />
      </div>

      {/* work done  */}
    </div>
  );
}

export default About;
