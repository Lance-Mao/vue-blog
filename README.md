# VUE-BLOG

> A Vue.js project


``` bash
# clone
git clone https://github.com/Lance-Mao/vue-blog.git

# enter
cd vue-blog

# install dependencies
npm install

# start
lean up
```

# 问题记录

## 1、leanengine相关问题

```
module.js:545
    throw err;
    ^

Error: Cannot find module 'debug'
    at Function.Module._resolveFilename (module.js:543:15)
```

>"leanengine": "^3.2.0",由于版本较高，需要在package.json 中设置 engines.node 为 8.x以上才可以避免出现上述错误，由于没看npm文档被这个错误耽误两个多小时
### 建议使用官方安装示例
>npm install --save leanengine leancloud-storage@3 --save

### 文档
- [快速入门](https://leancloud.cn/docs/leanengine_quickstart.html)
- [网站托管开发指南](https://leancloud.cn/docs/leanengine_webhosting_guide-node.html)
- [云函数开发指南](https://leancloud.cn/docs/leanengine_cloudfunction_guide-node.html)
- [云引擎命令行工具使用详解](https://leancloud.cn/docs/leanengine_cli.html)
- [API 参考文档](https://github.com/leancloud/leanengine-node-sdk/blob/master/API.md)
