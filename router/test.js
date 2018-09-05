const Router = require('koa-router');
const router = new Router();
const fs = require('fs');

var query = require('../server/testmysql');

const main = ctx => {
  ctx.response.redirect('/test/1');  // 重定向
};

const test = ctx => {
  ctx.response.type = 'html';
  ctx.response.body = fs.createReadStream('./public/htm/test.htm');
};

router.get('/', main);
router.get('/test', test);
router.get('/test/*', test);

router.get('/api/test/list', async (ctx, next) => {
  let data = await query('select * from add_table');
  ctx.response.body = { code: 10000, data: data };
});

router.get('/api/test/add', async (ctx, next) => {
  let data = await query('insert into add_table (content) values (content)');
  ctx.response.body = { code: 10000, data: data };
});

module.exports = router;
