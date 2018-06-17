<template>
    <div>
        <el-tabs :tab-position="tabPosition" v-model="activeName" type="border-card">
            <el-tab-pane name="0" label="首页">
                <mArticle />
            </el-tab-pane>
            <el-tab-pane name="1" label="文章分类"></el-tab-pane>
            <el-tab-pane name="2" label="写文章"></el-tab-pane>
            <el-tab-pane name="3" label="定时任务补偿"></el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
import router from "../../router";
export default {
  data() {
    return {
      tabPosition: "left",
      activeName: "0"
    };
  },
  components: {
    mArticle: () => import("./Article.vue"),
    mPost: () => import("../Post.vue")
  },
  watch: {
    activeName: function(val) {
      val === "2" ? router.push("/post") : ""
    }
  }
};
</script>

<style lang="scss">
.index {
  position: relative;
}
</style>


