<template>
  <!-- 行情 -->
  <div id="market">
    <div class="marketTent">
      <div class="market_head">
        <span>币种</span>
        <span>24H量</span>
        <span>最新价</span>
        <span>涨跌幅</span>
      </div>
      <div
        v-for="(item,index) in market"
        :key="index"
        v-bind:class="[market.length!=index+1 ? market_body :market_border]"
      >
        <div class="market_head_left">
          <div class="market_head_content">
            <div>
              <span class="market_head_BTC">{{item.Mtype}}</span>
              <span class="market_head_USDT">/USDT</span>
            </div>

            <span class="market_head_data">{{item.price}}</span>
          </div>
          <div class="market_head_body">
            <div>
              <span class="market_head_body_quantity">{{item.quantity}}</span>
              <span class="market_head_body_USDT">USDT</span>
            </div>
            <span class="market_head_body_money">￥{{item.money}}</span>
          </div>
        </div>
        <div class="market_head_right">
          <div :class="[item.percent<0 ? amount_increase :  errorClass]">{{item.percent}}%</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "market",
  props: {
    market: {
      default: () => {
        return [
          {
            Mtype: "BTC",
            quantity: "24H量136.78K",
            price: 2268.54,
            money: 0.1254,
            percent: "-7.28"
          },
          {
            Mtype: "ETH",
            quantity: "24H量136.78K",
            price: 2268.54,
            money: 0.1254,
            percent: "+1.25"
          },
          {
            Mtype: "BTC",
            quantity: "24H量136.78K",
            price: 2268.54,
            money: 0.1254,
            percent: "-3.21"
          },
          {
            Mtype: "BTC",
            quantity: "24H量136.78K",
            price: 2268.54,
            money: 0.1254,
            percent: "-1.28"
          },
          {
            Mtype: "BTC",
            quantity: "24H量136.78K",
            price: 2268.54,
            money: 0.1254,
            percent: "+1.25"
          },
          {
            Mtype: "BTC",
            quantity: "24H量136.78K",
            price: 2268.54,
            money: 0.1254,
            percent: "-3.21"
          },
          {
            Mtype: "BTC",
            quantity: "24H量136.78K",
            price: 2268.54,
            money: 0.1254,
            percent: "-1.28"
          },
          {
            Mtype: "BTC",
            quantity: "24H量136.78K",
            price: 2268.54,
            money: 0.1254,
            percent: "-1.28"
          },
          {
            Mtype: "BTC",
            quantity: "24H量136.78K",
            price: 2268.54,
            money: 0.1254,
            percent: "-1.28"
          }
        ];
      }
    }
  },
  data() {
    return {
      amount_increase: "amount_increase",
      errorClass: "errorClass",
      market_body: "market_body",
      market_border: "market_border"
    };
  },
  created() {
    console.log(this.market);
  }
};
</script>
<style lang="scss" scoped>
#market {
  background: rgba(43, 78, 155, 0.05);
  padding-top: 0.213333rem;
  .marketTent {
    padding: 0.24rem 0.4rem 0 0.4rem;
    background-color: #fff;
    .market_head_left {
      width: 6.64rem;
      margin-right: 0.64rem;
    }
    .market_head {
      font-size: 0.293333rem;
      font-family: Microsoft YaHei;
      font-weight: 400;
      line-height: 0.386667rem;
      color: rgba(121, 133, 158, 1);
      opacity: 1;

      span {
        display: inline-block;
      }
      span:nth-child(1) {
        width: 1.293333rem;
      }
      span:nth-child(2) {
        width: 4.186667rem;
      }
      span:nth-child(3) {
        width: 2.84rem;
      }
    }
    .market_body {
      display: flex;
      padding-bottom: 0.346667rem;

      border-bottom: 1px solid rgba(43, 78, 155, 0.10196078431372549);
      opacity: 1;

      padding-top: 0.36rem;
    }
    .market_border {
      display: flex;
      padding-bottom: 0.346667rem;

      opacity: 1;

      padding-top: 0.36rem;
    }
    .marketTent:nth-child(1) {
      border: 1px solid #000;
    }
    .market_head_content {
      display: flex;
      justify-content: space-between;
      line-height: 0;
      margin-bottom: 0.186667rem;
    }
    .market_head_BTC {
      display: inline-block;
      line-height: 0.453333rem;
      width: 0.853333rem;
      font-size: 0.373333rem;
      font-family: Novecento Normal;
      font-weight: 400;

      color: rgba(34, 34, 34, 1);

      opacity: 1;
    }
    .market_head_USDT {
      line-height: 0.346667rem;

      font-size: 0.266667rem;
      font-family: Microsoft YaHei;
      font-weight: 400;

      color: rgba(136, 136, 136, 1);

      opacity: 1;
    }
    .market_head_data {
      line-height: 0.453333rem;
      font-size: 0.373333rem;
      font-family: Novecento Normal;
      font-weight: 400;
      line-height: 0.453333rem;
      color: #222222;
    }
    .market_head_body {
      display: flex;
      justify-content: space-between;
      line-height: 0;
      .market_head_body_quantity {
        display: inline-block;
        width: 2.346667rem;
        font-size: 0.293333rem;
        font-family: Microsoft YaHei;
        font-weight: 400;
        line-height: 0.386667rem;
        color: rgba(102, 102, 102, 1);

        opacity: 1;
      }
      .market_head_body_USDT {
        font-size: 0.293333rem;
        font-family: Microsoft YaHei;
        font-weight: 400;
        line-height: 0.386667rem;
        color: rgba(136, 136, 136, 1);

        opacity: 1;
      }
      .market_head_body_money {
        font-size: 0.266667rem;
        font-family: AvantGarde Md BT;
        font-weight: 500;
        line-height: 0.32rem;
        color: rgba(121, 133, 158, 1);
        margin-right: 0.026667rem;

        opacity: 1;
      }
    }
    .amount_increase {
      width: 1.96rem;
      height: 0.88rem;
      line-height: 0.88rem;
      text-align: center;
      background: rgba(237, 97, 103, 1);
      opacity: 1;
      border-radius: 0.08rem;
      font-size: 0.373333rem;
      font-family: AvantGarde Md BT;
      font-weight: 500;

      color: rgba(255, 255, 255, 1);

      opacity: 1;
    }
    .errorClass {
      width: 1.96rem;
      height: 0.88rem;
      line-height: 0.88rem;
      text-align: center;
      background: rgba(82, 196, 139, 1);
      opacity: 1;
      border-radius: 0.08rem;
      font-size: 0.373333rem;
      font-family: AvantGarde Md BT;
      font-weight: 500;

      color: rgba(255, 255, 255, 1);

      opacity: 1;
    }
  }
}
</style>