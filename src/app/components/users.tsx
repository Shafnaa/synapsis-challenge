import { userType } from "@/types";
import UserSkeleton from "../skeletons/userSkeleton";
import { Suspense } from "react";
import User from "./user";
import { getUsers } from "../lib/data";

export default async function Users({
  query,
  currentPage,
  per_page,
}: {
  query: string;
  currentPage: number;
  per_page?: number;
}) {
  const usersData: userType[] = await getUsers({
    query: query,
    page: currentPage,
    per_page: per_page,
  });

  return (
    <>
      {usersData.length == 0 ? (
        <p className="pt-3">Not Available</p>
      ) : (
        <ul className="space-y-2 pt-3">
          {usersData.map((data) => {
            return (
              <Suspense fallback={<UserSkeleton />}>
                <User user={data} />
              </Suspense>
            );
          })}
        </ul>
      )}
    </>
  );
}
