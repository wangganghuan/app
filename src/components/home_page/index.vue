<template>
  <div>
    <div class="home_head">
      <span>PGA</span>
      <div class="home_head_img" @click="personalCenter">
        <img src="../../img/personalCenterPitchOn.png" alt />
      </div>
    </div>
    <!-- 轮播图 -->
    <slideshow></slideshow>
    <!-- 公告 -->
    <div class="home_announcement" @click="Mannouncement">
      <div class="home_announcement_img">
        <img src="../../img/公告2x.png" alt />
      </div>
      <span>比特币重回1万美元 关注三大主线</span>
    </div>
    <!-- 行情 -->
    <div class="home_market">
      <div class="home_market_head">
        <div class="df">
          <div class="home_head_wire"></div>
          <span class="home_head_market">行情</span>
        </div>
        <span class="home_head_more">更多</span>
      </div>
      <market :market="marketData"></market>
    </div>
    <div class="home_information">
      <div class="home_market_head">
        <div class="df">
          <div class="home_head_wire"></div>
          <span class="home_head_market">财经资讯</span>
        </div>
        <span class="home_head_more">更多</span>
      </div>
      <economics :economicsData="economicsData"></economics>
    </div>
  </div>
</template>
<script>
// 轮播图
import slideshow from "./slideshow.vue";
//行情
import market from "../discover_page/market.vue";
//财经资讯
import economics from "../discover_page/economics.vue";
export default {
  name: "home",
  components: {
    slideshow,
    market,
    economics
  },
  data() {
    return {
      marketData: [
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
          Mtype: "ETH",
          quantity: "24H量136.78K",
          price: 2268.54,
          money: 0.1254,
          percent: "-1.28"
        }
      ],
      economicsData: [
        {
          title: "巴菲特将内含比特币和波场币的三星手机交给慈善机构",
          name: "比特币",
          date: "18分钟前",
          glasses: 240,
          img: require("../../img/图像 1.png")
        },
        {
          title: "巴菲特：我没有比特币，也永远不会持有加密货币",
          name: "比特币",
          date: "18分钟前",
          glasses: 240,
          img: require("../../img/图像 2.png")
        }
      ]
    };
  },
  methods: {
    Mannouncement() {
      this.$router.push("/announcement");
    },
    personalCenter() {}
  }
};
</script>
<style lang="scss" scoped>
.home_head {
  text-align: center;
  height: 1.426667rem;
  line-height: 1.426667rem;
  font-size: 0.533333rem;
  font-family: Novecento Bold;
  font-weight: normal;

  color: rgba(51, 51, 51, 1);

  opacity: 1;
  padding-right: 0.4rem;
  .home_head_img {
    height: 0.613333rem;
    width: 0.613333rem;
    float: right;
    margin-top: 0.453333rem;
  }
}
.home_announcement {
  display: flex;
  overflow: hidden;
  padding-left: 0.266667rem;
  height: 0.813333rem;
  line-height: 0.813333rem;
  font-size: 0.266667rem;
  font-family: Microsoft YaHei;
  font-weight: 400;

  color: rgba(136, 136, 136, 1);
  opacity: 1;
}
.home_announcement_img {
  width: 0.302267rem;
  height: 0.3004rem;
  margin-top: 0.24rem;
  margin-right: 0.24rem;
}
.home_market {
  background: rgba(43, 78, 155, 0.05);
  padding-top: 0.213333rem;
  padding-bottom: 0.213333rem;
}
.home_market_head {
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  height: 0.933333rem;
  line-height: 0.933333rem;
  padding: 0 0.306667rem 0 0.4rem;
  border-bottom: 1px solid rgba(43, 78, 155, 0.10196);
}
.home_head_wire {
  margin-top: 0.306667rem;
  margin-right: 0.306667rem;
  width: 0.053333rem;
  height: 0.346667rem;
  background: rgba(255, 140, 0, 1);
  opacity: 1;
  border-radius: 0.026667rem;
}
.home_head_market {
  font-size: 0.32rem;
  font-family: Microsoft YaHei;
  font-weight: bold;

  color: rgb(61, 61, 61);
  opacity: 1;
}
.home_head_more {
  font-size: 0.266667rem;
  font-family: Microsoft YaHei;
  font-weight: 400;

  color: rgba(102, 102, 102, 1);
  opacity: 1;
}
#market {
  padding: 0;
}

#economics {
  padding-top: 0;
}
</style>