<template>
  <div>
    <v-header :seller="seller"></v-header>
    <div class="tab border-1px">
      <div class="tab-item">
        <a v-link="{path: '/goods'}">商品</a>
      </div>
      <div class="tab-item">
        <a v-link="{path: '/ratings'}">评论</a>
      </div>
      <div class="tab-item">
        <a v-link="{path: '/sellers'}">商家</a>
      </div>
    </div>
    <router-view :seller="seller" keep-alive></router-view>
  </div>
</template>

<script>
  import header from './components/header/header.vue';

  const ERR_OK = 0;// 0表示数据正常返回

  export default {
    components: {
      'v-header': header
    },
    data () {
      return {
        seller: {}
      };
    },
    created () {
      this.$http.get('api/seller').then((response) => {
        // console.log(response.body);// 响应的json数据
        response = response.body;
        if (response.errno === ERR_OK) {
          this.seller = response.data;
        }
      });
    },
    ready () {
      this.addOnlineDetectListeners();
    },
    methods: {
      addOnlineDetectListeners: function () {
        window.addEventListener('offline', function (e) {
          window.alert('网络似乎出了点问题，请查看设备情况');
        });
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "./stylus/mixin.styl"
.tab
  display: flex
  height: 40px
  width: 100%
  line-height: 40px
  border-1px(rgba(7, 17, 27, 0.1));
  .tab-item
    flex: 1
    text-align: center
    & > a
      display: block
      font-size:14px
      color: rgb(77, 85, 93)
      &.active
        color: rgb(240, 20, 20)
</style>
