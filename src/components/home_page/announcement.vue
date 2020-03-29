<template>
  <div class="announcement">
    <Chead :title="title" :discoverHead="false"></Chead>
    <div class="announcement_text">
      <p class="announcement_title">说好的避险呢，比特币你咋怂了？</p>

      <p class="announcement_date">2020-01-10 09:12</p>
      <p class="announcement_tent">
        受疫情蔓延影响，昨日全球股市和石油价格大幅下跌，经历了一个“黑色星期一”。
        <br />白天，亚太股市遭遇重创，韩国综合指数跌 3.87％，创16 个月最大跌幅；昨夜美股欧股同样遭遇恐慌性暴跌：美股三大股指（纳斯达克指数、道琼斯指数、标普 500 指数）收跌超 3%，道指更是创下两年来的最大单日跌幅；欧股集体大跌，意大利股市跌幅超 5%，德国股市、法国股市也跌超 4%；大宗商品市场方面。
        <br />昨日休市的日本股市，也在今天迎来补跌，日经 22v5
        指数开盘重挫在的 4.48%。
      </p>
    </div>
  </div>
</template>
<script>
import Chead from "../commonality/head.vue";
export default {
  name: "announcement",
  components: {
    Chead
  },
  data() {
    return {
      title: "公告"
    };
  }
};
</script>
<style lang="scss" scoped>
.announcement /deep/ {
  .announcement_text {
    padding-top: 0.733333rem;
    padding: 0.733333rem 0.44rem 0 0.4rem;
  }
}
.announcement_title {
  text-align: center;
  font-size: 0.426667rem;
  font-family: Microsoft YaHei;
  font-weight: bold;

  color: rgba(68, 68, 68, 1);
  -webkit-text-stroke: 0.10000000149011612 rgba(255, 255, 255, 1);

  opacity: 1;
  margin-bottom: 0.36rem;
}
.announcement_date {
  font-size: 0.266667rem;
  font-family: Microsoft YaHei;
  font-weight: 400;

  color: rgba(102, 102, 102, 1);
  opacity: 0.82;
  margin-bottom: 1.106667rem;
}
.announcement_tent {
  padding-left: 0.013333rem;

  font-size: 0.346667rem;
  font-family: Microsoft YaHei;
  font-weight: 400;
  line-height: 0.666667rem;
  color: rgba(102, 102, 102, 1);
  -webkit-text-stroke: 0.10000000149011612 rgba(255, 255, 255, 1);
  text-stroke: 0.10000000149011612 rgba(255, 255, 255, 1);
  opacity: 1;
}
</style>