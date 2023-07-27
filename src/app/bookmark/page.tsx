"use client";

import React from "react";
import Microlink from "@microlink/react";
import { bookmark } from "../../../data/bookmark";

const page = () => {
  return (
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
  );
};

export default page;
