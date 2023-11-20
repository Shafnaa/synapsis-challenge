"use client";

import { useFormState } from "react-dom";
import { createUserAction } from "@/app/lib/data";

const initialState = {
  message: "",
};

export default function CreateUser() {
  const [state, formAction] = useFormState(createUserAction, initialState);

  return (
    <div className="py-8 px-4 md:px-8">
      <main className="w-full mx-auto md:w-[728px]">
        <h1 className="text-2xl font-bold">Create User</h1>
        <form action={formAction} className="w-full">
          <div className="w-full py-2">
            <label htmlFor="name" className="text-sm font-medium leading-6">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="w-full rounded-md border-0 py-1.5 pl-4 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-300 sm:text-sm sm:leading-6"
              placeholder="name..."
              required
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
              className="w-full rounded-md border-0 py-1.5 pl-4 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-300 sm:text-sm sm:leading-6"
              placeholder="email..."
              required
            />
          </div>
          <div className="w-full py-2">
            <label htmlFor="gender" className="text-sm font-medium leading-6">
              Gender
            </label>
            <select
              name="gender"
              id="gender"
              className="w-full rounded-md border-0 py-1.5 pl-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-300 sm:text-sm sm:leading-6"
              required
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
              className="w-full rounded-md border-0 py-1.5 pl-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-300 sm:text-sm sm:leading-6"
              required
            >
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>
          <div className="flex justify-end py-2">
            <input
              type="submit"
              className="border border-cyan-300 rounded-xl py-2 px-4"
            />
          </div>
          <p>{state?.message}</p>
        </form>
      </main>
    </div>
  );
}
