<template>
  <div>
    <Header :title="pageTitle" />
    <!-- 文章列表 -->
    <div class="article-list">
      <!-- 如果数据正在加载，显示加载提示 -->
      <el-empty v-if="loading" description="正在加载..."></el-empty>
      
      <!-- 如果没有文章 -->
      <el-empty v-else-if="articles.length === 0" description="暂无文章"></el-empty>

      <!-- 文章卡片 -->
      <div v-for="article in articles" :key="article.id" class="article-card" @click="gotoArticleDetail(article.id)">
        <div class="article-content">
          <h3 class="article-title">{{ article.title }}</h3>
          <p class="article-description">{{ article.summary }}</p>
        </div>
        <div class="article-footer">
          <div class="article-info">
            <el-icon class="icon"><i class="el-icon-thumb"></i></el-icon> {{ article.likes }}
            <el-icon class="icon"><i class="el-icon-chat-line-round"></i></el-icon> {{ article.comments }}
          </div>
          <div class="article-date">{{ article.addTime }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import Header from '../components/PageHeader.vue';
import { getArticleList } from '@/service/articles';
import { getCatalogItemNameById } from '@/constant/constant';
const articles = ref([]);
const loading = ref(true); // 用于加载状态
const route = useRoute();
const router = useRouter();
const pageTitle = ref(getCatalogItemNameById(route.params.catalogsItemId));

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

const gotoArticleDetail = (id) => {
  router.push({ name: 'articlePdf', params: { articleId: id } });
}

// 页面加载时请求文章数据
onMounted(() => {
  fetchArticles();
});
</script>

<style scoped>
/* 文章列表容器 */
.article-list {
  padding: 16px;
}

/* 单个文章卡片 */
.article-card {
  border-bottom: 1px #D0D5DD solid;
  margin-bottom: 14px;
}

/* 文章内容 */
.article-content {
  margin-bottom: 20px;
}

.article-title {
  font-size: 16px;
  /* font-weight: bold; */
  margin: 0;
}

.article-description {
  font-size: 12px;
  color: #344054;
  margin-top: 5px;
}

/* 文章底部信息布局 */
.article-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.article-info {
  display: flex;
  align-items: center;
}

.icon {
  margin-right: 5px;
  font-size: 16px;
  color: #409EFF;
}

.article-date {
  font-size: 12px;
  color: #909399;
}
</style>
