<template>
  <div class="app">
    <router-view />
    <div class="app_buttom">
      <van-tabbar v-model="active">
        <van-tabbar v-model="active" active-color="#ff8c00" inactive-color="#444">
          <van-tabbar-item to="/home">
            <span>首页</span>
            <img
              slot="icon"
              slot-scope="props"
              :src="props.active ? require('../img/homePage2.png'): require('../img/homePage.png')"
              style=" height: 0.5488rem;width: 0.466667rem;"
            />
          </van-tabbar-item>
          <van-tabbar-item>
            <span>跟单交易</span>
            <img
              slot="icon"
              slot-scope="props"
              :src="props.active ? require('../img/documentary2.png'): require('../img/documentary.png')"
              style="height: 0.4996rem;width: 0.498133rem;"
            />
          </van-tabbar-item>
          <van-tabbar-item to="/discover">
            <span>发现</span>
            <img
              slot="icon"
              slot-scope="props"
              :src="props.active ? require('../img/discover2.png'): require('../img/discover.png')"
              style=" height: 0.506667rem;width: 0.506667rem;"
            />
          </van-tabbar-item>
          <van-tabbar-item to="/property">
            <span>资产</span>
            <img
              slot="icon"
              slot-scope="props"
              :src="props.active ? require('../img/property2.png'): require('../img/property.png')"
              style=" height: 0.529733rem; width: 0.474rem;"
            />
          </van-tabbar-item>
          <van-tabbar-item to="/otcdeal">
            <span>OTC交易</span>
            <img
              slot="icon"
              slot-scope="props"
              :src="props.active ? require('../img/otc3.png'): require('../img/otc2.png')"
              style=" height: 0.506667rem;width: 0.506667rem;"
            />
          </van-tabbar-item>

          <van-tabbar-item to="/mypage">
            <span>我的</span>
            <img
              slot="icon"
              slot-scope="props"
              :src="props.active ? require('../img/my2.png'): require('../img/my.png')"
              style=" height: 0.506667rem;width: 0.506667rem;"
            />
          </van-tabbar-item>
        </van-tabbar>
      </van-tabbar>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      active: 1
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.app /deep/ {
  height: 100%;
  // background-color: #fff;
  .van-tabbar-item__text {
    font-size: 0.266667rem;
    font-family: Microsoft YaHei;
    font-weight: 400;

    opacity: 1;
  }
  .van-tabbar {
    height: 1.586667rem;
  }
}
.app_buttom {
  height: 1.586667rem;
}
html,
body {
  margin-bottom: 3.586667rem;
  min-height: 100vh;
}
</style>
