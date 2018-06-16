// 所有的配置

'use strict';

let config = {

  // 服务端 host
  host: 'http://localhost:3000',

  // web 开发环境的 host
  webHost: 'http://localhost:8080',

  // 跨域白名单
  whiteOrigins: [
    'http://localhost:8080',
    'http://localhost:3000',
    // 以下两个是在 LeanCloud 中配置的 host，xxx 替换为自己的域名
    'http://mlwblog.leanapp.cn'
  ]
};

// 判断环境
switch (process.env.LC_APP_ENV) {

  // 当前环境为线上测试环境
  case 'stage':
    config.host = 'http://mlwblog.leanapp.cn';
    config.webHost = 'http://mlwblog.leanapp.cn';
    //支持线上测试环境的，采用下面的这种格式
    // config.webHost = 'http://stg-mlwblog.leanapp.cn';
  break;

  // 当前环境为线上正式运行的环境
  case 'production':
    config.host = 'http://mlwblog.leanapp.cn';
    config.webHost = 'http://mlwblog.leanapp.cn';
  break;
}

module.exports = config;
