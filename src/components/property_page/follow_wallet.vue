<template>
  <!-- 跟随钱包 -->
  <div class="follow_wallet">
    <div class="follow_wallet_bgc">
      <div class="df property_head_head" @click="getBack">
        <div class="property_get_back">
          <img src="../../img/slices/getBack3.png" alt />
        </div>
        <div class="property_property">跟随钱包</div>
        <div class="property_record">跟随记录</div>
      </div>
      <div class="property">资产预估</div>
      <div class="property_BTC">340.0000 BTC</div>
      <div class="property_bottom">
        <span class="property_estimate">资产预估</span>
        <span class="property_money">340100</span>
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
    getBack() {
      this.$router.go(-1);
    }
  }
};
</script>
<style lang="scss" scoped>
.follow_wallet_bgc {
  padding: 0.293333rem 0.4rem 0;
  height: 4.666667rem;
  background-image: url("../../img/slices/FollowThePursebgc.png");

  background-repeat: no-repeat; /*不平埔*/

  background-position: 50% 50%; /*居中*/

  background-size: 100%; /*背景图片大小*/
}
.property_get_back {
  height: 0.3344rem;
  width: 0.2rem;
  margin-left: 0.04rem;
  margin-top: 0.08rem;
}
.property_head_head {
  justify-content: space-between;
  margin-bottom: 0.666667rem;
}
.property_property {
  flex: 1;
  margin-left: 3.533333rem;
  font-size: 0.4rem;
  font-family: Microsoft YaHei;
  font-weight: bold;
  height: 0.533333rem;
  line-height: 0.533333rem;
  color: rgba(255, 255, 255, 1);

  opacity: 1;
}
.property_record {
  font-size: 0.373333rem;
  font-family: Microsoft YaHei;
  font-weight: 400;
  line-height: 0.493333rem;
  color: rgba(255, 255, 255, 1);

  opacity: 1;
}
.property {
  font-size: 0.373333rem;
  font-family: Microsoft YaHei;
  font-weight: 400;
  line-height: 0.493333rem;
  color: rgba(255, 255, 255, 1);
  opacity: 1;
  margin-bottom: 0.12rem;
}
.property_BTC {
  height: 0.8rem;
  font-size: 0.666667rem;
  font-family: AvantGarde Md BT;
  font-weight: 500;
  line-height: 0.8rem;
  color: rgba(255, 255, 255, 1);

  opacity: 1;
  margin-bottom: 0.2rem;
}
.property_estimate {
  font-size: 0.293333rem;
  font-family: Microsoft YaHei;
  font-weight: 400;
  line-height: 0.386667rem;
  color: rgba(255, 255, 255, 1);
  opacity: 1;
}
.property_money {
  font-size: 0.346667rem;
  font-family: AvantGarde Md BT;
  font-weight: 500;
  line-height: 0.413333rem;
  color: rgba(255, 255, 255, 1);

  opacity: 1;
  margin-left: 0.24rem;
}
.property_bottom {
  line-height: 0;
}
</style>