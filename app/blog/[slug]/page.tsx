import { getPostData, getSortedPostsData } from "@/lib/posts";
import BlogPost from "@/components/blog-post";

export default function Post({ params }: { params: { slug: string } }) {
  const post = getPostData(params.slug);
  return <BlogPost post={post} />;
}

export function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}
