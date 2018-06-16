<template>
  <header>
    <div class="login">
      <div v-if="!isLogin">
        <router-link :to="{name:'Login'}">
          <el-button>登录</el-button>
        </router-link>
      </div>
      <div v-else>
        <el-dropdown>
          <span class="el-dropdown-link">{{username}}
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item>登出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  computed: {
    isLogin() {
      let flag = sessionStorage.getItem("username");
      let flag02 = this.$store.state.user.isLogin;
      return !!(flag && flag02);
    },
    username() {
      return this.$store.state.user.username;
    }
  }
};
</script>
<style lang="scss">
@import url("../../assets/components/header.scss");
</style>
