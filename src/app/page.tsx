import { Suspense } from "react";
import BlogPostsSkeleton from "./skeletons/blogPostsSkeleton";
import UsersSkeleton from "./skeletons/usersSkeleton";
import BlogPosts from "./components/blogPosts";
import Users from "./components/users";
import Pagination from "./components/pagination";

export default async function Home({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;

  return (
    <div className="relative flex flex-col-reverse md:flex-row md:justify-evenly gap-4 py-12 px-4 md:px-8">
      <main className="w-full md:w-[728px]">
        <div className="flex flex-row justify-between">
          <h1 className="w-full font-bold text-lg">Blog Posts</h1>
          <Pagination />
        </div>
        {/* <BlogPostsSkeleton /> */}
        <Suspense fallback={<BlogPostsSkeleton />}>
          <BlogPosts query={query} currentPage={currentPage} />
        </Suspense>
      </main>
      <div className="w-full md:w-96">
        <div className="md:sticky md:top-32">
          <h1 className="w-full font-bold text-lg">Top Users</h1>
          {/* <UsersSkeleton /> */}
          <Suspense fallback={<UsersSkeleton />}>
            <Users query={query} currentPage={currentPage} per_page={5} />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
