import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
export async function middleware(req) {
  if (req.nextUrl.pathname === "/") {
    const session = await getToken({
      req,
      secret: process.env.JWT_SECRET,
      secureCookie: process.env.NODE_ENV === "production",
    });
    if (session) {
      const url = req.nextUrl.clone();
      url.pathname = "/";
      return NextResponse.rewrite(url);
    }

    if (!session) {
      const url = req.nextUrl.clone();
      url.pathname = "/home";
      return NextResponse.rewrite(url);
    }
  }

  if (req.nextUrl.pathname === "/home") {
    const session = await getToken({
      req,
      secret: process.env.JWT_SECRET,
      secureCookie: process.env.NODE_ENV === "production",
    });
    if (session) {
      const url = req.nextUrl.clone();
      url.pathname = "/";
      return NextResponse.rewrite(url);
    }

    if (!session) {
      const url = req.nextUrl.clone();
      url.pathname = "/home";
      return NextResponse.rewrite(url);
    }
  }

}
