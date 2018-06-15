<template>
    <header>
        <div class="login">
            <router-link :to="{name:'Login'}">
                <el-button>登录</el-button>
            </router-link>
        </div>
    </header>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import url("../../assets/components/header.scss");
</style>
