import { cookies, headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { readPayloadJose } from "./lib/jwt";

export const middleware = async (req: NextRequest) => {
  if (
    !req.url.includes("/api") &&
    !req.url.includes("_next/static") &&
    !req.url.includes("_next/image") &&
    !req.url.includes("favicon.ico")
  ) {
    console.log(req.method, req.url);
  }

  if (req.url.includes("/apis/wishlists")) {
    console.log("apis", req.url, "hello baru nii");
    const cookiesStore = cookies();

    const token = cookiesStore.get("token");

    if (!token) {
      return NextResponse.json({
        statusCode: 401,
        error: "Unauthorized",
      });
    }

    const tokenData = await readPayloadJose<{ id: string; email: string }>(
      token.value
    );

    const requestHeaders = new Headers(req.headers);
    requestHeaders.set("x-user-id", tokenData.id);
    requestHeaders.set("x-user-email", tokenData.email);

    return NextResponse.next({
      headers: requestHeaders,
    });
  }
  return NextResponse.next();
};
