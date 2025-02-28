// OTP: 698685
// HMAC: db1af24d56aba4971b387547dae857764dd72aSc9ebScbdd2eb3a317a01Saebe
import { authenticate } from "../controllers/auth.controllers/auth.controller";
import type { Context } from "koa";

export function testAuthController(): void {

    const ctx: Context = {
    // mock the necessary properties of the Context object
    request: {
        body: {
        otp: '698685',
        hmac: 'db1af24d56aba4971b387547dae857764dd72aSc9ebScbdd2eb3a317a01Saebe'
        }
    },
    response: {}
    } as Context;

    console.log(authenticate(ctx)); // 401
}