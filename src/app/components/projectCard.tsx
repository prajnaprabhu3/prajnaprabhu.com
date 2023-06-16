import Image from "next/image";
import Link from "next/link";

interface ProjectProps {
  id: number;
  title: string;
  src: string;
  description: string;
  img: string;
  stack: Array<string>;
}

// const ProjectCard: React.FC<ProjectProps> = (props: ProjectProps) => {
//   return <div></div>;
// };

// function ProjectCard() {
const ProjectCard: React.FC<ProjectProps> = (props: ProjectProps) => {
  return (
    <Link
      href={props.src}
      target="_blank"
      className="bg-[#1b1d1e] flex flex-col gap-y-2 w-full md:w-4/6 pb-5 rounded-xl delay-75  hover:scale-95 transition-transform duration-300 ease-out border-2 border-zinc-800 garden"
    >
      <Image
        src={props.img}
        alt={props.title}
        width="600"
        height="400"
        className="rounded-t-xl "
      />

      <div className="flex flex-col gap-y-1 px-3">
        <h2 className="font-bold">{props.title}</h2>
        <p className="leading-none text-zinc-500 text-sm">
          {props.description}
        </p>
      </div>
    </Link>
  );
};

export default ProjectCard;
