import { NextRequest, NextResponse } from "next/server";

export const config = {
  matcher: ["/:path*"],
};

export function middleware(request: NextRequest) {
//   if (request.nextUrl.pathname !== "/") {
    // return NextResponse.redirect(new URL("/", request.url));
//   }

  return NextResponse.next();
}
