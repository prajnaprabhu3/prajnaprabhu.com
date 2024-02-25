import React from "react";
import getPostMetadata from "@/lib/getPostMetadata";
import PostPreview from "@/components/blog/postPreview";

import { Container } from "@/layouts/container";

function Blog() {
  const postMetadata = getPostMetadata();
  const postPreview = postMetadata.map((post, id) => (
    <PostPreview key={id} {...post} />
  ));
  return (
    <Container
      className="h-screen flex flex-col justify-between mt-4 md:mt-0"
      data-aos="fade-up"
    >
      <div className="flex w-full flex-col justify-center px-4 mx-auto md:w-[650px] 2xl:w-1/3 md:mt-[80px]">
        <h1 className="text-3xl mb-10 md:mb-12 pl-2 md:pl-0">Latest Posts</h1>
        <div className="flex flex-col gap-8">{postPreview}</div>
      </div>
    </Container>
  );
}

export default Blog;
