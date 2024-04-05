import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { Payload } from "./types";
import { readPayloadJose } from "./helpers/jwt";

export async function middleware(request: NextRequest) {
    let cookie = cookies().get("Authorization")

    if(!cookie) {
        return NextResponse.json(
            {
                message: "Invalid Login"
            },
            {
                status: 401
            }
        )
    }

    const { value } = cookie

    const token = value.split(" ")[1]

    const newHeaders = new Headers(request.headers)

    const result: Payload = await readPayloadJose(token)

    newHeaders.set('x-user-id', result._id)
    newHeaders.set('x-user-email', result.email)
}
