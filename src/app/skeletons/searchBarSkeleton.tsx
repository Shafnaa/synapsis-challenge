import Image from "next/image";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export default function SearchBarSkeleton({
  placeholder,
}: {
  placeholder: string;
}) {
  return (
    <div className="relative mt-2 rounded-full shadow-sm">
      <div className="h-full w-8 pointer-events-none absolute inset-y-0 left-0 flex items-center pl-1 text-gray-900">
        <Image
          src="/media/svg/iconmonstr-magnifier-lined.svg"
          alt="search"
          width={32}
          height={32}
        />
      </div>
      <input
        className="animate-pulse block w-full rounded-full border-0 py-1.5 pl-10 pr-4 text-gray-900 bg-gray-300 placeholder:text-gray-800 focus:bg-white sm:text-sm sm:leading-6"
        placeholder={placeholder}
      />
    </div>
  );
}
