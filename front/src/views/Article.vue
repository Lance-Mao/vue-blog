<template>
  <div>
    <el-button class="goTop" type="success" icon="el-icon-arrow-up" @click.native="goTop()" circle></el-button>
    <el-row>
      <el-col class="article" :span="10" v-for="article in articleList" :key="article.objectId" @click.native="showArticleDetails(article.objectId)">
          <el-card shadow="hover">
            <img v-bind:src="article.showPic!==null ? article.showPic[2] : `https://upload-images.jianshu.io/upload_images/5207977-2b69acc5a1786ded.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240`"  class="image">
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
  </div>
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
    showArticleDetails(id) {
      this.$store.dispatch("getArticleById", id);
      router.push("/articleDetails");
    },
    goTop() {
      document.body.scrollTop = document.documentElement.scrollTop = 0;
    }
  }
};
</script>

<style lang="scss">
.el-row {
  width: 100%;
  padding: 20x;
}
.el-tabs {
  background-color: rgb(255, 255, 255);
}
.el-main {
  line-height: 20px;
}
.article {
  position: relative;
  margin: 20px;
}

.goTop {
    position: fixed;
    top: 600px;
    right: 10px;
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