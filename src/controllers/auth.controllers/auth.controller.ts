import { generateHMAC } from "../../services/hmac.service";
import type { Context } from "koa";
import { codeOTP } from "../otp.controllers/otp.controller";

interface propsAuth {
    MAC: string;
    TOKEN: string;
}

export async function authenticate(ctx: Context) {
    const secret = process.env.SECRET;
    const { MAC, TOKEN } = await (ctx.request.body as Promise<propsAuth>);
    console.log("user MAC: ",MAC,"\nUser HMAC Token: ",TOKEN,"\n");
    const newHMAC = secret ? generateHMAC(codeOTP + MAC, secret) : console.log("ERROR: SECRET variable not found");
    console.log("newMac: ",newHMAC,"\n");
    if (newHMAC === TOKEN) {
        console.log("Authenticated");
        return ctx.status = 200;
    }
    console.log("Not authenticated");
    return ctx.status = 401;
}
