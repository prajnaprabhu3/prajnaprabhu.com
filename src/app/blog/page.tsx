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
      className="h-screen flex flex-col justify-between"
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

//  <div className="h-screen flex flex-col justify-between">
//    <div className="flex w-full flex-col justify-center px-4 mx-auto md:w-1/2 2xl:w-1/3 md:mt-[70px]">
//      <h1 className="text-3xl mb-10 md:mb-12 pl-2 md:pl-0">Latest Posts</h1>
//      <div className="flex flex-col gap-8">{postPreview}</div>
//    </div>
//  </div>;

// <Container data-aos="fade-up">
//   {/* <div className="px-10 md:px-96  md:w-[1350px]"> */}
//   {/* <div className="flex w-full flex-col justify-center px-4 mx-auto md:w-1/2 2xl:w-1/3 mt-20"> */}
//   <div className="flex w-full flex-col justify-center px-4 mx-auto -mt-44 md:w-[650px] 2xl:w-1/3 md:mt-20 md:mb-[420px] 2xl:mt-[100px]  2xl:mb-[600px]">
//     <h1 className="text-3xl mb-10 md:mb-12 pl-2 md:pl-0">Latest Posts</h1>
//     <div className="flex flex-col gap-8">{postPreview}</div>
//   </div>
// </Container>
// </Animate>
