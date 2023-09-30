import { NextRequest, NextResponse } from "next/server";
import { getDataFromToken } from "@/utilities/getDataFromToken";
import User from "@/models/userModel";
import { connect } from "@/dbConfig/dbConfig";

connect();

export async function GET(request: NextRequest) {
  try {
    const tokenData: any = await getDataFromToken(request);
    if (!tokenData) {
      return NextResponse.json({ message: "Token missing" }, { status: 404 });
    }
    const user = await User.findOne({ _id: tokenData.id }).select("-password");
    return NextResponse.json({ user }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: err }, { status: 500 });
  }
}
