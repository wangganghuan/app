<template>
  <!-- 头部 -->
  <div id="discover_index">
    <van-nav-bar :title="title">
      <div slot="left" class="discover_index_return" @click="discoverReturn">
        <img src="../../img/getBack.png" alt />
      </div>
      <div slot="right" class="discover_index_head" v-if="discoverHead" @click="Missue">{{issue}}</div>
    </van-nav-bar>
  </div>
</template>
<script>
export default {
  name: "head",
  props: {
    //标题
    title: {
      type: String,
      default: "发现"
    },
    //显示头像
    discoverHead: {
      type: Boolean,
      default: true
    },
    Drouter: {
      default: "/issuepage"
    },
    //发布
    issue: {
      default: "发布"
    }
  },
  methods: {
    discoverReturn() {
      this.$router.go(-1);
    },
    Missue() {
      this.$router.push(this.Drouter);
    }
  }
};
</script>
<style lang="scss" scoped>
#discover_index /deep/ {
  background-color: #fff;
  .van-nav-bar__title {
    height: 1.4rem;
    font-size: 0.4rem !important;
    font-family: Microsoft YaHei;
    font-weight: bold !important;
    color: rgba(68, 68, 68, 1) !important;
    opacity: 1;
  }
  .van-nav-bar {
    height: 1.4rem;
    line-height: 1.4rem;
  }

  .discover_index_head {
    width: 0.653333rem;

    font-size: 0.32rem;
    font-family: Microsoft YaHei;
    font-weight: 400;
    line-height: 0.666667rem;
    color: rgba(102, 102, 102, 1);

    opacity: 1;

    img {
      width: 0.613333rem;
      height: 0.613333rem;
      background: rgba(175, 175, 175, 1);
      border-radius: 50%;
    }
  }
  .discover_index_return {
    width: 0.2rem;
    height: 0.3344rem;
  }
  .van-nav-bar__right {
    bottom: 0.333333rem;
  }
  .van-nav-bar__left {
    bottom: 0.466667rem;
  }
  .van-hairline--bottom::after,
  .van-nav-bar ::after {
    border-bottom: 1px solid rgba(43, 78, 155, 0.10196078431372549);
  }
}
</style>