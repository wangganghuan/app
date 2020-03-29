<template>
  <!-- 忘记密码 -->
  <div class="register">
    <div class="getback">
      <div class="getback_img" @click="getback">
        <img src="../img/返回.png" alt />
      </div>
    </div>
    <div class="register_body">
      <div class="register_register">忘记PGA登录密码</div>
      <div class="register_chance">输入手机号或邮箱找回密码</div>

      <div class="register_input">
        <van-cell-group :border="false">
          <van-field v-model="mobile" placeholder="请输入手机号或邮箱" />
        </van-cell-group>
      </div>
      <div class="register_input verification">
        <van-cell-group :border="false">
          <van-field v-model="inputVerification" placeholder="请输入验证码" />
        </van-cell-group>
        <div
          @click="Mverification"
          :class="[isActive ? activeClass :  errorClass]"
        >{{isActive?"验证码":"重试"+"（"+verifica+"）"}}</div>
      </div>
      <div class="register_input">
        <van-cell-group :border="false">
          <van-field v-model="password" placeholder="请输入新登录密码" />
        </van-cell-group>
      </div>
      <div class="register_input">
        <van-cell-group :border="false">
          <van-field v-model="securityCode" placeholder="确认登录密码" />
        </van-cell-group>
      </div>

      <div class="register_login" @click="registerLogin" replace to="/home">确认并登录</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "forgetthepassword",
  data() {
    return {
      activeClass: "register_input_verification",
      errorClass: "register_input_errorClass",
      isActive: true,
      //用户名
      unane: "",
      //手机号
      mobile: "",
      //密码
      password: "",
      //安全密码
      securityCode: "",
      //邀请码
      invitationCode: "",
      inputVerification: "",
      verifica: 20,
      clicktime: 0
    };
  },
  methods: {
    getback() {
      this.$router.go(-1);
    },
    registerLogin() {
      this.$router.replace("/login");
    },
    Mverification() {
      this.clicktime++;
      this.isActive = false;
      if (this.clicktime == 1) {
        var time = setInterval(() => {
          this.verifica--;
          if (this.verifica == 0) {
            this.clicktime = 0;
            this.verifica = 20;
            this.isActive = true;
            clearInterval(time);
          }
        }, 1000);
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.getback {
  padding: 0.76rem 0 1.24rem 0.546667rem;
}
.getback_img {
  width: 0.333333rem;
  height: 0.574933rem;
}
.register_body {
  padding: 0 0.986667rem 0 1rem;
}
.register_register {
  margin-bottom: 0.24rem;
  font-size: 0.586667rem;
  font-family: Microsoft YaHei;
  font-weight: bold;
  line-height: 0.786667rem;
  color: rgba(0, 0, 0, 1);

  opacity: 1;
}
.register_chance {
  font-size: 0.346667rem;
  font-family: Microsoft YaHei;
  font-weight: 400;
  line-height: 0.466667rem;
  color: rgba(102, 102, 102, 1);
  opacity: 1;
  margin-bottom: 1.106667rem;
}
.register_body /deep/ {
  .van-cell {
    font-size: 0.32rem;
    line-height: 0;
    padding: 0.28rem 0;
    border-bottom: 1px solid rgba(238, 238, 238, 1);
  }
  input::-webkit-input-placeholder {
    font-size: 0.32rem;
    font-family: Microsoft YaHei;
    font-weight: 400;
    line-height: 0.413333rem;
    color: rgba(136, 136, 136, 1);

    opacity: 1;
  }
  input::-moz-input-placeholder {
    font-size: 0.32rem;
    font-family: Microsoft YaHei;
    font-weight: 400;
    line-height: 0.413333rem;
    color: rgba(136, 136, 136, 1);

    opacity: 1;
  }
  input::-ms-input-placeholder {
    font-size: 0.32rem;
    font-family: Microsoft YaHei;
    font-weight: 400;
    line-height: 0.413333rem;
    color: rgba(136, 136, 136, 1);

    opacity: 1;
  }
}
.register_input {
  margin-bottom: 0.2rem;
}
.verification {
  position: relative;
}
.register_input_verification {
  top: 0.24rem;
  right: 0;
  position: absolute;
  text-align: center;
  height: 0.56rem;
  line-height: 0.56rem;
  width: 1.306667rem;

  background: rgba(255, 140, 0, 1);
  opacity: 1;
  border-radius: 0.28rem;
  font-size: 0.266667rem;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);

  opacity: 1;
}
.register_login {
  margin-top: 1.146667rem;
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
  text-align: center;
  color: rgba(255, 255, 255, 1);
  opacity: 1;
  margin-bottom: 0.546667rem;
}

.register_input_errorClass {
  text-align: center;
  width: 1.866667rem;
  line-height: 0.56rem;
  height: 0.56rem;
  background: rgba(255, 140, 0, 1);
  opacity: 1;
  border-radius: 0.28rem;
  top: 0.24rem;
  right: 0;
  position: absolute;
  text-align: center;
  font-size: 0.266667rem;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
}
</style>