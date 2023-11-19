export default function CommentSkeleton() {
  return (
    <li className="animate-pulse flex flex-col gap-2 pb-4 border-b-[1px] border-gray-300 last:border-b-0 ">
      <div className="flex flex-row items-center gap-2">
        <div className="h-4 w-1/4 bg-slate-300 rounded-full"></div>
        <p>-</p>
        <div className="h-4 w-1/2 bg-slate-300 rounded-full"></div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="h-4 w-full bg-slate-700 rounded-full"></div>
        <div className="h-4 w-full bg-slate-700 rounded-full"></div>
        <div className="h-4 w-1/2 bg-slate-700 rounded-full"></div>
      </div>
    </li>
  );
}
