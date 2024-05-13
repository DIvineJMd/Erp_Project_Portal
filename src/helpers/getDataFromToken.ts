import { NextRequest } from "next/server";
import jwt, { JwtPayload } from "jsonwebtoken";

export const getDataFromToken = (request: NextRequest): string => {
    try {
        const token = request.cookies.get("token")?.value || '';
        const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET!) as JwtPayload;
        return JSON.stringify(decodedToken);
    } catch (error: any) {
        console.error("Token Verification Error:", error.message); // Logging error message for debugging
        throw new Error("Token verification failed");
    }
}
