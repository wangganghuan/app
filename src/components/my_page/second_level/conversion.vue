<template>
  <!-- 闪兑 -->
  <div class="conversion">
    <van-nav-bar title="闪兑">
      <div slot="left" class="discover_index_return" @click="discoverReturn">
        <img src="../../../img/getBack.png" alt />
      </div>
      <div slot="right" class="discover_index_head" @click="Mrecord">记录</div>
    </van-nav-bar>
    <div class="conversion_body">
      <div class="conversion_body_tent">
        <div class="df">
          <div class="conversion_body_input">
            <van-cell-group :border="false">
              <van-field v-model="value" placeholder="USDT" />
            </van-cell-group>
          </div>
          <div class="conversion_body_img">
            <img src="../../../img/PersonalCenter/conversion.png" alt />
          </div>
          <div class="conversion_body_input1">
            <van-cell-group :border="false">
              <van-field v-model="value" placeholder="PGA" />
            </van-cell-group>
          </div>
        </div>
        <div class="conversion_body_buttom">提交</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    discoverReturn() {
      this.$router.go(-1);
    },
    Mrecord() {
      this.$router.push("/conversionrecord");
    }
  }
};
</script>
<style lang="scss" scoped>
.conversion /deep/ {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #fff;
  .van-nav-bar__title {
    height: 1.4rem;
    font-size: 0.4rem !important;
    font-family: Microsoft YaHei;
    font-weight: bold !important;
    color: rgba(68, 68, 68, 1) !important;
    opacity: 1;
  }
  .van-nav-bar {
    height: 1.4rem;
    line-height: 1.4rem;
  }

  .discover_index_head {
    font-size: 0.32rem;
    font-family: Microsoft YaHei;
    font-weight: 400;
    line-height: 0.666667rem;
    color: rgba(102, 102, 102, 1);

    opacity: 1;
  }
  .discover_index_return {
    width: 0.2rem;
    height: 0.3344rem;
  }
  .van-nav-bar__right {
    bottom: 0.333333rem;
  }
  .van-nav-bar__left {
    bottom: 0.466667rem;
  }
  .van-hairline--bottom::after,
  .van-nav-bar ::after {
    border-bottom: 1px solid rgba(43, 78, 155, 0.10196078431372549);
  }
  .van-cell {
    padding: 0.36rem 0;
  }
  .conversion_body {
    flex: 1;
    background: rgba(43, 78, 155, 0.05);
  }
  .conversion_body_tent {
    padding-top: 0.773333rem;
    margin: 0 auto;
    width: 9.32rem;
    height: 4.413333rem;
    background: rgba(255, 255, 255, 1);
    opacity: 1;
    border-radius: 0.186667rem;
    margin-top: 0.28rem;
  }
  .conversion_body_input,
  .conversion_body_input1 /deep/ {
    .van-cell {
      font-size: 0.4rem;
      padding: 0.226667rem 0.986667rem 0.226667rem 0;
      padding-left: 0.986667rem;
    }
    input::-webkit-input-placeholder {
      /* WebKit browsers 适配谷歌 */

      height: 0.533333rem;
      font-size: 0.4rem;
      font-family: Microsoft YaHei;
      font-weight: 400;
      line-height: 0.533333rem;
      color: rgba(68, 68, 68, 1);

      opacity: 1;
    }
    input::-moz-placeholder {
      /* Mozilla Firefox 4 to 18 适配火狐 */
      height: 0.533333rem;
      font-size: 0.4rem;
      font-family: Microsoft YaHei;
      font-weight: 400;
      line-height: 0.533333rem;
      color: rgba(68, 68, 68, 1);

      opacity: 1;
    }

    input:-ms-input-placeholder {
      /* Internet Explorer 10+  适配ie*/
      height: 0.533333rem;
      font-size: 0.4rem;
      font-family: Microsoft YaHei;
      font-weight: 400;
      line-height: 0.533333rem;
      color: rgba(68, 68, 68, 1);

      opacity: 1;
    }
  }
  .conversion_body_input {
    width: 3.126667rem;
    border-bottom: 1px solid rgba(67, 126, 255, 0.10196078431372549);
    margin-left: 0.453333rem;
  }
  .conversion_body_input1 {
    border-bottom: 1px solid rgba(67, 126, 255, 0.10196078431372549);
    width: 3.126667rem;
  }
}
.conversion_body_img {
  width: 0.5772rem;
  height: 0.177467rem;

  margin: 0.386667rem 0.72rem 0 0.92rem;
}
.conversion_body_buttom {
  margin: 0 auto;
  margin-top: 0.92rem;
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