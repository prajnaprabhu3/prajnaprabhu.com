"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

function Main() {
  return (
    <div className="flex justify-center items-center  overflow-y-hidden">
      {/* short about me  */}
      <div className="flex flex-col justify-center gap-y-10 w-2/3 text-md px-2 text-zinc-400 ">
        <p>
          I'm a fullstack developer who loves building minimal, modern and
          beautiful websites, mobile apps, and user interfaces.
          <span className="text-[#FE9FA1]">
            I personally like to work in the intersection of product &
            engineering.
          </span>
        </p>

        <p>
          I'm currently a third year student at{" "}
          <u className="text-[#FE9FA1]">
            <a href="https://manipal.edu/mit.html">MIT Manipal</a>
          </u>
          , pursuing a Bachelor's in Data Science.
        </p>

        <p>
          I also enjoy playing guitar and reading books. You can take a look at
          my library{" "}
          <u className="text-[#FE9FA1]">
            <Link href="/books">here</Link>
          </u>
          . f you are someone in my circle and want to read any of my
          collection, drop me a text
        </p>
      </div>

      {/* image  */}
      {/* <div> */}
      <Image
        alt="me"
        height="300"
        width="300"
        src="/images/me.png"
        className="mx-20"
      />
      {/* </div> */}
    </div>
  );
}

export default Main;
