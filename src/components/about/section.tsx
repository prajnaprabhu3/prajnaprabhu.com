interface SectionProps {
  children: React.ReactNode;
  heading: string;
}

const SectionAbout: React.FC<SectionProps> = ({ heading, children }) => {
  return (
    <section className="flex flex-col md:flex-row w-full md:w-full 2xl:w-4/5 justify-between gap-2 md:gap-8 px-0 md:px-16 2xl:px-20">
      <h1 className="text-zinc-600 font-medium w-1/5">{heading}</h1>
      <div className="w-full md:w-4/5 text-sm"> {children}</div>
    </section>
  );
};

export default SectionAbout;
