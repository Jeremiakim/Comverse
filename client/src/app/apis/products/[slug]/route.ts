import { ProductModel, getProductBySlug } from "@/db/models/product";
import { NextRequest, NextResponse } from "next/server";

export type MyResponse<T> = {
  statusCode: number;
  message?: string;
  data?: T;
  error?: string;
};

export const GET = async (
  _req: NextRequest,
  { params }: { params: { slug: string } }
) => {
  let slug = params.slug;
  const product = await getProductBySlug(slug);

  return NextResponse.json<MyResponse<ProductModel>>(
    {
      statusCode: 200,
      message: `Pong from GET /apis/products/${slug} !`,
      data: product,
    },
    {
      status: 200,
    }
  );
};
