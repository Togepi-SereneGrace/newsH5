<template>
  <div style="padding: 10px; font-size: 22px; font-weight: bold;">{{ article.title }}</div>
  <div style="display: flex;padding: 10px;gap: 10px;">
    <div>{{ article.publishName }}</div>
    <div>{{ article.date }}</div>
  </div>
  <div class="content">{{ article.content }}</div>
  <div class="article-detail">
    <!-- <el-card class="article-card">
      <p class="date">{{ article.date }}</p>
      
    </el-card> -->

    <el-divider></el-divider>

    <div style="padding-left: 10px; font-size: 20px;margin-bottom: 10px;">评论</div>
    <el-input
      v-model="newComment"
      placeholder="写下你的评论..."
      class="comment-input"
      @keyup.enter="addComment"
    />
    <el-button type="primary" @click="addComment">提交评论</el-button>

    <el-list>
      <el-list-item v-for="(comment, index) in comments" :key="index">
        <p>{{ comment }}</p>
      </el-list-item>
    </el-list>
  </div>
</template>

<script>
export default {
  data() {
    return {
      article: {
        title: '喜报！ 公司青年项目在第六届浙江省青工创新创效大赛中荣获金奖',
        content: '今天，全球知名科技公司在发布会上展示了他们最新的智能手机，搭载最新的处理器和先进的相机系统，受到广泛关注。在此次发布会上，公司的CEO详细介绍了新手机的多项新功能，包括更快的充电速度和更长的电池续航。该手机将于下个月开始发售，预计将成为市场上的热门产品。',
        date: '2024-09-20',
        publishName: '精彩信通'
      },
      comments: [],
      newComment: '',
    };
  },
  methods: {
    addComment() {
      if (this.newComment.trim()) {
        this.comments.push(this.newComment.trim());
        this.newComment = '';
      } else {
        this.$message.warning('评论不能为空！');
      }
    },
  },
};
</script>

<style scoped>
.article-detail {
  max-width: 800px;
  margin: 0 auto;
}
.article-card {
  padding: 20px;
  min-height: 60vh;

}
.date {
  color: #999;
}
.comment-input {
  margin-bottom: 10px;
}
.content {
  padding: 10px;
}

.app-title {
  font-size: 20px; /* 字体大小 */
  font-weight: bold; /* 字体加粗 */
  color: #2c3e50; /* 字体颜色 */
  text-align: center; /* 居中对齐 */
  margin-bottom: 30px; /* 下边距 */
  padding: 10px; /* 内边距 */
  background-color: #409eff; /* 背景颜色 */
  border: 1px solid #e1e5eb; /* 边框 */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* 阴影 */
  position: fixed;
  width: 100%;
  top: 0px;
  z-index: 1000;
}
</style>
