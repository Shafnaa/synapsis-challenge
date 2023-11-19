export default function BlogPostSkeleton() {
  return (
    <li className="animate-pulse flex flex-col gap-2 pb-4 border-b-[1px] border-gray-300 last:border-b-0 ">
      <div className="flex flex-row items-center gap-2">
        <div className="h-6 w-6 bg-slate-300 rounded-full"></div>
        <div className="h-4 w-1/2 bg-slate-300 rounded-full"></div>
      </div>
      <div className="h-5 w-3/4 bg-slate-500 rounded-full"></div>
      <div className="flex flex-col gap-2">
        <div className="h-4 w-full bg-slate-700 rounded-full"></div>
        <div className="h-4 w-full bg-slate-700 rounded-full"></div>
        <div className="h-4 w-1/2 bg-slate-700 rounded-full"></div>
      </div>
    </li>
  );
}
