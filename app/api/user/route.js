import dbConnect from '../../../lib/db';
import { NextResponse } from 'next/server';
import User from "../../../models/User";
import bcrypt from 'bcryptjs';

export async function GET() {
  await dbConnect();

  try {
    const users = await User.find({});
    return NextResponse.json(users, { status: 200 });
  } catch (err) {
    console.error("Failed to fetch users:", err.message);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}



export async function POST(request) {
  await dbConnect();

  try {
    const { fullName, email, password, confirmPassword } = await request.json();

    if (password !== confirmPassword) {
      return NextResponse.json({ message: "Passwords do not match" }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const newUser = await User.create({
      fullName,
      email,
      password: hashedPassword,
    });

    return NextResponse.json(newUser, { status: 201 });
  } catch (err) {
    console.error("Failed to create user:", err);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}

