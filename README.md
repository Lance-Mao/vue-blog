# VUE-BLOG

> [线上预览地址](http://mlwblog.leanapp.cn/)

> Vue + LeanCloud 搭建的博客系统


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
> 前端部署请参考front/README.md

> 详细请参考[LeanCloud文档](https://leancloud.cn/docs/index.html)

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


## 2、项目部署相关问题

>为了提供诸如图像、CSS 文件和 JavaScript 文件之类的静态文件，请使用 Express 中的 express.static 内置中间件函数。
将包含静态资源的目录的名称传递给 express.static 中间件函数，以便开始直接提供这些文件。

本项目前端构建完成之后，会把文件打包放在根目录下面的dist目录下

```javascript
app.use(express.static('dist'));
```

设置输出路径是在config/index.js中
```javascript
  build: {
    // Template for index.html
    index: path.resolve(__dirname, '../../dist/index.html'),

    // Paths
    assetsRoot: path.resolve(__dirname, '../../dist'),
  }
```

# 项目截图

## 首页
![image.png](https://upload-images.jianshu.io/upload_images/5207977-e6ed89592dffe1dd.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


![image.png](https://upload-images.jianshu.io/upload_images/5207977-e04bb502a76214cd.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## 文章详情页
![image.png](https://upload-images.jianshu.io/upload_images/5207977-335689b6a0316eef.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## 写文章页面
![image.png](https://upload-images.jianshu.io/upload_images/5207977-3a0ad794493b6ccf.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

文章分类和个人中心待开发