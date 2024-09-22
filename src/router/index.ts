import { createRouter, createWebHistory } from "vue-router";
import IndexView from "../views/Index.vue";
import ArticleDetail from "@/views/article/ArticleDetail.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "indexPage",
      component: IndexView,
    },
    {
      path: "/newsList",
      name: "newsList",
      component: IndexView,
    },
    {
      path: "/article",
      name: "articleDetail",
      component: ArticleDetail,
    },
  ],
});

// 添加全局前置守卫
router.beforeEach(async (to, from, next) => {
  next();
});

export default router;
