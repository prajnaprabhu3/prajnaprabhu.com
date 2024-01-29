"use client";

import Microlink from "@microlink/react";
import { bookmark } from "../../../data/bookmark";
import { Container } from "@/layouts/container";

const page = () => {
  return (
    <Container data-aos="fade-up">
      <div className=" flex w-full flex-col justify-center mx-auto md:w-1/2 2xl:w-1/2 mt-20">
        <h2 className="mx-auto text-4xl">Bookmarks</h2>
        <div className=" grid grid-cols-1 justify-items-center md:grid-cols-2 gap-x-32 gap-y-4  my-12  ">
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
  );
};

export default page;
