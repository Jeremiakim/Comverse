import { cookies } from "next/headers";
import { NextRequest } from "next/server";

export const middleware = async (req: NextRequest) => {
  if (
    !req.url.includes("/api") &&
    !req.url.includes("_next/static") &&
    !req.url.includes("_next/image") &&
    !req.url.includes("favicon.ico")
  ) {
    // console.log(req.method, req.url, "syibal");
  }

  console.log(req.url);

  if (req.url.includes("/apis")) {
    console.log("apis", req.url, "hello baru nii");
  }
  //   console.log(req.url, 5555555555555);
};
// export const config = {
//   matcher: ["/login/:path*"],
// };
