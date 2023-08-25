import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

const PUBLIC_PATHS = ["/signup", "/login"];
const NORMAL_PATHS = ["/"];
const PRIVATE_PATHS = ["/profile "];

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const token = request.cookies.get("token")?.value || "";
  if (PUBLIC_PATHS.includes(path) && token) {
    return NextResponse.redirect(new URL("/", request.nextUrl));
  }
  if (!PUBLIC_PATHS.includes(path) && !token) {
    return NextResponse.redirect(new URL("/login", request.nextUrl));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/", "/profile", "/signup", "/login"],
};
