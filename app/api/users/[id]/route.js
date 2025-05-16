import { NextResponse } from "next/server";

export function GET(_, { params }) {
  const { id } = params;
  console.log(id);
  return NextResponse.json({
    success: "successfully received id",
    id: id,
  });
}
