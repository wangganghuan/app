<template>
  <!-- 财经快讯 -->
  <div id="economics">
    <div class="economics_content df" v-for="(item,index) in economicsData" :key="index">
      <div class="economics_content_text">
        <div class="economics_content_text_title">{{item.title}}</div>
        <div class="df">
          <div class="economics_content_text_date">
            <span>{{item.name}}</span>
            <span>{{item.date}}</span>
          </div>
          <div class="economics_content_text_watch">
            <div class="economics_content_text_glasses">
              <img src="../../img/眼睛.png" alt />
            </div>
            <span>{{item.glasses}}</span>
          </div>
        </div>
      </div>
      <div class="economics_img">
        <img :src="item.img" alt />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "economics",
  props: {
    economicsData: {
      default: () => {
        return [
          {
            title: "以太坊上的比特币，能冲破DeFi的天花板吗？",
            name: "比特币",
            date: "18分钟前",
            glasses: 240,
            img: require("../../img/图像3.png")
          },
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
          },
          {
            title: "以太坊上的比特币，能冲破DeFi的天花板吗？",
            name: "比特币",
            date: "18分钟前",
            glasses: 240,
            img: require("../../img/图像3.png")
          },
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
        ];
      }
    }
  },
  data() {
    return {
      //模拟数据
    };
  }
};
</script>
<style lang="scss" scoped>
#economics {
  background-color: rgba(43, 78, 155, 0.05);
  padding-top: 0.213333rem;
  .economics_content {
    background-color: #fff;
    padding: 0.36rem 0.4rem 0.373333rem 0.4rem;
    border-bottom: 1px solid rgba(43, 78, 155, 0.10196078431372549);
    .economics_content_text {
      margin-right: 0.493333rem;
      width: 5.64rem; //423 433

      .economics_content_text_title {
        margin-bottom: 0.586667rem;
        font-size: 0.346667rem;
        font-family: Microsoft YaHei;
        font-weight: 400;
        line-height: 0.466667rem;
        color: rgba(68, 68, 68, 1);

        opacity: 1;
      }
      .df {
        justify-content: space-between;
      }
      .economics_content_text_date {
        display: flex;
        justify-content: space-between;
        width: 2.066667rem;

        font-size: 0.266667rem;
        font-family: Microsoft YaHei;
        font-weight: 400;
        line-height: 0.346667rem;
        color: rgba(102, 102, 102, 1);
        opacity: 0.82;
      }
      .economics_content_text_watch {
        font-size: 0.266667rem;
        font-family: Microsoft YaHei;
        font-weight: 400;
        line-height: 0.346667rem;
        color: rgba(102, 102, 102, 1);
        opacity: 0.82;
        .economics_content_text_glasses {
          margin-right: 0.133333rem;
          display: inline-block;
          width: 0.266667rem;
          height: 0.177733rem;
        }
      }
    }
  }
  .economics_img {
    width: 2.933333rem;
    height: 1.866667rem;
  }
}
</style>