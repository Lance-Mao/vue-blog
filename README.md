# VUE-BLOG

> A Vue.js project

# 问题记录

```
module.js:545
    throw err;
    ^

Error: Cannot find module 'debug'
    at Function.Module._resolveFilename (module.js:543:15)
```

``` bash

>"leanengine": "^3.2.0",由于版本较高，需要在package.json 中设置 engines.node 为 8.x以上才可以避免出现上述错误，由于没看npm文档被这个错误耽误一个多小时

# clone
git clone https://github.com/Lance-Mao/vue-blog.git

# enter
cd vue-blog

# install dependencies
npm install

# start
lean up
```