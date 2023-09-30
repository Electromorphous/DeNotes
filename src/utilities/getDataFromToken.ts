import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

export const getDataFromToken = async (request: NextRequest) => {
  try {
    const jwt_auth_token = request.cookies.get("jwt_auth_token")?.value || "";
    const decodedData = jwt.verify(
      jwt_auth_token,
      process.env.JWT_AUTH_SECRET!
    );
    return decodedData;
  } catch (err: any) {
    console.error("Error occured while getting data from jwt_auth_token");
    throw new Error(err.message);
  }
};
