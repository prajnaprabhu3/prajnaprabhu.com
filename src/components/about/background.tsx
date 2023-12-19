import SectionAbout from "./section";
import { about } from "./data";

const Background = () => {
  return (
    <SectionAbout heading="About">
      <div className="flex flex-col gap-10">
        {about.map((item) => (
          <div key={item.title}>
            <h1 className="font-medium mb-1">{item.title}</h1>
            <p className="font-normal  text-zinc-500">{item.content}</p>
          </div>
        ))}
      </div>
    </SectionAbout>
  );
};

export default Background;
