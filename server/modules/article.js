'use strict';

const AV = require('leanengine')

// 对Date的拓展，将Date转化为制定个事的String
// 例子：
// (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
// (new Date()).Format("yyyy-M-d:m:s.S") ==> 2006-7-2 8:9:4.18

Date.prototype.Format = function (fmt) {
    var o = {
        "M+": this.getMonth() + 1, //月份
        "d+": this.getDate(),
        "h+": this.getHours(),
        "m+": this.getMinutes(),
        "s+": this.getSeconds(),
        "q+": Math.floor((this.getMonth() + 3) / 3), // 季度
        "S": this.getMilliseconds() // 毫秒
    };
    if (/(y+)/.test(fmt))
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt))
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ?
                (o[k]) :
                (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;

}

// AV.Object.extend('className') 所需的参数 className 则表示对应的表名
// 声明一个类型
const articleList = AV.Object.extend('ArticleList')

let PostModel = {}

PostModel.submitArticle = async (req, res) => {
    let _post = {
        title: req.body.title,
        content: req.body.content,
        abstract: req.body.abstract,
        author: req.body.author,
        showPic: req.body.showPic
    }

    if (!_post.title.trim() || !_post.content.trim()) {
        res.status(500).send('昵称和内容不可为空')
    }

    console.log(_post)

    let myPost = new articleList();
    myPost.set('title', _post.title);
    myPost.set('content', _post.content);
    myPost.set('abstract', _post.abstract);
    myPost.set('author', _post.author);
    myPost.set('showPic', _post.showPic);

    myPost.save().then(function (p) {
        console.log('objectId is ' + p.id);
        res.send(p.id + " -> post successfully");
    }, function (error) {
        console.error(error);
        res.status(500).send(error)
    });
}

PostModel.getArticleList = async (req, res) => {
    const page = req.params.page || 1

    const queryTenContent = (page) => {
        const query = new AV.Query('ArticleList') // 创建查询实例
        query.descending('createdAt') // 创建时间->降序查询
        query.skip((page - 1) * 10) // 跳过指定项
        query.limit(10) // 限制返回项数量
        return query.find()
    }

    try {
        const data = await queryTenContent(page)

        if (data) {
            let arr = []
            for (let item of data) {
                let result = {}
                result.objectId = item.get('objectId')
                result.title = item.get('title')
                result.abstract = item.get('abstract')
                result.author = item.get('author')
                result.createdAt = item.get('createdAt').Format("yyyy-MM-dd hh:mm:ss")
                result.showPic = item.get('showPic')
                arr.push(result)
            }

            console.log(arr, '数据')
            let final_result = {};
            final_result.page = page;
            final_result.data = arr;
            res.send(final_result)
        } else {
            throw new Error('Can\'t find the data-Content')
        }
    } catch (err) {
        console.error(err)
    }
}

PostModel.getArticleById = async (req, res) => {
    const id = req.params.id

    const queryArticle = (id) => {
        const query = new AV.Query('ArticleList')
        return query.get(id).then(function (object) {
            return object
        })
    }

    try {
        const data = await queryArticle(id)

        let result = {}
        if (data) {
            result.objectId = data.get('objectId')
            result.title = data.get('title')
            result.content = data.get('content')
            result.author = data.get('author')
            result.createdAt = data.get('createdAt').Format("yyyy-MM-dd hh:mm:ss")
            res.send(result)
        } else {
            throw new Error('article is not found!')
        }
    } catch (error) {
        console.log(error)
    }
}

module.exports = PostModel
