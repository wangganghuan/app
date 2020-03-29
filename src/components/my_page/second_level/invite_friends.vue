<template>
  <!-- 邀请好友 -->
  <div>
    <securityCenterhead title="邀请好友" :discoverHead="false"></securityCenterhead>
    <div class="invitebody">
      <div class="invitation_code">我的邀请码</div>
      <div class="cnumber">7482</div>
      <div class="copy">复制</div>
      <div class="fillin">好友可在注册时直接填写邀请码</div>
      <div class="clink">我的邀请链接</div>
      <div class="df csite_parent">
        <div class="csite">https://www.baidu.com/s</div>
        <span class="csite_copy">复制</span>
      </div>
      <div class="wire"></div>
      <div class="scan">发送给好友扫一扫，立即加入</div>
      <div class="QRCode">
        <img src="../../../img/个人中心/QRCode.png" alt />
      </div>
    </div>
  </div>
</template>
<script>
import securityCenterhead from "../../commonality/head.vue";
export default {
  components: { securityCenterhead }
};
</script>
<style lang="scss" scoped>
.invitebody {
  overflow: hidden;
  height: 15.906667rem;
  background-image: url("../../../img/个人中心/邀请好友背景图片.png");
  background-repeat: no-repeat; /*不平埔*/

  background-position: 65% 39%;
  background-size: 125%;
}
.invitation_code {
  height: 0.466667rem;
  font-size: 0.346667rem;
  font-family: Microsoft YaHei;
  font-weight: bold;
  line-height: 0.466667rem;
  color: rgba(68, 68, 68, 1);

  opacity: 1;
  margin-top: 1.786667rem;
  margin-bottom: 0.16rem;
  text-align: center;
}
.cnumber {
  text-align: center;

  height: 1.12rem;
  font-size: 0.933333rem;
  font-family: AvantGarde Md BT;
  font-weight: 500;
  line-height: 1.12rem;
  color: rgba(255, 140, 0, 1);

  opacity: 1;
  margin-bottom: 0.16rem;
}
.copy {
  margin: auto;
  margin-bottom: 0.413333rem;
  text-align: center;
  width: 1.986667rem;
  height: 0.653333rem;
  line-height: 0.653333rem;
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(136, 136, 136, 1);
  opacity: 1;
  border-radius: 0.333333rem;
  font-size: 0.346667rem;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(136, 136, 136, 1);
  opacity: 1;
}
.fillin {
  height: 0.386667rem;
  font-size: 0.293333rem;
  font-family: Microsoft YaHei;
  font-weight: 400;
  line-height: 0.386667rem;
  color: rgba(136, 136, 136, 1);

  opacity: 1;
  text-align: center;
  margin-bottom: 0.906667rem;
}
.clink {
  text-align: center;
  font-size: 0.346667rem;
  font-family: Microsoft YaHei;
  font-weight: bold;
  line-height: 0.466667rem;
  color: rgba(68, 68, 68, 1);

  opacity: 1;
  margin-bottom: 0.666667rem;
}
.csite {
  margin-left: 2.08rem;
  text-align: center;
  width: 4.813333rem;
  height: 0.613333rem;
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(136, 136, 136, 1);
  opacity: 0.88;
  border-radius: 0.306667rem;
  font-size: 0.266667rem;
  font-family: Microsoft YaHei;
  font-weight: 400;
  line-height: 0.613333rem;
  color: rgba(136, 136, 136, 1);
  opacity: 1;
}
.csite_copy {
  margin-left: 0.386667rem;
  font-size: 0.346667rem;
  font-family: Microsoft YaHei;
  font-weight: 400;
  line-height: 0.613333rem;
  color: rgba(255, 140, 0, 1);

  opacity: 1;
}
.csite_parent {
  margin-bottom: 0.813333rem;
}
.wire {
  margin: 0 2.066667rem 0 2.053333rem;
  border-top: 1px solid rgba(216, 216, 216, 1);
  margin-bottom: 0.773333rem;
}
.scan {
  text-align: center;

  font-size: 0.346667rem;
  font-family: Microsoft YaHei;
  font-weight: bold;
  line-height: 0.466667rem;
  color: rgba(68, 68, 68, 1);

  opacity: 1;
  margin-bottom: 0.64rem;
}
.QRCode {
  width: 2.92rem;
  height: 3rem;
  margin: 0 auto;
}
</style>