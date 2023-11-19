import { commentType } from "@/types";

export default function Comment({ comment }: { comment: commentType }) {
  return (
    <li className="flex flex-col gap-2 pb-4 border-b-[1px] border-gray-300 last:border-b-0 ">
      <div className="flex flex-row items-center gap-2">
        <p className="text-base font-bold">{comment.name}</p>
        <p>-</p>
        <p className="text-base">{comment.email}</p>
      </div>
      <p>{comment.body}</p>
    </li>
  );
}
