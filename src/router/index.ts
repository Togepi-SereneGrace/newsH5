import { createRouter, createWebHistory } from "vue-router";
import IndexView from "../views/Index.vue";
import ArticleDetail from "@/views/article/ArticleDetail.vue";
import NewsListPage from "@/views/newsList/NewsListPage.vue";
import HomeIndex from "@/views/HomeIndex.vue";
import UpSpace from "@/views/UpSpace.vue";

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
      component: NewsListPage,
    },
    {
      path: "/homeIndex",
      name: "homeIndex",
      component: HomeIndex,
    },
    {
      path: "/upSpaceIndex",
      name: "upSpaceIndex",
      component: UpSpace,
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
