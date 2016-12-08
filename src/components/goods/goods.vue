<template>
  <div class="goods">
    <div class="menu-wrapper" v-el:menu-wrapper>
      <ul>
        <li v-for="item in goods" class="menu-item" :class="{'current': currentIndex === $index}" @click="selectMenu($index, $event)">
          <span class="number">2</span>
          <span class="text border-1px">
            <span class="icon" v-show="item.type > 0" :class="classMap[item.type]"></span>
            {{item.name}}
          </span>
        </li>
      </ul>
    </div>
    <div class="foods-wrapper" v-el:foods-wrapper>
      <ul>
        <li v-for="item in goods" class="food-list food-list-hook">
          <h1 class="title">{{item.name}}</h1>
          <ul>
            <li v-for="food in item.foods" class="food-item border-1px" @click="showSelectedFoodDetail(food, $event)">
              <div class="icon">
                <img width="57" height="57" :src="food.icon" alt="">
              </div>
              <div class="content">
                <h2 class="name">{{food.name}}</h2>
                <p class="desc">{{food.description}}</p>
                <div class="extra">
                  <span>月售{{food.sellCount}}份</span>
                  <span>好评率{{food.rating}}%</span>
                </div>
                <div class="price">
                  <span class="now">￥{{food.price}}</span>
                  <span class="old" v-show="food.oldPrice">￥{{food.oldPrice}}</span>
                  <div class="cart-control-wrapper">
                    <shopcartcontorl :food="food"></shopcartcontorl>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
  <shopcart v-ref:shopcart :delivery-price="seller.deliveryPrice" :min-price="seller.minPrice" :select-foods="selectFoods"></shopcart>
  <food :food="selectedFood" v-ref:food></food>
</template>

<script>
  import food from '../food/food.vue';
  import shopcart from '../shopcart/shopcart.vue';
  import shopcartcontorl from '../shopcartcontrol/shopcartcontrol.vue';
  import BScroll from 'better-scroll';
  const ERR_OK = 0;

  export default {
    props: {
      seller: {
        type: Object
      }
    },
    components: {
      shopcartcontorl,
      shopcart,
      food
    },
    data () {
      return {
        goods: [],
        listHeight: [],
        scrollY: 0,
        goodsInShopCart: [],
        selectedFood: {}
      };
    },
    computed: {
      currentIndex () {
        for (let i = 0; i < this.listHeight.length; i++) {
          let height1 = this.listHeight[i];
          let height2 = this.listHeight[i + 1];
          if (!height2 || (this.scrollY >= height1 && this.scrollY < height2)) {
            // debugger;
            return i;
          }
        }
        return 0;
      },
      selectFoods () {
        // 通过判断food的count属性来判断是否是已经选中，返回值会传递给购物车组件
        let foods = [];
        this.goods.forEach((good) => {
          good.foods.forEach((food) => {
            if (food.count) {
              foods.push(food);
            }
          });
        });
        return foods;
      }
    },
    created () {
      this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];

      this.$http.get('/api/goods').then((response) => {
        response = response.body;
        if (response.errno === ERR_OK) {
          this.goods = response.data;
          this.$nextTick(() => {
            this._initScroll();
            this._calculateHeight();
          });
        } else {
          console.log('goods请求数据失败');
        }
      });
    },
    methods: {
      selectMenu: function (index, event) {
        if (!event._constructed) {
          return;
        }
        let foodList = this.$els.foodsWrapper.getElementsByClassName('food-list-hook');
        let el = foodList[index];
        this.foodsScroll.scrollToElement(el, 300);
      },
      _initScroll: function () {
        this.menuScroll = new BScroll(this.$els.menuWrapper, {
          click: true
        });
        this.foodsScroll = new BScroll(this.$els.foodsWrapper, {
          probeType: 3,
          click: true
        });

        this.foodsScroll.on('scroll', (pos) => {
          this.scrollY = Math.abs(pos.y);
        });
      },
      _calculateHeight: function () {
        let foodList = this.$els.foodsWrapper.getElementsByClassName('food-list-hook');
        let height = 0;
        this.listHeight.push(height);
        for (let i = 0; i < foodList.length; i++) {
          let item = foodList[i];
          height += item.clientHeight;
          this.listHeight.push(height);
        }
      },
      _drop: function (target) {
        // 访问子组件 this.$refs.shopcart.drop(target);
        // 使用$nextTick异步执行下落动画，使其不要立刻执行，优化体验
        this.$nextTick(() => {
          this.$refs.shopcart.drop(target);
        });
      },
      showSelectedFoodDetail: function (food, event) {
        if (!event._constructed) {
          return;
        }
        this.selectedFood = food;
        this.$refs.food.show();
      }
    },
    events: {
      'cart.add' (target) {
        this._drop(target);
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../stylus/mixin.styl";
  .goods
    display: flex
    position: absolute;
    top: 174px
    bottom: 46px
    width: 100%
    overflow: hidden
    .menu-wrapper
      flex:0 0 80px
      width: 80px
      background: #f3f5f7
      .menu-item
        position: relative
        display: table
        height: 50px
        width: 56px
        padding: 0 12px
        line-height: 14px
        .number
          position: absolute
          top: 5px
          right: 3px
          width: 21px
          height: 14px
          line-height: 14px
          text-align: center
          border-radius: 16px
          font-size: 9px
          font-weight: 700
          color: #fff
          background: #f01414
        &.current
          position: relative;
          margin-top: -1px;
          z-index: 10
          background: #fff
          font-weight: 700
          border-left: 4px solid #00a0dc
          .text
            border-none()
        .icon
          display: inline-blokc
          width: 12px
          height: 12px
          margin-right: 2px
          background-size: 12px 12px
          background-repeat: no-repeat
          &.decrease
            bg-image('../../img/goods/decrease_3')
            display: inline-block
          &.discount
            bg-image('../../img/goods/discount_3')
            display: inline-block
          &.guarantee
            bg-image('../../img/goods/guarantee_3')
            display: inline-block
          &.invoice
            bg-image('../../img/goods/invoice_3')
            display: inline-block
          &.special
            bg-image('../../img/goods/special_3')
            display: inline-block
        .text
          display: table-cell
          width: 56px
          vertical-align: middle
          border-1px(rgba(7, 17, 27, 0.1))
          font-size: 12px
          padding-right: 5px
    .foods-wrapper
      flex:1
      .title
        padding-left: 14px
        height: 26px
        line-height: 26px
        border-left: 2px solid #d9dde1
        color: rgb(147, 153, 159)
        background: #f3f5f7
      .food-item
        display: flex
        margin: 18px
        padding-bottom:18px
        border-1px(rgba(7, 17, 27, 0.1))
        &:last-child
          border-none()
          margin-bottom: 0
        .icon
          flex: 0 0 57px
          margin-right: 10px
        .content
          flex:1
          .name
            margin: 2px 0 8px 0
            height: 14px
            line-height: 14px
            font-size: 14px
            color: rgb(7, 17, 27)
          .desc, .extra
            line-height: 10px
            font-size: 10px
            color: rgb(147, 153, 159)
            font-weight: normal
          .extra
            .count
              margin-right: 12px
          .desc
            margin-bottom: 8
            line-height: 12px
          .price
            font-weight: 700
            line-height: 24px
            .now
              margin-right: 8px
              font-size: 14px
              color: rgb(240, 20, 20)
            .old
              text-decoration: line-through
              font-size: 10px
              color: rgb(147, 153, 159)
            .cart-control-wrapper
              float: right
</style>


