import SectionAbout from "./section";
import { contactLinks } from "@/../../data/contact";
import { FiMail, FiGithub, FiTwitter, FiLinkedin } from "react-icons/fi";
import { RxArrowTopRight } from "react-icons/rx";

const social = [
  {
    id: "Email",
    logo: <FiMail className="text-base md:text-xl" />,
    href: contactLinks.email,
  },
  {
    id: "Github",
    logo: <FiGithub className="text-base md:text-xl" />,
    href: contactLinks.github,
  },
  {
    id: "Twitter",
    logo: <FiTwitter className="text-base md:text-xl" />,
    href: contactLinks.twitter,
  },
  {
    id: "Linkedin",
    logo: <FiLinkedin className="text-base md:text-xl" />,
    href: contactLinks.linkedin,
  },
];

const Connect = () => {
  return (
    <SectionAbout heading="Connect">
      <div className="flex flex-col gap-10">
        <h2 className="font-medium">
          Reach me out! I &apos;d love to have a chat. ☺️
        </h2>

        <div className="grid grid-cols-2 gap-x-8 gap-y-2">
          {social.map((item) => (
            <a
              key={item.id}
              href={item.href}
              target="_blank"
              className="flex justify-between items-center gap-6 py-3 border border-zinc-300 dark:border-zinc-800 rounded-md px-4 h-14 hover:cursor-pointer"
            >
              <div className="flex items-center gap-4">
                {item.logo}
                <p>{item.id}</p>
              </div>
              <RxArrowTopRight className="text-zinc-500 text-xl" />
            </a>
          ))}
        </div>
      </div>
    </SectionAbout>
  );
};

export default Connect;
