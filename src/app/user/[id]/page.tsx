// "use client";

import ProfileOption from "@/app/components/profileOption";
import UserPosts from "@/app/components/userPosts";
import UserProfile from "@/app/components/userProfile";
import BlogPostsSkeleton from "@/app/skeletons/blogPostsSkeleton";
import UserSkeleton from "@/app/skeletons/userSkeleton";
import Link from "next/link";
import { Suspense } from "react";

export default function UserDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="relative flex flex-col-reverse md:flex-row md:justify-evenly gap-4 py-12 px-4 md:px-8">
      <main className="w-full md:w-[728px]">
        <h1 className="w-full font-bold text-2xl">User Posts</h1>
        <Suspense fallback={<BlogPostsSkeleton />}>
          <UserPosts params={params} />
        </Suspense>
      </main>
      <div className="w-full flex flex-col space-y-2 text-white md:w-96">
        <Suspense fallback={<UserSkeleton />}>
          <UserProfile params={params} />
        </Suspense>
        <ProfileOption userId={params.id} />
      </div>
    </div>
  );
}
