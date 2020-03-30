<template>
  <div>
    <div class="mypage_body_invite">
      <div class="df">
        <div class="mypage_body_img" v-if="exist">
          <img :src="mypageimg" alt />
        </div>
        <span class="mypage_body_friend">{{Mname}}</span>
      </div>

      <div class="get_back" @click="getBack">
        <img src="../../img/getBack2.png" alt />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    exist: {
      default: true
    },
    mypageimg: {
      default: require("../../img/PersonalCenter/inviteFriends.png")
    },
    Mname: {
      default: "邀请好友"
    },
    Mrouter: {
      default: "/securitycenter"
    }
  },
  methods: {
    getBack() {
      this.$router.push(this.Mrouter);
    }
  }
};
</script>
<style lang="scss" scoped>
.mypage_body_invite {
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-bottom: 0.346667rem;
  padding-top: 0.466667rem;

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