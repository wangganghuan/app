<template>
  <!-- 系统设置 -->
  <div class="system_settingbody">
    <securityCenterhead title="系统设置" :discoverHead="false"></securityCenterhead>
    <div class="language">
      <span>语言选择</span>
      <div class="df">
        English
        <div class="language_img">
          <img src="../../../img/返回2.png" alt />
        </div>
      </div>
    </div>
    <div class="settingbody"></div>
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
.system_settingbody {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.language {
  display: flex;
  justify-content: space-between;
  padding: 0.426667rem 0.8rem 0.426667rem 0.4rem;

  font-size: 0.346667rem;
  font-family: Microsoft YaHei;
  font-weight: 400;

  color: rgba(68, 68, 68, 1);

  opacity: 1;
}
.language_img {
  width: 0.166667rem;
  height: 0.282667rem;
  margin-top: 0.093333rem;
  margin-left: 0.253333rem;
}
.settingbody {
  flex: 1;
  background: rgba(142, 148, 159, 0.05);
}
</style>