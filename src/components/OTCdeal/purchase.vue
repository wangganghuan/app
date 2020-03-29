<template>
  <!-- 购买 -->
  <div class="purchase">
    <headPage :discoverHead="false" title="购买"></headPage>

    <div class="purchase_content">
      <div>
        <div class="df">
          <div class="purchase_portrait">
            <img src="../../img/头像.png" alt />
          </div>
          <span class="purchase_name">吴亦凡</span>
        </div>
        <div class="purchase_quota">限额 100-3000000 CNY</div>
      </div>
      <div class="purchase_content_right">
        <div class="purchase_content_CNY">
          <span>7.19</span>
          <span>CNY</span>
        </div>
        <ul class="purchase_ul">
          <li>
            <img src="../../img/微信支付22x.png" alt />
          </li>
          <li>
            <img src="../../img/支付宝2x.png" alt />
          </li>
          <li>
            <img src="../../img/银行卡2x.png" alt />
          </li>
        </ul>
      </div>
    </div>
    <div></div>
    <div class="purchase_body">
      <div class="purchase_body_conten">
        <div class="purchase_quantity">
          <span class="quantity">数量</span>
          <div class="purchase_right df">
            <div class="purchase_right_input">
              <van-cell-group :border="false">
                <van-field v-model="quantity" placeholder="请输入交易数量" />
              </van-cell-group>
            </div>
            <span class="purchase_right_USDT">USDT</span>
          </div>
        </div>
      </div>
      <div class="purchase_body_conten">
        <div class="purchase_quantity">
          <span class="quantity">金额</span>
          <div class="purchase_right df">
            <div class="purchase_right_input">
              <van-cell-group :border="false">
                <van-field v-model="quantity" placeholder="请输入交易金额" />
              </van-cell-group>
            </div>
            <span class="purchase_right_span">CNY</span>
            <div class="purchase_right_all" @click="allPurchase">全部买入</div>
          </div>
        </div>
      </div>
      <div class="purchase_body_way df">
        <span class="purchase_body_ways_pan">请选择一种交易方式</span>
        <div @click="Mdeal">
          <div class="purchase_body_ways_img">
            <img src="../../img/返回2.png" alt />
          </div>
        </div>
      </div>
    </div>

    <div class="purchase_bottom">
      <div class="button" @click="purchase">购买</div>
    </div>
  </div>
</template>
<script>
import headPage from "../commonality/head.vue";
export default {
  components: {
    headPage
  },
  data() {
    return {
      //数量
      quantity: ""
    };
  },
  methods: {
    purchase() {
      console.log("点击了购买");
    },
    allPurchase() {
      console.log("点击了全部购买");
    },
    Mdeal() {
      console.log("请选择一种交易方式");
    }
  }
};
</script>
<style lang="scss" scoped>
.purchase {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
.purchase_bottom {
  flex: 1;
  padding: 0.946667rem 1rem 0 1rem;
  background: rgba(43, 78, 155, 0.05);
  .button {
    text-align: center;
    width: 8rem;
    height: 1.12rem;
    line-height: 1.12rem;
    background: rgba(220, 220, 220, 1);
    box-shadow: 0px 0.04rem 0.266667rem rgba(220, 220, 220, 0.4);
    opacity: 1;
    border-radius: 0.56rem;
    font-size: 0.32rem;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);

    opacity: 1;
  }
}
.purchase_content {
  background-color: #fff;
  padding: 0.386667rem 0.4rem 0.346667rem 0.4rem;
  display: flex;
  justify-content: space-between;
}
.purchase_portrait {
  margin-right: 0.173333rem;
  width: 0.626667rem;
  height: 0.626667rem;
  border-radius: 50%;
  img {
    border-radius: 50%;
  }
}
.purchase_name {
  margin-top: 0.16rem;
  font-size: 0.293333rem;
  font-family: Microsoft YaHei;
  font-weight: 400;
  line-height: 0.386667rem;
  color: rgba(68, 68, 68, 1);
  opacity: 1;
}
.purchase_quota {
  margin-top: 0.106667rem;
  margin-left: 0.8rem;
  font-size: 0.266667rem;
  font-family: Microsoft YaHei;
  font-weight: 400;
  line-height: 0.346667rem;
  color: rgba(106, 109, 127, 1);

  opacity: 1;
}
.purchase_content_CNY {
  margin-bottom: 0.226667rem;
  font-size: 0.4rem;
  font-family: AvantGarde Md BT;
  font-weight: 500;
  line-height: 0.48rem;
  color: rgba(82, 196, 139, 1);

  opacity: 1;
  span:nth-child(1) {
    width: 0.946667rem;
    display: inline-block;
  }
}
.purchase_ul {
  display: flex;
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
.purchase_body {
  padding-top: 0.213333rem;
  background: rgba(43, 78, 155, 0.05);
}
.purchase_body_conten {
  background-color: #fff;

  //
}
.purchase_quantity {
  display: flex;
  justify-content: space-between;
  line-height: 0;

  padding: 0.373333rem 0.426667rem 0.26rem 0;
  margin-left: 0.4rem;
  border-bottom: 1px solid rgba(67, 126, 255, 0.10196078431372549);
}
.quantity {
  font-size: 0.32rem;
  font-family: Microsoft YaHei;
  font-weight: 400;
  line-height: 0.413333rem;
  color: rgba(68, 68, 68, 1);

  opacity: 1;
}
.purchase_right {
  font-size: 0.32rem;
  font-family: Microsoft YaHei;
  font-weight: 400;
  line-height: 0.413333rem;

  .purchase_right_USDT {
    margin-left: 0.333333rem;
    color: rgba(68, 68, 68, 1);
  }
}
.purchase_right_input /deep/ {
  margin-top: -0.12rem;
  width: 2.32rem;
  font-size: 0.32rem;
  line-height: 0.413333rem;
  .van-cell {
    padding: 0;
    font-size: 0.32rem;
  }
  input::-webkit-input-placeholder {
    color: rgba(136, 136, 136, 1);
    font-size: 0.32rem;
  }
  input::-moz-input-placeholder {
    color: rgba(136, 136, 136, 1);
    font-size: 0.32rem;
  }
  input::-ms-input-placeholder {
    color: rgba(136, 136, 136, 1);
    font-size: 0.32rem;
  }
}
.purchase_right_span {
  margin: 0 0.266667rem;
}
.purchase_right_all {
  font-size: 0.32rem;
  font-family: Microsoft YaHei;
  font-weight: 400;

  color: rgba(82, 196, 139, 1);
}
.purchase_body_way {
  justify-content: space-between;
  background-color: #fff;
  height: 1.146667rem;
  line-height: 1.146667rem;
  padding: 0 0.373333rem 0 0.4rem;
}
.purchase_body_ways_pan {
  font-size: 0.32rem;
  font-family: Microsoft YaHei;
  font-weight: 400;

  color: rgba(68, 68, 68, 1);

  opacity: 1;
}
.purchase_body_ways_img {
  width: 0.166667rem;
  height: 0.282667rem;
  margin-top: 0.44rem;
}
</style>