import { database } from "@/db/config/config";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const search = request.nextUrl.searchParams;

    const query = search.get("search");

    const data = await database
      .collection("products")
      .find({
        name: {
          $regex: query,
          $options: "i",
        },
      })
      .toArray();

    if (!data) {
      return NextResponse.json(
        {
          message: "Data not found",
        },
        {
          status: 404,
        }
      );
    }
    return NextResponse.json(
      {
        data: data,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Internal server error",
      },
      {
        status: 500,
      }
    );
  }
}
