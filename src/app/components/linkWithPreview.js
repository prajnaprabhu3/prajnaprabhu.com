export const LinkWithPreview = ({ metadata, linkText }) => {
  const { title, imgUrl, href } = metadata;

  return (
    <div className="relative inline-block">
      <a className="relative peer" href={href}>
        {linkText}
      </a>
      <div className="absolute w-48 bg-slate-200 rounded-2xl shadow-xl p-4 peer-hover:visible invisible">
        <img
          src={imgUrl}
          className="rounded-xl h-36 w-full object-cover"
          loading="lazy"
        />
        <span className="text-sm font-semibold leading-tight mt-2">
          {title}
        </span>
      </div>
    </div>
  );
};
