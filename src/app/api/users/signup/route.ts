import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import { mailer } from "@/utilities/mailer";
import { tokenType } from "@/types/enums";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { name, email, password } = reqBody;

    // check if user with this email already exists
    if (await User.findOne({ email })) {
      return NextResponse.json(
        { message: "This email is already in use. Try to login." },
        { status: 400 }
      );
    }

    // hash password
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    const user = new User({ name, email, password: hashedPassword, notes: [] });
    const savedUser = await user.save();

    // send verification mail
    await mailer(email, tokenType.VERIFY_USER);

    return NextResponse.json(
      { message: "User created successfully", savedUser },
      { status: 201 }
    );
  } catch (err) {
    return NextResponse.json({ message: err }, { status: 500 });
  }
}
