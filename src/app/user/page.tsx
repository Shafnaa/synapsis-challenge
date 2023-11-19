import { Suspense } from "react";
import UsersSkeleton from "../skeletons/usersSkeleton";
import Users from "../components/users";
import Pagination from "../components/pagination";

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
          <h1 className="w-full font-bold text-lg">Users</h1>
          <Pagination />
        </div>
        <Suspense fallback={<UsersSkeleton />}>
          <Users query={query} currentPage={currentPage} />
        </Suspense>
      </main>
    </div>
  );
}
