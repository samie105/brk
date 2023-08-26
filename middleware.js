import { NextResponse } from "next/server";

export function middleware(request) {
  const ck = request.headers.get("cookie");
  // console.log(ck);
  // Parse the cookies from the request headers
  //console.log(request.headers);
  const cookies = parseCookies(request.headers);
  //console.log(cookies);

  // Check if a token exists in the cookies
  const token = cookies.token;

  // If there's no token and the request path starts with or includes "/dashboard"
  if (!token && request.nextUrl.pathname.startsWith("/dashboard")) {
    console.log("not auth");
    // Redirect to the root route
    return NextResponse.redirect(new URL("/", request.url));
  }
  if (token && request.nextUrl.pathname === "/") {
    // Redirect to the root route
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  // If token exists or the route doesn't start with "/dashboard", continue as usual
  return NextResponse.next();
}

export const config = {
  matcher: "/:path*", // This matches all routes
};

function parseCookies(headers) {
  const cookieHeader = headers.get("cookie");
  const cookies = {};

  if (cookieHeader) {
    cookieHeader.split(";").forEach((cookie) => {
      const [name, value] = cookie.split("=").map((c) => c.trim());
      cookies[name] = value;
    });
  }

  return cookies;
}
