import { PostMetadata } from "@/types/PostMetadata";
import Link from "next/link";

import { BsArrowRightShort } from "react-icons/bs";

const PostPreview = (props: PostMetadata, id: number) => {
  return (
    <Link
      href={`blog/${props.slug}`}
      key={id}
      className="flex flex-col gap-2 -mt-4 group rounded-md p-5 hover:dark:bg-[#1a1b1c] hover:bg-[#ebe8e8]"
    >
      <div className="flex items-center gap-2">
        <h1 className="text-xl font-semibold">{props.title}</h1>
        <BsArrowRightShort className="hidden group-hover:block group-hover:text-2xl" />
      </div>
      <h4 className="text-zinc-500 text-sm">{props.subtitle}</h4>
      <p className="text-xs text-zinc-400 dark:text-zinc-600">{props.date}</p>
    </Link>
  );
};

export default PostPreview;
