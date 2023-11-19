"use client";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

export default function Pagination() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

  const createPageUrl = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  return (
    <div className="flex flex-row justify-between items-center space-x-2">
      {currentPage == 1 ? (
        <div className="text-slate-700 border border-slate-700 rounded-lg py-2 px-4">
          <ArrowLeftIcon width={"16px"} height={"16px"} />
        </div>
      ) : (
        <Link
          href={createPageUrl(currentPage - 1)}
          className="border border-cyan-300 rounded-lg py-2 px-4"
        >
          <ArrowLeftIcon width={"16px"} height={"16px"} />
        </Link>
      )}
      <p className="w-4 text-center">{currentPage}</p>
      <Link
        href={createPageUrl(currentPage + 1)}
        className="border border-cyan-300 rounded-lg py-2 px-4"
      >
        <ArrowRightIcon width={"16px"} height={"16px"} />
      </Link>
    </div>
  );
}
