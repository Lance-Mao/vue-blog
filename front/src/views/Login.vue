<template>
  <div class="loginWrapper">
      <div class="hd">
        <h2>博客登录</h2>
      </div>
      <div class="bd">
        <el-form :model="loginForm" :rules="loginRule" ref="loginForm">
          <el-form-item prop="userName">
            <el-input type="userName" v-model="loginForm.userName" placeholder="账号"></el-input>
          </el-form-item>
          <el-form-item prop="pwd">
            <el-input v-model="loginForm.pwd" placeholder="密码" type="password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('loginForm')" class="submitBtn">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class="ft">
        <router-link to="/register">还没有账号？马上注册</router-link>
      </div>
    </div>
</template>

<script>
import router from "../router"
export default {
  name: "login",
  data() {
    return {
      loginForm: {
        userName: "",
        pwd: ""
      },
      loginRule: {
        userName: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 3, max: 10, message: "长度在 3 到 16 个字符", trigger: "blur" }
        ],
        pwd: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 3, max: 20, message: "长度在 3 到 20 个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          var data = {
            username: this.loginForm.userName,
            password: this.loginForm.pwd
          };
          // doLogin(this, data)
          this.$store.dispatch("login", data);
          setTimeout(() => {
            let isLogin = this.$store.state.user.isLogin;
            if (isLogin) {
              sessionStorage.setItem(
                "username",
                this.$store.state.user.username
              );
              this.loginForm.pwd = "";
              router.push("/");
              this.$message({
                message: "登录成功!",
                type: "success"
              });
            } else {
              this.$message({
                message: "用户名或密码错误！",
                type: "warning"
              });
              return false;
            }
          }, 400);
        } else {
          return false;
        }
      });
    }
  }
};
</script>

<style lang="scss">
@import url(".././assets/login.scss");
</style>
