import { getProductBySlug } from "@/db/models/product";
import { NextRequest, NextResponse } from "next/server";

type MyResponse<T> = {
  statusCode: number;
  message?: string;
  data?: T;
  error?: string;
};

export const GET = async (
  req: NextRequest,
  { params }: { params: { slug: string } }
) => {
  let slug = params.slug;
  const product = await getProductBySlug(slug);

  return NextResponse.json<MyResponse<unknown>>(
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
