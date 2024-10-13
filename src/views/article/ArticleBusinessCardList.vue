<template>
  <!-- 使用通用Header组件 -->
  <Header :title="pageTitle" />
  <div class="content">
    <div class="cardList">
      <div v-for="item in articles" :key="item.id"  class="card" @click="gotoArticleDetail(item.id)">
        <div class=imageBox>
          <img :src="item.logoFile" class="card-image" />
        </div>
        <div class="card-footer">{{ item.title }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Header from '../components/PageHeader.vue';
import { ref, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { getCatalogItemNameById } from '@/constant/constant';
import { getArticleList } from '@/service/articles';

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
.content {
  padding: 10px;
}

.section {
  margin-bottom: 40px;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.section-title {
  font-size: 18px;
  font-weight: bold;
}

.more-link {
  font-size: 14px;
}

.cardList {
  display: grid;
  justify-content: space-evenly;
  grid-template-columns: repeat(auto-fill, 80px);
  grid-gap: 20px 10px;
}

.card {
  border: 1px solid #33333333;
  border-radius: 10px;
  padding-top: 5px;
  width: 80px;
  height: 140px;
}
.imageBox {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
}

.card-image {
  max-width: 100%;
  height: 70px;
  object-fit: cover;
}

.card-footer {
  text-align: center;
  font-size: 12px;
}
</style>
