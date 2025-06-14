import { NextRequest, NextResponse } from "next/server";
import prisma from "@/app/lib/db";

export async function POST(req: NextRequest) {
  const data = await req.json();

  console.log(data);

  const response = await prisma.user.create({
    data: {
      username: data.username,
      password: data.password
    }
  })
  console.log(response);

  return NextResponse.json({
    message: "You have been Signed up."
  });
}
