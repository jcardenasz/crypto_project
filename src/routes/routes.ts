import Router from "@koa/router";
import { type Context } from "koa";
import { authenticate } from "../controllers/auth.controllers/auth.controller";
import { generateToken, getCode } from "../controllers/otp.controllers/otp.controller";

const router = new Router();

router.get("/", (ctx: Context) => { ctx.response.body = "BACKEND CRIPTO PORTAL SERVICE. STATUS: Running";});
router.post("/generateToken", generateToken);
router.get("/getCode", getCode);
router.post("/auth", authenticate);

export default router;
