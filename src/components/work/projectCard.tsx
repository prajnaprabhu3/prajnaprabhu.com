import Image from "next/image";
import { BsArrowRightShort } from "react-icons/bs";
import { FiGithub } from "react-icons/fi";
import { TbWorld } from "react-icons/tb";

interface ProjectProps {
  id: number;
  title: string;
  github?: string;
  live?: string;
  description: string;
  img: string;
  stack: Array<string>;
}

const ProjectCard: React.FC<ProjectProps> = (props: ProjectProps) => {
  return (
    <div className="flex items-center gap-4 md:gap-10 px-3 md:px-6 py-4 mx-3 md:mx-10 group hover:dark:bg-[#1a1b1c] hover:bg-[#ebe8e8]  duration-200 ease-out rounded-lg">
      {/* image  */}
      <Image
        src={props.img}
        alt={props.title}
        width={60}
        height={60}
        className="rounded-lg object-cover"
      />

      {/* description  */}
      <div>
        <div className="flex items-center">
          <h2 className="text-xs md:text-sm font-semibold">{props.title}</h2>
          <BsArrowRightShort className="text-zinc-500 hidden group-hover:block group-hover:text-2xl" />
        </div>
        <p className="text-[11px] md:text-[13px] mt-1 text-zinc-500">
          {" "}
          {props.description}
        </p>
      </div>

      {/* links  */}
      <div className="flex gap-2.5 text-zinc-500 ">
        {/* <FiGithub className="hidden group-hover:block" />
        <TbWorld className="hidden group-hover:block" /> */}
        <a href={props.github} target="_blank" className="hover:cursor-pointer">
          <FiGithub />
        </a>
        <a href={props.live} target="_blank" className="hover:cursor-pointer">
          <TbWorld />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
