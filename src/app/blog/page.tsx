import React from "react";
import getPostMetadata from "@/lib/getPostMetadata";
import PostPreview from "../components/postPreview";

import { Section } from "@/layouts/section";
import { Container } from "@/layouts/container";

function Blog() {
  const postMetadata = getPostMetadata();
  const postPreview = postMetadata.map((post, id) => (
    <PostPreview key={id} {...post} />
  ));
  return (
    // <Section
    //   parentClassName="h-screen flex flex-col justify-between"
    //   className="flex w-full flex-col justify-center px-4 mx-auto md:w-1/2 2xl:w-1/3 -mt-64 md:-mt-[530px]"
    // >
    //   <h1 className="text-3xl mb-10 md:mb-12 pl-2 md:pl-0">Latest Posts</h1>
    //   <div className="flex flex-col gap-8">{postPreview}</div>
    // </Section>
    // <Animate>
    <Container data-aos="fade-up">
      {/* <div className="px-10 md:px-96  md:w-[1350px]"> */}
      {/* <div className="flex w-full flex-col justify-center px-4 mx-auto md:w-1/2 2xl:w-1/3 mt-20"> */}
      <div className="flex w-full flex-col justify-center px-4 mx-auto md:w-[650px] 2xl:w-1/3 -mt-52 md:-mt-[210px] 2xl:-mt-[350px]">
        <h1 className="text-3xl mb-10 md:mb-12 pl-2 md:pl-0">Latest Posts</h1>
        <div className="flex flex-col gap-8">{postPreview}</div>
      </div>
    </Container>
    // </Animate>
  );
}

export default Blog;

//  <Animate>
//    {/* <div className="px-10 md:px-96  md:w-[1350px]"> */}
//    <Section className="flex w-full flex-col justify-center px-4 mx-auto md:w-1/2 2xl:w-1/3 mt-20">
//      {/* <div className="flex w-full flex-col justify-center px-4 mx-auto md:w-1/2 2xl:w-1/3 mt-20"> */}
//      <h1 className="text-3xl mb-12">Latest Posts</h1>
//      <div className="flex flex-col gap-8">{postPreview}</div>
//      {/* </div> */}
//    </Section>
//  </Animate>;
