<template>
  <div class="ratings" v-el:rating>
    <div class="ratings-content">
      <div class="overview">
        <div class="overview-left">
          <h1 class="score">{{seller.score}}</h1>
          <div class="title">综合评分</div>
          <div class="rank">高于周边商家{{seller.rankRate}}</div>
        </div>
        <div class="overview-right">
          <div class="score-wrapper">
            <span class="title">服务态度</span>
            <star :size="36" :score="seller.serviceScore"></star>
            <span class="score">{{seller.serviceScore}}</span>
          </div>
          <div class="score-wrapper">
            <span class="title">商品评分</span>
            <star :size="36" :score="seller.foodScore"></star>
            <span class="score">{{seller.foodScore}}</span>
          </div>
          <div class="delivery-wrapper">
            <span class="title">送达时间</span>
            <span class="delivery">{{seller.deliveryTime}}分钟</span>
          </div>
        </div>
      </div>
      <split></split>
      <commenttypeselect :comment-type="commentType" :only-content="onlyContent" :desc="desc" :ratings="ratings"></commenttypeselect>
      <div class="rating-wrapper">
        <ul>
          <li v-for="rating in ratings" class="rating-item" v-show="currentShowingType(rating.rateType, rating.text )">
            <div class="avatar">
              <img :src="rating.avatar" alt="" width="28" height="28">
            </div>
            <div class="content">
              <h1 class="name">{{rating.username}}</h1>
              <div class="star-wrapper">
                <star :size="24" :score="rating.score"></star>
                <span class="delivery" v-show="rating.deliveryTime">{{rating.deliveryTime}}</span>
              </div>
              <p class="text">{{rating.text}}</p>
              <div class="recommend" v-show="rating.recommend && rating.recommend.length">
                <span class="thumbs-up">
                  <i class="fa fa-thumbs-o-up" aria-hidden="true"></i>
                </span>
                <span class="food-label" v-for="item in rating.recommend">{{item}}</span>
              </div>
              <div class="time">{{rating.rateTime | formatDate}}</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import star from '../star/star.vue';
  import commenttypeselect from '../commentTypeSelect/commentTypeSelect.vue';
  import split from '../split/split.vue';
  import {formatDate} from '../../js/date';
  import BScroll from 'better-scroll';
  const ALL = 2;
  const ERR_OK = 0;
  export default {
    props: {
      seller: {
        type: Object
      }
    },
    components: {
      star,
      commenttypeselect,
      split
    },
    data () {
      return {
        ratings: [],
        selectType: ALL,
        onlyContent: true
      };
    },
    created () {
      this.$http.get('/api/ratings').then((response) => {
        response = response.body;
        if (response.errno === ERR_OK) {
          this.ratings = response.data;
          this.$nextTick(() => {
            this.scroll = new BScroll(this.$els.rating, {
              click: true
            });
          });
        } else {
          console.log('ratings请求数据失败');
        }
      });
    },
    events: {
      'ratingtype.select' (type) {
        this.selectType = type;
        this.$nextTick(() => {
          this.scroll.refresh();
        });
      },
      'content.toggle' (onlycontent) {
        this.onlyContent = onlycontent;
        this.$nextTick(() => {
          this.scroll.refresh();
        });
      }
    },
    methods: {
      currentShowingType (type, text) {
        if (this.onlyContent && !text) {
          return false;
        }
        if (this.selectType === ALL) {
          return true;
        } else {
          return type === this.selectType;
        }
      }
    },
    filters: {
      formatDate (time) {
        let date = new Date(time);
        return formatDate(date, 'yyyy-MM-dd hh:mm');
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../stylus/mixin.styl";
  .ratings
    position: absolute
    top: 207px
    bottom: 0
    left: 0
    width: 100%
    overflow: hidden
    .overview
      display: flex
      padding: 18px 0
      .overview-left
        flex: 0 0 137px
        padding: 6px 0
        width: 137px
        border-rigth: 1px solid rgba(7, 17, 27, 0.1)
        text-align: center
        @media only screen and (max-width: 320px)
          flex: 0 0 120px
          width: 120px
        .score
          margin-bottom: 6px
          line-height: 28px
          font-size: 24px
          color: rgb(255, 153, 0)
        .title
          margin-bottom: 6px
          line-height: 12px
          font-size: 12px
          color: rgb(7, 17, 27)
          font-weight: 700
        .rank
          line-height: 10px
          font-size: 10px
          color: rgb(147, 153, 159)
      .overview-right
        flex: 1
        padding: 6px 0 6px 24px
        @media only screen and (max-width: 320px)
          padding-left: 6px
        .score-wrapper
          margin-bottom: 8px
          font-size: 0
          .title
            display: inline-block
            vertical-align: top
            line-height: 18px
            font-size: 12px
            color: rgb(7, 17, 27)
          .star
            display: inline-block
            vertical-align: top
          .score
            display: inline-block
            line-height: 18px
            vertical-align: top
            font-size: 12px
            color: rgb(255, 153, 0)
        .delivery-wrapper
          font-size: 0
          .title
            line-height: 18px
            font-size: 12px
            color: rgb(7, 17, 27)
          .delivery
            margin-left: 12px
            font-size: 12px
            color: rgn(147, 153, 159)
    .rating-wrapper
      padding: 0 18px
      .rating-item
        display: flex
        padding: 18px 0
        border-1px(rgba(7, 17, 27, 0.1))
        .avatar
          flex: 0 0 28px
          width: 28px
          margin-right: 12px
          img
            border-radius: 50%
        .content
          position: relative
          flex: 1
          .name
            line-height: 12px
            font-size: 10px
            color: rgb(7, 17, 27)
          .star-wrapper
            margin-bottom: 6px
            font-size: 0
            .star
              display: inline-block
              margin-right: 6px
              vertical-align: top
            .delivery
              display: inline-block
              vertical-align: top
              line-height: 12px
              font-size: 10px
              color: rgb(147, 153, 159)
          .text
            line-height: 18px
            color: rgb(7, 17,  27)
            font-size: 12px
          .recommend
            line-height: 16px
            .thumbs-up
              display: inline-block
              font-size: 9px
              i
                color: rgb(0, 160, 220)
            .food-label
              display: inline-block
              margin-right: 2px
              padding: 0 6px
              border: 1px solid rgba(7, 17, 27, 0.4)
              border-radius: 1px
              color: rgb(147, 153, 159)
              background: #fff
              font-size: 12px
          .time
            position: absolute
            top: 0
            right: 0
            line-height: 12px
            font-size: 10px
            color: rgb(147, 153, 159)
</style>


