<template>
  <!-- 修改交易密码 -->
  <div>
    <securityCenterhead title="修改交易密码" :discoverHead="false"></securityCenterhead>
    <div class="modification_deal_body">
      <div class="register_input">
        <van-cell-group :border="false">
          <van-field v-model="oldPassword " placeholder="旧密码" />
        </van-cell-group>
      </div>
      <div class="register_input">
        <van-cell-group :border="false">
          <van-field v-model="newPassword" placeholder="新密码" />
        </van-cell-group>
      </div>
      <div class="register_input">
        <van-cell-group :border="false">
          <van-field v-model="confirmPassword" placeholder="确认密码" />
        </van-cell-group>
      </div>
    </div>
    <div class="modification_deal_bottom">
      <div class="modification_deal_button" @click="Mconfirm">确认</div>
    </div>
  </div>
</template>
<script>
import securityCenterhead from "../commonality/head.vue";
export default {
  components: { securityCenterhead },
  data() {
    return {
      //旧密码
      oldPassword: "",
      //新密码
      newPassword: "",
      //确定密码
      confirmPassword: ""
    };
  },
  methods: {
    Mconfirm() {
      console.log("确定");
    }
  }
};
</script>
<style lang="scss" scoped>
.modification_deal_body {
  padding: 0 0.386667rem 0 0.413333rem;
}
.register_input /deep/ {
  border-bottom: 1px solid rgba(67, 126, 255, 0.10196078431372549);
  .van-cell {
    padding: 0.426667rem 0;
  }
  .van-field__body {
    line-height: 0;
    font-size: 0.346667rem;
  }
  input::-webkit-input-placeholder {
    height: 0.466667rem;
    font-size: 0.346667rem;
    font-family: Microsoft YaHei;
    font-weight: 400;
    height: 0.466667rem;
    color: rgba(136, 136, 136, 1);

    opacity: 1;
  }
  input::-moz-input-placeholder {
    height: 0.466667rem;
    font-size: 0.346667rem;
    font-family: Microsoft YaHei;
    font-weight: 400;
    height: 0.466667rem;
    color: rgba(136, 136, 136, 1);

    opacity: 1;
  }
  input::-ms-input-placeholder {
    height: 0.466667rem;
    font-size: 0.346667rem;
    font-family: Microsoft YaHei;
    font-weight: 400;
    height: 0.466667rem;
    color: rgba(136, 136, 136, 1);

    opacity: 1;
  }
}
.modification_deal_button {
  margin: 9.52rem auto 0;
  width: 8rem;
  height: 1.12rem;
  line-height: 1.12rem;
  background: rgba(255, 140, 0, 1);
  box-shadow: 0px 0.04rem 0.266667rem rgba(255, 140, 0, 0.4);
  opacity: 1;
  border-radius: 0.56rem;

  font-size: 0.32rem;
  font-family: Microsoft YaHei;
  font-weight: 400;

  color: rgba(255, 255, 255, 1);

  opacity: 1;
  text-align: center;
}
</style>