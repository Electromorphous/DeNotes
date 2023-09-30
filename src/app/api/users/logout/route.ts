import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = NextResponse.json(
      { message: "Logout successful" },
      { status: 200 }
    );
    res.cookies.set("jwt_auth_token", "", { httpOnly: true, sameSite: "lax" });
    return res;
  } catch (err) {
    return NextResponse.json({ message: err }, { status: 500 });
  }
}
