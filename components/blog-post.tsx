import { Post } from "@/types/post";
import ReactMarkdown from "react-markdown";

export default function BlogPost({ post }: { post: Post }) {
  return (
    <article>
      <h1>{post.title}</h1>
      <div>{post.date}</div>
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </article>
  );
}
