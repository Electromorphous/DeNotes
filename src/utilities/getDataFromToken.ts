import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

export const getDataFromToken = async (request: NextRequest) => {
  try {
    const token = request.cookies.get("token")?.value || "";
    const decodedData = jwt.verify(token, process.env.TOKEN_SECRET!);
    return decodedData;
  } catch (err: any) {
    console.error("Error occured while getting data from token");
    throw new Error(err.message);
  }
};
