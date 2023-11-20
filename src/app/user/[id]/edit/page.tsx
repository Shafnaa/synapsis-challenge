import { useFormState } from "react-dom";
import { editUserAction, getUserById } from "@/app/lib/data";
import EditForm from "@/app/components/editForm";

const initialState = {
  message: null,
};

export default async function editUserPage({
  params,
}: {
  params: { id: string };
}) {
  const userData = await getUserById({ id: params.id });

  return (
    <div className="py-8 px-4 md:px-8">
      <main className="w-full mx-auto md:w-[728px]">
        <h1 className="text-2xl font-bold">Create User</h1>
        <EditForm userData={userData} />
      </main>
    </div>
  );
}
