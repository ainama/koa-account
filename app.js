const Koa = require('koa');
const app = new Koa();


/* static */
const serve = require('koa-static');
app.use(serve('public'));


/* logger */
app.use(async (ctx, next) => {
  await next();
  const rt = ctx.response.get('X-Response-Time');
  console.log(`${ctx.method} ${ctx.url} - ${rt}`);
});


/* x-response-time */
app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.set('X-Response-Time', `${ms}ms`);
});


/* route */
const router = require('./router/test');
app.use(router.routes()).use(router.allowedMethods());


app.listen(3000);
