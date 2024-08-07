import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Post } from "@/types/post";

const postsDirectory = path.join(process.cwd(), "posts");

function ensurePostsDirectoryExists(): boolean {
  if (!fs.existsSync(postsDirectory)) {
    console.warn("Posts directory does not exist. Creating it now.");
    try {
      fs.mkdirSync(postsDirectory, { recursive: true });
      return true;
    } catch (error) {
      console.error("Failed to create posts directory:", error);
      return false;
    }
  }
  return true;
}

export function getSortedPostsData(): Omit<Post, "content">[] {
  if (!ensurePostsDirectoryExists()) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);

  if (fileNames.length === 0) {
    console.warn("No posts found in the posts directory.");
    return [];
  }

  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, "");
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const matterResult = matter(fileContents);

      if (!matterResult.data.title || !matterResult.data.date) {
        console.warn(
          `Post ${fileName} is missing title or date in frontmatter.`
        );
        return null;
      }

      return {
        slug,
        title: matterResult.data.title,
        date: matterResult.data.date,
      };
    })
    .filter((post): post is Omit<Post, "content"> => post !== null);

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostData(slug: string): Post | null {
  if (!ensurePostsDirectoryExists()) {
    return null;
  }

  const fullPath = path.join(postsDirectory, `${slug}.md`);

  if (!fs.existsSync(fullPath)) {
    console.warn(`Post file ${slug}.md does not exist.`);
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const matterResult = matter(fileContents);

  if (!matterResult.data.title || !matterResult.data.date) {
    console.warn(`Post ${slug} is missing title or date in frontmatter.`);
    return null;
  }

  return {
    slug,
    title: matterResult.data.title,
    date: matterResult.data.date,
    content: matterResult.content,
  };
}
