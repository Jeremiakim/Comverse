import {
  WishlistModel,
  createWishList,
  getWishlist,
} from "@/db/models/wishlist";
import { NextRequest, NextResponse } from "next/server";

export type MyResponse<T> = {
  statusCode: number;
  message: string;
  data?: T;
};

export const GET = async () => {
  const wishlist = await getWishlist();

  return NextResponse.json<MyResponse<WishlistModel[]>>(
    {
      statusCode: 200,
      message: "Pong from GET /api/wishlist !",
      data: wishlist,
    },
    {
      status: 200,
    }
  );
};
// export const POST = async (req: NextRequest) => {
//   try {
//     const data = await req.json();
//     console.log(data);
//     const parsedData = userInput.safeParse(data);
//     if (!parsedData.success) {
//       throw parsedData.error;
//     }
//     await createUser(parsedData.data);

//     return NextResponse.json<MyResponse<unknown>>(
//       {
//         statusCode: 200,
//         message: "Pong from GET /api/wishlist !",
//         // data:,
//       },
//       {
//         status: 200,
//       }
//     );
//   } catch (error) {}
// };
