import { NextResponse } from "next/server";
import { getAllCookies, getEnv } from "./utils/helper";

const defaultHeaders = {
  Accept: "application/json",
  "Content-Type": "application/json",
  "X-Requested-With": "XMLHttpRequest",
};

const authRoutes = ["/register", "/login", "/forgot-password"];

export const config = {
  matcher: [
    "/user/:path*",
    "/register",
    "/login",
    "/forgot-password",
    "/auth/reset-password",
  ],
};

export const middleware = async (req, res) => {
  const response = await fetch(`${getEnv("backendUrl")}/api/user`, {
    credentials: "include",
    headers: {
      ...defaultHeaders,
      Cookie: getAllCookies(req),
      origin: getEnv("appOrigin"),
    },
  });

  if (response.ok) {
    if (authRoutes.includes(req.nextUrl.pathname))
      return NextResponse.redirect(new URL("/user/dashboard", req.url));
  } else {
    if (req.nextUrl.pathname.startsWith("/user"))
      return NextResponse.redirect(new URL("/login", req.url));
  }
};
