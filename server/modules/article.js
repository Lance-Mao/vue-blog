'use strict';

const AV = require('leanengine')

// AV.Object.extend('className') 所需的参数 className 则表示对应的表名
// 声明一个类型
const articleList = AV.Object.extend('ArticleList')

let PostModel = {}

PostModel.submitArticle = async(req, res) => {
    let _post = {
        title: req.body.title,
        content: req.body.content,
        abstract: req.body.abstract,
        author: req.body.author
    }

    if (!_post.title.trim() || !_post.content.trim()) {
        res.status(500).send('昵称和内容不可为空')
    }

    let myPost = new articleList();
    myPost.set('title', _post.title);
    myPost.set('content', _post.content);
    myPost.set('abstract', _post.abstract);
    myPost.set('author', _post.author);

    myPost.save().then(function(p) {
        console.log('objectId is ' + p.id);
        res.send(p.id + " -> post successfully" );
    }, function(error) {
        console.error(error);
        res.status(500).send(error)
    });

}

module.exports = PostModel
