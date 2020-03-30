
<template>
  <!-- 团队总业绩-->
  <div class="follow_wallet">
    <div class="follow_wallet_bgc">
      <div class="df property_head_head" @click="getBack">
        <div class="property_get_back" @click="getDack">
          <img src="../../img/slices/getBack3.png" alt />
        </div>
        <div class="property_property">团队总业绩</div>
        <div class="property_record">收益记录</div>
      </div>
      <div class="property_money">340.0000</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "dynamic_walle",
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
  background-image: url("../../img/slices/TotalTeamPerformancebgc.png");

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
  margin-bottom: 1.28rem;
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
.property_money {
  text-align: center;
  font-size: 0.666667rem;
  font-family: AvantGarde Md BT;
  font-weight: 500;
  line-height: 0.8rem;
  color: rgba(255, 255, 255, 1);

  opacity: 1;
}
</style>