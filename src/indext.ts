import Koa from "koa";
import router from "./routes/routes";
import { testAuthController } from "./tests/auth.controller.test";
import dotenv from "dotenv";
import { Buffer } from "buffer"; // Import Buffer explicitly

dotenv.config();

const app = new Koa();

// logger

app.use(async (ctx: any, next: any) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.set('X-Response-Time', `${ms}ms`);
  const rt = ctx.response.get('X-Response-Time');
  console.log(`${ctx.method} ${ctx.url} - ${rt}`);
});

// x-response-time

app.use(async (ctx: any, next: any) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.set('X-Response-Time', `${ms}ms`);
});

// response

app.use(async (ctx: any) => {
  ctx.body = 'Hello World';
});

// Routes

app.use(router.routes());
app.use(router.allowedMethods());

// Listening to port

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server running on http://localhost:${process.env.PORT || 3000}`);
});