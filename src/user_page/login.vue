
<template>
  <!-- 登陆 -->
  <div id="app">
    <div class="app_img">
      <div class="app_log">
        <img src="../img/log.png" alt />
      </div>
    </div>
    <div class="app_login">
      <div class="app_input">
        <div class="app_userName">用户名</div>
        <van-cell-group :border="false">
          <van-field v-model="userName" placeholder="请输入登陆用户名" />
        </van-cell-group>
        <div class="app_password">密码</div>
        <van-cell-group :border="false">
          <van-field v-model="password" placeholder="请输入登陆密码" type="password" />
        </van-cell-group>
      </div>
    </div>
    <div>
      <div class="app_button" @click="Mlogin">登录</div>
    </div>
    <div class="app_bottom">
      <span @click="Mforget">忘记密码</span>
      <span @click="Mregister">注册账号</span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      //用户名
      userName: "",
      //密码
      password: ""
    };
  },
  methods: {
    Mlogin() {
      console.log("登录");
    },
    //注册
    Mregister() {
      this.$router.push("/register");
    },
    //忘记密码
    Mforget() {
      this.$router.push("/forgetthepassword");
    }
  }
};
</script>
<style lang="scss" scoped>
#app {
  height: 100%;
  .app_img {
    height: 3.906667rem;
    margin-top: 2.04rem;
    .app_log {
      margin: 0 auto;
      width: 2.933333rem;
      height: 2.933333rem;
    }
  }
  .app_login {
    padding: 0 1rem 0 1rem;
  }
  .app_userName,
  .app_password {
    height: 0.413333rem;
    font-size: 0.32rem;
    font-family: Microsoft YaHei;
    font-weight: 400;
    line-height: 0.413333rem;
    color: rgba(136, 136, 136, 1);

    opacity: 1;
  }
}
#app /deep/ {
  .van-cell-group {
    border-bottom: 1px solid rgba(238, 238, 238, 1);
    opacity: 1;
  }
  .van-cell {
    padding: 0.253333rem 0 0.26rem 0;
  }
  .van-field__control {
    color: #222222;
    font-size: 0.373333rem;
    font-weight: 500;
    font-family: AvantGarde Md BT;
  }
  input::-webkit-input-placeholder {
    /* WebKit browsers 适配谷歌 */

    font-size: 0.32rem;
    font-family: Microsoft YaHei;
    font-weight: 400;

    color: rgba(136, 136, 136, 1);
    opacity: 1;
  }
  input:-moz-placeholder {
    /* Mozilla Firefox 4 to 18 适配火狐 */
    font-size: 0.32rem;
    font-family: Microsoft YaHei;
    font-weight: 400;

    color: rgba(136, 136, 136, 1);
    opacity: 1;
  }
  input::-moz-placeholder {
    /* Mozilla Firefox 19+ 适配火狐 */
    font-size: 0.32rem;
    font-family: Microsoft YaHei;
    font-weight: 400;

    color: rgba(136, 136, 136, 1);
    opacity: 1;
  }
  input:-ms-input-placeholder {
    /* Internet Explorer 10+  适配ie*/
    font-size: 0.32rem;
    font-family: Microsoft YaHei;
    font-weight: 400;

    color: rgba(136, 136, 136, 1);
    opacity: 1;
  }
  .app_password {
    margin-top: 0.46rem;
  }
  .app_input {
    margin-bottom: 1.526667rem;
  }
  .app_button {
    width: 8rem;
    height: 1.12rem;
    background: rgba(255, 140, 0, 1);
    box-shadow: 0 0.04rem 0.266667rem rgba(255, 140, 0, 0.4);
    opacity: 1;
    margin: 0 auto;
    font-size: 0.32rem;
    font-family: Microsoft YaHei;
    font-weight: 400;
    line-height: 1.12rem;
    color: rgba(255, 255, 255, 1);
    text-align: center;
    opacity: 1;
    border-radius: 0.666667rem;
    margin-bottom: 0.653333rem;
  }
  .app_bottom {
    padding: 0 1rem 0 1rem;
    display: flex;
    justify-content: space-between;
    font-size: 0.32rem;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: rgba(85, 85, 85, 1);

    opacity: 1;
  }
}
</style>