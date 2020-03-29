<template>
  <!-- 实名认证 -->
  <div>
    <securityCenterhead title="实名认证" :discoverHead="false"></securityCenterhead>
    <div class="modification_deal_body">
      <div class="register_input">
        <van-cell-group :border="false">
          <van-field v-model.trim="Mname" type="string" placeholder="姓名" />
        </van-cell-group>
      </div>
      <div class="register_input">
        <van-cell-group :border="false">
          <van-field v-model.trim="identitCard" type="number" placeholder="身份证号" />
        </van-cell-group>
      </div>
    </div>
    <div class="authentication_text">
      <div class="identitCard">请扫描身份证的正反面</div>
      <div class="nationalEmblem">正面为国徽面 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;反面为头像面</div>
    </div>
    <div class="authentication_img">
      <div class="authentication_img1">
        <img src="../../../img/个人中心/实名认证/身份证正面.png" alt />
      </div>
      <div class="authentication_img2">
        <img src="../../../img/个人中心/实名认证/身份证反面.png" alt />
      </div>
    </div>
    <div class="authentication_buttom">提交</div>
  </div>
</template>
<script>
import securityCenterhead from "../../commonality/head.vue";
export default {
  components: { securityCenterhead },
  data() {
    return { Mname: "", identitCard: "" };
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
.identitCard {
  margin-top: 0.573333rem;
  margin-bottom: 0.106667rem;
  font-size: 0.426667rem;
  font-family: Microsoft YaHei;
  font-weight: 400;
  line-height: 0.56rem;
  color: rgba(68, 68, 68, 1);
  opacity: 1;
}
.authentication_text {
  padding-left: 0.4rem;
}
.nationalEmblem {
  font-size: 0.293333rem;
  font-family: Microsoft YaHei;
  font-weight: 400;
  line-height: 0.386667rem;
  color: rgba(136, 136, 136, 1);
  opacity: 1;
  margin-bottom: 0.56rem;
}
.authentication_img1 {
  margin: 0 auto;
  width: 8.746667rem;
  height: 3.88rem;
  margin-bottom: 0.426667rem;
}
.authentication_img2 {
  margin: 0 auto;
  width: 8.746667rem;
  height: 3.88rem;
  margin-bottom: 0.72rem;
}
.authentication_buttom {
  margin: 0 auto;
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