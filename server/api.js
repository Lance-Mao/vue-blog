/**
 * 前后端路由接口配置中心
 * 所有 API 的路由
 */
'use strict';
const router = require('express').Router();

// 添加路由模块
const user = require('./modules/user');
const article = require('./modules/article')

// User
router.post('/login', user.login);
router.post('/register', user.register);

//Article
router.put('/submitArticle', article.submitArticle)
router.get('/getArticleList', article.getArticleList)

module.exports = router;
