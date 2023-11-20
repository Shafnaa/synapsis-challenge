"use server";

import { z } from "zod";

const token: string =
  "4bf974ca462cda78e5f882d8d4f4393f720b6e17608a6722ae0d5d5b7cb5c79d	";

const baseUrl: string = "https://gorest.co.in";

export async function getPosts({
  query,
  page,
}: {
  query: string;
  page: number;
}) {
  const res = await fetch(
    `${baseUrl}/public/v2/posts/?per_page=10&page=${page}&title=${query}`,
    {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to get posts");
  }

  return res.json();
}

export async function getPostsById({ id }: { id: string }) {
  const res = await fetch(`${baseUrl}/public/v2/posts/${id}`, {
    method: "GET",
    headers: { Authorization: `Bearer ${token}` },
  });

  if (!res.ok) {
    throw new Error("Failed to get posts");
  }

  return res.json();
}

export async function getUsers({
  query,
  page,
  per_page,
}: {
  query: string;
  page: number;
  per_page?: number;
}) {
  const res = await fetch(
    `${baseUrl}/public/v2/users/?per_page=${
      per_page ? per_page : "10"
    }&page=${page}&name=${query}`,
    {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to get posts");
  }

  return res.json();
}

export async function createUserAction(prevState: any, formData: any) {
  const schema = z.object({
    name: z.string().min(1),
    email: z.string().min(1),
    gender: z.string().min(1),
    status: z.string().min(1),
  });

  const parse = schema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    gender: formData.get("gender"),
    status: formData.get("status"),
  });

  if (!parse.success) {
    return { message: "Failed to create user" };
  }

  const data = parse.data;

  const res = await fetch(`${baseUrl}/public/v2/users/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    return { message: `Failed to create user` };
  }

  return { message: `Success` };
}

export async function getUserById({ id }: { id: string }) {
  const res = await fetch(`${baseUrl}/public/v2/users/${id}`, {
    method: "GET",
    headers: { Authorization: `Bearer ${token}` },
  });

  return res.json();
}

export async function editUserAction(prevState: any, formData: any) {
  const schema = z.object({
    name: z.string().min(1),
    email: z.string().min(1),
    gender: z.string().min(1),
    status: z.string().min(1),
  });

  const parse = schema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    gender: formData.get("gender"),
    status: formData.get("status"),
  });

  if (!parse.success) {
    return { message: "Failed to create user" };
  }

  const data = parse.data;

  const res = await fetch(`${baseUrl}/public/v2/users/${formData.get("id")}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    return { message: `Failed to edit user` };
  }

  return { message: `Success` };
}

export async function deleteUserAction(prevState: any, formData: any) {
  const res = await fetch(`${baseUrl}/public/v2/users/${formData.get("id")}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    return { message: "Failed to delete user" };
  }

  return { message: `Success` };
}

export async function getUserPosts({ id, page }: { id: string; page: string }) {
  const res = await fetch(
    `${baseUrl}/public/v2/users/${id}/posts?per_page=10&page=${page}`,
    {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    }
  );

  return res.json();
}

export async function getPostComments({ post_id }: { post_id: string }) {
  const res = await fetch(`${baseUrl}/public/v2/posts/${post_id}/comments`, {
    method: "GET",
    headers: { Authorization: `Bearer ${token}` },
  });

  return res.json();
}
