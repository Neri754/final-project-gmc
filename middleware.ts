import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("np_token")?.value;

  const protectedPaths = ["/profile", "/checkout", "/cart", "/dashboard"];

  const { pathname } = request.nextUrl;

  const isProtected = protectedPaths.some((path) => pathname.startsWith(path));

  if (isProtected && !token) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/profile/:path*",
    "/checkout/:path*",
    "/cart/:path*",
    "/dashboard/:path*",
  ],
};
