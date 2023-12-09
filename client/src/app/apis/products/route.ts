import { ProductModel, getProducts } from "@/db/models/product";
import { NextRequest, NextResponse } from "next/server";

export type MyResponse<T> = {
  statusCode: number;
  message: string;
  data: T;
};

export const GET = async (req: NextRequest) => {
  const url = new URL(req.url);

  // console.log(url);

  const page = parseInt(url.searchParams.get("page") || "1");

  const pageSize = parseInt(url.searchParams.get("pageSize") || "10");
  const search = url.searchParams.get("search") || "";

  const products = await getProducts(page, pageSize, search);

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
