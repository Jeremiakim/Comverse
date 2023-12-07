import { getUsers } from "@/db/models/user";

export const GET = async () => {
  const users = await getUsers();
  console.log(users);

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

export const POST = () => {};
