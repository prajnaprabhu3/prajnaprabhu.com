import { projects } from "@/../../data/projects";
import ProjectCard from "@/components/work/projectCard";

import { Container } from "@/layouts/container";

function Work() {
  return (
    <Container data-aos="fade-up" className="mb-16">
      <h1 className="text-3xl relative px-4 md:px-0 md:left-[420px] 2xl:left-[630px] mb-4 mt-16">
        Projects
      </h1>

      <div className="flex flex-col justify-center gap-4 md:gap-8 w-full md:w-1/2 2xl:w-2/5 mx-auto mb-20">
        {projects
          .map((project) => <ProjectCard key={project.id} {...project} />)
          .reverse()}
      </div>
    </Container>
  );
}

export default Work;
