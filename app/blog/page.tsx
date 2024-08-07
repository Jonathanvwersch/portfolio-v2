import { getSortedPostsData } from "@/lib/posts";
import BlogList from "@/components/blog-list";

export default function Blog() {
  const posts = getSortedPostsData();
  return (
    <>
      <h1 className="font-bold mb-4 text-gray-100">Blog</h1>
      <BlogList posts={posts} />
    </>
  );
}
