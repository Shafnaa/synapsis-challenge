"use client";

import { useFormState, useFormStatus } from "react-dom";
import { editUserAction } from "@/app/lib/data";
import { userType } from "@/types";

const initialState = {
  message: "",
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      aria-disabled={pending}
      className="border border-cyan-300 rounded-xl py-2 px-4"
    >
      Submit
    </button>
  );
}

export default function EditForm({ userData }: { userData: userType }) {
  const [state, formAction] = useFormState(editUserAction, initialState);

  return (
    <form action={formAction} className="w-full">
      <div className="hidden w-full py-2">
        <label htmlFor="id" className="text-sm font-medium leading-6">
          Id
        </label>
        <input
          type="text"
          name="id"
          id="id"
          value={userData.id}
          readOnly
          className="w-full rounded-md border-0 py-1.5 pl-4 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-300 sm:text-sm sm:leading-6"
          placeholder="id..."
          required
        />
      </div>

      <div className="w-full py-2">
        <label htmlFor="name" className="text-sm font-medium leading-6">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          defaultValue={userData.name}
          className="w-full rounded-md border-0 py-1.5 pl-4 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-300 sm:text-sm sm:leading-6"
          placeholder="name..."
        />
      </div>

      <div className="w-full py-2">
        <label htmlFor="email" className="text-sm font-medium leading-6">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          defaultValue={userData.email}
          className="w-full rounded-md border-0 py-1.5 pl-4 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-300 sm:text-sm sm:leading-6"
          placeholder="email..."
        />
      </div>
      <div className="w-full py-2">
        <label htmlFor="gender" className="text-sm font-medium leading-6">
          Gender
        </label>
        <select
          name="gender"
          id="gender"
          defaultValue={userData.gender}
          className="w-full rounded-md border-0 py-1.5 pl-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-300 sm:text-sm sm:leading-6"
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
      <div className="w-full py-2">
        <label htmlFor="status" className="text-sm font-medium leading-6">
          Status
        </label>
        <select
          name="status"
          id="status"
          defaultValue={userData.status}
          className="w-full rounded-md border-0 py-1.5 pl-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-300 sm:text-sm sm:leading-6"
        >
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
      </div>
      <div className="flex justify-end py-2">
        <SubmitButton />
      </div>
      <p>{state?.message}</p>
    </form>
  );
}
