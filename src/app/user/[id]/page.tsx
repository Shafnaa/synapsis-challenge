// "use client";
import BlogPost from "@/app/components/blogPost";
import Comments from "@/app/components/comments";
import { GenderMale, GenderFemale } from "@/app/components/svg";
import { getUserById, getUserPosts } from "@/app/lib/data";
import BlogPostSkeleton from "@/app/skeletons/blogPostSkeleton";
import CommentSkeleton from "@/app/skeletons/commentSkeleton";
import { postType, userType } from "@/types";
import Link from "next/link";
import { Suspense } from "react";

export default async function UserDetailPage({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams?: {
    page?: string;
  };
}) {
  const currentPage = Number(searchParams?.page) || 1;
  const userData: userType = await getUserById({ id: params.id });
  const userPostsData: postType[] = await getUserPosts({
    id: params.id,
    page: `${currentPage}`,
  });

  const handleDelete = () => {};

  return (
    <div className="relative flex flex-col-reverse md:flex-row md:justify-evenly gap-4 py-12 px-4 md:px-8">
      <main className="w-full md:w-[728px]">
        <h1 className="w-full font-bold text-2xl">{userData.name}</h1>
        {userPostsData.length == 0 ? (
          <p className="pt-3">Not Available</p>
        ) : (
          <ul className="space-y-2 pt-3">
            {userPostsData.map((data) => {
              return (
                <Suspense fallback={<BlogPostSkeleton />}>
                  <BlogPost post={data} />
                </Suspense>
              );
            })}
          </ul>
        )}
      </main>
      <div className="w-full flex flex-col space-y-2 text-white md:w-96">
        <div className="h-32 w-32 rounded-full overflow-clip">
          {userData.gender == "male" ? <GenderMale /> : <GenderFemale />}
        </div>
        <h2 className="text-xl font-bold">
          {userData.name}
          {" - "}
          <span className="font-semibold">{userData.status}</span>
        </h2>
        <p>{userData.email}</p>
        <div className="flex flex-row justify-between">
          <Link
            href={`/user/${params.id}/edit`}
            className="w-[40%] flex justify-center items-center border border-cyan-300 rounded-xl font-bold py-2"
          >
            Edit
          </Link>
          <Link
            href={`/user/${params.id}/delete`}
            className="w-[40%] flex justify-center items-center border border-red-500 rounded-xl font-bold py-2"
          >
            Delete
          </Link>
        </div>
      </div>
    </div>
  );
}
