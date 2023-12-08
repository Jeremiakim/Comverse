import { createUser, getUsers } from "@/db/models/user";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

type MyResponse<T> = {
  statusCode: number;
  message?: string;
  data?: T;
  error?: string;
};

const userInput = z.object({
  name: z.string(),
  username: z
    .string({
      required_error: "username is required",
      invalid_type_error: "Username must be a string",
    })
    .min(1),
  email: z.string().min(1).email(),
  password: z.string().min(5),
});

export const GET = async (req: NextRequest) => {
  const users = await getUsers();

  console.log("INSIDE GET /api/users");
  console.log("x-user-id", req.headers.get("x-user-id"));
  console.log("x-user-email", req.headers.get("x-user-email"));
  console.log("x-custom-value", req.headers.get("x-custom-value"));

  return Response.json(
    {
      statusCode: 200,
      message: "Pong from GET /api/users !",
      data: users,
    },
    {
      status: 200,
    }
  );
};

export const POST = async (req: Request) => {
  try {
    const data = await req.json();

    const parsedData = userInput.safeParse(data);
    if (!parsedData.success) {
      throw parsedData.error;
    }
    await createUser(parsedData.data);
    return NextResponse.json<MyResponse<unknown>>(
      {
        statusCode: 201,
        message: "Success to Create Users !",
      },
      {
        status: 201,
      }
    );
  } catch (err) {
    if (err instanceof z.ZodError) {
      // console.log(err);

      const errPath = err.issues[0].path[0];
      const errMessage = err.issues[0].message;

      return NextResponse.json<MyResponse<never>>(
        {
          statusCode: 400,
          error: `${errPath} - ${errMessage}`,
        },
        {
          status: 400,
        }
      );
    }

    return NextResponse.json<MyResponse<never>>(
      {
        statusCode: 500,
        message: "Internal Server Error !",
      },
      {
        status: 500,
      }
    );
  }
};
