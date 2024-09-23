<template>
  <div class="homeIndex">
    <div class="btnDiv">
      <img src="@/assets/image/test/iconTest1.png" class="routerBtn" @click="gotoPage()"/>
      <img src="@/assets/image/test/iconTest2.png" class="routerBtn" @click="gotoPage()"/>
    </div>
    <div>
      <div class="hiddenBtn" @click="gotoPage()"></div>
      <img src="@/assets/image/test/iconTest6.png" class="centerImg"/>
    </div>
    <div class="btnDiv">
      <img src="@/assets/image/test/iconTest3.png" class="routerBtn" @click="gotoPage()"/>
      <img src="@/assets/image/test/iconTest4.png" class="routerBtn" @click="gotoPage()"/>
    </div>
    <img src="@/assets/image/test/iconTest5.png" class="routerBtn" @click="gotoPage()"/>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter();

const gotoPage = () => {
  router.push('/newsList')
};
</script>

<style scoped>
.homeIndex {
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f3f3f3;
  flex-direction: column;
}

.routerBtn {
  zoom: 0.5;
}
.centerImg {
  width: 100%;
  height: auto;
  margin: 30px 0;
}

.hiddenBtn {
  width: 220px;
  height: 100px;
  background: #ffffff03;
  position: absolute;
  top: 47%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
}

.btnDiv {
  display: flex;
  justify-content: center;
  gap: 20px;
}

</style>
