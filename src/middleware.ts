import { NextRequest, NextResponse } from "next/server";
import getCookie from "./hooks/useCookie";
import { getUser } from "./services/user";

export const config = {
  matcher: "/((?!api|static|.*\\..*|_next).*)",
};

export async function middleware(request: NextRequest) {
  const token = getCookie("ichacara_token");
  const pathname = request.nextUrl.pathname;

  const publicRoutes = ["/", "/criar-conta"];

  if (token) {
    const user = await getUser();

    if (user) {
      if (publicRoutes.includes(pathname)) {
        return NextResponse.redirect(new URL("/chacaras", request.url));
      }

      const protectedRoutes = {
        lessor: ["/anunciar-chacara"],
      };

      if (protectedRoutes.lessor.includes(pathname) && user.type !== "lessor") {
        return NextResponse.redirect(new URL("/chacaras", request.url));
      }

      return NextResponse.next();
    }
  }

  if (!token && !publicRoutes.includes(pathname)) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}
