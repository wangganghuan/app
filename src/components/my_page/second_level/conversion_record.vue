<template>
  <!-- 闪兑记录 -->
  <div class="conversion_record">
    <securityCenterhead title="记录" :discoverHead="false"></securityCenterhead>
    <div class="conversion_hede">
      <div>
        <span>兑换时间</span>
        <span class="conversion_PGA">PGA</span>
      </div>
      <span>USDT</span>
    </div>
    <div class="conversion_body">
      <div class="conversion_body_tent" v-for="(item,index) in conversion_recordData " :key="index">
        <div class="conversion_body_date">{{item.date}}</div>
        <div class="conversion_body_PGA">{{item.PGA}}</div>
        <div class="conversion_body_USDT">{{item.USDT}}</div>
      </div>
    </div>
  </div>
</template>
<script>
import securityCenterhead from "../../commonality/head.vue";
export default {
  components: {
    securityCenterhead
  },
  data() {
    return {
      conversion_recordData: [
        { date: "2020-01-02  15:24", PGA: 1205, USDT: 1205 },
        { date: "2020-01-10  09:12", PGA: 45440, USDT: 45440 },
        { date: "2020-01-15  11:05", PGA: 1200, USDT: 1200 },
        { date: "2020-01-16  15:24", PGA: 1000, USDT: 1000 }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.conversion_hede {
  display: flex;
  justify-content: space-between;
  height: 0.92rem;
  line-height: 0.92rem;
  background: rgba(43, 78, 155, 0.05);
  font-size: 0.266667rem;
  font-family: Microsoft YaHei;
  font-weight: 400;

  color: rgba(136, 136, 136, 1);

  opacity: 1;
  padding: 0 0.466667rem 0 0.4rem;
}
.conversion_PGA {
  margin-left: 4.32rem;
}
.conversion_body_tent {
  display: flex;
  justify-content: space-between;
  padding: 0.413333rem 0.4rem;
  border-bottom: 1px solid rgba(43, 78, 155, 0.10196078431372549);
}
.conversion_body_date {
  height: 0.493333rem;
  font-size: 0.373333rem;
  font-family: Microsoft YaHei;
  font-weight: 400;

  color: rgba(102, 102, 102, 1);
  opacity: 0.82;
}
.conversion_body_PGA {
  text-align: right;
  width: 1.333333rem;
  height: 0.493333rem;
  font-size: 0.373333rem;
  font-family: Microsoft YaHei;
  font-weight: 400;

  color: rgba(68, 68, 68, 1);
  opacity: 1;
}
.conversion_body_USDT {
  text-align: right;
  width: 1.333333rem;
  height: 0.493333rem;
  font-size: 0.373333rem;
  font-family: Microsoft YaHei;
  font-weight: 400;

  color: rgba(68, 68, 68, 1);
  opacity: 1;
}
</style>