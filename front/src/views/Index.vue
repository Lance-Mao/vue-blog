<template>
    <el-container>
        <el-header>
            <vHeader />
        </el-header>
        <el-container>
            <el-container>
            <el-main>
                <vMain />
            </el-main>
            <el-footer>
                <vFooter />
            </el-footer>
            </el-container>
        </el-container>
</el-container>
</template>

<script>
export default {
    components: {
        'vHeader': () => import('./components/Header.vue'),
        'vFooter': () => import('./components/Footer.vue'),
        'vMain': () => import('./components/Main.vue')
    }
};
</script>


<style>
.el-header {
    background: url(".././assets/image/topBackImage.jpg");
    min-height: 250px;
}
.el-footer {
  background-color: #000000;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-main {
  background-color: #617472;
  color: #333;
  text-align: center;
  padding: 0px;
}

body > .el-container {
  margin-bottom: 40px;
}
</style>
