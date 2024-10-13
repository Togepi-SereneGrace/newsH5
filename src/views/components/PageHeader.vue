<template>
  <el-header class="header">
    <el-button @click="goBack" class="back-button" type="text">
      <ArrowLeftBold style="width: 16px;height: 16px;"/>
    </el-button>
    <div class="header-title">{{ title }}</div>
  </el-header>
</template>

<script setup>
import { useRouter } from 'vue-router';

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  backUrl: {
    type: String,
    default: null,
  },
});

const router = useRouter();

const goBack = () => {
  if (props.backUrl) {
    router.push(props.backUrl);
  } else {
    router.back(); // 返回上一个页面
  }
};
</script>

<style scoped>
.header {
  position: sticky;
  width: 100%;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center; /* 使内容水平居中 */
  padding: 0 20px;
  background-color: #2970FF; /* 根据需要自定义 */
  color: white;
}

.back-button {
  color: white;
  position: absolute; /* 使返回按钮绝对定位 */
  left: 20px; /* 距离左边的距离 */
}

.header-title {
  margin: 0;
  font-size: 20px;
  font-weight: bold;
}
</style>
