"use client";

import React from "react";
import Microlink from "@microlink/react";
import { bookmark } from "../../../data/bookmark";

import { motion } from "framer-motion";
import { Container } from "@/layouts/container";

const page = () => {
  return (
    // <motion.div
    //   initial={{ opacity: 0, scale: 0.5 }}
    //   animate={{ opacity: 1, scale: 1 }}
    //   transition={{ duration: 0.5 }}
    // >
    <Container data-aos="fade-up">
      <div className=" flex w-full flex-col justify-center mx-auto md:w-1/2 2xl:w-1/2 mt-20">
        <h2 className="mx-auto text-4xl">Bookmarks</h2>
        <div className=" grid grid-cols-1 justify-items-center md:grid-cols-2 gap-x-32 gap-y-4  my-12  ">
          {/* <Microlink
        url="https://epimethean.com/relationships-first-the-nonlinear-way-of-addressing-great-challenges-69914c2e1004"
        style={{ color: "green" }}
      /> */}
          {bookmark.map((item) => (
            <Microlink
              key={item.url}
              url={item.url}
              // size="small"
              className="box w-80  md:w-[400px] md:h-40 rounded-lg border border-zinc-100"
              // style={{ width: 400, height: 150, borderRadius: 5 }}
            />
          ))}
        </div>
      </div>
    </Container>
    //  </motion.div>
  );
};

export default page;
