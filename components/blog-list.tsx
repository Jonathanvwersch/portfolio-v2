import Link from "next/link";
import { Post } from "@/types/post";

export default function BlogList({
  posts,
}: {
  posts: Omit<Post, "content">[];
}) {
  if (posts.length === 0) {
    return <p>Coming soon. Maybe. One day.</p>;
  }
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.slug}>
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
          <br />
          <small>{post.date}</small>
        </li>
      ))}
    </ul>
  );
}
