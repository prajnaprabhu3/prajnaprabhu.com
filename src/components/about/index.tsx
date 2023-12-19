import React from "react";
import Background from "./background";
import Connect from "./connect";
import Experience from "./experience";
import Graphic from "./graphic";
// import Location from "./location";

const About = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-y-20 md:gap-y-28 mx-auto w-full px-4 md:px-0">
      <Background />
      <Connect />
      {/* <Location /> */}
      <Experience />
      <Graphic />
    </div>
  );
};

export default About;
