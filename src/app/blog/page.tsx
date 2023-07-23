import React from "react";
import getPostMetadata from "@/utils/getPostMetadata";
import PostPreview from "../components/postPreview";

function Blog() {
  const postMetadata = getPostMetadata();
  const postPreview = postMetadata.map((post, id) => (
    <PostPreview key={id} {...post} />
  ));
  return (
    <div className="px-10 md:px-96  -mt-80 md:-mt-72">
      <h1 className="text-3xl mb-12">Latest Posts</h1>
      <div className="flex flex-col gap-8">{postPreview}</div>
    </div>
  );
}

export default Blog;
