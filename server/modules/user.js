const AV = require("leanengine")

// AV.Object.extend('className') 所需的参数 className 则表示对应的表名
// 声明一个类型

const User = AV.Object.extend('User')

let UserModel = {}


UserModel.login = async (req, res) => {
    const _user = {
        username: req.body.username,
        password: req.body.password
    }

    if (!_user.username.trim() && !_user.password.trim()) {
        res.status(500).send('用户名和密码不可为空')
    }

    AV.User.logIn(_user.username, _user.password).then(function (loginedUser) {
        console.log(loginedUser);
        res.send(loginedUser);
    }, function (error) {
        console.error(error);
        res.status(500).send(error)
    });
}

UserModel.register = async (req, res) => {
    let user = new AV.User();
    user.setUsername(req.body.username)
    user.setPassword(req.body.password)
    user.signUp().then(function (register) {
        console.log(register)
        res.send(register);
    }, function (error) {
        console.log(error)
        res.status(500).send(error)
    })
}

module.exports = UserModel