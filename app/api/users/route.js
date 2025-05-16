import { NextResponse } from "next/server";
import { users } from "@/app/util/db";

// export function GET() {
//   const data = users;
//   return NextResponse.json(data);
// }

export async function POST(request) {
  const body = await request.json();
  // const { name, email } = body;

  // // Check if the user already exists
  // const existingUser = users.find((user) => user.email === email);
  // if (existingUser) {
  //   return NextResponse.json(
  //     { message: "User already exists" },
  //     { status: 409 }
  //   );
  // }

  // // Create a new user
  // const newUser = {
  //   id: users.length + 1,
  //   name,
  //   email,
  // };
  // users.push(newUser);
  console.log("\nReceived data:", body);

  return NextResponse.json(
    { success: "Data received successfully" },
    { status: 200 }
  );
}
