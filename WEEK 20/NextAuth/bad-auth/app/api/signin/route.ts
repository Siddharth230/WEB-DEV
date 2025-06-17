import jwt from 'jsonwebtoken';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const body = await req.json();

  const username = body.username;
  const password = body.password;

  const useId = 1;
  const token = jwt.sign({
    password
  }, "SECRET");

  return NextResponse.json({
    token
  })
}