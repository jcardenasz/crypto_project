import Router from "@koa/router";
import { authenticate } from "../controllers/auth.controllers/auth.controller";
import { get, getCode } from "../controllers/otp.controllers/otp.controller";

const router = new Router();

router.get("/get", get);
router.get("/getCode", getCode);
router.post("/authenticate", authenticate);

export default router;
