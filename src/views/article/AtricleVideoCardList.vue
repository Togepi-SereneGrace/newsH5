<template>
  <Header :title="pageTitle" />
  <div class="news-list">
    <el-card
      v-for="article in articles"
      :key="article.id"
      class="news-card"
      @click="goDetail(article.id)"
      :body-style="{ padding: '20px' }"
    >
      <div class="news-content">
        <img :src="article.logoFile" alt="" class="news-image" />
        <p class="news-title">{{ article.title }}</p>
        <p class="news-summary">{{ article.summary }}</p>
      </div>
    </el-card>
  </div>
</template>

<script setup>
import Header from '../components/PageHeader.vue';
import { ref, onMounted } from 'vue';
import { ElCard, ElButton } from 'element-plus';
import { newsList } from '@/service/mockData';
import { useRoute, useRouter } from 'vue-router'
import { getArticleList } from '@/service/articles';
import { getCatalogItemNameById } from '@/constant/constant';
const articles = ref([]);
const loading = ref(true); // 用于加载状态
const route = useRoute();
const pageTitle = ref(getCatalogItemNameById(route.params.catalogsItemId));
const newsArticles = ref([]);
const router = useRouter();

const fetchNews = () => {
  // 使用 mock 数据
  newsArticles.value = newsList;
};

// 模拟 API 请求
const fetchArticles = async () => {
  try {
    const response = await getArticleList(route.params.catalogsItemId);
    articles.value = response.data.data;
  } catch (error) {
    console.error('获取文章列表失败:', error);
  } finally {
    loading.value = false; // 无论成功或失败，加载状态都关闭
  }
};

const goDetail = (id) => {
  router.push(`/articlePdf/${id}`)
}

// 页面加载时请求文章数据
onMounted(() => {
  fetchArticles();
  fetchNews();
});
</script>

<style scoped>
.news-list {
  display: flex;
  flex-direction: column;
  gap: 20px; /* 卡片间距 */
  padding: 20px; /* 外部边距 */
}

.news-card {
  transition: transform 0.3s, box-shadow 0.3s; /* 动画效果 */
  border-radius: 10px; /* 圆角 */
}

.news-card:hover {
  transform: translateY(-5px); /* 悬停效果 */
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2); /* 阴影 */
}

.news-title {
  font-size: 1.5em;
  font-weight: bold;
  color: #333; /* 文字颜色 */
}

.news-content {
  margin-top: 10px;
}

.news-image {
  width: 100%;
  height: auto;
  border-radius: 8px; /* 图片圆角 */
}

.news-title {
  margin: 10px 0;
  color: #666; /* 描述文字颜色 */
  font-size: 14px;
  line-height: 1.5; /* 行高 */
}

.news-summary {
  margin: 10px 0;
  color: #666; /* 描述文字颜色 */
  font-size: 12px;
  line-height: 1.5; /* 行高 */
}
</style>