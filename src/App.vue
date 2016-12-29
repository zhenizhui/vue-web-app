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
        <div class="swiper-wrapper">
          <swiper direction="horizontal">
            <swiper-item>
              <div class="food-kind">
                <div class="food-item">
                  <div class="food-image"></div>
                  <p class="text">美食</p>
                </div>
                <div class="food-item">
                  <div class="food-image"></div>
                  <p class="text">甜品饮品</p>
                </div>
                <div class="food-item">
                  <div class="food-image"></div>
                  <p class="text">商品超市</p>
                </div>
                <div class="food-item">
                  <div class="food-image"></div>
                  <p class="text">预定早餐</p>
                </div>
              </div>
              <div class="food-kind">
                <div class="food-item">
                  <div class="food-image"></div>
                  <p class="text">果蔬生鲜</p>
                </div>
                <div class="food-item">
                  <div class="food-image"></div>
                  <p class="text">新店特惠</p>
                </div>
                <div class="food-item">
                  <div class="food-image"></div>
                  <p class="text">准时达</p>
                </div>
                <div class="food-item">
                  <div class="food-image"></div>
                  <p class="text">夜宵</p>
                </div>
              </div>
            </swiper-item>
            <swiper-item>
              <div class="food-kind">
                <div class="food-item">
                  <div class="food-image"></div>
                  <p class="text">土豪推荐</p>
                </div>
                <div class="food-item">
                  <div class="food-image"></div>
                  <p class="text">鲜花蛋糕</p>
                </div>
                <div class="food-item">
                  <div class="food-image"></div>
                  <p class="text">汉堡炸鸡</p>
                </div>
                <div class="food-item">
                  <div class="food-image"></div>
                  <p class="text">日韩料理</p>
                </div>
              </div>
              <div class="food-kind">
                <div class="food-item">
                  <div class="food-image"></div>
                  <p class="text">麻辣烫</p>
                </div>
                <div class="food-item">
                  <div class="food-image"></div>
                  <p class="text">披萨意面</p>
                </div>
                <div class="food-item">
                  <div class="food-image"></div>
                  <p class="text">川湘菜</p>
                </div>
                <div class="food-item">
                  <div class="food-image"></div>
                  <p class="text">包子粥店</p>
                </div>
              </div>
            </swiper-item>
          </swiper>
          <swiper-pageination></swiper-pageination>
        </div>
        <div class="activity">
          <div class="activity-item activity-item-1">
            <div class="left-big">
              <h3 class="activity-title stress">8.8元吃夜宵</h3>
              <p class="activity-desc">距离结束</p>
              <div class="count-down">
                <span class="hours">00</span>
                <span class="colon">:</span>
                <span class="mins">10</span>
                <span class="colon">:</span>
                <span class="seconds">19</span>
              </div>
            </div>
            <div class="right">
              <div class="right-top">
                <h3 class="activity-title">最高减50元</h3>
                <p class="activity-desc">花少更吃好</p>
              </div>
              <div class="right-bottom">
                <div class="right-bottom-left">
                  <h3 class="activity-title">5折品质餐</h3>
                  <p class="activity-desc">冬日热享</p>
                </div>
                <div class="right-bottom-right">
                  <h3 class="activity-title">热卖美食</h3>
                  <p class="activity-desc">附近最火美食</p>
                </div>
              </div>
            </div>
          </div>
          <div class="activity-item activity-item-2">
            <div class="left">
              <h3 class="activity-title">品质大牌日</h3>
              <p class="activity-desc">最高立减30元</p>
            </div>
            <div class="right">
              <h3 class="activity-title">领券中心</h3>
              <p class="activity-desc">代金券免费领</p>
            </div>
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

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll';
  import swiper from './components/swiper/Swiper.vue';
  import swiperItem from './components/swiper/SwiperItem.vue';
  import swiperPageination from './components/swiper/SwiperPagination.vue';
  const ERR_OK = 0;
  export default {
    components: {
      swiper,
      swiperItem,
      swiperPageination
    },
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
      .swiper-wrapper
        width: 100%
        height: 150px
        .swiper-item
          padding: 0
        .food-kind
          display: flex
          .food-item
            flex: 1
            text-align: center
            .food-image
              width: 50px
              height: 50px
              margin: 0 auto
            .text
              font-size: 12px
        .swiper-pagination
          text-align: center
      .activity
        padding-left: 15px
        padding-right: 15px
        .activity-item
          .activity-title
            /*共有*/
            color: #000
            font-weight: 700
            &.stress
              color: #EF3536
          .activity-desc
            margin-top: 5px
            font-size: 12px
            color: #000
        .activity-item-1
          display: flex
          height: 140px
          .left-big
            flex: 1
            background: #F8F8F8
            padding: 10px
            margin-right: 5px
          .count-down
            .hours, .mins, .seconds
              background: #000
              color: #fff
              font-size: 12px
              box-sizing: border-box
              padding-left: 2px
              padding-right: 2px
              border-radius: 3px
          .right
            display: flex
            flex-direction: column
            flex: 2
            .right-top
              flex: 1
              padding: 10px 10px 0 10px
              background: #F8F8F8
            .right-bottom
              flex: 2
              margin-top: 5px
              display: flex
              .right-bottom-left
                flex: 1
                padding: 5px
                margin-right: 3px
                background: #F8F8F8
              .right-bottom-right
                flex: 1
                padding: 5px
                background: #F8F8F8

        .activity-item-2
          margin-top: 8px
          display: flex
          .left
            flex: 1
            padding: 5px
            background: #f7f7f7
            margin-right: 5px
          .right
            flex: 1
            padding: 5px
            background: #f7f7f7
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