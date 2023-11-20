"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SearchBar from "./searchBar";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 bg-black z-10">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 border-b-[1px] border-white lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href={"/"} className="font-bold text-2xl">
            Saujana <span className="text-cyan-300">Shafi</span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <ul className="hidden lg:flex lg:gap-x-12">
          <li
            className={`flex justify-center items-center w-20 ${
              pathname === "/" ? "text-cyan-300 font-bold" : ""
            }`}
          >
            <Link href={"/"}>Home</Link>
          </li>
          <li
            className={`flex justify-center items-center w-20 ${
              pathname === "/blog" ? "text-cyan-300 font-bold" : ""
            }`}
          >
            <Link href={"/blog"}>Blog</Link>
          </li>
          <li
            className={`flex justify-center items-center w-20 ${
              pathname === "/user" ? "text-cyan-300 font-bold" : ""
            }`}
          >
            <Link href={"/user"}>User</Link>
          </li>
        </ul>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <SearchBar placeholder="Search..." />
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href={"/"} className="font-bold text-2xl">
              Saujana <span className="text-cyan-300">Shafi</span>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <ul className="space-y-2 py-6">
                <li
                  className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-50 ${
                    pathname === "/" ? "text-cyan-300 font-bold" : ""
                  }`}
                >
                  <Link href={"/"}>Home</Link>
                </li>
                <li
                  className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-50 ${
                    pathname === "/blog" ? "text-cyan-300 font-bold" : ""
                  }`}
                >
                  <Link href={"/blog"}>Blog</Link>
                </li>
                <li
                  className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-50 ${
                    pathname === "/user" ? "text-cyan-300 font-bold" : ""
                  }`}
                >
                  <Link href={"/user"}>User</Link>
                </li>
              </ul>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
      <div className="px-4 md:hidden">
        <SearchBar placeholder="Search..." />
      </div>
    </header>
  );
}
