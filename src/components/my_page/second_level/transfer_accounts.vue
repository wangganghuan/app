<template>
  <!-- 我的转账 -->
  <div id="discover_index">
    <van-nav-bar title="我的转账">
      <div slot="left" class="discover_index_return" @click="discoverReturn">
        <img src="../../../img/getBack.png" alt />
      </div>
      <div slot="right" class="discover_index_head" @click="Mrecord">记录</div>
    </van-nav-bar>
    <div class="discover_input">
      <van-field v-model="accountNumber" label="对方账号" placeholder="请输入对方账号" />
    </div>
    <div class="discover_input">
      <van-field v-model="transferNumber" label="转账数量" placeholder="请输入转账数量" />
    </div>
    <div class="discover_input">
      <van-field v-model="transactionPassword" label="交易密码" placeholder="请输入交易密码" />
    </div>
    <div class="discover_input_bottom">
      <van-field
        v-model="DgetCode"
        label="验证码"
        placeholder="请输入验证码"
        :border="false"
        :maxlength="9"
      />
      <div class="get_code" @click="getCode">获取验证码</div>
    </div>
    <div class="discover_body">
      <div class="discover_body_submit">
        <van-button type="primary" size="large" @click="submit()" @keydown.14="show($event)">返回</van-button>
        <div class="discover_body_button" @click="Msubmit">提交</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      //交易密码
      transactionPassword: "",
      //转账数量
      transferNumber: "",
      //对方账号
      accountNumber: "",
      //获取验证码
      DgetCode: ""
    };
  },
  methods: {
    show(e) {
      console.log(e);
    },
    add() {
      console.log(1111111111);
    },
    discoverReturn() {
      this.$router.go(-1);
    },
    getCode() {
      console.log("获取验证码");
    },
    Msubmit() {
      console.log("提交");
    },
    Mrecord() {
      this.$router.push("/record");
    }
  },
  watch: {
    accountNumber(val, val2) {
      console.log(val);
      console.log(val2);
    }
  },
  created() {},
  mounted() {},
  updated() {}
};
</script>
<style lang="scss" scoped>
#discover_index /deep/ {
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
}
.discover_input /deep/ {
  .van-field__label {
    width: 6.893333rem;
  }
  margin-left: 0.4rem;
  border-bottom: 1px solid rgba(67, 126, 255, 0.10196078431372549);
  .van-cell__value {
    font-size: 0.32rem;
  }
  input::-webkit-input-placeholder {
    /* WebKit browsers 适配谷歌 */

    height: 0.413333rem;
    font-size: 0.32rem;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: rgba(136, 136, 136, 1);

    opacity: 1;
  }
  input::-moz-placeholder {
    /* Mozilla Firefox 4 to 18 适配火狐 */
    font-size: 0.32rem;
    font-family: Microsoft YaHei;
    font-weight: 400;
    line-height: 0.413333rem;
    color: rgba(136, 136, 136, 1);

    opacity: 1;
  }

  input:-ms-input-placeholder {
    /* Internet Explorer 10+  适配ie*/
    font-size: 0.32rem;
    font-family: Microsoft YaHei;
    font-weight: 400;
    line-height: 0.413333rem;
    color: rgba(136, 136, 136, 1);

    opacity: 1;
  }
}
.discover_input_bottom /deep/ {
  margin-left: 0.4rem;
  .van-field__label {
    width: 5.28rem;
  }
  position: relative;
  .van-cell__value {
    font-size: 0.32rem;
  }
  input::-webkit-input-placeholder {
    /* WebKit browsers 适配谷歌 */

    height: 0.413333rem;
    font-size: 0.32rem;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: rgba(136, 136, 136, 1);

    opacity: 1;
  }
  input::-moz-placeholder {
    /* Mozilla Firefox 4 to 18 适配火狐 */
    font-size: 0.32rem;
    font-family: Microsoft YaHei;
    font-weight: 400;
    line-height: 0.413333rem;
    color: rgba(136, 136, 136, 1);

    opacity: 1;
  }

  input:-ms-input-placeholder {
    /* Internet Explorer 10+  适配ie*/
    font-size: 0.32rem;
    font-family: Microsoft YaHei;
    font-weight: 400;
    line-height: 0.413333rem;
    color: rgba(136, 136, 136, 1);

    opacity: 1;
  }
}
.get_code {
  top: 0.453333rem;
  right: 0.413333rem;
  position: absolute;
  height: 0.413333rem;
  font-size: 0.32rem;
  font-family: Microsoft YaHei;
  font-weight: 400;
  line-height: 0.413333rem;
  color: rgba(255, 140, 0, 1);

  opacity: 1;
}
.discover_body {
  background-color: rgba(43, 78, 155, 0.05);
  padding-top: 0.213333rem;
}
.discover_body_button {
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
.discover_body_submit {
  background-color: #fff;
  padding-top: 2.866667rem;
}
</style>