<template>
  <!-- 在线客服 -->
  <div>
    <securityCenterhead title="在线客服" :discoverHead="false"></securityCenterhead>
    <div class="service_body">
      <van-cell-group :border="false" :class="[Dfocus?activeColor:errorClass]">
        <van-field
          v-model="value"
          placeholder="请输入内容"
          type="textarea"
          @focus="Mfocus"
          @blur="Mblur"
        />
      </van-cell-group>
    </div>
    <div class="bottom">
      <div class="button">确认</div>
    </div>
  </div>
</template>
<script>
import securityCenterhead from "../../commonality/head.vue";
export default {
  components: {
    securityCenterhead
  },
  data() {
    return {
      value: "我觉得对我们说的吗...",
      Dfocus: false,
      activeColor: "van-cell-group1",
      errorClass: "van-cell-group"
    };
  },
  methods: {
    Mfocus() {
      this.Dfocus = true;
    },
    Mblur() {
      this.Dfocus = false;
    }
  }
};
</script>
<style lang="scss" scoped>
.service_body /deep/ {
  margin-bottom: 9.186667rem;
  margin-top: 0.466667rem;
  padding: 0 0.4rem;
  .van-cell {
    padding: 0.333333rem 0.386667rem;
    height: 100%;
    background-color: transparent;
    .van-field__body {
      height: 100%;
      line-height: 1;
      font-size: 0.32rem;
      .van-field__control {
        height: 100%;
      }
    }
  }
  .van-cell-group {
    height: 3.853333rem;
    border: 1px solid rgba(153, 153, 153, 1);
    border-radius: 0.12rem;
  }
  .van-cell-group1 {
    height: 3.853333rem;
    border: 1px solid rgba(255, 140, 0, 1);
    border-radius: 0.12rem;
  }
  textarea::-webkit-input-placeholder {
    /* WebKit browsers 适配谷歌 */

    font-size: 0.32rem;
    font-family: Microsoft YaHei;
    font-weight: 400;
    line-height: 0.413333rem;
    color: rgba(136, 136, 136, 1);

    opacity: 1;
  }
  textarea:-moz-placeholder {
    /* Mozilla Firefox 4 to 18 适配火狐 */
    font-size: 0.32rem;
    font-family: Microsoft YaHei;
    font-weight: 400;
    line-height: 0.413333rem;
    color: rgba(136, 136, 136, 1);

    opacity: 1;
  }

  textarea:-ms-input-placeholder {
    /* Internet Explorer 10+  适配ie*/
    font-size: 0.32rem;
    font-family: Microsoft YaHei;
    font-weight: 400;
    line-height: 0.413333rem;
    color: rgba(136, 136, 136, 1);

    opacity: 1;
  }
}
.button {
  margin: 0 auto;
  text-align: center;
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
}
</style>