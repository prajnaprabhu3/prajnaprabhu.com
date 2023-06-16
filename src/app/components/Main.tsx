"use client";

import Image from "next/image";
import Link from "next/link";
// import Gallery from "./gallery";
import New from "./new";

function Main() {
  return (
    <div>
      <div className="flex-col-reverse px-2 mt-14 lg:mt-0 lg:flex-row lg-flex-row flex justify-center items-center md:px-48  overflow-x-auto">
        {/* short about me  */}
        <div className="text-sm leading-6 flex w-ful py-6 px-4 flex-col justify-center gap-y-10 lg:w-2/3 md:text-md text-zinc-400 mainText ">
          <h2 className="flex justify-center md:justify-start text-lg font-semibold">
            👋🏻 hi, I&apos;m
            <span className="text-myColor pl-2"> Prajna,</span>
          </h2>

          <p>
            I&apos;m a fullstack developer who loves building minimal, modern
            and beautiful websites, mobile apps, and user interfaces.
            <span className="text-myColor">
              {""} I personally like to work in the intersection of product &
              engineering.
            </span>
          </p>

          <p>
            I&apos;m currently a third year student at{" "}
            <u className="text-myColor">
              <a href="https://manipal.edu/mit.html" target="_blank">
                MIT Manipal
              </a>
            </u>
            , pursuing a Bachelor&apos; in Data Science.
          </p>

          <p>
            I also enjoy playing guitar and reading books. You can take a look
            at my library{" "}
            <u className="text-myColor">
              <Link href="/books">here</Link>
            </u>
            .If you are someone in my circle and want to read any of my
            collection, feel free to drop me a text.
          </p>
        </div>

        {/* image  */}
        {/* <div className="flex flex-col items-center gap-y-2"> */}
        <Image
          alt="me"
          height="300"
          width="320"
          src="/images/c.jpeg"
          className="rounded-3xl w-52 h-60 lg:h-80 lg:w-64 mx-20 object-cover"
        />
        {/* <p className="text-zinc-500">yes that&apos;s me :)</p> */}
        {/* </div> */}
      </div>

      {/* <Gallery /> */}
      <New />
    </div>
  );
}

export default Main;
