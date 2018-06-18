<template lang="html">
<div>
    <el-button class="fixed" type="info"  @click.native="goHome()" plain>返回首页</el-button>
    <el-button class="goTop" type="success" icon="el-icon-arrow-up" @click.native="goTop()" circle></el-button>
    <div class="article-wrapper">
      <div id="title" class="title" v-text="articleDetails.title"></div>
      <div class="create">{{articleDetails.createdAt}}</div>
      <div class="content markdown-body" v-html="content"></div>
  </div>
</div>
</template>

<script>
import router from "../router"
import marked from "marked";
import Prism from "prismjs";
import "prismjs/themes/prism.css";

marked.setOptions({
  highlight: code => Prism.highlight(code, Prism.languages.javascript)
});

export default {
  computed: {
    articleDetails() {
      return this.$store.state.articleDetails;
    },
    content() {
      let _content = this.articleDetails.content;
      marked(_content, (err, content) => {
        if (!err) {
          _content = content;
        }
      });
      return _content;
    }
  },
  methods: {
        goTop(){
            document.body.scrollTop = document.documentElement.scrollTop = 0;
        },
        goHome(){
            router.push("/")
        }
    }
};
</script>

<style lang="scss">
@import "../../node_modules/github-markdown-css/github-markdown.css";
@import "../assets/components/article.scss";
</style>


