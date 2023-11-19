import { postType } from "@/types";
import Link from "next/link";
import { getUserById } from "../lib/data";
import { GenderFemale, GenderMale } from "./svg";

export default async function BlogPost({ post }: { post: postType }) {
  let userData = await getUserById({ id: `${post.user_id}` });

  return (
    <li className="flex flex-col gap-2 pb-4 text-white border-b-[1px] border-gray-300 last:border-b-0">
      <div className="flex flex-row items-center gap-2">
        {userData.message === "Resource not found" ? (
          <>
            <div className="h-6 w-6 bg-slate-300 rounded-full"></div>
            <p className="text-sm">Not Available</p>
          </>
        ) : (
          <>
            <div className="h-6 w-6 rounded-full overflow-clip">
              {userData.gender == "male" ? <GenderMale /> : <GenderFemale />}
            </div>
            <Link href={`/user/${userData.id}`} className="text-sm">
              {userData.name}
            </Link>
          </>
        )}
      </div>
      <Link
        href={`/blog/${post.id}`}
        className="font-semibold text-xl text-white"
      >
        {post.title}
      </Link>
      <div className="flex flex-col gap-2">
        <p className="text-base text-slate-200">{post.body}</p>
      </div>
    </li>
  );
}
