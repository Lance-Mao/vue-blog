<template>

<el-row>
  <el-col class="article" :span="10" v-for="article in articleList" :key="article.id">
    <el-card shadow="hover">
      <img src="../../assets/background.jpeg" class="image">
      <div>
        <h1>{{article.title}}</h1>
        <div class="bottom clearfix">
          <time class="time">发布日期：{{ article.createdAt }}</time>
          <el-button type="text" class="button">操作按钮</el-button>
        </div>
      </div>
    </el-card>
  </el-col>
</el-row>
</template>

<script>
export default {
  data() {
    return {
      currentDate: new Date()
    };
  },
  computed: {
    articleList() {
      return this.$store.state.postList.articleList;
    }
  },
};
</script>

<style lang="scss">
.el-main {
  line-height: 20px;
}
.article {
  position: relative;
  margin: 20px;
}

.article:hover {
  position: relative;
  margin: 20px 24px;
  box-shadow: 20px 0 50px 0 lightblue;
}
.time {
  font-size: 13px;
  color: #999;
  position: absolute;
  left: 10px;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
</style>