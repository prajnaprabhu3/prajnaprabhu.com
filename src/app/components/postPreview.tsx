import { PostMetadata } from "@/types/PostMetadata";
import Link from "next/link";

const PostPreview = (props: PostMetadata, id: number) => {
  return (
    <Link
      href={`blog/${props.slug}`}
      key={id}
      className="flex flex-col gap-1 -mt-4"
    >
      <h1 className="text-xl font-semibold">{props.title}</h1>
      <h4 className="text-zinc-500">{props.subtitle}</h4>
      <p className="text-sm text-zinc-400 dark:text-zinc-600">{props.date}</p>
    </Link>
  );
};

export default PostPreview;
