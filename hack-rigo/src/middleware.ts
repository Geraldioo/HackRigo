import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { Payload } from "./db/types";
import { readPayloadJose } from "./db/helpers/jwt";

export async function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/api/wishlists")) {
    let cookie = cookies().get("Authorization")?.value;

    if (!cookie) {
      return NextResponse.json(
        {
          message: "Invalid Login",
        },
        {
          status: 401,
        }
      );
    }

    const [type, token] = cookie.split(" ");

    if(type !== "Bearer"){
        return NextResponse.json(
            {
                error: "Invalid Token"
            },
            {
                status: 401
            }
        )
    }

    const decoded = await readPayloadJose<{
        _id: string,
        email: string,
    }>( token )

    console.log(decoded, "<<< DECODED >>>");
    
    const requestHeaders = new Headers(request.headers)
    requestHeaders.set("x-user-id", decoded._id)
    requestHeaders.set("x-user-email", decoded.email)

    const response = NextResponse.next({
      request: {
        headers: requestHeaders
      }
    })

    return response
  }

  if(request.nextUrl.pathname.startsWith("/wishlists")){
    const cookie = cookies().get("Authorization")?.value
    if(!cookie){
        request.nextUrl.pathname = "/account/login"
        return NextResponse.redirect(request.nextUrl)
    }
  }

  if(request.nextUrl.pathname.startsWith("/account/login")){
    const cookie = cookies().get("Authorization")?.value
    if(cookie){
        request.nextUrl.pathname = "/"
        return NextResponse.redirect(request.nextUrl)
    }
  }
}

export const config = {
    matcher: ["/api/wishlists", "/wishlists", "/account/login"]
}
