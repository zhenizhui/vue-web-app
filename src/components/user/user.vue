<template>
  <div class="user">
    <div class="user-title">
      <span class="my">我的</span>
      <span class="setting"><i class="fa fa-cog" aria-hidden="true"></i></span>
      <span class="bell"><i class="fa fa-bell" aria-hidden="true"></i></span>
    </div>
    <div class="account-safe">
      <div class="avatar">
        <img class="avatar-img" src="../../img/user/avatar.png">
      </div>
      <div class="user-name">
        <h3 class="not-login">立即登陆</h3>
        <p class="login-text">登陆后即可享受更多特权</p>
      </div>
      <div class="go-login">
        <i class="fa fa-angle-right" aria-hidden="true"></i>
      </div>
    </div>
    <div class="integral-detail">
      <div class="balance">
        <p class="number number-balance">0.00<small>元</small></p>
        <p class="text">余额</p>
      </div>
      <div class="discount">
        <p class="number number-discount">0<small>个</small></p>
        <p class="text">优惠</p>
      </div>
      <div class="integral">
        <p class="number number-integral">0<small>分</small></p>
        <p class="text">积分</p>
      </div>
    </div>
    <div class="address-coll-album">
      <div class="address">
        <span class="map-icon"><i class="fa fa-map-signs" aria-hidden="true"></i></span>
        <span class="address-text">收货地址</span>
      </div>
      <div class="collection">
        <span class="heart"><i class="fa fa-heart" aria-hidden="true"></i></span>
        <span class="collection-text">我的收藏</span>
      </div>
      <div class="album">
        <span class="photo"><i class="fa fa-picture-o" aria-hidden="true"></i></span>
        <span class="album-text">美食相册</span>
      </div>
    </div>
    <div class="user-activity">
      <div class="recommend">
        <span class="gift"><i class="fa fa-gift" aria-hidden="true"></i></span>
        <span class="address-text">推荐有奖</span>
      </div>
      <div class="shopcity">
        <span class="shopping-bag"><i class="fa fa-shopping-bag" aria-hidden="true"></i></span>
        <span class="collection-text">积分商城</span>
      </div>
      <div class="member">
        <span class="member-card"><i class="fa fa-id-card" aria-hidden="true"></i></span>
        <span class="album-text">饿了么会员卡</span>
      </div>
    </div>
    <div class="service-score-join">
      <div class="service">
        <span class="service-center"><i class="fa fa-hand-paper-o" aria-hidden="true"></i></span>
        <span class="service-text">服务中心</span>
      </div>
      <div class="score">
        <span class="give-score"><i class="fa fa-thumbs-o-up" aria-hidden="true"></i></span>
        <span class="score-text">欢迎评分</span>
      </div>
      <div class="join">
        <span class="join-us"><i class="fa fa-address-book" aria-hidden="true"></i></span>
        <span class="join-text">加入我们</span>
      </div>
    </div>
    <footerbar></footerbar>
  </div>
</template>

<script type="text/ecmascript-6">
  import footerbar from '../footerbar/footerbar.vue';
  export default {
    components: {
      footerbar
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  //px2rem
  @import "../../stylus/mixin.styl"
  .user
    background: #F5F5F5
    overflow: auto
    margin-bottom: 40px
    .user-title
      position: fixed
      background: #2ba9ff
      px2rem(height, 80)
      width: 100%
      .my, .bell, .setting
        position: absolute
        top: 0
        px2rem(height, 40)
        px2rem(width, 80)
        px2rem(padding-top, 20)
        px2rem(padding-bottom, 20)
      .bell, .setting
        px2rem(font-size, 40)
      .my
        left: 0
        px2rem(font-size, 30)
        px2rem(padding-left, 20)
        color: #fff
      .bell
        px2rem(right, 80)
        color: #fff
      .setting
        px2rem(right, 0)
        color: #fff
    .account-safe
      position: relative
      px2rem(margin-top, 80)
      background: #2ba9ff
      display: flex
      .avatar
        px2rem(padding, 40)
        px2rem(height, 160)
        px2rem(width, 160)
        .avatar-img
          px2rem(height, 160)
          px2rem(width, 160)
      .user-name
        px2rem(padding-top, 60)
        .not-login
          color: #fff
          px2rem(font-size, 40)
        .login-text
          px2rem(margin-top, 40)
          color: #fff
      .go-login
        color: #fff
        px2rem(font-size, 60)
        px2rem(margin-top, 70%)
        position: relative
        px2rem(right, -35px)
    .integral-detail
      display: flex
      background: #fff
      .balance, .discount, .integral
        text-align: center
        flex: 1
        px2rem(padding, 40)
        border-right: 1px solid #F0F0F0
        border-bottom: 1px solid #F0F0F0
      .balance
        color: #ff9c00
      .discount
        color: #fc463f
      .integral
        color: #5db423
        border-right: none
      .number
        px2rem(font-size, 40)
        small
          px2rem(font-size, 20)
      .text
        color: #7C7C7C
        px2rem(margin-top, 15)
    .address-coll-album, .user-activity, .play-game, .game-red-packet, .service-score-join
      background: #fff
      px2rem(margin-top, 30)
      .address, .collection, .album, .recommend, .shopcity, .member, .service, .score, .join
        border-top: 1px solid #f5f4f4
      .map-icon, .heart, .photo, .gift, .shopping-bag, .member-card, .service-center, .give-score, .join-us
        px2rem(padding, 30)
        display: inline-block
        i
          px2rem(font-size, 30)
      .map-icon, .service-center, .give-score, .join-us
        i
          color: #2ba9ff
      .heart
        i
          color: #F87B56
      .photo
        i
          color: #2ba9ff
      .shopping-bag
        i
          color: #94D94A
      .gift
        i
          color: #F87B56
      .member
        i
          color: #FFC636
      .address-text, .collection-text, .album-text, .service-text, .score-text, .join-text
        px2rem(font-size, 30)
</style>