<template>
  <Header :title="pageTitle" style="position: fixed; z-index: 1000"/>
  <div class="page flex-col">
    <img 
      style="position: absolute; top: 0px; right: 0px;"
      src="@/assets/image/catalog/bgIcon1.png" />
    <div class="title">
      <!-- <img
        src="@/assets/image/catalog/columnTitle.png"
      /> -->
      <div style="height: 30px; width: 100%;"></div>
    </div>

    <div class="flex-col" style="margin-top: 40px;">
      <!-- <div v-for="(info, index) in listData" style="position: relative; margin: auto" @click="goto(index)">
        <img src="@/assets/image/catalog/columnCardBG1.png" />
        <img :src="getImageSrc(index)" />
        <div class="card-content">
          <div :class="`card-title-common title_color_${index}`">{{info.title}}</div>
          <div v-if="info.subtitle" :class="`card-subtitle-common title_color_${index}`">{{info.subtitle}}</div>
        </div>
      </div> -->
      <div  style="position: relative; margin: auto" @click="goto(0)">
        <img src="@/assets/image/catalog/columnCardBG1.png" />
        <div class="card-content">
          <div :class="`card-title-common title_color_${index}`">{{listData[0].title}}</div>
          <div v-if="listData[0].subtitle" :class="`card-subtitle-common title_color_${0}`">{{listData[0].subtitle}}</div>
        </div>
      </div>
      <div  style="position: relative; margin: auto" @click="goto(1)">
        <img src="@/assets/image/catalog/columnCardBG2.png" />
        <div class="card-content">
          <div :class="`card-title-common title_color_${1}`">{{listData[1].title}}</div>
          <div v-if="listData[1].subtitle" :class="`card-subtitle-common title_color_${1}`">{{listData[1].subtitle}}</div>
        </div>
      </div>
      <div  style="position: relative; margin: auto" @click="goto(2)">
        <img src="@/assets/image/catalog/columnCardBG3.png" />
        <div class="card-content">
          <div :class="`card-title-common title_color_${2}`">{{listData[2].title}}</div>
          <div v-if="listData[2].subtitle" :class="`card-subtitle-common title_color_${2}`">{{listData[2].subtitle}}</div>
        </div>
      </div>
    </div>
    <img 
      style="position: absolute; bottom: 0px; left: 0px;"
      src="@/assets/image/catalog/bgIcon2.png" />
  </div>
</template>

<script setup>
import Header from '../components/PageHeader.vue';
import { ref, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { CatalogsInfo, CatalogsRouteTag, getCatalogNameById } from '@/constant/constant';
import { getArticleList, getUserToken } from '@/service/articles';
const route = useRoute()
const router = useRouter();
const listData = CatalogsInfo[route.params.catalogsId];
const pageTitle = ref(getCatalogNameById(route.params.catalogsId));
console.log(listData);
console.log(route.params);
const imgURL = [
  `/upSpace/src/assets/image/catalog/columnCardBG1.png`,
  `/upSpace/src/assets/image/catalog/columnCardBG2.png`,
  `/upSpace/src/assets/image/catalog/columnCardBG3.png`,
]

const goto = (index) => {
  if (listData[index].routetag === CatalogsRouteTag.List) {
    router.push({ name: 'articleList', params: { catalogsItemId: listData[index].id } });
  } else if (listData[index].routetag === CatalogsRouteTag.Video) {
    router.push({ name: 'articleVideoList', params: { catalogsItemId: listData[index].id } });
  } else if (listData[index].routetag === CatalogsRouteTag.Card) {
    router.push({ name: 'articleCardList', params: { catalogsItemId: listData[index].id } });
  } else if (listData[index].routetag === CatalogsRouteTag.BusinessCard) {
    router.push({ name: 'articleBusinessCardList', params: { catalogsItemId: listData[index].id } });
  } else {
    router.push({ name: 'articleList', params: { catalogsItemId: listData[index].id } });
  }
}

const getImageSrc = (index) => {
  // return new URL(`@/assets/image/catalog/columnCardBG${index}.png`, import.meta.url).href;
  return imgURL[index];
}

onMounted(async () => {
  const res = await getUserToken();
  console.log("=== res", res);
  const res1 = await getArticleList();
  console.log("=== res", res1);
});
</script>

<style scoped>
.flex-col {
  display: flex;
  flex-direction: column;
}

.page {
  background-color: white;
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

.page .title {
  margin-top: 90px;
  margin-left: 30px;
}


.card-content {
  position: absolute;
  transform: translate(0%, -50%); /* 实现文字垂直居中 */
  top: 50%;
  left: 30px;
}

.card-title-common {
  overflow-wrap: break-word;
  font-size: 24px;
  font-family: YouSheBiaoTiHei;
  font-weight: normal;
  text-align: left;
  white-space: nowrap;
  line-height: 31px;
}

.card-subtitle-common {
  overflow-wrap: break-word;
  font-size: 12px;
  font-family: YouSheBiaoTiHei;
  font-weight: normal;
  text-align: left;
  white-space: nowrap;
  line-height: 16px;
}

.title_color_0 {
  color: rgba(21, 94, 239, 1);
}

.title_color_1 {
  color: rgba(230, 46, 5, 1);
}

.title_color_2 {
  color: rgba(247, 144, 9, 1);
}
</style>
