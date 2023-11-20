import BlogPost from "./blogPost";
import { getPosts } from "../lib/data";
import { postType } from "@/types";
import { Suspense } from "react";
import BlogPostSkeleton from "../skeletons/blogPostSkeleton";

export default async function BlogPosts({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const blogPostsData: postType[] = await getPosts({
    query: query,
    page: currentPage,
  });

  return (
    <>
      {blogPostsData.length == 0 ? (
        <p className="pt-3">Not Available</p>
      ) : (
        <ul className="space-y-2 pt-3">
          {blogPostsData.map((data) => {
            return (
              <Suspense fallback={<BlogPostSkeleton />} key={data.id}>
                <BlogPost post={data} />
              </Suspense>
            );
          })}
        </ul>
      )}
    </>
  );
}
