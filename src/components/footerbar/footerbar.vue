<template>
  <div class="footer-tab">
    <a class="footer-tab-item" v-link="{path: '/index'}">
      <p class="item-icon"><i class="fa fa-shopping-cart" aria-hidden="true"></i></p>
      <p class="item-text">外卖</p>
    </a>
    <a class="footer-tab-item" v-link="{path: '/discover'}">
      <p class="item-icon"><i class="fa fa-compass" aria-hidden="true"></i></p>
      <p class="item-text">发现</p>
    </a>
    <a class="footer-tab-item" v-link="{path: '/goods'}">
      <p class="item-icon"><i class="fa fa-file-text-o" aria-hidden="true"></i></p>
      <p class="item-text">订单</p>
    </a>
    <a class="footer-tab-item" v-link="{path: '/user'}">
      <p class="item-icon"><i class="fa fa-user-o" aria-hidden="true"></i></p>
      <p class="item-text">我的</p>
    </a>
  </div>
</template>

<script type="text/ecmascript-6">
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .footer-tab
    position: fixed
    bottom: 0
    width: 100%
    height: 30px
    background: #f7f7f7
    display: table
    table-layout: fixed
    z-index: 50
    .footer-tab-item
      display: table-cell
      text-align: center
      padding: 5px 0
      &.active
        .item-text, .item-icon
          color: #0196ff
      .item-icon
        color: #828282
      .item-text
        margin-top: 4px
        font-size: 12px
        color: #828282
</style>