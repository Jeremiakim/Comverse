import {
  WishlistModel,
  createWishList,
  deleteWishlists,
  getWishlist,
} from "@/db/models/wishlist";
import { get } from "http";
import { ObjectId } from "mongodb";
import { NextRequest, NextResponse } from "next/server";

export type MyResponse<T> = {
  statusCode: number;
  message: string;
  data?: T;
};

export const GET = async (req: NextRequest) => {
  const userId = req.headers.get("x-user-id");

  const wishlist = await getWishlist(userId);

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
    const data = await req.json();
    const productId = data.productId;

    const userId = req.headers.get("x-user-id");
    if (!userId) {
      throw new Error("Unauthorized");
    }

    const createdWL = await createWishList(userId, productId);
    return NextResponse.json<MyResponse<unknown>>(
      {
        statusCode: 201,
        message: "Pong from GET /api/wishlist !",
        data: createdWL,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    console.log(error);
  }
};

export const DELETE = async (req: NextRequest) => {
  try {
    const data = await req.json();
    const productId = data.productId;
    // console.log(productId);

    const userId = req.headers.get("x-user-id");
    // console.log(userId);

    if (!userId) {
      throw new Error("Unauthorized");
    }

    const deletedWL = await deleteWishlists(userId, productId);
    console.log(deletedWL);

    return NextResponse.json<MyResponse<unknown>>(
      {
        statusCode: 201,
        message: "Pong from GET /api/wishlist !",
        data: deletedWL,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    console.log(error);
  }
};
