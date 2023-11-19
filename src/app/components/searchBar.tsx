import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export default function SearchBar({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", "1");
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <div className="relative mt-2 rounded-full shadow-sm">
      <div className="h-full w-8 pointer-events-none absolute inset-y-0 left-0 flex items-center pl-1 text-gray-900">
        <img src="/media/svg/iconmonstr-magnifier-lined.svg" alt="search" />
      </div>
      <input
        className="block w-full rounded-full border-0 py-1.5 pl-10 pr-4 text-gray-900 bg-gray-300 placeholder:text-gray-800 focus:bg-white sm:text-sm sm:leading-6"
        placeholder={placeholder}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        defaultValue={searchParams.get("query")?.toString()}
      />
    </div>
  );
}
