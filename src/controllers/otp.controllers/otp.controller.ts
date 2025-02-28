import { generateHMAC } from "../../services/hmac.service";
import { generateOTP } from "../../services/otp.service";
import type { Context } from "koa";

export const codeOTP = generateOTP();

interface optProps {
    userMAC: string;
}

export function generateToken(ctx: Context): any {
    const userMAC = (ctx.request.body as optProps).userMAC;
    const Token = process.env.SECRET ? generateHMAC(codeOTP + userMAC, process.env.SECRET) : console.log("ERROR: SECRET variable not found");
    console.log("userMAC: ",userMAC,"\n")
    console.log("generated Token: ",Token,"\n")
    return ctx.response.body = { OTP: codeOTP, TOKEN: Token };
}

export function getCode(ctx: Context): any {
    return ctx.response.body  = { OTP: codeOTP };
}