"use client";

import { useFormState } from "react-dom";
import { deleteUserAction } from "@/app/lib/data";
import Link from "next/link";

const initialState = {
  message: null,
};

export default function ProfileOption({ userId }: { userId: number | string }) {
  const [state, formAction] = useFormState(deleteUserAction, initialState);

  return (
    <>
      <form action={formAction} className="flex flex-row justify-between">
        <div className="hidden w-full py-2">
          <label htmlFor="id" className="text-sm font-medium leading-6">
            Id
          </label>
          <input
            type="text"
            name="id"
            id="id"
            value={userId}
            readOnly
            className="w-full rounded-md border-0 py-1.5 pl-4 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-300 sm:text-sm sm:leading-6"
            placeholder="id..."
            required
          />
        </div>
        <Link
          href={`/user/${userId}/edit`}
          className="w-[40%] flex justify-center items-center border border-cyan-300 rounded-xl font-bold py-2"
        >
          Edit
        </Link>
        <input
          type="submit"
          value={"Delete"}
          className="w-[40%] flex justify-center items-center border border-red-500 rounded-xl font-bold py-2"
        />
      </form>
      <p>{state?.message}</p>
    </>
  );
}
