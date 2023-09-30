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

    // create a JWT in the cookies of the user's browser so that
    // we can keep them logged in even after the frontend restarts
    const jwtTokenData = {
      id: user._id,
    };

    const jwt_auth_token = jwt.sign(jwtTokenData, process.env.JWT_AUTH_SECRET!);

    // add cookies with jwt_auth_token in the response
    response.cookies.set("jwt_auth_token", jwt_auth_token, {
      httpOnly: true,
      sameSite: "lax",
    });

    return response;
  } catch (err) {
    return NextResponse.json({ message: err }, { status: 500 });
  }
}
