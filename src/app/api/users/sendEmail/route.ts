import { connect } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import { mailer } from "@/utilities/mailer";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { email, emailType } = reqBody;

    // send mail
    await mailer(email, emailType);

    return NextResponse.json(
      { message: "Email has been sent" },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json({ message: err }, { status: 500 });
  }
}
