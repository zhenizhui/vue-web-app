<template>
  <div class="index">
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
                  <div class="food-image">
                    <img src="https://fuss10.elemecdn.com/b/7e/d1890cf73ae6f2adb97caa39de7fcjpeg.jpeg">
                  </div>
                  <p class="text">美食</p>
                </div>
                <div class="food-item">
                  <div class="food-image">
                    <img src="https://fuss10.elemecdn.com/2/35/696aa5cf9820adada9b11a3d14bf5jpeg.jpeg?imageMogr/format/webp/">
                  </div>
                  <p class="text">甜品饮品</p>
                </div>
                <div class="food-item">
                  <div class="food-image">
                    <img src="https://fuss10.elemecdn.com/6/72/6cb628b6c1527316c47c018a00762jpeg.jpeg?imageMogr/format/webp/">
                  </div>
                  <p class="text">商品超市</p>
                </div>
                <div class="food-item">
                  <div class="food-image">
                    <img src="https://fuss10.elemecdn.com/0/5e/2a4a05b7a55bab6f22f7404bdaa26jpeg.jpeg?imageMogr/format/webp/">
                  </div>
                  <p class="text">预定早餐</p>
                </div>
              </div>
              <div class="food-kind">
                <div class="food-item">
                  <div class="food-image">
                    <img src="https://fuss10.elemecdn.com/4/b3/331cb9a50dd57a7a0bc4313cfdce3jpeg.jpeg?imageMogr/format/webp/">
                  </div>
                  <p class="text">果蔬生鲜</p>
                </div>
                <div class="food-item">
                  <div class="food-image">
                    <img src="https://fuss10.elemecdn.com/a/fa/d41b04d520d445dc5de42dae9a384jpeg.jpeg?imageMogr/format/webp/">
                  </div>
                  <p class="text">新店特惠</p>
                </div>
                <div class="food-item">
                  <div class="food-image">
                    <img src="https://fuss10.elemecdn.com/3/84/8e031bf7b3c036b4ec19edff16e46jpeg.jpeg?imageMogr/format/webp/">
                  </div>
                  <p class="text">准时达</p>
                </div>
                <div class="food-item">
                  <div class="food-image">
                    <img src="https://fuss10.elemecdn.com/0/3d/7125a96aab7d583151fbc376480b5jpeg.jpeg?imageMogr/format/webp/">
                  </div>
                  <p class="text">夜宵</p>
                </div>
              </div>
            </swiper-item>
            <swiper-item>
              <div class="food-kind">
                <div class="food-item">
                  <div class="food-image">
                    <img src="https://fuss10.elemecdn.com/e/7e/02b72b5e63c127d5bfae57b8e4ab1jpeg.jpeg?imageMogr/format/webp/">
                  </div>
                  <p class="text">土豪推荐</p>
                </div>
                <div class="food-item">
                  <div class="food-image">
                    <img src="https://fuss10.elemecdn.com/8/83/171fd98b85dee3b3f4243b7459b48jpeg.jpeg?imageMogr/format/webp/">
                  </div>
                  <p class="text">鲜花蛋糕</p>
                </div>
                <div class="food-item">
                  <div class="food-image">
                    <img src="https://fuss10.elemecdn.com/b/7f/432619fb21a40b05cd25d11eca02djpeg.jpeg?imageMogr/format/webp/">
                  </div>
                  <p class="text">汉堡炸鸡</p>
                </div>
                <div class="food-item">
                  <div class="food-image">
                    <img src="https://fuss10.elemecdn.com/6/1a/1e0f448be0624c62db416e864d2afjpeg.jpeg?imageMogr/format/webp/">
                  </div>
                  <p class="text">日韩料理</p>
                </div>
              </div>
              <div class="food-kind">
                <div class="food-item">
                  <div class="food-image">
                    <img src="https://fuss10.elemecdn.com/3/c7/a9ef469a12e7a596b559145b87f09jpeg.jpeg?imageMogr/format/webp/">
                  </div>
                  <p class="text">麻辣烫</p>
                </div>
                <div class="food-item">
                  <div class="food-image">
                    <img src="https://fuss10.elemecdn.com/7/b6/235761e50d391445f021922b71789jpeg.jpeg?imageMogr/format/webp/">
                  </div>
                  <p class="text">披萨意面</p>
                </div>
                <div class="food-item">
                  <div class="food-image">
                    <img src="https://fuss10.elemecdn.com/9/7c/9700836a33e05c2410bda8da59117jpeg.jpeg?imageMogr/format/webp/">
                  </div>
                  <p class="text">川湘菜</p>
                </div>
                <div class="food-item">
                  <div class="food-image">
                    <img src="https://fuss10.elemecdn.com/2/17/244241b514affc0f12f4168cf6628jpeg.jpeg?imageMogr/format/webp/">
                  </div>
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
            <!-- 57866665a773bd006691c281 -->
            <div class="seller-item" v-link="{name: 'seller', params: {seller: '57866665a773bd006691c281'}}"
                 v-for="seller in sellerList" @click="setCurrentSeller(seller)">
              <div class="seller-logo">
                <img :src="seller.sellerPic">
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
                  <span class="distance">{{seller.distance}}m / <span
                          class="distance-min">{{seller.deliveryTime}}分钟</span></span>
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
  import {setCurrentSeller} from '../../vuex/actions';
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
        locationAndWeather: true,
        currentSeller: {}
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
          this.$http.get('/api/sellerList').then((response) => {
            response = response.body;
            if (response.errno === ERR_OK) {
              this.sellerList = response.data;
            } else {
              console.log('sellerList请求数据失败');
            }
          });
          done();
        }, 1500);
      },
      onInfinite (done) {
        let that = this;
        setTimeout(() => {
          that.bottom = that.bottom + 30;
          that.sellerList.push({
            sellerName: 'mock数据',
            sellerPic: '',
            deliveryTime: 40,
            score: 5,
            serviceScore: 4.1,
            foodScore: 4.5,
            rankRate: 69.2,
            sellCount: 90,
            distance: 400
          });
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
      // this.bottom = 20;
    },
    vuex: {
      actions: {
        setCurrentSeller
      }
    }
  };

</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../stylus/mixin.styl"
  .wrapper
    position: relative
    width: 100%
    box-sizing: border-box
    overflow: auto
    .location-weather-search
      px2rem(padding, 15)
      background: #0196FF
      .location-weather
        color: #fff
        display: flex
        px2rem(font-size, 35)
        .location
          flex: 2
          font-weight: 700
          px2rem(height, 15)
          px2rem(line-height, 15)
        .weather
          flex: 1
          position: relative
          text-align: right
          z-index: 1
          .weather-text
            display: inline-block
            px2rem(font-size, 30)
            px2rem(margin-right, 50)
            .temperature
              text-align: right
          .weather-cloud-icon, .weather-moon-icon
            position: absolute
            px2rem(width, 18)
            px2rem(height, 18)
          .weather-cloud-icon
            px2rem(top, 5)
            px2rem(right, 7)
            z-index: 2
          .weather-moon-icon
            px2rem(top, 3)
            px2rem(right, 15)
            z-index: 3
      .search
        px2rem(margin-top, 10)
        display: flex
        align-items: center
        .arrow-left-wrapper
          flex: 1
          px2rem(height, 16)
          px2rem(width, 38)
          px2rem(margin-top, -8)
          .arrow-left.icon
            display: inline-block
            color: #fff
            position: absolute
            px2rem(margin-left, 3)
            px2rem(margin-top, 10)
            px2rem(width, 16)
            px2rem(height, 1)
            background-color: currentColor
            px2rem(margin-left, 5)
            &:before
              content: ''
              position: absolute
              px2rem(left, 1)
              px2rem(top, -5)
              px2rem(width, 10)
              px2rem(height, 10)
              border-top: solid 1px currentColor
              border-right: solid 1px currentColor
              -webkit-transform: rotate(-135deg)
              transform: rotate(-135deg)
        .search-input-wrapper
          flex: 7
          .search-input
            px2rem(height, 60)
            width: 100%
            px2rem(border-radius, 40)
            px2rem(padding, 20)
            box-sizing: border-box
            outline: 0
            border: none
            font-family: fontAwesome
            px2rem(font-size, 16)
            px2rem(line-height, 60)
            &::-webkit-input-placeholder
              /* Chrome/Opera/Safari */
              text-align: center
              px2rem(font-size, 28)
              color: #ccc
            &::-moz-placeholder
              /* Firefox 19+ */
              text-align: center
              px2rem(font-size, 28)
              color: #ccc
            &:-ms-input-placeholder
              /* IE 10+ */
              text-align: center
              px2rem(font-size, 28)
              color: #ccc
            &:-moz-placeholder
              /* Firefox 18- */
              text-align: center
              px2rem(font-size, 28)
              color: #ccc
        .search-btn
          flex: 1
          display: inline-block
          px2rem(margin-left, 5)
          px2rem(margin-top, -5)
          color: #fff
    .swiper-wrapper
      width: 100%
      px2rem(height, 275)
      px2rem(margin-top, 25)
      px2rem(margin-bottom, 25)
      .swiper-item
        padding: 0
        px2rem(height, 150)
        .food-kind
          display: block
          px2rem(margin-bottom, 7)
          overflow: auto
          .food-item
            width: 25%
            text-align: center
            float: left
            .food-image
              margin: 0 auto
              px2rem(width, 90)
              px2rem(height, 90)
              img
                width 100%;
                height: 100%;
            .text
              px2rem(margin-top, 12)
              px2rem(font-size, 24)
              color: #666
      .swiper-pagination
        text-align: center
        px2rem(height, 25)
    .activity
      px2rem(padding-left, 15)
      px2rem(padding-right, 15)
      .activity-item
        px2rem(font-size, 24)
        .activity-title
          /*共有*/
          color: #000
          font-weight: 700
          px2rem(margin-bottom, 5)
          &.stress
            color: #EF3536
        .activity-desc
          px2rem(margin-bottom, 5)
          px2rem(font-size, 16)
          color: #000
      .activity-item-1
        display: flex
        px2rem(height, 200)
        .left-big
          flex: 1
          background: #F8F8F8
          px2rem(padding, 10)
          px2rem(margin-right, 5)
          .count-down
            .hours, .mins, .seconds
              background: #000
              color: #fff
              px2rem(font-size, 16)
              box-sizing: border-box
              px2rem(padding-left, 5)
              px2rem(padding-right, 5)
              px2rem(border-radius, 5)
        .right
          display: flex
          flex-direction: column
          flex: 2
          .right-top
            flex: 1
            padding: (10 / 75) rem (10 / 75) rem 0 (10 / 75) rem
            px2rem(padding-top, 10)
            px2rem(padding-right, 10)
            px2rem(padding-left, 10)
            background: #F8F8F8
          .right-bottom
            flex: 2
            px2rem(margin-top, 5)
            display: flex
            .right-bottom-left
              flex: 1
              px2rem(padding, 5)
              px2rem(margin-right, 5)
              background: #F8F8F8
            .right-bottom-right
              flex: 1
              px2rem(padding, 5)
              background: #F8F8F8
      .activity-item-2
        px2rem(margin-top, 8)
        display: flex
        px2rem(height, 150)
        .left
          flex: 1
          px2rem(padding, 5)
          background: #f7f7f7
          px2rem(margin-right, 5)
        .right
          flex: 1
          px2rem(padding, 5)
          background: #f7f7f7
    .seller-list
      .seller-list-title
        px2rem(padding-left, 15)
        px2rem(margin-top, 15)
        px2rem(margin-bottom, 15)
        font-weight: 500
      .seller-item
        display: flex
        px2rem(padding, 15)
        position: relative
        .seller-logo
          position: relative
          px2rem(width, 110)
          px2rem(height, 110)
          px2rem(margin-right, 10)
          img
            display: block
            width: 100%
            height: 100%
            px2rem(border-radius, 4)
        .seller-info
          flex: 4
          .seller-title
            px2rem(font-size, 24)
            px2rem(margin-bottom, 16)
            .brand
              display: inline-block
              px2rem(padding, 3)
              color: #663A00
              background-color: #FEDE3F
            .seller-name
              color: #000
              font-weight: 700
          .score-number
            px2rem(margin-left, 5)
            color: #FF8400
            px2rem(font-size, 18)
          .sell-count
            px2rem(margin-left, 7)
            px2rem(font-size, 18)
            color: #828282
          .delivery
            px2rem(margin-top, 16)
            .min-delivery
              color: #000
            .distance
              px2rem(font-size, 20)
              float: right
              .distance-min
                color: #2395ff
        .newOrNot
          position: absolute
          top: 0
          left: 0
          px2rem(width, 60)
          px2rem(height, 60)
          background-image: linear-gradient(135deg, #26ce61, #26ce61 50%, transparent 0)
          .text
            position: absolute
            px2rem(top, 10)
            color: #ffffff
            px2rem(font-size, 16)
            transform: rotate(-45deg) scale(.85);
</style>