<template>
  <!--   发现--发布 -->
  <div class="issue_afterRead">
    <securityCenterhead title="发布" :discoverHead="true" issue="记录" :Drouter="Drouter"></securityCenterhead>
    <div class="issue_input">
      <div class="issue_textarea">
        <van-cell-group :border="false">
          <van-field v-model="value" placeholder="我觉得对...." type="textarea" />
        </van-cell-group>
      </div>

      <van-uploader :after-read="afterRead" multiple v-model="fileList" />
    </div>
    <div class="issue_botton">
      <div class="issue_botton_buttom">
        <div class="issue_buttom">发布</div>
      </div>
    </div>
  </div>
</template>
<script>
import securityCenterhead from "../commonality/head";
export default {
  components: {
    securityCenterhead
  },
  data() {
    return {
      Drouter: "/discoverrecord",
      value: "",
      fileList: []
    };
  },
  methods: {
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      console.log(file);
    }
  }
};
</script>
<style lang="scss" scoped>
.issue_input {
  height: 5.506667rem;
}
.issue_textarea /deep/ {
  .van-cell {
    padding: 0.453333rem 0.426667rem;
    height: 3.213333rem;
  }
  .van-field__control,
  .van-field__body {
    height: 100%;
    font-size: 0.32rem;
  }
  textarea::-webkit-input-placeholder {
    /* WebKit browsers 适配谷歌 */

    font-size: 0.32rem;
    font-family: Microsoft YaHei;
    font-weight: 400;

    color: rgba(68, 68, 68, 1);

    opacity: 1;
  }
  textarea:-moz-placeholder {
    /* Mozilla Firefox 4 to 18 适配火狐 */
    font-size: 0.32rem;
    font-family: Microsoft YaHei;
    font-weight: 400;
    line-height: 0.413333rem;
    color: rgba(68, 68, 68, 1);

    opacity: 1;
  }

  textarea:-ms-input-placeholder {
    /* Internet Explorer 10+  适配ie*/
    font-size: 0.32rem;
    font-family: Microsoft YaHei;
    font-weight: 400;
    line-height: 0.413333rem;
    color: rgba(68, 68, 68, 1);

    opacity: 1;
  }
}
.issue_afterRead /deep/ {
  .van-uploader__upload-icon {
    color: rgba(207, 207, 207, 1);
  }
  .van-uploader__upload {
    border: 0.026667rem solid rgba(201, 201, 201, 1);
    border-radius: 0;
    margin-left: 0.44rem;
    height: 1.546667rem;
    width: 1.546667rem;
  }
  .van-uploader__preview-image {
    height: 1.546667rem;
    width: 1.546667rem;
  }
}
.issue_botton {
  padding-top: 0.213333rem;
  background: rgba(43, 78, 155, 0.05);
  opacity: 1;
}
.issue_botton_buttom {
  background-color: #fff;
  padding-top: 7.72rem;
}
.issue_buttom {
  margin: 0 auto;
  text-align: center;
  width: 8rem;
  height: 1.12rem;
  line-height: 1.12rem;
  background: rgba(255, 140, 0, 1);
  box-shadow: 0px 0.04rem 0.266667rem rgba(255, 140, 0, 0.4);
  opacity: 1;

  border-radius: 0.56rem;

  font-size: 0.32rem;
  font-family: Microsoft YaHei;
  font-weight: 400;

  color: rgba(255, 255, 255, 1);

  opacity: 1;
}
</style>