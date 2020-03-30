<template>
  <!-- 我的 -->
  <div class="mypage">
    <div class="mypage_head">
      <div class="df mypage_head_head">
        <div class="mypage_head_portrait">
          <img src="../../img/headPortrait.png" alt />
        </div>
        <div class="mypage_head_name">
          <div class="mypage_name">ChengDong123</div>
          <div class="mypage_mailbox">18600521100@163.com</div>
        </div>
        <div class="mypage_head_compile">
          <div class="mypage_compile">
            <img src="../../img/PersonalCenter/compile.png" alt />
          </div>
        </div>
      </div>
      <div class="mypage_head_body">
        <div class="mypage_body_left">
          <div class="mypage_body_team">
            <img src="../../img/PersonalCenter/TotalTeamSize.png" alt />
          </div>
          <div class="mypage_body_content">
            <span class="howmany">128</span>
            <div class="mypage_body_text">团队总人数</div>
          </div>
        </div>
        <div class="mypage_body_rigth">
          <div class="mypage_body_team">
            <img src="../../img/PersonalCenter/MyStraightOn.png" alt />
          </div>
          <div class="mypage_body_content">
            <span class="howmany">24</span>
            <div class="mypage_body_text">我的直推</div>
          </div>
        </div>
      </div>
    </div>
    <div class="mypage_body">
      <div class="mypage_body_invite">
        <div class="df">
          <div class="mypage_body_img">
            <img src="../../img/PersonalCenter/inviteFriends.png" alt />
          </div>
          <span class="mypage_body_friend">邀请好友</span>
        </div>

        <div class="get_back" @click="Minvite">
          <img src="../../img/getBack2.png" alt />
        </div>
      </div>
      <mycommin Mname="在线客服" :mypageimg="mypageimg" :Mrouter="service"></mycommin>
      <mycommin Mname="安全中心" :mypageimg="securityCenter"></mycommin>
      <mycommin Mname="帮助中心" :mypageimg="helpCenter" :Mrouter="help_center"></mycommin>
      <mycommin Mname="实名认证" :mypageimg="autonym" :Mrouter="authentication"></mycommin>
      <mycommin Mname="闪兑" :mypageimg="flicker" :Mrouter="conversion"></mycommin>
      <mycommin Mname="我的转账" :mypageimg="transferAccounts" :Mrouter="transfer_accounts"></mycommin>
      <mycommin Mname="关于我们" :mypageimg="aboutUs" :Mrouter="about_us"></mycommin>

      <mycommin Mname="系统设置" :mypageimg="settings" :Mrouter="system_settings"></mycommin>
    </div>
  </div>
</template>
<script>
import mycommin from "./my_commonality";
export default {
  components: {
    mycommin
  },
  data() {
    return {
      mypageimg: require("../../img/PersonalCenter/onlineCustomerService.png"),
      service: "/service",
      securityCenter: require("../../img/PersonalCenter/safeWithdrawing.png"),
      helpCenter: require("../../img/PersonalCenter/helpCenter.png"),
      help_center: "/helpcenter",
      autonym: require("../../img/PersonalCenter/authentication.png"),
      authentication: "/authentication",
      flicker: require("../../img/PersonalCenter/flicker.png"),
      conversion: "/conversion",
      transferAccounts: require("../../img/PersonalCenter/MyMoneyTransfer.png"),
      transfer_accounts: "/transferaccounts",
      aboutUs: require("../../img/PersonalCenter/AboutUs.png"),
      about_us: "/aboutus",
      settings: require("../../img/PersonalCenter/set.png"),
      system_settings: "/systemsettings"
    };
  },
  methods: {
    Minvite() {
      this.$router.push("/invitefriends");
    }
  }
};
</script>
<style lang="scss" scoped>
.mypage_head {
  height: 5.093333rem;
  background-image: url("../../img/PersonalCenter/backgroundColor.png");

  background-repeat: no-repeat; /*不平埔*/

  background-position: 50% 110%; /*居中*/

  background-size: 150%; /*背景图片大小*/
  padding: 0.84rem 0.546667rem 0;
  margin-bottom: 1.56rem;
}
.mypage_head_head {
  margin-bottom: 0.64rem;
}
.mypage_head_portrait {
  margin-left: 0.133333rem;
  width: 1.666667rem;
  height: 1.666667rem;
  border: 2px solid #fff;
  border-radius: 50%;
  img {
    border-radius: 50%;
  }
}
.mypage_name {
  font-size: 0.506667rem;
  font-family: Bahnschrift;
  font-weight: 400;
  line-height: 0.72rem;
  color: rgba(255, 255, 255, 1);
  -webkit-text-stroke: 0.10000000149011612 rgba(255, 255, 255, 1);
  text-stroke: 0.10000000149011612 rgba(255, 255, 255, 1);

  opacity: 1;
}
.mypage_mailbox {
  font-size: 0.266667rem;
  font-family: Microsoft YaHei;
  font-weight: 400;
  line-height: 0.346667rem;
  color: rgba(255, 255, 255, 1);
  opacity: 0.82;
}
.mypage_head_name {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 0.44rem;
}
.mypage_head_compile {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 0.693333rem;
}
.mypage_compile {
  width: 0.453867rem;
  height: 0.453867rem;
}
.mypage_head_body {
  display: flex;
}

.mypage_body_left {
  margin-right: 0.266667rem;
  .mypage_body_content {
    margin-left: 0.466667rem;
    .howmany {
      margin-left: 0.133333rem;
    }
  }
}
.mypage_body_rigth {
  .mypage_body_content {
    margin-left: 0.613333rem;
    .howmany {
      margin-left: 0.146667rem;
    }
  }
}
.mypage_body_left,
.mypage_body_rigth {
  display: flex;
  padding: 0.4rem 0 0 0.12rem;
  width: 4.32rem;
  height: 2.4rem;

  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0.04rem 0.186667rem rgba(0, 0, 0, 0.1);
  opacity: 1;
  border-radius: 21px;
}
.mypage_body_team {
  width: 1.493333rem;
  height: 1.493333rem;
}
.howmany {
  font-size: 0.8rem;
  font-family: Bahnschrift;
  font-weight: 400;
  line-height: 1.12rem;
  color: rgba(68, 68, 68, 1);
  -webkit-text-stroke: 0.10000000149011612 rgba(255, 255, 255, 1);
  text-stroke: 0.10000000149011612 rgba(255, 255, 255, 1);

  opacity: 1;
}
.mypage_body_text {
  font-size: 0.293333rem;
  font-family: Microsoft YaHei;
  font-weight: 400;
  line-height: 0.386667rem;
  color: rgba(68, 68, 68, 1);
  opacity: 1;
}
.mypage_body_content {
  line-height: 0;
}
.mypage_body {
  padding-left: 0.853333rem;
}
.mypage_body_invite {
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-bottom: 0.346667rem;

  border-bottom: 1px solid rgba(67, 126, 255, 0.10196078431372549);
  opacity: 1;
}
.mypage_body_img {
  width: 0.5024rem;
  height: 0.5024rem;
  margin-right: 0.626667rem;
}
.mypage_body_friend {
  display: inline-block;
  font-size: 0.373333rem;
  font-family: Microsoft YaHei;
  font-weight: 400;
  line-height: 0.493333rem;
  color: rgba(68, 68, 68, 1);
  -webkit-text-stroke: 0.10000000149011612 rgba(255, 255, 255, 1);
  text-stroke: 0.10000000149011612 rgba(255, 255, 255, 1);
  opacity: 1;
}
.get_back {
  width: 0.166667rem;
  height: 0.282667rem;
  margin-top: 0.04rem;
  margin-right: 0.786667rem;
}
</style>