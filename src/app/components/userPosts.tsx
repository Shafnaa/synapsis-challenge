import BlogPost from "./blogPost";
import { getUserPosts } from "../lib/data";
import { postType } from "@/types";
import { Suspense } from "react";
import BlogPostSkeleton from "../skeletons/blogPostSkeleton";

export default async function UserPosts({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams?: {
    page?: string;
  };
}) {
  const currentPage = Number(searchParams?.page) || 1;
  const userPostsData: postType[] = await getUserPosts({
    id: params.id,
    page: `${currentPage}`,
  });

  return (
    <>
      {userPostsData.length == 0 ? (
        <p className="pt-3">Not Available</p>
      ) : (
        <ul className="space-y-2 pt-3">
          {userPostsData.map((data) => {
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
