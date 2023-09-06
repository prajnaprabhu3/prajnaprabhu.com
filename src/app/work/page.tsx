"use client";

import { projects } from "@/../../data/projects";
import ProjectCard from "../components/projectCard";
// import Experience from "../components/experience";

import { motion } from "framer-motion";
import { Section } from "@/layouts/section";

function Work() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* <Section className="px-4 flex flex-col justify-center md:mt-14 pt-14 mx-auto md:p-20 mb-10"> */}
      <div className="px-4 flex flex-col justify-center md:mt-14 pt-14 mx-auto md:p-20 mb-10">
        <h2 className="text-xl font-semibold md:text-3xl md:ml-10 md:pl-16 pb-10 b">
          Selected work
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2  gap-y-14 justify-items-center ">
          {projects.map((project, id) => (
            <ProjectCard key={id} {...project} />
          ))}
        </div>
      </div>
      {/* </Section> */}
    </motion.div>
  );
}

export default Work;
