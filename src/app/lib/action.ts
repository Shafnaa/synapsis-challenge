"use server";

export async function createUserAction(formData: FormData) {
  const rawFormData = {
    name: formData.get("name"),
    email: formData.get("email"),
    gender: formData.get("gender"),
    status: formData.get("status"),
  };

  console.log(rawFormData);
}
