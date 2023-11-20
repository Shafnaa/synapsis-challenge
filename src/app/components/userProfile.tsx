import { userType } from "@/types";
import { getUserById } from "../lib/data";
import { GenderFemale, GenderMale } from "./svg";

export default async function UserProfile({
  params,
}: {
  params: { id: string };
}) {
  const userData: userType = await getUserById({ id: params.id });

  return (
    <>
      <div className="h-32 w-32 rounded-full overflow-clip">
        {userData.gender == "male" ? <GenderMale /> : <GenderFemale />}
      </div>
      <h2 className="text-xl font-bold">
        {userData.name}
        {" - "}
        <span className="font-semibold">{userData.status}</span>
      </h2>
      <p>{userData.email}</p>
    </>
  );
}
