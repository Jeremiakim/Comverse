import { cookies } from "next/headers";
import { NextRequest } from "next/server";

export const middleware = async (req: NextRequest) => {
  //   console.log(req, 5555555555555);

  if (
    !req.url.includes("/api") &&
    !req.url.includes("_next/static") &&
    !req.url.includes("_next/image") &&
    !req.url.includes("favicon.ico")
  ) {
    console.log(req.method, req.url);
  }
};
