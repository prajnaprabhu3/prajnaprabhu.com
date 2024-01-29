import About from "@/components/about";
import { Container } from "@/layouts/container";
import { NextPage } from "next";

export const metadata = { title: "About" };

const Page: NextPage = () => (
  <Container
    data-aos="fade-up"
    // className="z-8 gap-y-20 px-4 flex flex-col md:gap-y-28 md:max-w-2xl 2xl:max-w-4xl mx-auto md:px-4 2xl:px-20 mt-10 md:mt-2 md:pt-20"
    className="z-8 flex justify-center mx-auto items-center w-full md:w-3/5 my-20"
  >
    <About />
  </Container>
);

export default Page;
