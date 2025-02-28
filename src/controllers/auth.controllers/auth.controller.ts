import { generateHMAC } from "../../services/hmac.service";
import type { Context } from "koa";
import bodyParser from "koa-bodyparser";

export function authenticate(ctx: Context) {
    bodyParser()(ctx, async () => {});
    const secret = process.env.SECRETO;
    const { OTP, TOKEN } = ctx.request.body as { OTP: string; TOKEN: string };
    const newHMAC = secret ? generateHMAC(OTP, secret) : console.log("ERROR: SECRET variable not found");
    if (newHMAC === TOKEN) {
        return ctx.status = 200;
    }
    return ctx.status = 401;
}
