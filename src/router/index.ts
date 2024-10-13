import { createRouter, createWebHistory } from "vue-router";
import IndexView from "../views/Index.vue";
import ArticleDetail from "@/views/article/ArticleDetail.vue";
import NewsListPage from "@/views/newsList/NewsListPage.vue";
import HomeIndex from "@/views/HomeIndex.vue";
import UpSpace from "@/views/UpSpace.vue";
import Catalogs from "@/views/catalog/Catalog.vue";
import ArticleList from "@/views/article/ArticleList.vue";
import ArticlePdf from "@/views/article/ArticlePdf.vue";
import ArticleVideoPlay from "@/views/article/ArticleVideoPlay.vue";
import AtricleVideoCardList from "@/views/article/AtricleVideoCardList.vue";
import ArticleCardList from "@/views/article/ArticleCardList.vue";
import ArticleBusinessCardList from "@/views/article/ArticleBusinessCardList.vue";

const router = createRouter({
  history: createWebHistory('/upSpace'),
  routes: [
    {
      path: "/",
      name: "indexPage",
      component: UpSpace,
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
    }, {
      path: "/catalogs/:catalogsId",
      name: 'catalogs',
      component: Catalogs,
    }, {
      path: "/articleList/:catalogsItemId",
      name: 'articleList',
      component: ArticleList,
    }, {
      path: "/articleVideoList/:catalogsItemId",
      name: 'articleVideoList',
      component: AtricleVideoCardList,
    }, {
      path: "/articleCardList/:catalogsItemId",
      name: 'articleCardList',
      component: ArticleCardList,
    }, {
      path: "/articleBusinessCardList/:catalogsItemId",
      name: 'articleBusinessCardList',
      component: ArticleBusinessCardList,
    }, {
      path: "/articlePdf/:articleId",
      name: 'articlePdf',
      component: ArticlePdf,
    }, {
      path: "/articleVideo/:articleId",
      name: 'articleVideo',
      component: ArticleVideoPlay,
    },
  ],
});

// 添加全局前置守卫
router.beforeEach(async (to, from, next) => {
  next();
});

export default router;
