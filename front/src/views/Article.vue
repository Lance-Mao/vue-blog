<template>

<el-row>
  <el-col class="article" :span="10" v-for="article in articleList" :key="article.objectId" @click.native="showArticleDetails(article.objectId)">
      <el-card shadow="hover">
        <img v-bind:src="article.showPic!==null ? article.showPic[2] : `../assets/background.jpeg`"  class="image">
        <div>
          <h1>{{article.title}}</h1>
          <div class="bottom clearfix">
            <time class="time">发布日期：{{ article.createdAt }}</time>
            <el-button type="text" class="button">作者：{{ article.author }}</el-button>
          </div>
        </div>
      </el-card>
  </el-col>
</el-row>
</template>

<script>
import router from "../router";
export default {
  data() {
    return {
      currentDate: new Date()
    };
  },
  computed: {
    articleList() {
      return this.$store.state.article.articleList;
    }
  },
  methods: {
    showArticleDetails(id){
      this.$store.dispatch("getArticleById", id)
      router.push("/articleDetails");
    }
  }
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
  height: 200px;
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