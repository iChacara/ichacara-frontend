import { NextRequest, NextResponse } from "next/server";
import getCookie from "./hooks/useCookie";

export const config = {
  matcher: "/((?!api|static|.*\\..*|_next).*)",
};

export function middleware(request: NextRequest) {
  const token = getCookie("ichacara_token");
  const pathname = request.nextUrl.pathname;

  if (token) {
    if (pathname === "/" || pathname === "/criar-conta") {
      return NextResponse.redirect(new URL("/chacaras", request.url));
    }
  }

  if (!token) {
    if (pathname !== "/" && pathname !== "/criar-conta") {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  return NextResponse.next();
}
