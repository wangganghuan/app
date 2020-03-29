<template>
  <!-- 关于我们 -->
  <div>
    <securityCenterhead title="关于我们" :discoverHead="false"></securityCenterhead>
    <div>
      <div class="app_img">
        <img src="../../../img/登陆log.png" alt />
      </div>
      <div class="about_us_text">
        受疫情蔓延影响，昨日全球股市和石油价格大幅下跌，经历了一个“黑色星期一”。
        <br />白天，亚太股市遭遇重创，韩国综合指数跌 3.87％，创逾 16 个月最大跌幅；昨夜美股欧股同样遭遇恐慌性暴跌：美股三大股指（纳斯达克指数、道琼斯指数、标普 500 数收跌超 3%，道指更是创下两年来的最大单日跌幅；欧股集体大跌，意大利股市跌幅超 5%，德国股市、法国股市也跌超 4%；大宗商品市场方面。
        <br />昨日休市的日本股市，也在今天迎来补跌，日经 22v5 指数开盘重挫在的 4.48%。
      </div>
    </div>
  </div>
</template>
<script>
import securityCenterhead from "../../commonality/head.vue";
export default {
  components: { securityCenterhead }
};
</script>
<style lang="scss" scoped>
.app_img {
  margin: 0 auto;
  width: 2.933333rem;
  height: 2.933333rem;
  margin-top: 1.68rem;
  margin-bottom: 1.973333rem;
}
.about_us_text {
  padding: 0 0.44rem 0 0.453333rem;

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