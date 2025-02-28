import { generateHMAC } from "../../services/hmac.service";
import { generateOTP } from "../../services/otp.service";
import type { Context } from "koa";

const code = generateOTP();

export function get(ctx: Context): any {
    const Token = process.env.SECRETO ? generateHMAC(code, process.env.SECRETO) : console.log("ERROR: SECRET variable not found");
    return ctx.body = { OTP: code, Token: Token };
}

export function getCode(ctx: Context): any {
    return ctx.body = { OTP: code };
}