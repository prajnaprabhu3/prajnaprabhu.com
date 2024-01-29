import fs from "fs";
import matter from "gray-matter";
import { PostMetadata } from "@/types/PostMetadata";

const getPostMetadata = (): PostMetadata[] => {
  const folder = "posts/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));
  // const slugs = posts.map((file) => file.replace(".md", " "));
  // return slugs;

  // get gray-matter data from each file
  const posts = markdownPosts
    .map((fileName) => {
      const fileContents = fs.readFileSync(`posts/${fileName}`, "utf8");
      const matterResult = matter(fileContents);
      return {
        title: matterResult.data.title,
        date: new Date(matterResult.data.date), // Convert date string to Date object
        duration: matterResult.data.duration,
        subtitle: matterResult.data.subtitle,
        slug: fileName.replace(".md", ""),
      };
    })
    .sort((a, b) => b.date.getTime() - a.date.getTime()); // Sort by date in descending order

  return posts;
};

export default getPostMetadata;
