<template>
  <!-- <div class="index-page">这是页面</div> -->
  <h1 class="app-title">咨询</h1>
  <div style="height: 40px;width: 100%;"></div>
  <NewsList />
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter();

const gotoPage = () => {
  router.push('/upSpaceIndex')
};
</script>

<style scoped>
.index-page {
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
}
.app-title {
  font-size: 20px; /* 字体大小 */
  font-weight: bold; /* 字体加粗 */
  color: #2c3e50; /* 字体颜色 */
  text-align: center; /* 居中对齐 */
  margin-bottom: 30px; /* 下边距 */
  padding: 10px; /* 内边距 */
  background-color: #409eff; /* 背景颜色 */
  border: 1px solid #e1e5eb; /* 边框 */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* 阴影 */
  position: fixed;
  width: 100%;
  top: 0px;
  z-index: 1000;
}
</style>
