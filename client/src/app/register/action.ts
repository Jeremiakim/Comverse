import { redirect } from "next/navigation";
const url = process.env.NEXT_PUBLIC_URL;
export const register = async (FormData: FormData) => {
  "use server";

  type MyResponse<T> = {
    statusCode: number;
    message?: string;
    data?: T;
    error?: string;
  };

  const response = await fetch(
    `${url}apis/users`,

    {
      method: "POST",
      body: JSON.stringify({
        name: FormData.get("name"),
        username: FormData.get("username"),
        email: FormData.get("email"),
        password: FormData.get("password"),
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const responseJson: MyResponse<unknown> = await response.json();
  if (!response.ok) {
    let message =
      responseJson.error ?? "Something Wrong, Please Check Again Your Input";
    return redirect(`register?error=${message}`);
  }
  return redirect(`/login`);
};
