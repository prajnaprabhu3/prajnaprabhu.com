import { PostMetadata } from "@/types/PostMetadata";
import Link from "next/link";

const PostPreview = (props: PostMetadata, id: number) => {
  return (
    <Link
      href={`blog/${props.slug}`}
      key={id}
      className="flex flex-col gap-2 -mt-4"
    >
      <h1 className="text-xl font-semibold">{props.title}</h1>
      <h4 className="text-zinc-500 text-sm">{props.subtitle}</h4>
      <p className="text-xs text-zinc-400 dark:text-zinc-600">{props.date}</p>
    </Link>
  );
};

export default PostPreview;
