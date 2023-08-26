import { FiCommand } from "react-icons/fi";
import { useKmenu } from "kmenu";
import Link from "next/link";
import New from "./new";
import useSound from "use-sound";
// import { useState } from "react";

import BlurImage from "./blurImage";

function Main() {
  const { toggle } = useKmenu();
  const [playSound] = useSound("/sounds/button-click.mp3");

  function kmenuClick() {
    playSound();
    toggle();
  }

  return (
    <div>
      <div className="flex-col-reverse px-2 mt-14 lg:flex-col-reverse lg:mt-0 xl:flex-row  flex justify-center items-center md:px-48 2xl:w-3/4 mx-auto">
        {/* short about me  */}
        <div className="text-sm  leading-6 flex w-ful py-6 px-4 md:px-14 flex-col justify-center gap-y-10 lg:w-2/3 md:text-md dark:text-zinc-400 mainText ">
          <div className="flex-none md:flex justify-between md:pr-12">
            {/* <div className="flex-none md:flex md:gap-96"> */}
            <h2 className="flex justify-center md:justify-start text-lg font-semibold">
              <p> 👋🏻 hi, I&apos;m</p>
              <span className="text-myColor pl-2"> Prajna,</span>
            </h2>

            <button
              className="hidden md:flex items-center hover:bg-white dark:hover:bg-zinc-800 px-2 rounded hover:scale-105 transition-transform duration-300"
              // onClick={toggle}
              onClick={kmenuClick}
            >
              <FiCommand />
            </button>
          </div>

          <p>
            I&apos;m a fullstack developer who loves building minimal, modern
            and beautiful websites, mobile apps, and user interfaces.{" "}
            <span className="text-myColor">
              I personally like to work in the intersection of product &
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
            , pursuing a Bachelor&apos;s in Data Science.
          </p>

          <p>
            I also enjoy playing basketball and reading books. You can take a
            look at my library{" "}
            <u className="text-myColor">
              <Link href="/books">here</Link>
            </u>
            . If you are someone in my circle and want to read any of my
            collection, feel free to drop me a text.
          </p>
        </div>

        {/* image  */}

        {/* <div className="">
          <Image
            alt="me"
            height="300"
            width="320"
            src="/images/c.jpeg"
            // objectFit="cover"
            // layout="fill"
            className={`rounded-3xl w-52 h-60 lg:h-80 lg:w-64 mx-20 object-cover
           duration-500 
              ${isLoading ? " blur-lg grayscale" : " blur-0 grayscale-0"})`}
            onLoadingComplete={() => setLoading(false)}
          />
        </div> */}
        {/* <p className="text-zinc-500">yes that&apos;s me :)</p> */}

        <BlurImage image="/images/c.jpeg" />
      </div>

      <New />
    </div>
  );
}

export default Main;
