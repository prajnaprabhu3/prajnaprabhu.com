import React from "react";
import getPostMetadata from "@/lib/getPostMetadata";
import PostPreview from "../components/postPreview";

import Animate from "@/layouts/animate";

function Blog() {
  const postMetadata = getPostMetadata();
  const postPreview = postMetadata.map((post, id) => (
    <PostPreview key={id} {...post} />
  ));
  return (
    <Animate>
      <div className="px-10 md:px-96  -mt-80 md:-mt-60 md:w-[1350px]">
        <h1 className="text-3xl mb-12">Latest Posts</h1>
        <div className="flex flex-col gap-8">{postPreview}</div>
      </div>
    </Animate>
  );
}

export default Blog;
