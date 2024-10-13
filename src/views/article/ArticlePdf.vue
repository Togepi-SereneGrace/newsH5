<template>
  <div>
    <!-- 使用通用Header组件 -->
    <Header title="详情" style="z-index: 3000;"/>

    <!-- PDF展示区域 -->
    <div class="pdf-container"
      v-if="pdfUrl"
    >
      <iframe
        :src="pdfUrl"
        class="pdf-frame"
        frameborder="0"
        allowfullscreen
      ></iframe>
    </div>
    <div v-else-if="videoUrl" style="width: 100%;">
      <video
        :src="videoUrl"
        style="width: 100%;"
        controls
        controlslist="nodownload"
      ></video>
    </div>
    <img
      v-else-if="imgUrl"
      :src="imgUrl"
      style="width: 100%;"
    ></img>
    <div style="width: 100%;overflow: auto;"v-else-if="contentHtml" v-html="contentHtml"></div>
    <el-empty v-else description="PDF文件未找到"></el-empty>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { defineProps } from 'vue';
import Header from '../components/PageHeader.vue';
import { useRouter, useRoute } from 'vue-router';
import { getArticleContent } from '@/service/articles';
import { FILE_HOST } from '@/constant/constant';
const route = useRoute();
const articleId = route.params.articleId;

const pdfUrl = ref('');
const videoUrl = ref('');
const imgUrl = ref('');
const contentHtml = ref('');

onMounted(async () => {
  const res = await getArticleContent(articleId);
  const extendObj = JSON.parse(res.data.extend);
  const fileUrl = extendObj.file1 ?? ( extendObj.file2 ?? (extendObj.file3 ?? ''));
  console.log("=== extendObj", extendObj, fileUrl);
  if (fileUrl.includes('.pdf')) {
    pdfUrl.value = FILE_HOST + fileUrl;
  } else if (fileUrl.includes('.mp4')) {
    videoUrl.value = FILE_HOST + fileUrl;
  } else if (fileUrl.includes('.jpg') || fileUrl.includes('.png')) {
    imgUrl.value = FILE_HOST + fileUrl;
  } else if (res.data.content) {
    contentHtml.value = res.data.content;
  }
});
</script>

<style scoped>
/* PDF展示区域容器 */
.pdf-container {
  position: absolute;
  width: 100%;
  top: 5px;
  height: calc(100vh - 5px); /* 减去Header高度 */
  display: flex;
  justify-content: center;
  align-items: center;
}

/* PDF iframe样式 */
.pdf-frame {
  width: 100%;
  height: 100%;
}
</style>
