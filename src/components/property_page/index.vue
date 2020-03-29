<template>
  <!-- 资产 -->
  <div class="property">
    <div class="property_head">
      <!-- 图片 -->
      <div class="df property_head_head" @click="getBack">
        <div class="property_get_back">
          <img src="../../img/资产_slices/返回22x.png" alt />
        </div>
        <div class="property_property">总资产</div>
      </div>
      <div class="property_BTC">340.0000 BTC</div>
      <div class="property_dollar">≈ $340100</div>
      <div class="df property_bottom">
        <div>
          <span class="property_usable">质押跟随</span>
          <span class="property_money">0.00</span>
        </div>

        <div>
          <span class="property_usable">可用</span>
          <span class="property_money property_money_rigth">0.00</span>
        </div>
      </div>
    </div>
    <div class="property_body">
      <router-link to="/followwallet">
        <div>
          <span class="property_body_money">34000</span>
          <span class="property_body_wallet follow">跟随钱包</span>
        </div>
      </router-link>
      <router-link to="dynamicwalle">
        <div>
          <span class="property_body_money">34000</span>
          <span class="property_body_wallet dynamic">动态钱包</span>
        </div>
      </router-link>
      <router-link to="/teamwalle">
        <div>
          <span class="property_body_money">12000</span>
          <span class="property_body_wallet team">团队总业绩</span>
        </div>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "property",
  data() {
    return {};
  },
  methods: {
    getBack() {
      // this.$router.go(-1);
    }
  }
};
</script>
<style lang="scss" scoped>
.property {
  .property_head {
    height: 4.333333rem;
    background: url("../../img/资产_slices/背景图片.png") no-repeat;
    background-repeat: no-repeat; /*不平埔*/
    background-position: 50% 50%; /*居中*/
    background-size: 100%; /*背景图片大小*/
    padding: 0.413333rem 0.4rem 0.76rem 0.44rem;
  }
  .property_get_back {
    height: 0.3344rem;
    width: 0.2rem;
  }
  .property_head_head {
    text-align: center;
  }
  .property_property {
    line-height: 0.3477rem;
    font-size: 0.373333rem;
    font-family: Microsoft YaHei;
    font-weight: 400;

    color: rgba(255, 255, 255, 1);
    opacity: 1;
    margin-left: 3.72rem;
  }
  .property_head_head {
    margin-bottom: 0.253333rem;
  }
  .property_BTC {
    text-align: center;
    font-size: 0.666667rem;
    font-family: AvantGarde Md BT;
    font-weight: 500;

    color: rgba(255, 255, 255, 1);

    opacity: 1;
  }
  .property_dollar {
    margin: 0.066667rem 0 0.706667rem 4.68rem;

    font-size: 0.346667rem;
    font-family: AvantGarde Md BT;
    font-weight: 500;
    line-height: 0.413333rem;
    color: rgba(255, 255, 255, 1);

    opacity: 1;
  }
  .property_bottom {
    justify-content: space-between;
    line-height: 0;
  }
  .property_usable {
    font-size: 0.293333rem;
    font-family: Microsoft YaHei;
    font-weight: 400;
    line-height: 0.386667rem;
    color: rgba(255, 255, 255, 1);
    opacity: 1;
  }
  .property_money {
    padding-left: 0.146667rem;
    font-size: 0.346667rem;
    font-family: AvantGarde Md BT;
    font-weight: 500;
    line-height: 0.413333rem;
    color: rgba(255, 255, 255, 1);

    opacity: 1;
  }
  .property_money_rigth {
    padding-left: 0.186667rem;
  }
  .property_body {
    padding: 0.4rem 0.4rem 0 0.4rem;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    flex-wrap: wrap;
    div {
      padding: 0.493333rem 0 0 0.546667rem;
      width: 4.52rem;
      height: 2.12rem;
      background-color: #000;
      margin-bottom: 0.333333rem;
      line-height: 0.2rem;
    }
    div:nth-child(1) {
      background: url("../../img/资产_slices/跟随钱包.png") no-repeat;
      background-repeat: no-repeat; /*不平埔*/
      background-position: 50% 50%; /*居中*/
      background-size: 100%; /*背景图片大小*/
    }
    div:nth-child(2) {
      background: url("../../img/资产_slices/动态钱包.png") no-repeat;
      background-repeat: no-repeat; /*不平埔*/
      background-position: 50% 50%; /*居中*/
      background-size: 100%; /*背景图片大小*/
    }

    div:nth-child(3) {
      background: url("../../img/资产_slices/团队总业绩.png") no-repeat;
      background-repeat: no-repeat; /*不平埔*/
      background-position: 50% 50%; /*居中*/
      background-size: 100%; /*背景图片大小*/
    }
    .property_body_money {
      display: block;
      height: 0.8rem;
      font-size: 0.666667rem;
      font-family: AvantGarde Md BT;
      font-weight: 500;
      line-height: 0.8rem;
      color: rgba(255, 255, 255, 1);
      margin-bottom: 0.106667rem;
    }
    .property_body_wallet {
      display: block;
      height: 0.386667rem;
      font-size: 0.293333rem;
      font-family: Microsoft YaHei;
      font-weight: 400;
      line-height: 0.386667rem;
      color: rgba(255, 255, 255, 1);

      opacity: 1;
    }
  }
  .follow {
    padding-left: 0.373333rem;
  }
  .dynamic {
    padding-left: 0.493333rem;
  }
  .team {
    padding-left: 0.226667rem;
  }
}
</style>