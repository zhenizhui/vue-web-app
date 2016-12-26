<template>
  <div class="apps-wrapper">
    <div class="apps" v-el:app-wrapper>
      <div class="app-wrapper">
        <div class="location-weather-search">
          <div class="location-weather">
            <div class="location">
              <span class="map-icon"><i class="fa fa-map-marker" aria-hidden="true"></i></span>
              <span class="location-text">广东省广州市越秀区</span>
              <i class="fa fa-caret-down" aria-hidden="true"></i>
            </div>
            <div class="weather">
              <div class="weather-text">
                <p class="temperature">17°</p>
                <p class="meteorology">多云夜</p>
              </div>
              <span class="weather-cloud-icon"><i class="fa fa-cloud" aria-hidden="true"></i></span>
              <span class="weather-moon-icon"><i class="fa fa-moon-o" aria-hidden="true"></i></span>
            </div>
          </div>
          <div class="search">
            <input class="search-input" placeholder="&#xf002; 搜索商家、商品名称">
          </div>
        </div>
      </div>
    </div>
    <div class="footer-tab">
      <a class="footer-tab-item">
        <p class="item-icon"><i class="fa fa-shopping-cart" aria-hidden="true"></i></p>
        <p class="item-text">外卖</p>
      </a>
      <a class="footer-tab-item">
        <p class="item-icon"><i class="fa fa-compass" aria-hidden="true"></i></p>
        <p class="item-text">发现</p>
      </a>
      <a class="footer-tab-item">
        <p class="item-icon"><i class="fa fa-file-text-o" aria-hidden="true"></i></p>
        <p class="item-text">订单</p>
      </a>
      <a class="footer-tab-item">
        <p class="item-icon"><i class="fa fa-user-o" aria-hidden="true"></i></p>
        <p class="item-text">我的</p>
      </a>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll';
  const ERR_OK = 0;
  export default {
    data () {
      return {
        sellerList: []
      };
    },
    created () {
      this.$http.get('/api/sellerList').then((response) => {
        response = response.body;
        if (response.errno === ERR_OK) {
          this.sellerList = response.data;
          this.$nextTick(() => {
            this._initScroll();
          });
        } else {
          console.log('sellerList请求数据失败');
        }
      });
    },
    methods: {
      _initScroll: function () {
        this.app = new BScroll(this.$els.appWrapper, {
          click: true
        });
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .apps
    .app-wrapper
      width: 100%
      box-sizing: border-box
      .location-weather-search
        padding: 15px 15px 0 15px
        background: #0196FF
        height: 77px
        .location-weather
          color: #fff
          display: flex
          .location
            flex: 2
            font-weight: 700
            line-height: 24px
            height: 24px
          .weather
            flex: 1
            position: relative
            text-align: right
            z-index: 1
            .weather-text
              display: inline-block
              font-size: 12px
              margin-right: 37px
              .temperature
                text-align: right
            .weather-cloud-icon, .weather-moon-icon
              position: absolute
              width: 18px
              height: 18px
            .weather-cloud-icon
              top: 5px
              right: 7px
              z-index: 2
            .weather-moon-icon
              top: 3px
              right: 15px
              z-index: 3
        .search
          margin-top: 10px
          position: relative;
          .search-input
            width: 100%
            padding: 8px 5px 8px 10px
            border-radius: 40px
            box-sizing: border-box;
            outline: 0
            border: none
            font-family: fontAwesome
            &::-webkit-input-placeholder
              /* Chrome/Opera/Safari */
              text-align: center
              font-size: 12px
              color: #ccc
            &::-moz-placeholder
              /* Firefox 19+ */
              text-align: center
              font-size: 12px
              color: #ccc
            &:-ms-input-placeholder
              /* IE 10+ */
              text-align: center
              font-size: 12px
              color: #ccc
            &:-moz-placeholder
              /* Firefox 18- */
              text-align: center
              font-size: 12px
              color: #ccc
  .footer-tab
    position: absolute
    bottom: 0
    width: 100%
    height: 30px
    background: #f7f7f7
    display: table
    table-layout: fixed
    .footer-tab-item
      display: table-cell
      text-align: center
      padding: 5px 0
      &.active
        .item-text, .item-icon
          color: #0196ff
      .item-text
        margin-top: 4px
        font-size: 12px
</style>