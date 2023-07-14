import React from "react";
import fs from "fs";
import Markdown from "markdown-to-jsx";
import Link from "next/link";
import matter from "gray-matter";
import getPostMetadata from "@/utils/getPostMetadata";
import { BsArrowLeftShort } from "react-icons/bs";

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
    <div className="px-4 md:px-6 max-w-2xl mx-auto mb-10  mt-4 md:mt-14">
      <Link href="/blog" className="mb-12">
        <BsArrowLeftShort className="text-2xl -ml-2  md:-ml-8" />
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
  );
};

export default page;
