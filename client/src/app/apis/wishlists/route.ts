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
export const POST = async (req: NextRequest) => {
  try {
    console.log("ini masuk");
    // console.log(req.headers);
    const data = await req.json();
    const productId = data.productId;

    const userId = req.headers.get("x-user-id");
    if (!userId) {
      throw new Error("Unauthorized");
    }

    // const data = await req.json();
    // console.log(data);
    const createdWL = await createWishList(userId, productId);
    return NextResponse.json<MyResponse<unknown>>(
      {
        statusCode: 200,
        message: "Pong from GET /api/wishlist !",
        data: createdWL,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.log(error);
  }
};
