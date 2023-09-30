import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { email, password } = reqBody;
    const user = await User.findOne({ email });

    // check if user exists
    if (!user) {
      return NextResponse.json(
        { message: "User does not exist" },
        { status: 400 }
      );
    }

    // check if password is correct
    const validatePassword = await bcryptjs.compare(password, user.password);
    if (!validatePassword) {
      return NextResponse.json(
        { message: "Invalid password" },
        { status: 400 }
      );
    }

    // create Nextjs response
    const response = NextResponse.json(
      { message: "Login successful", user: user },
      { status: 201 }
    );

    // const tokenData = {
    //   id: user._id,
    //   name: user.name,
    //   email,
    // };

    // const token = jwt.sign(tokenData, process.env.TOKEN_SECRET!, {
    //   expiresIn: "1d",
    // });

    // add cookies with token in the response
    // response.cookies.set("token", token, { httpOnly: true, sameSite: "lax" });

    return response;
  } catch (err) {
    return NextResponse.json({ message: err }, { status: 500 });
  }
}
