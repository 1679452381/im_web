<template>
    <div>
        <RouterLink to="/home">登录</RouterLink>
        <button @click="onClick">请求</button>
    </div>
</template>

<script setup>
import { getCurrentInstance } from "vue";

const { proxy }  = getCurrentInstance();
console.log(proxy)
const onClick = () => {
    proxy.$axios.get('/api/').then()
};

</script>

<style l scoped>

</style>