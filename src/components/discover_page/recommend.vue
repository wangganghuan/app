<template>
  <!-- 推荐和关注公共数据 -->
  <div class="recommend">
    <div class="recommendContent" v-for="(item, index) in DataPage" :key="index">
      <div class="recommendContent_head">
        <div class="recommendContent_img">
          <img :src="item.img" alt />
        </div>
        <div class="recommendContent_name">
          {{item.title}}
          <div class="recommendContent_name_pop" v-show="item.recommendContent_name_pop">
            <span>分享</span>
            <span></span>
            <span>关注</span>
          </div>
        </div>
        <div>
          <ul class="df recommendContent_ul" @click="recommendContent_ul(item.id)">
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
      <div class="recommendContent_text">{{item.text}}</div>
      <div class="recommendContent_bottom">
        <span @click="Mcomment(item.id)">{{item.date}}</span>
        <div class="recommendContent_bottom_comment">
          <img src="../../img/评论.png" alt />
        </div>
        <span>{{item.commentTime}}</span>
        <div class="recommendContent_bottom_like" @click="Mlike(item.id)">
          <img src="../../img/点赞.png" v-show="!item.like" alt />
          <img src="../../img/以点赞.png" alt v-show="item.like" />
        </div>
        <span>{{item.likeTime}}</span>
      </div>
      <div class="comment" v-show="item.comment">
        <span class="rotate"></span>
        <div>
          <span class="comment_title">{{item.title}}：</span>
          <span class="comment_text">价值4亿多的比特币被房东扔掉？</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "recommend",
  props: {
    DataPage: {
      //默认值
      default: () => {
        return [
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
        ];
      }
    }
  },
  data() {
    return {
      comment: false,
      like: false,
      recommendContent_name_pop: false
    };
  },
  created() {
    console.log(this.DataPage);
  },
  methods: {
    recommendContent_ul(data) {
      this.DataPage.forEach(item => {
        if (item.id == data) {
          item.recommendContent_name_pop = !item.recommendContent_name_pop;
        }
      });
    },
    Mlike(data) {
      this.DataPage.forEach(item => {
        if (item.id == data) {
          //隐藏
          item.like = !item.like;
        }
      });
    },
    Mcomment(data) {
      this.DataPage.forEach(item => {
        if (item.id == data) {
          item.comment = !item.comment;
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.recommend {
  background: rgba(43, 78, 155, 0.05);
  overflow: hidden;
}
.recommendContent {
  box-sizing: border-box;
  margin-top: 0.213333rem;
  background-color: #fff;
  padding: 0.426667rem 0.386667rem 0.426667rem 0.36rem;
}
.recommendContent_head {
  line-height: 0.72rem;
  display: flex;
}
.recommendContent_img {
  height: 0.72rem;
  width: 0.72rem;
  img {
    border-radius: 50%;
  }
}
.recommendContent_ul {
  margin-top: 0.346667rem;
  li {
    width: 0.08rem;
    height: 0.08rem;
    background: rgba(102, 102, 102, 1);
    border-radius: 50%;
    opacity: 1;
    margin-left: 0.093333rem;
  }
}
.recommendContent_name {
  box-sizing: border-box;
  padding-left: 0.226667rem;
  width: 8.106667rem;
  font-size: 0.293333rem;
  font-family: Microsoft YaHei;
  font-weight: 400;

  color: rgba(102, 102, 102, 1);

  opacity: 1;
}
.recommendContent_text {
  box-sizing: border-box;
  margin-top: 0.506667rem;
  margin-bottom: 0.36rem;
  padding-left: 0.066667rem;
  font-size: 0.373333rem;
  font-family: Microsoft YaHei;
  font-weight: 400;

  color: rgba(68, 68, 68, 1);
  -webkit-text-stroke: 0.10000000149011612 rgba(255, 255, 255, 1);
  text-stroke: 0.10000000149011612 rgba(255, 255, 255, 1);
  line-height: 0.613333rem;
  opacity: 1;
}
.recommendContent_bottom {
  font-size: 0.266667rem;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(102, 102, 102, 1);
  opacity: 1;
}
.recommendContent_bottom_comment {
  margin-left: 6.466667rem;
  margin-right: 0.133333rem;
  width: 0.266667rem;
  height: 0.247467rem;
  display: inline-block;
}
.recommendContent_bottom_like {
  margin-left: 0.36rem;
  margin-right: 0.066667rem;
  width: 0.301467rem;
  height: 0.2516rem;
  display: inline-block;
}
.recommendContent_name_pop {
  box-sizing: border-box;
  margin-left: 4.04rem;
  display: inline-block;
  width: 2rem;
  height: 0.666667rem;
  line-height: 0.666667rem;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0 0 0.133333rem rgba(0, 0, 0, 0.08);
  opacity: 1;
  border-radius: 0.133333rem;
  padding-left: 0.266667rem;
  span {
    display: inline-block;
  }
  span:nth-child(2) {
    box-sizing: border-box;

    margin: 0 0.213333rem -0.053333rem 0.186667rem;
    width: 0px;
    height: 0.32rem;
    border-left: 1px solid rgba(194, 192, 192, 1);
    opacity: 1;
  }
}
.comment {
  margin-top: 0.306667rem;
  box-sizing: border-box;
  position: relative;
  width: 9.186667rem;
  height: 0.946667rem;
  line-height: 0.946667rem;
  background: rgba(236, 236, 236, 1);
  opacity: 1;

  font-size: 0.293333rem;
  font-family: Microsoft YaHei;
  font-weight: 400;

  opacity: 1;
  padding-left: 0.28rem;
  .rotate {
    position: absolute;
    display: inline-block;
    transform: rotate(45deg);
    top: -0.08rem;
    margin-left: 0.106667rem;
    width: 0.173333rem;
    height: 0.173333rem;
    left: 0.2rem;

    background-color: rgba(236, 236, 236, 1);
  }
  .comment_title {
    font-size: 0.293333rem;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: rgba(255, 140, 0, 1);
    opacity: 1;
  }
  .comment_text {
    font-size: 0.293333rem;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: rgba(68, 68, 68, 1);
    opacity: 1;
  }
}
</style>