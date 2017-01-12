<template>
  <div class="wrapper-parent">
    <scroll :on-refresh="onRefresh" :on-infinite="onInfinite">
      <div class="wrapper">
        <div class="location-weather-search">
          <div class="location-weather" v-show="locationAndWeather">
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
            <div class="arrow-left-wrapper" v-show="isSearching">
              <i class="arrow-left icon"></i>
            </div>
            <div class="search-input-wrapper">
              <input class="search-input" placeholder="&#xf002; 搜索商家、商品名称" @click="starSearch" transition="search">
            </div>
            <span class="search-btn" v-show="isSearching">搜索</span>
            <div class="search-panel" v-show="isSearching">
              <div class="history-search">
                <h4>历史搜索</h4>
                div.
              </div>
              <div class="hot-search"></div>
            </div>
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
        <div class="seller-list-wrapper">
          <div class="seller-list">
            <h1 class="seller-list-title">推荐商家</h1>
            <div class="seller-item" v-for="seller in sellerList">
              <div class="seller-logo">
                <img width="57" height="57" :src="seller.sellerPic">
              </div>
              <div class="seller-info">
                <div class="seller-title">
                  <span class="brand" v-show="seller.brand">{{seller.brand}}</span>
                  <span class="seller-name">{{seller.sellerName}}</span>
                </div>
                <stars :score="seller.score"></stars>
                <span class="score-number">{{seller.score}}</span>
                <span class="sell-count">月售{{seller.sellCount}}单</span>
                <div class="delivery">
                  <span class="min-delivery">￥{{seller.minPrice}}起送 / 配送费￥{{seller.deliveryPrice}}</span>
                  <span class="distance">{{seller.distance}}m / <span class="distance-min">{{seller.deliveryTime}}分钟</span></span>
                </div>
              </div>
              <div class="newOrNot" v-if="seller.newOrNot">
                <span class="text">新店</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </scroll>
  </div>
</template>

<script type="text/ecmascript-6">
  import swiper from '../swiper/Swiper.vue';
  import swiperItem from '../swiper/SwiperItem.vue';
  import swiperPageination from '../swiper/SwiperPagination.vue';
  import stars from '../stars/stars.vue';
  import scroll from '../scroll/scroll.vue';
  const ERR_OK = 0;
  export default {
    components: {
      swiper,
      swiperItem,
      swiperPageination,
      stars,
      scroll
    },
    data () {
      return {
        sellerList: [],
        isSearching: false,
        locationAndWeather: true
      };
    },
    created () {
      this.$http.get('/api/sellerList').then((response) => {
        response = response.body;
        if (response.errno === ERR_OK) {
          this.sellerList = response.data;
        } else {
          console.log('sellerList请求数据失败');
        }
      });
    },
    methods: {
      onRefresh (done) {
        setTimeout(() => {
          this.top = this.top - 10;
          console.log('正在重新刷新');
          done();
        }, 1500);
      },
      onInfinite (done) {
        setTimeout(() => {
          // this.bottom = this.bottom + 10;
          console.log('正在加载更多内容');
          done();
        }, 1000);
      },
      starSearch () {
        this.isSearching = !this.isSearching;
        this.locationAndWeather = !this.locationAndWeather;
      }
    },
    ready () {
      this.top = 1;
      this.bottom = 20;
    }
  };

</script>

<style lang="stylus" rel="stylesheet/stylus">
  .wrapper-parent
    .wrapper
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
          display: flex
          align-items: center
          .arrow-left-wrapper
            flex: 1
            height: 16px
            width: 38px
            margin-top: -8px
            .arrow-left.icon
              display: inline-block
              color: #fff
              position: absolute
              margin-left: 3px
              margin-top: 10px
              width: 16px
              height: 1px
              background-color: currentColor
              margin-left: 5px
              &:before
                content: ''
                position: absolute
                left: 1px
                top: -5px
                width: 10px
                height: 10px
                border-top: solid 1px currentColor
                border-right: solid 1px currentColor
                -webkit-transform: rotate(-135deg)
                transform: rotate(-135deg)
          .search-input-wrapper
            flex: 7
            .search-input
              width: 100%
              padding: 8px 5px 8px 10px
              border-radius: 40px
              box-sizing: border-box
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
          .search-btn
            flex: 1
            display: inline-block
            margin-left: 5px
            margin-top: -5px
            color: #fff
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
                margin-right: 5px
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
      .seller-list
        .seller-list-title
          padding-left: 15px
          margin-top: 15px
          margin-bottom: 15px
          font-weight: 500
        .seller-item
          display: flex
          padding: 15px
          position: relative
          .seller-logo
            width: 57px
            height: 57px
            flex: 1
          .seller-info
            flex: 4
            .seller-title
              margin-bottom: 5px
              .brand
                display: inline-block
                padding: 1px 2px
                color: #663A00
                font-size: 12px
                background-color: #FEDE3F
              .seller-name
                font-weight: 700
            .score-number
              margin-left: 5px
              font-size: 12px
              color: #FF8400
            .sell-count
              margin-left: 7px
              font-size: 12px
              color: #828282
            .delivery
              margin-top: 5px
              .min-delivery
                font-size: 12px
                color: #000
              .distance
                font-size: 12px
                float: right
                .distance-min
                  color: #2395ff
                  font-size: 12px
          .newOrNot
            position: absolute
            top: 0
            left: 0
            width: 35px
            height: 40px
            background-image: linear-gradient(135deg, #26ce61, #26ce61 50%, transparent 0)
            .text
              position: absolute
              top: 8px
              color: #ffffff
              font-size: 12px
              transform: rotate(-45deg) scale(.85);

</style>