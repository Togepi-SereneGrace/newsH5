<template>
  <div class="news-list">
    <el-card
      v-for="article in newsArticles"
      :key="article.id"
      class="news-card"
      :body-style="{ padding: '20px' }"
    >
      <template #header>
        <span class="news-title">{{ article.title }}</span>
      </template>
      <div class="news-content">
        <img :src="article.image" alt="" class="news-image" />
        <p class="news-description">{{ article.description }}</p>
        <el-button type="primary" @click="goToArticle(article.url)">阅读更多</el-button>
      </div>
    </el-card>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { ElCard, ElButton } from 'element-plus';
import { getNewsList } from '@/service/news';
import { newsList } from '@/service/mockData';

const newsArticles = ref([]);

const fetchNews = () => {
  // 使用 mock 数据
  newsArticles.value = newsList;
};

const goToArticle = (url) => {
  window.open(url, '_blank');
};

onMounted(fetchNews);
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
  max-width: 100%;
  height: auto;
  border-radius: 8px; /* 图片圆角 */
}

.news-description {
  margin: 10px 0;
  color: #666; /* 描述文字颜色 */
  line-height: 1.5; /* 行高 */
}
</style>