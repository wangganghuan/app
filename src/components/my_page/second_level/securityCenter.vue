<template>
  <!-- 安全中心 -->
  <div>
    <securityCenterhead title="安全中心" :discoverHead="false"></securityCenterhead>
    <div class="security_body">
      <span class="security_body_text">修改交易密码</span>
      <div class="get_back" @click="getBack">
        <img src="../../../img/返回2.png" alt />
      </div>
    </div>
    <div class="security_body">
      <span class="security_body_text">修改登录密码</span>
      <div class="get_back" @click="getBacklogin">
        <img src="../../../img/返回2.png" alt />
      </div>
    </div>
  </div>
</template>
<script>
import securityCenterhead from "../../commonality/head.vue";

export default {
  components: { securityCenterhead },
  methods: {
    getBack() {
      this.$router.push("/modificationdeal");
    },
    getBacklogin() {
      this.$router.push("/modificationlogin");
    }
  }
};
</script>
<style lang="scss" scoped>
.security_body {
  display: flex;
  height: 1.306667rem;
  margin: 0 0.386667rem 0 0.413333rem;
  justify-content: space-between;
  padding: 0.413333rem 0 0.426667rem;

  border-bottom: 1px solid rgba(67, 126, 255, 0.10196078431372549);
  opacity: 1;
}
.get_back {
  width: 0.166667rem;
  height: 0.282667rem;
  margin-top: 0.14rem;
  margin-right: 0.413333rem;
}
.security_body_text {
  font-size: 0.346667rem;
  font-family: Microsoft YaHei;
  font-weight: 400;
  line-height: 0.466667rem;
  color: rgba(68, 68, 68, 1);

  opacity: 1;
}
</style>