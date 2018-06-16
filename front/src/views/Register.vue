<template>
  <div class="loginWrapper">
    <div class="hd">
      <h2>博客注册</h2>
    </div>
    <div class="bd">
      <el-form :model="registerForm" :rules="registerRule" ref="registerForm">
        <el-form-item prop="userName">
          <el-input type="userName" v-model="registerForm.userName" placeholder="账号"></el-input>
        </el-form-item>
        <el-form-item prop="pwd">
          <el-input v-model="registerForm.pwd" placeholder="密码" type="password"></el-input>
        </el-form-item>
        <el-form-item prop="checkPwd">
          <el-input v-model="registerForm.checkPwd" placeholder="请再次输入密码" type="password"></el-input>
        </el-form-item>
        <!-- <el-form-item prop="email">
          <el-input v-model="registerForm.email" placeholder="请输入接收验证码的邮箱"></el-input>
        </el-form-item>
        <el-form-item prop="captcha">
          <el-input v-model="registerForm.captcha" placeholder="请输入验证码">
            <el-button slot="append" @click='getCaptcha'>{{ captchaMsg }}</el-button>
          </el-input>
        </el-form-item> -->
        <el-form-item>
          <el-button type="primary" @click="submitForm('registerForm')" class="submitBtn">立即注册</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="ft">
      <router-link to="/login">已经有账号？马上登录</router-link>
    </div>
  </div>
</template>

<script>
import router from "../router"
export default {
  name: "register",
  data() {
    var validateUser = (rule, value, cb) => {
      var pattern = /^[\w\u4e00-\u9fa5]{3,10}$/g;
      if (value === "") {
        cb(new Error("请输入用户名"));
      } else if (!pattern.test(value)) {
        cb(new Error("请输入3-10个字母/汉字/数字/下划线"));
      } else {
        cb();
      }
    };
    var validatePwd = (rule, value, cb) => {
      var pattern = /^\S{3,20}$/g;
      if (value === "") {
        cb(new Error("请输入密码"));
      } else if (!pattern.test(value)) {
        cb(new Error("请输入3-20个非空白字符"));
      } else {
        if (this.registerForm.checkPwd !== "") {
          this.$refs.registerForm.validateField("checkPwd");
        }
        cb();
      }
    };
    var validateCheckPwd = (rule, value, cb) => {
      if (value === "") {
        cb(new Error("请再次输入密码"));
      } else if (value !== this.registerForm.pwd) {
        cb(new Error("两次输入密码不一致!"));
      } else {
        cb();
      }
    };
    return {
      registerForm: {
        userName: "",
        pwd: "",
        checkPwd: ""
        // email: '',
        // captcha: ''
      },
      registerRule: {
        userName: [{ validator: validateUser, trigger: "blur" }],
        pwd: [{ validator: validatePwd, trigger: "blur" }],
        checkPwd: [{ validator: validateCheckPwd, trigger: "blur" }],
        email: [
          { required: true, message: "请输入邮箱地址", trigger: "blur" },
          {
            type: "email",
            message: "请输入正确的邮箱地址",
            trigger: "blur,change"
          }
        ],
        captcha: [{ required: true, message: "请输入验证码", trigger: "blur" }]
      }
    };
  },
  computed: {
    captchaMsg() {
      // return this.$store.getters.getCaptchaMsg
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          console.log(this.registerForm, "注册");
          let data = {
            username: this.registerForm.userName,
            password: this.registerForm.pwd
            // 'email': this.registerForm.email,
            // 'captcha': this.registerForm.captcha
          };
          console.log(12345);
          // doRegister(this, data)
          this.$store.dispatch("register", data);
          setTimeout(() => {
            let isRegister = this.$store.state.user.isRegister;
            if (isRegister) {
              router.push("/login");
              this.$message({
                message: "注册成功!",
                type: "success"
              });
            } else {
              this.$message({
                message: "注册失败！",
                type: "warning"
              });
              return false;
            }
          }, 400);
        } else {
          return false;
        }
      });
    },
    getCaptcha() {
      this.$refs.registerForm.validateField("email", vaild => {
        if (!vaild) {
          let data = {
            email: this.registerForm.email
          };
          // sendCaptcha(this, data)
        } else {
          return false;
        }
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("./../assets/login.scss");
</style>
