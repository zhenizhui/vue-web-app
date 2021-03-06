<template>
  <div class="seller" v-el:seller>
    <div class="seller-content">
      <div class="overview">
        <h1 class="title">{{seller.name}}</h1>
        <div class="desc border-1px">
          <star :size="36" :score="seller.score"></star>
          <span class="text">{{seller.ratingCount}}</span>
          <span class="text">月售{{seller.sellCount}}单</span>
        </div>
        <ul class="remark">
          <li class="block">
            <h2>起送价</h2>
            <div class="content">
              <span class="stress">{{seller.minPrice}}</span>元
            </div>
          </li>
          <li class="block">
            <h2>商家配送</h2>
            <div class="content">
              <span class="stress">{{seller.deliveryPrice}}</span>元
            </div>
          </li>
          <li class="block">
            <h2>平均配送时间</h2>
            <div class="content">
              <span class="stress">{{seller.deliveryTime}}</span>分钟
            </div>
          </li>
        </ul>
        <div class="favorite" @click="toggleFavorite">
          <span class="favorite-icon" :class="{'active':favorite}">
            <i class="fa fa-heart" aria-hidden="true"></i>
          </span>
          <span class="text">{{favoriteText}}</span>
        </div>
      </div>
      <split></split>
      <div class="bulletin">
        <h1 class="title">公告与活动</h1>
        <div class="content-wrapper">
          <p class="content">{{seller.bulletin}}</p>
        </div>
        <ul v-if="seller.supports" class="supports">
          <li class="support-item border-1px" v-for="item in seller.supports">
            <span class="icon" :class="classMap[seller.supports[$index].type]"></span>
            <span class="text">{{seller.supports[$index].description}}</span>
          </li>
        </ul>
      </div>
      <split></split>
      <div class="pics">
        <div class="title">商家实景</div>
        <div class="pic-wrapper" v-el:pic-wrapper>
          <ul class="pic-list" v-el:pic-list>
            <li class="pic-item" v-for="pic in seller.pics">
              <img :src="pic" width="120" height="90" alt="">
            </li>
          </ul>
        </div>
      </div>
      <split></split>
      <div class="info">
        <h1 class="title border-1px">商家信息</h1>
        <ul>
          <li class="info-item border-1px" v-for="info in seller.infos">{{info}}</li>
        </ul>
      </div>
    </div>
  </div>
  <div class="popup-like" v-show="favorite" v-el:like-div transition="fade">
    <span class="favorite-icon active">
      <i class="fa fa-heart" aria-hidden="true"></i>
    </span>
    <span class="text">添加收藏成功</span>
  </div>
  <div class="popup-unlike" v-show="!favorite" v-el:unlike-div transition="fade">
    <span class="favorite-icon">
      <i class="fa fa-heart" aria-hidden="true"></i>
    </span>
    <span class="text">取消收藏成功</span>
  </div>
</template>

<script>
  import star from '../star/star.vue';
  import split from '../split/split.vue';
  import BScroll from 'better-scroll';
  export default {
    props: {
      seller: {
        type: Object
      }
    },
    components: {
      star,
      split
    },
    data () {
      return {
        favorite: false
      };
    },
    computed: {
      favoriteText () {
        return this.favorite ? '已收藏' : '收藏';
      }
    },
    created () {
      this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
    },
    watch: {
      'seller' () {
        this._initScroll();
        this._initPics();
      },
      'favorite' (newStatus, oldStatus) {
        // 监听favorite，控制dom元素的显示和隐藏
        let that = this;
        if (newStatus) {
          setTimeout(function () {
            that.$els.likeDiv.style.display = 'none';
          }, 1500);
        } else {
          setTimeout(function () {
            that.$els.unlikeDiv.style.display = 'none';
          }, 1500);
        }
      }
    },
    ready () {
      this._init();
      this._initScroll();
      this._initPics();
    },
    methods: {
      _init () {
        // 隐藏添加收藏和取消收藏的dom元素
        this.$els.likeDiv.style.display = 'none';
        this.$els.unlikeDiv.style.display = 'none';
      },
      _initScroll () {
        if (!this.scroll) {
          this.scroll = new BScroll(this.$els.seller, {
            click: true
          });
        } else {
          this.scroll.refresh();
        }
      },
      _initPics () {
        if (this.seller.pics) {
          let picWidth = 120;
          let margin = 0;
          let width = (picWidth + margin) * this.seller.pics.length - margin;
          this.$els.picList.style.width = width + 'px';
          this.$nextTick(() => {
            if (!this.picScroll) {
              this.picScroll = new BScroll(this.$els.picWrapper, {
                scrollX: true,
                eventPassthrough: 'vertical'
              });
            } else {
              this.picScroll.refresh();
            }
          });
        }
      },
      toggleFavorite (event) {
        if (!event._constructed) {
          return;
        }
        this.favorite = !this.favorite;
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../stylus/mixin.styl";
  .seller
    position: absolute
    top: 207px
    bottom: 0
    left: 0
    width: 100%
    overflow: hidden
    .overview
      position: relative
      padding: 18px
      .title
        margin-bottom: 8px
        line-height: 14px
        color: rgb(7, 17, 27)
        font-size: 14px
      .desc
        padding-bottom: 18px
        border-1px(rgba(7, 17, 27, 0.1))
        font-size: 0
        .star
          display: inline-block
          margin-right: 8px
          vertical-align: top
        .text
          margin-left: 12px
          display: inline-block
          line-height: 18px
          color: rgb(7, 17, 27)
          font-size: 14px
          vertical-align: top
      .remark
        display: flex
        padding-top: 18px
        .block
          flex: 1
          text-align: center
          border-right: 1px solid rgba(7, 17, 27, 0.1)
          &:last-child
            border: none
          h2
            margin-bottom: 4px
            font-size: 10px
            line-height: 10px
            color: rgb(147, 153, 159)
          .content
            line-height: 24px
            font-size: 10px
            color: rgb(7, 17, 27)
            .stress
              font-size: 24px
      .favorite
        position: absolute
        right: 18px
        top: 18px
        width: 36px
        .favorite-icon
          display: inline
          width: 20px
          margin-left: 11px
          margin-right: 5px
          i
            color:#ccc
          &.active
            i
              color: rgb(240, 20, 20)
        .text
          display: block
          font-size: 10px
          line-height: 10px
          margin-top: 9px
          text-align: center
    .bulletin
      padding: 18px 18px 0 18px
      line-height: 14px
      color: rgb(7, 17, 27)
      font-size: 14px
      .content-wrapper
        padding: 5px 12px 16px 12px
        border-1px(rgba(7, 17, 27, 0.1))
        .content
          line-height: 24px
          font-size: 12px
          color: rgb(240, 20, 20)
      .supports
        .support-item
          padding: 16px 12px
          border-1px(rgba(7, 17, 27, 0.1))
          font-size: 0
          &:last-child
            border-none()
          .icon
            display: inline-block
            width: 16px
            height: 16px
            font-size: 14px
            vertical-align: top
            margin-right: 6px
            background-size: 16px 16px
            background-repeat: no-repeat
            &.decrease
              bg-image('../../img/seller/decrease_4')
              display: inline-block
            &.discount
              bg-image('../../img/seller/discount_4')
              display: inline-block
            &.guarantee
              bg-image('../../img/seller/guarantee_4')
              display: inline-block
            &.invoice
              bg-image('../../img/seller/invoice_4')
              display: inline-block
            &.special
              bg-image('../../img/seller/special_4')
              display: inline-block
          .text
            line-height: 16px
            font-size: 12px
            color: rgb(7, 17, 27)
    .pics
      padding: 18px
      .title
        margin-bottom: 12px
        line-height: 14px
        color: rgb(7, 17, 27)
        font-size: 14px
      .pic-wrapper
        width :100%
        white-space: nowrap
        .pic-list
          font-size: 0
          .pic-item
            display: inline-block
            margin-right: 6px
            width: 120px
            height: 90px
            &:last-child
              margin: 0
    .info
      padding: 18px 18px 0 18px
      color: rgb(7, 17, 27)
      .title
        padding-bottom: 12px
        line-height: 14px
        border-1px(rgba(7, 17, 27, 0.1))
        font-size: 14px
      .info-item
        padding: 16px 12px
        line-height: 16px
        border-1px(rgba(7, 17, 27, 0.1))
        font-size: 12px
        &:last-child
          border-none()
  .popup-like, .popup-unlike
    position: absolute
    width: 127px
    height: 77px
    top: 0
    left: 0
    right: 0
    bottom: 0
    margin: auto
    background: rgba(78, 77, 77, 0.7)
    text-align: center
    &.fade-transition
      background: rgba(0, 0, 0, 0.7)
      transition: all 1.5s
    &.fade-enter, &.fade-leave
      background: rgba(0, 0, 0, 0.1)
    .favorite-icon
      font-size: 30px
      display: inline-block
      margin-top: 11px;
      &.active
        color: rgba(230, 113, 113, 0.9)
    .text
      display: block;
      margin-top: 8px
      color: #fff
      font-size: 14px
      font-family: "Microsoft YaHei"
  .popup-unlike
    .favorite-icon
      color: rgba(170, 170, 170, 0.9)
</style>


