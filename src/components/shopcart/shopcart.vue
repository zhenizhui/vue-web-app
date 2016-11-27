<template>
  <div class="shopcart">
    <div class="content" @click="toggleList">
      <div class="content-left">
        <div class="logo-wrapper">
          <div class="logo" :class="{'highlight': totalCount > 0}">
            <i class="fa fa-shopping-cart" aria-hidden="true"></i>
            <div class="number" :class="{'highlight': totalCount > 0}" v-show="totalCount > 0">{{totalCount}}</div>
          </div>
        </div>
        <div class="price" :class="{'highlight': totalCount > 0}">{{totalPrice}}元</div>
        <div class="desc">另需配送费￥{{deliveryPrice}}元</div>
      </div>
      <div class="content-right" :class="payStatusClass" @click.stop.prevent="goToPay">{{payDesc}}</div>
    </div>
    <!-- 购物车详情页面 Start -->
    <div class="shopcart-list" v-show="showShopCartDetail" transition="fold">
      <div class="list-header">
        <div class="title">购物车</div>
        <span class="empty" @click="empty">清空</span>
      </div>
      <div class="list-content" v-el:list-content>
        <ul>
          <li class="food" v-for="food in selectFoods">
            <span class="name">{{food.name}}</span>
            <div class="price">
              <span>￥{{food.price * food.count}}</span>
              <span class="cart-control-wrapper">
                <shopcartcontrol :food="food"></shopcartcontrol>
              </span>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- 购物车详情页面 End -->
  </div>
  <div class="list-mask" v-show="showShopCartDetail" transition="fade" @click="hideList"></div>
</template>
<script>
  import BScroll from 'better-scroll';
  import shopcartcontrol from '../shopcartcontrol/shopcartcontrol.vue';
  export default {
    props: {
      selectFoods: {
        type: Array,
        default () {
          return [];
        }
      },
      deliveryPrice: {
        type: Number,
        default: 0
      },
      minPrice: {
        type: Number,
        default: 0
      }
    },
    components: {
      shopcartcontrol
    },
    data () {
      return {
        // 默认情况下，没有商品，所以购物车详情不展开
        shopCartDetailStatus: false
      };
    },
    computed: {
      /**
       *
       * totalPrice 计算总价
       * @return {number}
       */
      totalPrice () {
        let total = 0;
        this.selectFoods.forEach((food) => {
          total += food.price * food.count;
        });
        return total;
      },
      /**
       * totalCount 计算商品数量
       * @return {number}
       */
      totalCount () {
        let count = 0;
        this.selectFoods.forEach((food) => {
          count += food.count;
        });
        return count;
      },
      /**
       * 当总额小于最小额度的时候，显示不同的提示文本信息
       * @return {*}
       */
      payDesc () {
        if (this.totalPrice === 0) {
          return `￥${this.minPrice}元起送`;
        } else if (this.totalPrice < this.minPrice) {
          let diff = this.minPrice - this.totalPrice;
          return `还差￥${diff}元起送`;
        } else {
          return '去结算';
        }
      },
      payStatusClass () {
        if (this.totalPrice < this.minPrice) {
          return 'not-enough';
        } else {
          return 'enough';
        }
      },
      showShopCartDetail () {
        if (!this.totalCount) {
          this.shopCartDetailStatus = true;
          return false;
        }
        if (!this.shopCartDetailStatus) {
          this.$nextTick(() => {
            if (!this.scroll) {
              this.scroll = new BScroll(this.$els.listContent, {
                click: true
              });
            } else {
              this.scroll.refresh();
            }
          });
        }
        return !this.shopCartDetailStatus;
      }
    },
    methods: {
      drop (el) {
        // console.log(el);
        // 遍历ball
        for (let i = 0; i < this.balls.length; i++) {
          let ball = this.balls[i];
          if (!ball.show) {
            ball.show = true;
            ball.el = el;
            this.dropBalls.push(ball);
            return;
          }
        }
      },
      toggleList () {
        if (!this.totalCount) {
          return;
        } else {
          this.shopCartDetailStatus = !this.shopCartDetailStatus;
        }
      },
      hideList () {
        this.shopCartDetailStatus = true;
      },
      empty () {
        this.selectFoods.forEach((food) => {
          food.count = 0;
        });
      },
      goToPay () {
        if (this.totalPrice < this.minPrice) {
          return;
        }
        window.alert('正在前往支付页面....');
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../stylus/mixin.styl";
  .shopcart
    position: fixed
    left: 0
    bottom: 0
    z-index: 50
    width: 100%
    height: 48px
    background: #ccc
    .content
      display: flex
      background: #141d27
      .content-left
        flex: 1
        font-size: 0
        .logo-wrapper
          display: inline-block
          position: relative
          top: -10px
          margin: 0 12px
          padding: 6px
          width: 56px
          height: 56px
          box-sizing: border-box
          vertical-align: top
          border-radius: 50%
          background: #141d27
          .logo
            width:100%
            height: 100%
            border-radius: 50%
            background: #2b343c
            text-align: center
            position: relative
            &.highlight
              background: rgb(0, 160, 220)
              .fa-shopping-cart
                color: #fff
            .fa-shopping-cart
              font-size: 24px
              color: #80858
              line-height: 44px
            .number
              position: absolute;
              top: -8px
              right: -4px
              width: 20px
              height: 17px
              line-height: 16px;
              text-align: center
              border-radius: 16px
              font-size: 9px
              font-weight: 700
              color: #fff
              background: rgb(240, 20, 20)
              box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4)
        .price
          display: inline-block
          vertical-align: top
          margin-top: 12px
          line-height: 24px
          padding-right: 12px
          box-sizing: border-box
          border-right: 1px solid rgba(255, 255, 255, 0.1)
          font-size: 16px
          font-weight: 700
          color: rgba(255, 255, 255, 0.4)
          &.highlight
            color: #fff
        .desc
          display: inline-block
          vertical-align: top
          margin-top: 12px
          line-height: 24px
          font-size: 10px
          color: rgba(255, 255, 255, 0.4)
      .content-right
        flex : 0 0 105px
        width: 105px
        font-size: 10px
        color: rgb(154, 155, 156, 0.4)
        font-weight: 700
        line-height: 24px
        padding-top: 12px;
        text-align: center
        &.not-enough
          background: #2b333c
        &.enough
          background: #00b43c
          color: #fff

    .shopcart-list
      position: absolute
      top: 0
      left: 0
      z-index: -1
      width: 100%
      &.fold-transition
        transition: all 0.5s
        transform: translate3d(0, -100%, 0)
      &.fold-enter, &.fold-leave
        transform: translate3d(0, 0, 0)
      .list-header
        height: 40px
        line-height: 40px
        padding: 0 18px
        background: #f3f5f7
        border-bottom: 1px solid rgba(7, 17, 27, 0.1)
        .title
          float: left
          font-size: 14px
          color: rgb(7, 17, 27)
        .empty
          float: right
          font-size: 12px
          color: rgb(0, 160, 220)
      .list-content
        padding: 0 18px
        max-height: 217px
        background: #fff
        overflow: hidden
        .food
          position: relative
          padding: 12px 0
          box-sizing: border-box
          border-1px(rgba(7, 17, 27, 0.1))
          .name
            line-height: 24px
            font-size: 14px
            color: rgb(7, 17, 27)
          .price
            float: right
            width: 100px;
            line-height: 24px
            font-size 14px
            font-weight: 700
            color: rgb(240, 20, 20)
          .cart-control-wrapper
            position: absolute
            right: 0
  .list-mask
    position: fixed
    top: 0
    left: 0
    width: 100%
    height: 100%
    z-index: 40
    background-filter: blur(10px)
    &.fade-transition
      transition: all 0.5s
      opacity: 1
      background: rgba(7, 17, 27, 0.6)
    &.fade-enter, &.fade-leave
      opacity: 0
      background: rgba(7, 17, 27, 0);
</style>
