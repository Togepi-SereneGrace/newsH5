<template>
    <el-icon style="z-index: 3000;position: fixed;width: 25px;height: 25px;margin: 13px 0 0 10px"
    @click="back"
  >
    <ArrowLeftBold style="width: 30px;height: 30px;"/>
  </el-icon>
  <div class="upSpaceIndex ">
    <div class="commonText" style="font-size: 30px; margin-bottom: 30px"> 2024 </div>
    <div class="commonText" style="font-size: 70px; margin-bottom: 0px"> UP </div>
    <div class="commonText" style="font-size: 70px; margin-bottom: 20px"> SPACE </div>
    <div class="specialDiv">
      不负青春 | 敢为人先 | 争当硬核
    </div>
    <div class="commonText" style="font-size: 30px; margin-bottom: 50px"> 同学同事 同心同向 </div>
    <div class="triangle"> </div>
    <div class="commonText" style="font-size: 30px; margin-bottom: 20px; margin-top: 40px;" @click="gotoPage()"> JOIN US </div>
    <div class="commonText" style="font-size: 16px; margin-bottom: 20px" @click="gotoPage()"> 2024境外班 </div>
  </div>

</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter();

const back = () => {
  router.push('/homeIndex')
};
</script>

<style scoped>
.upSpaceIndex {
  width: 100vw;
  height: 100vh;
  background-image: url('@/assets/image/test/testBG.jpg');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.specialDiv {
  background-color: white;
    padding: 10px 20px;
    border-radius: 50px;
    font-size: 20px;
    margin-bottom: 20px;
    color: #3e97e9;
}
.commonText {
  color: white;
  line-height: 1;
}

.triangle {
  width: 0;
  height: 0;
  border-width: 15px;
  border-color: #fff transparent transparent transparent;
  border-style: solid;
}
</style>
