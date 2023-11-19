import { userType } from "@/types";
import Link from "next/link";
import { GenderFemale, GenderMale } from "./svg";

export default function User({ user }: { user: userType }) {
  return (
    <li className="flex flex-col gap-2 text-white pb-4 border-b-[1px] border-gray-300 last:border-b-0 ">
      <div className="flex flex-row items-center gap-2">
        <div className="h-6 w-6 rounded-full overflow-clip">
          {user.gender == "male" ? <GenderMale /> : <GenderFemale />}
        </div>
        <Link
          href={`/user/${user.id}`}
          className="flex flex-row gap-2 text-base"
        >
          <p>{user.name}</p>
          <p>-</p>
          <p>{user.status}</p>
        </Link>
      </div>
      <p className="text-sm text-slate-200">{user.email}</p>
    </li>
  );
}
