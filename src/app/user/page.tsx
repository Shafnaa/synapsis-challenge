import { Suspense } from "react";
import UsersSkeleton from "../skeletons/usersSkeleton";
import Users from "../components/users";
import Pagination from "../components/pagination";
import Link from "next/link";

export default async function UsersPage({
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
    <div className="py-8 px-4 md:px-8">
      <main className="w-full mx-auto md:w-[728px]">
        <div className="flex flex-row justify-between">
          <div className="flex flex-row items-center space-x-4">
            <h1 className="w-full font-bold text-lg">Users</h1>
            <Link
              href={`/user/create`}
              className="font-bold border border-cyan-300 rounded-lg py-1 px-3"
            >
              Create
            </Link>
          </div>
          <Pagination />
        </div>
        <Suspense fallback={<UsersSkeleton />}>
          <Users query={query} currentPage={currentPage} />
        </Suspense>
        <Pagination />
      </main>
    </div>
  );
}
