import { comparePassword } from "@/db/helpers/bcrypt";
import { signToken } from "@/db/helpers/jwt";
import UserModel from "@/db/models/users";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { ZodError } from "zod";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const user = await UserModel.findUserByEmail(body.email);

    if (!user) {
      return NextResponse.json(
        {
          error: "Wrong Email / Password",
        },
        {
          status: 401,
        }
      );
    }

    const validPass = comparePassword(body.password, user.password);

    if (!validPass) {
      return NextResponse.json(
        {
          error: "Wrong Email / Password",
        },
        {
          status: 401,
        }
      );
    }

    const token = signToken({ _id: user._id, email: user.email });

    cookies().set("Authorization", `Bearer ${token}`);

    return NextResponse.json({
      data: { token },
    });
  } catch (error) {
    console.log(error, "<<< ERR FROM LOGIN >>");
    if (error instanceof ZodError) {
      const errMsg = error.errors[0] + " " + error.errors[0].message;

      return NextResponse.json(
        {
          error: errMsg,
        },
        { status: 401 }
      );
    }

    return NextResponse.json(
        {
            error: "Internal Server Error"
        },
        {
            status: 500
        }
    )
  }
}
