<template>
  <!-- 帮助中心 -->
  <div class="help_center">
    <securityCenterhead title="帮助中心" :discoverHead="false"></securityCenterhead>
    <div class="help_center_body">
      <div class="introduce">模式介绍</div>
      <div class="help_center_body_text">价值4亿多的比特币被房东扔掉？</div>
      <div class="help_center_body_text">价值3亿的比特币丢失，给我们什么启示？</div>
      <div class="help_center_body_text help_center_body_finally">我的比特币退休计划</div>
    </div>
    <div class="body_bgc">
      <div class="help_center_body">
        <div class="introduce">视频宣传</div>
        <div class="help_center_body_text">价值4亿多的比特币被房东扔掉？</div>
        <div class="help_center_body_text">价值3亿的比特币丢失，给我们什么启示？</div>
        <div class="help_center_body_text help_center_body_finally">我的比特币退休计划</div>
      </div>
    </div>
    <div class="bottom"></div>
  </div>
</template>
<script>
import securityCenterhead from "../../commonality/head.vue";
export default {
  components: {
    securityCenterhead
  }
};
</script>
<style lang="scss" scoped>
.help_center {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.help_center_body {
  padding-left: 0.4rem;
  background-color: #fff;
  padding-right: 0.386667rem;
}
.introduce {
  font-size: 0.426667rem;
  font-family: Microsoft YaHei;
  font-weight: bold;
  line-height: 0.56rem;
  color: rgba(68, 68, 68, 1);
  opacity: 1;
  padding: 0.52rem 0 0.186667rem;
}
.help_center_body_text {
  padding: 0.426667rem 0;

  font-size: 0.346667rem;
  font-family: Microsoft YaHei;
  font-weight: 400;
  line-height: 0.466667rem;
  color: rgba(68, 68, 68, 1);

  opacity: 1;
  border-bottom: 1px solid rgba(67, 126, 255, 0.10196078431372549);
}
.help_center_body_finally {
  border: 0;
}

.body_bgc {
  padding-top: 0.213333rem;
  background: rgba(43, 78, 155, 0.05);
  .help_center_body_text {
    background-color: #fff;
  }
  .introduce {
    padding: 0.4rem 0 0.186667rem;
  }
}

.bottom {
  flex: 1;
  background: rgba(43, 78, 155, 0.05);
}
</style>