"use server";
import { getUserByEmail } from "@/db/models/user";
import { compareText } from "@/db/utils/hash";
import { createToken } from "@/lib/jwt";
import { redirect } from "next/navigation";
import { z } from "zod";
import { cookies } from "next/headers";
const url = process.env.NEXT_PUBLIC_URL;

export const login = async (formData: FormData) => {
  const loginInput = z.object({
    email: z.string().email(),
    password: z.string(),
  });
  const email = formData.get("email");
  const password = formData.get("password");

  const parsedData = loginInput.safeParse({
    email,
    password,
  });
  if (!parsedData.success) {
    const errPath = parsedData.error.issues[0].path[0];
    const errMessage = parsedData.error.issues[0].message;
    const errFinalMessage = `${errPath} - ${errMessage}`;

    return redirect(`${url}login?error=${errFinalMessage}`);
  }
  const user = await getUserByEmail(parsedData.data.email);
  if (!user || !compareText(parsedData.data.password, user.password)) {
    return redirect(`${url}login?error=Invalid%20Email%20Or%20Password`);
  }

  const payload = {
    id: user._id,
    email: user.email,
    name: user.name,
  };

  const token = createToken(payload);

  cookies().set("token", token, {
    httpOnly: true,
    secure: false,
    expires: new Date(Date.now() + 1000 * 60 * 60),
    sameSite: "strict",
  });
  return redirect(`${url}`);
};
