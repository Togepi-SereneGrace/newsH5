<template>
  <div>
    <!-- 使用通用Header组件 -->
    <Header title="详情" style="position: absolute; top: 0px; z-index: 3000;"/>

    <div class="pdf-container">
      <video
        v-if="videoUrl"
        :src="videoUrl"
        style="width: 100%;"
        controls
        controlslist="nodownload"
      ></video>
      <el-empty v-else description="PDF文件未找到"></el-empty>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Header from '../components/PageHeader.vue';
import { useRouter, useRoute } from 'vue-router';
import { getArticleContent } from '@/service/articles';
import { FILE_HOST } from '@/constant/constant';
const route = useRoute();
const articleId = route.params.articleId;

const videoUrl = ref('https://portal.nbport.com.cn/jwb/upload/resources/file/2024/10/07/405506.mp4');
// test
// 'https://portal.nbport.com.cn/jwb/upload/resources/file/2024/10/07/405506.mp4'

onMounted(async () => {
  const res = await getArticleContent(articleId);
  const extendObj = JSON.parse(res.data.extend);
  // videoUrl.value = FILE_HOST + extendObj.file1;
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
