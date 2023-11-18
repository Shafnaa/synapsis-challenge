"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SearchBar from "./searchBar";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="py-8 px-12">
      <div className="mx-auto flex flex-row justify-between">
        <Link href={"/"} className="font-bold text-2xl">
          Saujana <span className="text-cyan-300">Shafi</span>
        </Link>
        <div className="flex flex-row items-center gap-2 text-lg">
          <Link
            href={"/"}
            className={`${pathname === "/" ? "text-cyan-300 font-bold" : ""}`}
          >
            Home
          </Link>
          <Link
            href={"/blog"}
            className={`${
              pathname === "/blog" ? "text-cyan-300 font-bold" : ""
            }`}
          >
            Blog
          </Link>
          <Link
            href={"/user"}
            className={`${
              pathname === "/user" ? "text-cyan-300 font-bold" : ""
            }`}
          >
            User
          </Link>
        </div>
        <SearchBar />
      </div>
    </nav>
  );
}
