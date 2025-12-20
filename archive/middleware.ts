import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const password = process.env.APP_PASSWORD || "";
  const cookieName = process.env.APP_COOKIE_NAME || "vibe_app_auth";

  // If no password is set, do not block (useful during setup)
  if (!password) return NextResponse.next();

  const { pathname } = req.nextUrl;

  // Allow login route + Next.js internal assets
  if (
    pathname.startsWith("/login") ||
    pathname.startsWith("/api/login") ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon.ico")
  ) {
    return NextResponse.next();
  }

  const cookie = req.cookies.get(cookieName)?.value;

  if (cookie === password) return NextResponse.next();

  const url = req.nextUrl.clone();
  url.pathname = "/login";
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
