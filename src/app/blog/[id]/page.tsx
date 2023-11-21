import Comments from "@/app/components/comments";
import { GenderFemale, GenderMale } from "@/app/components/svg";
import { getPostsById, getUserById } from "@/app/lib/data";
import CommentSkeleton from "@/app/skeletons/commentSkeleton";
import { postType, userType } from "@/types";
import Link from "next/link";
import { Suspense } from "react";

export default async function BlogDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const postData: postType = await getPostsById({ id: params.id });
  const userData = await getUserById({ id: `${postData.user_id}` });

  return (
    <div className="py-8 px-4 md:px-8">
      <main className="w-full flex flex-col gap-4 mx-auto md:w-[728px]">
        <h1 className="text-3xl font-extrabold bg-slate-900">
          {postData.title}
        </h1>
        {userData.message === "Resource not found" ? (
          <div className="flex flex-row items-center gap-2">
            <div className="h-16 w-16 bg-slate-300 rounded-full"></div>
            <div className="flex flex-col justify-evenly text-xl">
              <div className="flex flex-row gap-2 font-semibold">
                <p>N/a</p>
                <p>-</p>
                <p>N/a</p>
              </div>
              <p>N/a</p>
            </div>
          </div>
        ) : (
          <Link
            href={`/user/${userData.id}`}
            className="flex flex-row items-center gap-2"
          >
            <div className="h-16 w-16 rounded-full overflow-clip">
              {userData.gender == "male" ? <GenderMale /> : <GenderFemale />}
            </div>
            <div className="flex flex-col justify-evenly">
              <div className="flex flex-row gap-2 font-semibold text-xl">
                <p>{userData.name}</p>
                <p>-</p>
                <p>{userData.status}</p>
              </div>
              <p className="text-base">{userData.email}</p>
            </div>
          </Link>
        )}
        <p>{postData.body}</p>
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-bold">Comments</h2>
          <Suspense fallback={<CommentSkeleton />}>
            <Comments post_id={`${postData.id}`} />
          </Suspense>
        </div>
      </main>
    </div>
  );
}
