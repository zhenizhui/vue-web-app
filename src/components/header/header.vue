<template lang="html">
  <div class="header">
    <div class="content-wrapper">
      <div class="avatar">
        <img width="64" height="64" :src="seller.avatar" alt="头像">
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{seller.name}}</span>
        </div>
        <div class="description">
          {{seller.description}} / {{seller.deliveryTime}} 分钟送达
        </div>
        <div v-if="seller.supports" class="support">
          <span class="icon" :class="classMap[seller.supports[0].type]"></span>
          <span class="text">{{seller.supports[0].description}}</span>
        </div>
      </div>
      <div class="support-count" v-if="seller.supports" @click="showDetail">
        <span class="count">{{seller.supports.length}}个</span>
        <i class="fa fa-angle-right" aria-hidden="true"></i>
      </div>
    </div>
    <div class="bulletin-wrapper" @click="showDetail">
      <span class="bulletin-title"></span>
      <span class="bulletin-text">{{seller.bulletin}}</span>
      <i class="fa fa-angle-right" aria-hidden="true"></i>
    </div>
    <div class="background">
      <img :src="seller.avatar" alt="背景图片" width="100%" height="100%">
    </div>
    <div class="detail" v-show="detailShow" @click="hideDetail" transition="fade">
      <div class="detail-wrapper clearfix">
        <div class="detail-main">
          <h1 class="name">{{seller.name}}</h1>
          <div class="star-wrapper">
            <star :size="48" :score="seller.score"></star>
          </div>
          <div class="title">
            <div class="line"></div>
            <div class="text">优惠信息</div>
            <div class="line"></div>
          </div>
          <ul v-if="seller.supports" class="supports">
            <li class="support-item" v-for="item in seller.supports">
              <span class="icon" :class="classMap[seller.supports[$index].type]"></span>
              <span class="text">{{seller.supports[$index].description}}</span>
            </li>
          </ul>
          <div class="title">
            <div class="line"></div>
            <div class="text">商家公告</div>
            <div class="line"></div>
          </div>
          <div class="bulletin">
            <p class="content">{{seller.bulletin}}</p>
          </div>
        </div>
      </div>
      <div class="detail-close">
        <i class="fa fa-times" aria-hidden="true" @click="hideDetail"></i>
      </div>
    </div>
  </div>
</template>

<script>
  import star from '../star/star.vue';
  export default {
    props: {
      seller: {
        type: Object
      }
    },
    data () {
      return {
        detailShow: false // 详情页是否出现
      };
    },
    methods: {
      showDetail () {
        this.detailShow = true;
      },
      hideDetail () {
        this.detailShow = false;
      }
    },
    components: {
      star
    },
    created () {
      this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
    }

  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../stylus/mixin.styl";

  .header
    color: #fff
    position: relative
    overflow: hidden;
    .content-wrapper
      position: relative
      padding: 24px 12px 18px 24px
      font-size: 0
      .avatar
        display: inline-block
        vertical-align: top
        img
          border-radius: 2px
      .content
        display: inline-block
        margin-left: 16px
        font-size: 14px
        .title
          margin: 2px 0 8px 0
          .brand
            width: 30px
            height: 18px
            display: inline-block
            bg-image('../../img/header/brand')
            background-size: 30px 18px
            background-repeat no-repeat
            vertical-align top
          .name
            margin-left: 6px;
            font-size: 16px
            line-height: 18px;
            font-weight bold;

        .description
          margin-bottom: 10px
          line-height: 12px
          font-size: 12px
        .support
          .icon
            display: inline-blokc
            width: 12px
            height: 12px
            margin-right: 4px
            background-size: 12px 12px
            background-repeat: no-repeat
            &.decrease
              bg-image('../../img/header/decrease_1')
              display: inline-block
            &.discount
              bg-image('../../img/header/discount_1')
              display: inline-block
            &.guarantee
              bg-image('../../img/header/guarantee_1')
              display: inline-block
            &.invoice
              bg-image('../../img/header/invoice_1')
              display: inline-block
            &.special
              bg-image('../../img/header/special_1')
              display: inline-block
          .text
            line-height 12px
            font-size 10px
            vertical-align: top;
      .support-count
        position: absolute
        right: 12px
        bottom: 18px
        padding: 0 8px
        height: 24px
        line-height: 24px
        border-radius: 14px
        background: rgba(0, 0, 0, 0.2)
        text-align: center
        .count
          font-size: 10px
          margin-right: 5px;
        i
          font-size: 12px
    .bulletin-wrapper
      position: relative
      height: 28px
      line-height 28px;
      padding: 0 22px 0 12px
      white-space: nowrap
      overflow: hidden
      text-overflow: ellipsis
      background: rgba(7, 17, 27, 0.2)
      .bulletin-title
        display: inline-block
        width: 22px
        height: 12px
        bg-image('../../img/header/bulletin')
        background-size: 22px 12px
        background-repeat: no-repeat
      .bulletin-text
        font-size: 10px
        vertical-align top
        overflow: hidden
      i
        position: absolute
        right:12px
        top:5px
    .background
      position: absolute
      top:0
      left:0
      width: 100%
      height:100%
      z-index: -1
      filter: blur(10px)
      -webkit-filter: blur(10px)
    .detail
      position: fixed
      z-index: 100
      top: 0
      left: 0
      width: 100%
      height:100%
      overflow: auto
      transition: all 0.5s
      -webkit-backdrop-filter: blur(5px)
      background: rgba(7, 17, 27, 0.8)
      &.fade-transition
        opacity: 1
        backgrouind: rgba(7, 17, 27, 0.8)
      &.fade-enter, &.fade-leave
        opacity: 0
        backgrouind: rgba(7, 17, 27, 0)
      .detail-wrapper
        min-height: 100%
        width:100%
        .detail-main
          margin-top: 64px
          padding-bottom 64px
          .name
            line-height:16px;
            text-align: center
            font-size: 16px
            font-weight: 700
          .star-wrapper
            margin-top 10px
            padding: 2px 0
            text-align: center
          .title
            display: flex
            width: 80%
            margin: 28px auto 24px auto
            .line
              flex: 1
              position: relative
              top: -6px
              border-bottom: 1px solid rgba(255, 255, 255, 0.2)
            .text
              padding: 0 12px
              font-weight: 700
              font-size: 14px
          .supports
            width: 80%
            margin: 0 auto
            .support-item
              padding: 0 12px
              margin-bottom: 12px
              font-size: 0
              &:last-child
                margin-bottom: 0
              .icon
                display: inline-block
                width: 16px
                height: 16px
                vertical-align: top
                margin-right: 6px
                background-size: 16px 16px
                background-repeat: no-repeat
                &.decrease
                  bg-image('../../img/header/decrease_1')
                  display: inline-block
                &.discount
                  bg-image('../../img/header/discount_1')
                  display: inline-block
                &.guarantee
                  bg-image('../../img/header/guarantee_1')
                  display: inline-block
                &.invoice
                  bg-image('../../img/header/invoice_1')
                  display: inline-block
                &.special
                  bg-image('../../img/header/special_1')
                  display: inline-block
              .text
                line-height: 16px
                font-size: 15px
          .bulletin
            width: 80%
            margin: 0 auto
            .content
              padding: 0 12px
              font-size: 12px
              line-height: 24px
      .detail-close
        position: relative
        width: 32px;
        height: 32px
        margin: -64px auto 0 auto
        clear: both
        font-size: 32px

</style>
