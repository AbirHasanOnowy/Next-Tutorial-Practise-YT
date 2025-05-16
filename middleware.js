import { NextResponse } from "next/server";
export function middleware(request) {
  // Check if the request is for the /api/users route
  if (request.nextUrl.pathname.startsWith("/api/users")) {
    // Perform your middleware logic here
    console.log("\nMiddleware triggered for /api/users \n");

    // You can also modify the request or response if needed
    // For example, you can add a custom header to the request
    // return NextResponse.redirect(new URL("/login", request.url));
  }

  // Continue to the next middleware or route handler
  return NextResponse.next();
}

export const config = {
  // Apply this middleware to the /api/users route
  matcher: ["/api/users/:path*"],
};
