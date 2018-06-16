const domain = require('domain');
const express = require('express')
const AV = require('leanengine');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const app = express();

// babel 编译
require('babel-core/register');

//导入各个模块
const apiRouter = require('./api')
//config
const config = require('./config')

app.use(express.static('public'));

// 使用 LeanEngine 中间件
app.use(AV.express());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cookieParser());

// 未处理异常捕获 middleware
app.use((req, res, next) => {
    let d = domain.create();
    d.add(req);
    d.add(res);
    d.on('error', (err) => {
      console.error('uncaughtException url=%s, msg=%s', req.url, err.stack || err.message || err);
      if (!res.finished) {
        res.statusCode = 500;
        res.setHeader('content-type', 'application/json; charset=UTF-8');
        res.end('uncaughtException');
      }
    });
    d.run(next);
  });
  
  // api配置
  app.use('/api', apiRouter);
  
  // 跨域支持
  app.all('/api/*', (req, res, next) => {
    const origin = req.headers.origin;
    if (config.whiteOrigins.indexOf(origin) !== -1) {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
      res.header('Access-Control-Allow-Credentials', true);
      res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS, DELETE');
    }
    next();
  });
  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

module.exports = app