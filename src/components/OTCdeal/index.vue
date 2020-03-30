<template>
  <div class="Otcdeal">
    <div class="Otcdeal_head">
      <div class="Otcdeal_head_OTC">
        <div>
          <span>OTC</span>
        </div>
        <div>
          <span class="Otcdeal_head_OTC_span">发布委托</span>
        </div>
        <div>
          <span>我的订单</span>
        </div>
      </div>
      <div class="head_portrait">
        <img src="../../img/headPortrait.png" alt />
      </div>
    </div>
    <div class="Otcdeal_title">
      <span class="Otcdeal_purchase">我要购买</span>
      <span class="Otcdeal_sell">我要出售</span>
    </div>
    <div class="Otcdeal_body_">
      <div class="Otcdeal_body" v-for="(item,index) in otcdealData" :key="index">
        <div class="Otcdeal_content">
          <div class="Otcdeal_content_hede">
            <div class="df Otcdeal_content_hede_left">
              <div class="Otcdeal_content_portrait">
                <img :src="item.img" alt />
              </div>

              <span class="Otcdeal_content_name">吴亦凡</span>
              <div class="Otcdeal_content_vip">
                <img src="../../img/memberManagement.png" alt />
              </div>
            </div>
            <div class="Otcdeal_content_hede_right">
              <span>{{item.Mnumber}}</span>
              <span></span>
              <span>{{item.percentage}}</span>
            </div>
          </div>
          <div class="Otcdeal_content_hede_content">
            <div>
              <div class="Otcdeal_content_hede_CNY">
                <span>{{item.CNY}}</span>
                <span>CNY</span>
              </div>
              <div class="Otcdeal_content_hede_quota">
                <span>{{item.quota}}</span>
              </div>
              <div class="Otcdeal_content_hede_quota">
                <span>{{item.quantity}}</span>
              </div>
            </div>
            <div>
              <ul class="Otcdeal_content_hede_ul">
                <li v-for="(value,i) in item.purchase" :key="i">
                  <img :src="value" alt />
                </li>
              </ul>
              <router-link :to="'/purchase/'+item.id">
                <div class="Otcdeal_content_hede_purchase">购买</div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "otcdeal",

  data() {
    return {
      //模拟数据
      otcdealData: [
        {
          id: 1,
          img: require("../../img/headPortrait.png"),
          name: "吴亦凡",
          Mnumber: 214,
          percentage: "75.98%",
          CNY: 7.19,
          quota: "限额 100-3000000 CNY",
          quantity: "数量 29.817803 USDT",
          purchase: [
            require("../../img/WeChatPay.png"),
            require("../../img/alipay.png"),
            require("../../img/bankCard.png")
          ]
        },
        {
          id: 2,
          img: require("../../img/headPortrait.png"),
          name: "吴亦凡",
          Mnumber: 214,
          percentage: "75.98%",
          CNY: 7.19,
          quota: "限额 100-3000000 CNY",
          quantity: "数量 29.817803 USDT",
          purchase: [
            require("../../img/WeChatPay.png"),
            require("../../img/alipay.png"),
            require("../../img/bankCard.png")
          ]
        },
        {
          id: 3,
          img: require("../../img/headPortrait.png"),
          name: "吴亦凡",
          Mnumber: 214,
          percentage: "75.98%",
          CNY: 7.19,
          quota: "限额 100-3000000 CNY",
          quantity: "数量 29.817803 USDT",
          purchase: [
            require("../../img/WeChatPay.png"),
            require("../../img/alipay.png"),
            require("../../img/bankCard.png")
          ]
        }
      ]
    };
  },
  methods: {
    //购买
  },
  created() {
    // var a = this.$moment(new Date()).format("YYYY-MM-DD"); //转换为年月日
    // console.log(a);
    // console.log(this.$moment(a).valueOf()); //年月日转换为时间戳
    // 1535419062126
  }
};
</script>
<style lang="scss" scoped>
.Otcdeal {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
.Otcdeal_head {
  display: flex;
  overflow: hidden;
  height: 1.666667rem;
  .head_portrait {
    margin-top: 0.466667rem;
    margin-left: 1.106667rem;
    border-radius: 50%;
    width: 0.613333rem;
    height: 0.613333rem;
    background: rgba(175, 175, 175, 1);
    img {
      border-radius: 50%;
    }
  }
  .Otcdeal_head_OTC {
    display: flex;
    text-align: center;
    font-size: 0.32rem;
    font-family: Microsoft YaHei;
    font-weight: 400;
    height: 0.72rem;
    line-height: 0.72rem;

    margin: 0.466667rem 0 0 2.28rem;
    background-color: #fff;

    width: 5.6rem;

    background: rgba(255, 255, 255, 1);
    border: 1px solid rgba(112, 112, 112, 1);
    opacity: 1;
    border-radius: 3px;
    .Otcdeal_head_OTC_span {
      display: inline-block;
      height: 0.32rem;
      line-height: 0.32rem;
      width: 100%;
      border-right: 1px solid rgba(194, 192, 192, 1);
    }
    div {
      flex: 1;
    }
    div:nth-child(1) {
      background: rgba(255, 147, 16, 1);
      opacity: 1;
      border-radius: 0.04rem;

      font-family: Microsoft YaHei;

      color: rgba(255, 255, 255, 1);
      opacity: 1;
    }
    div:nth-child(2),
    div:nth-child(3) {
      color: rgba(102, 102, 102, 1);

      opacity: 1;
    }
  }
}
.Otcdeal_title {
  line-height: 0;
  padding: 0 0 0.333333rem 0.4rem;
}
.Otcdeal_purchase {
  display: inline-block;
  width: 2.36rem;
  font-size: 0.426667rem;
  font-family: Microsoft YaHei;
  font-weight: 400;
  line-height: 0.56rem;
  color: rgba(68, 68, 68, 1);

  opacity: 1;
}
.Otcdeal_sell {
  font-size: 0.32rem;
  font-family: Microsoft YaHei;
  font-weight: 400;
  line-height: 0.413333rem;
  color: rgba(102, 102, 102, 1);

  opacity: 1;
}
.Otcdeal_body {
  padding: 0.346667rem 0.346667rem 0 0.333333rem;
  .Otcdeal_content {
    background-color: #fff;
    border-radius: 14px;
    .Otcdeal_content_hede {
      display: flex;
      justify-content: space-between;
      padding: 0.2rem 0.293333rem 0 0.386667rem;
      height: 1.08rem;
      line-height: 0.65rem;
      border-bottom: 1px solid rgba(67, 126, 255, 0.10196078431372549);
      .Otcdeal_content_portrait {
        margin-right: 0.146667rem;
        width: 0.626667rem;
        height: 0.626667rem;
        border-radius: 50%;
        img {
          border-radius: 50%;
        }
      }
      .Otcdeal_content_name {
        font-size: 0.293333rem;
        font-family: Microsoft YaHei;
        font-weight: 400;

        color: rgba(68, 68, 68, 1);

        opacity: 1;
      }
      .Otcdeal_content_vip {
        width: 0.278667rem;
        height: 0.2476rem;
        margin-top: 0.24rem;
      }
      .Otcdeal_content_hede_right {
        font-size: 0.266667rem;
        font-family: Microsoft YaHei;
        font-weight: 400;

        color: rgba(106, 109, 127, 1);

        opacity: 1;
        span:nth-child(2) {
          display: inline-block;
          height: 0.213333rem;
          border-left: 1px solid rgba(194, 192, 192, 1);
          margin: 0 0.2rem 0 0.2rem;
        }
      }
    }
  }
}
.Otcdeal_content_hede_content {
  display: flex;
  justify-content: space-between;
  padding: 0.253333rem 0.386667rem 0.413333rem 0.386667rem;
}
.Otcdeal_content_hede_CNY {
  height: 0.706667rem;
  font-size: 0.4rem;
  font-family: AvantGarde Md BT;
  font-weight: 500;
  line-height: 0.48rem;
  color: rgba(34, 34, 34, 1);

  opacity: 1;
  span:nth-child(1) {
    width: 0.946667rem;
    display: inline-block;
  }
}
.Otcdeal_content_hede_quota {
  height: 0.453333rem;

  font-size: 0.266667rem;
  font-family: Microsoft YaHei;
  font-weight: 400;
  line-height: 0.346667rem;
  color: rgba(106, 109, 127, 1);

  opacity: 1;
}
.Otcdeal_content_hede_ul {
  margin-top: 0.28rem;
  display: flex;
  margin-bottom: 0.226667rem;
  justify-content: flex-end;
  li {
    width: 0.32rem;
    height: 0.24rem;

    opacity: 1;
    border-radius: 0.04rem;
    margin-left: 0.16rem;
    box-sizing: border-box;
    padding: 0.053333rem 0.08rem;
  }
  li:nth-child(1) {
    background: rgba(49, 201, 110, 1);
  }
  li:nth-child(2) {
    background: rgba(71, 175, 254, 1);
  }
  li:nth-child(3) {
    background: rgba(245, 186, 83, 1);
  }
}
.Otcdeal_content_hede_purchase {
  width: 1.6rem;
  height: 0.72rem;
  line-height: 0.72rem;
  background: rgba(82, 196, 139, 1);
  opacity: 1;
  border-radius: 3px;
  text-align: center;
  font-size: 0.293333rem;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  opacity: 1;
}
.Otcdeal_body_ {
  flex: 1;
  background: rgba(43, 78, 155, 0.05);
}
</style>
