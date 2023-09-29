import { NextResponse, NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const isPublicPath = publicPaths.includes(path);
  const isPrivatePath = privatePaths.includes(path);

  // if path is neither public nor private then anyone can visit so carry on
  if (!isPublicPath && !isPrivatePath) {
    return NextResponse.next();
  }

  // checking if logged in or not by reading token
  const token = request.cookies.get("token")?.value || ""; // if token is found then return its value else return ""

  // if user wants a public path and they are logged in
  if (isPublicPath && !!token) {
    return NextResponse.redirect(new URL("/dashboard", request.nextUrl));
  }
  // if user wants a private path and they are logged out
  if (isPrivatePath && !token) {
    return NextResponse.redirect(new URL("/login", request.nextUrl));
  }
  // if any other case just carry on
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/",
    "/dashboard",
    "/profile",
    "/profile/:path*",
    "/signup",
    "/login",
    "/emailVerification",
    "/forgotPassword",
    "/passwordReset",
  ],
};

// these are paths which the user can visit only when logged out, cannot visit when logged in.
const publicPaths = [
  "/",
  "/login",
  "/signup",
  "/forgotPassword",
  "/passwordReset",
];

// these are paths which the user can visit only when logged in, cannot visit when logged out.
const privatePaths = ["/dashboard", "/profile"];
