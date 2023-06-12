import { projects } from "@/../../data/projects";
import ProjectCard from "../components/projectCard";
// import Experience from "../components/experience";

function Work() {
  return (
    <div className="px-4 flex flex-col justify-center md:mt-14 pt-14 mx-auto md:p-20 mb-10">
      <h2 className="text-xl font-semibold md:text-3xl md:ml-10 md:pl-16 pb-10 b">
        Some of my work
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2  gap-y-14 justify-items-center ">
        {projects.map((project, id) => (
          <ProjectCard key={id} {...project} />
        ))}
      </div>
    </div>
  );
}

export default Work;
