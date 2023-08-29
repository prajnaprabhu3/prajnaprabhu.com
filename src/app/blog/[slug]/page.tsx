// "use client";

import React from "react";
import fs from "fs";
import Markdown from "markdown-to-jsx";
import Link from "next/link";
import matter from "gray-matter";
import getPostMetadata from "@/lib/getPostMetadata";
import { BsArrowLeftShort } from "react-icons/bs";

// import { motion } from "framer-motion";

const getPostContent = (slug: string) => {
  const folder = "posts/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};

export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

const page = (props: any) => {
  const slug = props.params.slug;
  const content = getPostContent(slug);

  return (
    // <motion.div
    //   initial={{ y: 10, opacity: 0, scale: 0.99, rotate: "0.25deg" }}
    //   animate={{ y: 0, opacity: 1, scale: 1, rotate: "0deg" }}
    //   transition={{ duration: 0.25, delay: 0.1 }}
    //   exit={{ y: 0 }}
    // >
    <div className="px-4 md:px-6 max-w-2xl mx-auto mb-10  mt-4 md:mt-20">
      <Link href="/blog" className="flex items-centermb-12">
        <BsArrowLeftShort className="text-2xl -ml-2  md:-ml-8 hover:-translate-x-1 duration-200 cursor-pointer" />
        {/* <p>Back</p> */}
      </Link>
      <div className="mt-2">
        <h1 className="text-2xl font-bold">{content.data.title}</h1>
        <p className="text-zinc-500 py-1 text-sm font-semibold">
          {content.data.date}
        </p>
      </div>
      <article className="prose prose-xs dark:prose-invert prose-a:text-myColor text-gray-600 dark:text-zinc-400">
        <Markdown>{content.content}</Markdown>
      </article>
    </div>
    // </motion.div>
  );
};

export default page;
