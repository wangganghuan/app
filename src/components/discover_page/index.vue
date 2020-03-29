<template>
  <!-- 发现 -->
  <div id="discover_index">
    <headPage :title="title" :discoverHead="discoverHead"></headPage>
    <div class="discover_index_label">
      <van-tabs v-model="label">
        <van-tab title="推荐">
          <recommend :DataPage="recommendData"></recommend>
        </van-tab>
        <van-tab title="关注">
          <recommend :DataPage="attentionData"></recommend>
        </van-tab>
        <van-tab title="财经快讯">
          <economics></economics>
        </van-tab>
        <van-tab title="行情">
          <market></market>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>
<script>
//头部
import headPage from "@/components/commonality/head.vue";
//推荐和关注内容
import recommend from "@/components/discover_page/recommend.vue";
import economics from "@/components/discover_page/economics.vue";
import market from "@/components/discover_page/market.vue";
export default {
  name: "discover",

  data() {
    return {
      //标题
      title: "发现",
      //显示头像
      discoverHead: true,
      label: 0,
      //模拟推荐数据
      recommendData: [
        {
          id: 1,
          title: "吴亦凡CC",
          img: require("../../img/头像.png"),
          text:
            "白天，亚太股市遭遇重创，韩国综合指数3.87％创逾 16 个月最大跌幅；昨夜美股欧股同样遭遇恐慌性跌：美股三大股指（纳斯达克指数、道琼斯数标普 500 数收跌超。",
          date: "02-21",
          commentTime: "155",
          likeTime: "21",
          comment: false,
          like: false,
          recommendContent_name_pop: false
        },
        {
          id: 2,
          title: "吴亦凡CC",
          img: require("../../img/头像2.png"),
          text:
            "白天，亚太股市遭遇重创，韩国综合指数3.87％创逾 16 个月最大跌幅；昨夜美股欧股同样遭遇恐慌性跌：美股三大股指（纳斯达克指数、道琼斯数标普 500 数收跌超。",
          date: "02-21",
          commentTime: "155",
          likeTime: "21",
          comment: false,
          like: false,
          recommendContent_name_pop: false
        },
        {
          id: 3,
          title: "吴亦凡CC",
          img: require("../../img/头像.png"),
          text:
            "白天，亚太股市遭遇重创，韩国综合指数3.87％创逾 16 个月最大跌幅；昨夜美股欧股同样遭遇恐慌性跌：美股三大股指（纳斯达克指数、道琼斯数标普 500 数收跌超。",
          date: "02-21",
          commentTime: "155",
          likeTime: "21",
          comment: false,
          like: false,
          recommendContent_name_pop: false
        }
      ],
      //模拟关注数据
      attentionData: [
        {
          id: 1,
          title: "吴亦凡CC",
          img: require("../../img/头像2.png"),
          text:
            "白天，亚太股市遭遇重创，韩国综合指数3.87％创逾 16 个月最大跌幅；昨夜美股欧股同样遭遇恐慌性跌：美股三大股指（纳斯达克指数、道琼斯数标普 500 数收跌超。",
          date: "02-21",
          commentTime: "155",
          likeTime: "21",
          comment: false,
          like: false,
          recommendContent_name_pop: false
        },
        {
          id: 2,
          title: "吴亦凡CC",
          img: require("../../img/头像.png"),
          text:
            "白天，亚太股市遭遇重创，韩国综合指数3.87％创逾 16 个月最大跌幅；昨夜美股欧股同样遭遇恐慌性跌：美股三大股指（纳斯达克指数、道琼斯数标普 500 数收跌超。",
          date: "02-21",
          commentTime: "155",
          likeTime: "21",
          comment: false,
          like: false,
          recommendContent_name_pop: false
        },
        {
          id: 3,
          title: "吴亦凡CC",
          img: require("../../img/头像2.png"),
          text:
            "白天，亚太股市遭遇重创，韩国综合指数3.87％创逾 16 个月最大跌幅；昨夜美股欧股同样遭遇恐慌性跌：美股三大股指（纳斯达克指数、道琼斯数标普 500 数收跌超。",
          date: "02-21",
          commentTime: "155",
          likeTime: "21",
          comment: false,
          like: false,
          recommendContent_name_pop: false
        }
      ]
    };
  },
  components: {
    headPage,
    recommend,
    economics,
    market
  }
};
</script>
<style lang="scss" scoped>
#discover_index /deep/ {
  .van-ellipsis {
    font-size: 0.32rem;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: rgba(102, 102, 102, 1);
    opacity: 1;
  }

  .van-tab--active {
    font-size: 0.373333rem;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: rgba(68, 68, 68, 1);
    opacity: 1;
  }
  .discover_index_label {
    .van-hairline--top-bottom::after {
      border: 0;
    }
    .van-tabs__line {
      width: 0.426667rem !important;
      height: 0.04rem;
      background: rgba(255, 140, 0, 1);
      opacity: 1;
      border-radius: 0.026667rem;
    }
  }
}
</style>