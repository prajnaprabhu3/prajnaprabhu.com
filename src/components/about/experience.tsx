import SectionAbout from "./section";
import { experience } from "./data";
import Image from "next/image";

const Experience = () => {
  return (
    <SectionAbout heading="Work">
      <h2 className="font-medium mb-10">
        Some of the opportunities I&apos;ve got to be a part of
      </h2>

      <div className="flex flex-col gap-10">
        {experience.map((item) => (
          <div key={item.id} className="flex items-center gap-4 md:pr-10">
            <Image
              src={item.img}
              alt="item.title"
              height="100"
              width="50"
              className="rounded"
            />

            <div className="flex justify-between w-full">
              <div>
                <h1>{item.title}</h1>
                <h2 className="text-zinc-600 text-sm md:text-base">
                  {item.designation}
                </h2>
              </div>

              <h2 className="text-zinc-600 text-xs md:text-sm">
                {item.timeline}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </SectionAbout>
  );
};

export default Experience;
