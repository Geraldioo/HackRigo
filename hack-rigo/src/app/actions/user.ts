import { cookies } from "next/headers";
import { redirect } from "next/navigation";

// "use client"

export const handleRegisterAction = async (formData: FormData) => {
  "use server";
  const rawFormData = {
    username: formData.get("username"),
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  };
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/users/register`,
    {
      cache: "no-store",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(rawFormData),
    }
  );

  const result = await response.json();

  if (!response.ok) {
    return redirect(
      `${process.env.NEXT_PUBLIC_BASE_URL}/account/login?error=${result.message}`
    );
  }

  return redirect(
    `${process.env.NEXT_PUBLIC_BASE_URL}/account/login?success=registered`
  );
};

export const handleLoginAction = async (formData: FormData) => {
  "use server";

  const rawFormData = {
    email: formData.get("email"),
    password: formData.get("password"),
  };
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/users/login`,
    {
      cache: "no-store",
      method: "POST", 
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(rawFormData),
    }
  );

  const result = await response.json();

  if (!response.ok) {
    return redirect(
      `${process.env.NEXT_PUBLIC_BASE_URL}/account/login?error=${result.error}`
    );
  }

  console.log(result.data, "<< LOGIN >>");
  cookies().set("Authorization", `Bearer ${result.data.token}`);

  // return redirect(
  //   `${process.env.NEXT_PUBLIC_BASE_URL}/?succesed=registered`
  // );

 redirect("/")
};
