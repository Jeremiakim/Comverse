import { ProductModel, getProducts } from "@/db/models/product";
import { NextResponse } from "next/server";

export type MyResponse<T> = {
  statusCode: number;
  message: string;
  data: T;
};

export const GET = async () => {
  const products = await getProducts();

  return NextResponse.json<MyResponse<ProductModel[]>>(
    {
      statusCode: 200,
      message: "Pong from GET /api/products !",
      data: products,
    },
    {
      status: 200,
    }
  );
};
